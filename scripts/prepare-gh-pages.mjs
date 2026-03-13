import { copyFileSync, existsSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = join(process.cwd(), 'dist', 'portfolio', 'browser');
const indexFile = join(outputDir, 'index.html');
const notFoundFile = join(outputDir, '404.html');
const noJekyllFile = join(outputDir, '.nojekyll');

if (!existsSync(indexFile)) {
  console.error('GitHub Pages preparation failed: index.html was not found in dist/portfolio/browser.');
  process.exit(1);
}

copyFileSync(indexFile, notFoundFile);
writeFileSync(noJekyllFile, '');

console.log('GitHub Pages assets prepared.');
