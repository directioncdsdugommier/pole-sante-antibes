// store.jsx — React hook centralisant les données du site, branché sur Supabase
// Expose un hook global window.usePsaStore() utilisé par tout le site.

(function () {
  const { useState, useEffect, useCallback, useRef } = React;

  // Cache global partagé entre toutes les instances du hook
  let globalState = null;          // dernier snapshot connu
  let listeners = new Set();       // composants à notifier
  let loaded = false;
  let loadingPromise = null;
  let unsubscribeRealtime = null;
  const writeTimers = {}; // debounce per key

  function notifyAll() {
    listeners.forEach((cb) => cb(globalState));
  }

  async function loadOnce() {
    if (loaded) return globalState;
    if (loadingPromise) return loadingPromise;
    loadingPromise = (async () => {
      const data = await window.PSA.load();
      globalState = data || {};
      loaded = true;
      // Cache des URLs médias pour préload au prochain chargement (perf)
      try {
        const cache = {
          heroImage: globalState.heroImage || null,
          bannerVideoUrl: (globalState.bannerVideo && globalState.bannerVideo.url) || null,
          photoUrls: []
        };
        // Collecte les URLs des photos des membres
        if (globalState.members && Array.isArray(globalState.members)) {
          globalState.members.forEach(m => {
            if (m && m.photo && typeof m.photo === 'string') cache.photoUrls.push(m.photo);
          });
        }
        if (globalState.photos && typeof globalState.photos === 'object') {
          Object.values(globalState.photos).forEach(u => {
            if (u && typeof u === 'string') cache.photoUrls.push(u);
          });
        }
        localStorage.setItem('psa_media_cache', JSON.stringify(cache));
      } catch (e) { /* ignore quota errors */ }
      // Subscribe realtime once
      if (!unsubscribeRealtime) {
        unsubscribeRealtime = window.PSA.subscribe((newData) => {
          globalState = newData || {};
          notifyAll();
        });
      }
      return globalState;
    })();
    return loadingPromise;
  }

  // Hook public
  window.usePsaStore = function usePsaStore() {
    const [state, setState] = useState(globalState || {});
    const [ready, setReady] = useState(loaded);

    useEffect(() => {
      let active = true;
      const onUpdate = (s) => { if (active) setState(s || {}); };
      listeners.add(onUpdate);
      loadOnce().then((s) => {
        if (!active) return;
        setState(s || {});
        setReady(true);
      });
      return () => { active = false; listeners.delete(onUpdate); };
    }, []);

    // Setter: écrit en DB, rafraîchit le cache local
    // Debounce les écritures rapides sur la même clé pour éviter de saturer la DB
    const setKey = useCallback(async (key, value) => {
      // Optimistic update local
      globalState = { ...(globalState || {}), [key]: value };
      notifyAll();
      // Debounced DB write (module-scoped timers, partagés entre toutes les instances)
      if (writeTimers[key]) clearTimeout(writeTimers[key]);
      writeTimers[key] = setTimeout(async () => {
        try {
          await window.PSA.saveKey(key, value);
        } catch (e) {
          console.error('[PSA] saveKey error', key, e);
          alert("Erreur d'enregistrement : " + (e.message || e));
        }
      }, 350);
    }, []);

    return { state, ready, setKey };
  };

  // Utilitaire : obtenir l'état actuel sans hook
  window.psaSnapshot = () => globalState || {};
  window.psaLoad = loadOnce;
})();
