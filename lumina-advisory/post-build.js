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
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

console.log('Post-processing Next.js static export...');
if (basePath) console.log(`Base path: ${basePath}`);

/**
 * Rewrites applied to every text asset in out/:
 *
 * 1. `_next/` → `next/`
 *    GitHub Pages runs Jekyll, which ignores anything starting with an
 *    underscore. Renaming `_next` avoids that.
 *
 * 2. `src="/images/…"` → `src="{basePath}/images/…"`
 * 3. `href="/images/…"` → `href="{basePath}/images/…"`
 *    Next.js `<Image unoptimized>` occasionally emits absolute paths
 *    that ignore basePath. Same for any bare `/videos/`. This regex
 *    catches all of them without touching already-prefixed URLs.
 */
const IMG_ROOTS = ['images', 'videos'];

walkDir(outDir, (filePath) => {
  const ext = path.extname(filePath).toLowerCase();
  if (!['.html', '.js', '.css', '.txt', '.json'].includes(ext)) return;

  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // 1. _next → next
  if (content.includes('_next/')) {
    content = content.replace(/_next\//g, 'next/');
    changed = true;
  }

  // 2. Prefix bare asset paths with basePath (only if basePath is set)
  if (basePath) {
    for (const root of IMG_ROOTS) {
      // Match  "  /root/…   or   ' /root/…   or   ( /root/…
      // but skip anything already starting with the basePath.
      const escapedBase = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const re = new RegExp(
        `(["'\\(])(?!${escapedBase}/)/${root}/`,
        'g'
      );
      if (re.test(content)) {
        content = content.replace(re, `$1${basePath}/${root}/`);
        changed = true;
      }
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Rewrote asset paths in: ${path.relative(outDir, filePath)}`);
  }
});

// Rename the folder itself from _next to next
const oldPath = path.join(outDir, '_next');
const newPath = path.join(outDir, 'next');
if (fs.existsSync(oldPath)) {
  if (fs.existsSync(newPath)) {
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
        console.warn(
          `Rename failed with EPERM. OneDrive/Windows file lock detected. Retrying in ${delay}ms... (${retries - 1} retries left)`
        );
        retries--;
        const limit = Date.now() + delay;
        while (Date.now() < limit) {}
      } else {
        throw err;
      }
    }
  }
}

console.log('Static export post-processing complete.');
