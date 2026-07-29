import path from 'path';
import { fileURLToPath } from 'url';

const currentFile = fileURLToPath(import.meta.url);
const currentDir = path.dirname(currentFile);

const SCSS_STYLES_DIR = path.resolve(currentDir, 'src/app/styles');
const GLOBAL_CONFIG_IMPORT = `@use 'config' as *;\n\n`;

const isCssModule = (filePath) => filePath.endsWith('.module.scss');
const isVendorFile = (filePath) => filePath.includes('/node_modules/');
const alreadyHasConfigImport = (source) =>
  /@use\s+['"](?:.*\/)?config['"]/.test(source.split('\n')[0] ?? '');

function injectSassConfig(source, ctx) {
  const resourcePath = ctx?.resourcePath ?? ctx?.resource ?? String(ctx ?? '');
  const normalizedPath = resourcePath.replace(/\\/g, '/').split('?')[0] ?? '';

  const shouldSkip =
    alreadyHasConfigImport(source) ||
    !isCssModule(normalizedPath) ||
    isVendorFile(normalizedPath);

  return shouldSkip ? source : GLOBAL_CONFIG_IMPORT + source;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 's3.twcstorage.ru' },
      { protocol: 'https', hostname: '*.r2.dev' },
    ],
  },

  sassOptions: {
    includePaths: [SCSS_STYLES_DIR],
    loadPaths: [SCSS_STYLES_DIR],
    additionalData: injectSassConfig,
  },
};

export default nextConfig;
