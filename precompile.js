const babel = require('@babel/core');
const fs = require('fs');
const path = require('path');

const SRC_DIR = '.';
const files = ['store.jsx', 'Header.jsx', 'Hero.jsx', 'Services.jsx', 'Team.jsx', 'Jobs.jsx', 'Contact.jsx', 'Footer.jsx'];

files.forEach(f => {
  const src = fs.readFileSync(path.join(SRC_DIR, f), 'utf8');
  const out = babel.transformSync(src, {
    presets: [
      ['@babel/preset-env', { targets: { browsers: ['last 2 versions', 'ios >= 13', 'safari >= 13'] } }],
      ['@babel/preset-react']
    ],
    compact: true,
    comments: false
  }).code;
  const outPath = path.join(SRC_DIR, f.replace('.jsx', '.js'));
  fs.writeFileSync(outPath, out);
  console.log(`${f} → ${path.basename(outPath)} (${(out.length/1024).toFixed(1)} KB)`);
});

console.log('\nTotal des .js compilés:');
files.forEach(f => {
  const p = path.join(SRC_DIR, f.replace('.jsx', '.js'));
  console.log('  ' + path.basename(p) + ': ' + (fs.statSync(p).size/1024).toFixed(1) + ' KB');
});
