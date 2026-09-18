// imagemin's mozjpeg and optipng-bin packages ship Intel-only macOS binaries.
// Apple Silicon Macs without Rosetta cannot run them, which breaks `gulp`.
// After every install, point them at native Homebrew builds instead.
// Requires: brew install mozjpeg optipng
import { existsSync, lstatSync, renameSync, symlinkSync, unlinkSync } from 'node:fs';

if (process.platform !== 'darwin' || process.arch !== 'arm64') process.exit(0);

const links = [
  ['node_modules/mozjpeg/vendor/cjpeg', '/opt/homebrew/opt/mozjpeg/bin/cjpeg'],
  ['node_modules/optipng-bin/vendor/optipng', '/opt/homebrew/bin/optipng'],
];

for (const [vendor, native] of links) {
  if (!existsSync(native)) {
    console.warn(`[fix-native-bins] missing ${native}. Run: brew install mozjpeg optipng`);
    continue;
  }
  let stat = null;
  try { stat = lstatSync(vendor); } catch { /* package not installed */ }
  if (stat?.isSymbolicLink()) unlinkSync(vendor);
  else if (stat) renameSync(vendor, `${vendor}.intel-orig`);
  else continue;
  symlinkSync(native, vendor);
  console.log(`[fix-native-bins] ${vendor} -> ${native}`);
}
