const babel = require('@babel/core');
const fs = require('fs');

const HTML_PATH = './index.html';
const html = fs.readFileSync(HTML_PATH, 'utf8');

// Le seul bloc inline qui nous intéresse est celui qui n'a pas de src=
// Pattern : <script type="text/babel">  ...content...  </script>  (sans attribut src)
const re = /<script type="text\/babel">\s*([\s\S]*?)\s*<\/script>/g;
let match;
let inlineCount = 0;
let inlineContent = null;
let inlineStart = -1, inlineEnd = -1;

while ((match = re.exec(html)) !== null) {
  // Vérifier que ce match n'a pas de src= dans la balise ouvrante
  // On regarde le caractère juste après "babel"
  const tagOpenStart = match.index;
  const tagOpenEnd = html.indexOf('>', tagOpenStart);
  const tagOpen = html.slice(tagOpenStart, tagOpenEnd + 1);
  if (tagOpen.includes('src=')) continue;
  inlineCount++;
  inlineContent = match[1];
  inlineStart = match.index;
  inlineEnd = re.lastIndex;
}

console.log('Blocs Babel inline trouvés:', inlineCount);
console.log('Taille du contenu:', (inlineContent.length/1024).toFixed(1), 'KB');

// Compiler
const out = babel.transformSync(inlineContent, {
  presets: [
    ['@babel/preset-env', { targets: { browsers: ['last 2 versions', 'ios >= 13', 'safari >= 13'] } }],
    ['@babel/preset-react']
  ],
  compact: true,
  comments: false
}).code;

console.log('Compilé:', (out.length/1024).toFixed(1), 'KB');

// Sauvegarder
fs.writeFileSync('./app.js', out);
console.log('app.js écrit');

// Remplacer le bloc inline par <script src="app.js">
const before = html.slice(0, inlineStart);
const after = html.slice(inlineEnd);
const replacement = '<script src="app.js?v=1" defer></script>';
const newHtml = before + replacement + after;
fs.writeFileSync(HTML_PATH, newHtml);
console.log('index.html mis à jour');
