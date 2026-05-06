// supabase-client.js — Wrapper léger autour de Supabase pour le site PSA
// Expose : window.PSA.{ load, save, uploadFile, deleteFile, login, logout, isAuthenticated, onAuthChange }

(function () {
  const cfg = window.PSA_CONFIG;
  const sb = window.supabase.createClient(cfg.SUPABASE_URL, cfg.SUPABASE_ANON_KEY);

  // ---------- DATA ----------
  // Charge l'objet JSON complet du site
  async function load() {
    const { data, error } = await sb
      .from(cfg.TABLE)
      .select('data')
      .eq('id', cfg.ROW_ID)
      .single();
    if (error) {
      console.warn('[PSA] load error', error);
      return {};
    }
    return data?.data || {};
  }

  // Sauve l'objet JSON complet (merge côté client)
  async function save(partial) {
    const current = await load();
    const merged = { ...current, ...partial };
    const { error } = await sb
      .from(cfg.TABLE)
      .update({ data: merged, updated_at: new Date().toISOString() })
      .eq('id', cfg.ROW_ID);
    if (error) throw error;
    return merged;
  }

  // Sauve une clé spécifique
  async function saveKey(key, value) {
    return save({ [key]: value });
  }

  // ---------- STORAGE ----------
  // Upload d'un blob/file. Retourne l'URL publique.
  async function uploadFile(folder, filename, blob) {
    const path = `${folder}/${Date.now()}_${filename}`;
    const { error } = await sb.storage.from(cfg.STORAGE_BUCKET).upload(path, blob, {
      cacheControl: '3600',
      upsert: false,
      contentType: blob.type || 'application/octet-stream',
    });
    if (error) throw error;
    const { data } = sb.storage.from(cfg.STORAGE_BUCKET).getPublicUrl(path);
    return { url: data.publicUrl, path };
  }

  // Convertit dataURL ou Blob en upload
  async function uploadDataUrl(folder, filename, dataUrl) {
    const res = await fetch(dataUrl);
    const blob = await res.blob();
    return uploadFile(folder, filename, blob);
  }

  async function deleteFile(path) {
    if (!path) return;
    await sb.storage.from(cfg.STORAGE_BUCKET).remove([path]);
  }

  // ---------- AUTH ----------
  async function login(email, password) {
    const { data, error } = await sb.auth.signInWithPassword({ email, password });
    if (error) throw error;
    return data;
  }

  async function logout() {
    await sb.auth.signOut();
  }

  async function isAuthenticated() {
    const { data } = await sb.auth.getSession();
    return !!data.session;
  }

  function onAuthChange(cb) {
    return sb.auth.onAuthStateChange((_event, session) => cb(!!session));
  }

  // ---------- REALTIME ----------
  // Écoute les changements en temps réel sur la table
  function subscribe(cb) {
    const channel = sb
      .channel('site_data_changes')
      .on('postgres_changes', {
        event: 'UPDATE',
        schema: 'public',
        table: cfg.TABLE,
        filter: `id=eq.${cfg.ROW_ID}`,
      }, (payload) => cb(payload.new?.data || {}))
      .subscribe();
    return () => sb.removeChannel(channel);
  }

  window.PSA = { load, save, saveKey, uploadFile, uploadDataUrl, deleteFile, login, logout, isAuthenticated, onAuthChange, subscribe, _client: sb };
})();
