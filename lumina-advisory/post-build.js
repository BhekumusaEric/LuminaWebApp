const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

const outDir = path.join(__dirname, 'out');

console.log('Post-processing Next.js static export...');

// 1. Rename files contents from _next to next
walkDir(outDir, (filePath) => {
  if (filePath.endsWith('.html') || filePath.endsWith('.js') || filePath.endsWith('.css') || filePath.endsWith('.txt') || filePath.endsWith('.json')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (content.includes('_next/')) {
      let updated = content.replace(/_next\//g, 'next/');
      fs.writeFileSync(filePath, updated, 'utf8');
      console.log(`Updated assets references in: ${path.relative(outDir, filePath)}`);
    }
  }
});

// 2. Rename the folder itself from _next to next
const oldPath = path.join(outDir, '_next');
const newPath = path.join(outDir, 'next');
if (fs.existsSync(oldPath)) {
  if (fs.existsSync(newPath)) {
    // Clean up if newPath already exists from a previous run
    fs.rmSync(newPath, { recursive: true, force: true });
  }
  
  let retries = 10;
  let delay = 1000;
  while (retries > 0) {
    try {
      fs.renameSync(oldPath, newPath);
      console.log('Successfully renamed _next folder to next');
      break;
    } catch (err) {
      if (err.code === 'EPERM' && retries > 1) {
        console.warn(`Rename failed with EPERM. OneDrive/Windows file lock detected. Retrying in ${delay}ms... (${retries - 1} retries left)`);
        retries--;
        // Synchronous sleep
        const limit = Date.now() + delay;
        while (Date.now() < limit) {}
      } else {
        throw err;
      }
    }
  }
}

console.log('Static export post-processing complete.');
