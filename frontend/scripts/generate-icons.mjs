import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';
import pngToIco from 'png-to-ico';

const root = resolve(new URL('.', import.meta.url).pathname, '..');
const publicDir = resolve(root, '../public');
const svgPath = resolve(publicDir, 'navio-icon.svg');

async function ensureDir(dir) {
  await mkdir(dir, { recursive: true }).catch(() => {});
}

async function generate() {
  await ensureDir(publicDir);
  const svg = await readFile(svgPath);

  // Generate PNGs
  const out16 = resolve(publicDir, 'favicon-16x16.png');
  const out32 = resolve(publicDir, 'favicon-32x32.png');
  const apple = resolve(publicDir, 'apple-touch-icon.png');

  await sharp(svg).resize(16, 16).png({ compressionLevel: 9 }).toFile(out16);
  await sharp(svg).resize(32, 32).png({ compressionLevel: 9 }).toFile(out32);
  await sharp(svg).resize(180, 180).png({ compressionLevel: 9 }).toFile(apple);

  // Create multi-resolution ICO
  const icoBuf = await pngToIco([
    out16,
    out32
  ]);
  await writeFile(resolve(publicDir, 'favicon.ico'), icoBuf);

  console.log('Icons generated in', publicDir);
}

generate().catch((err) => {
  console.error('Icon generation failed:', err);
  process.exit(1);
});
