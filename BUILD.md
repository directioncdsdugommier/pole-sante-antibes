# Build / Précompilation des composants

Le site charge des `.js` pré-compilés (PAS les `.jsx`). Le HTML ne référence plus Babel Standalone (qui pesait 3 MB et compilait à la volée dans le navigateur).

## Fichiers JSX (sources)
- `Header.jsx`, `Hero.jsx`, `Services.jsx`, `Team.jsx`, `Jobs.jsx`, `Contact.jsx`, `Footer.jsx`, `store.jsx`
- Le bloc inline de `index.html` (entre les balises `<script type="text/babel">`) — sources de l'app principale

## Fichiers JS (compilés, servis aux utilisateurs)
- `Header.js`, `Hero.js`, `Services.js`, `Team.js`, `Jobs.js`, `Contact.js`, `Footer.js`, `store.js`
- `app.js` — résultat de la compilation du bloc inline

## Comment recompiler après une modification d'un .jsx

```bash
# Installer les dépendances (une fois)
npm install --no-save @babel/core @babel/preset-env @babel/preset-react

# Recompiler tous les composants
node precompile.js

# Recompiler app.js (le bloc inline du index.html)
node compile_inline.js
```

## ⚠ Important
- Si tu modifies un `.jsx`, IL FAUT le recompiler en `.js` sinon le navigateur servira l'ancienne version.
- Bumper `?v=N` dans `index.html` après chaque recompilation pour casser le cache navigateur des utilisateurs.
