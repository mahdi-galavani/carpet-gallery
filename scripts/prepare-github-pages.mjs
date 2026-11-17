import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

// Angular's base href handles navigation; these root-relative public assets
// also need the repository prefix when published as a GitHub project site.
const output = 'dist/carpet-gallery/browser';
for (const file of await readdir(output)) {
  if (!/\.(?:html|css|js)$/.test(file)) continue;
  const path = join(output, file);
  const original = await readFile(path, 'utf8');
  const updated = original
    .replaceAll('/images/', '/carpet-gallery/images/')
    .replaceAll('/fonts/', '/carpet-gallery/fonts/')
    .replaceAll('/mah-icon.png', '/carpet-gallery/mah-icon.png');
  if (updated !== original) await writeFile(path, updated);
}
