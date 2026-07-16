import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const stylesRoot = path.join(__dirname, 'src/app/styles');
const configImport = "@use 'config' as *;\n\n";

function prependConfigToCssModules(content, loaderContext) {
  if (
    /^\s*@use\s+["'].*\/config["']/.test(content) ||
    /^\s*@use\s+["']config["']/.test(content)
  ) {
    return content;
  }

  const rawPath =
    typeof loaderContext === 'string'
      ? loaderContext
      : (loaderContext?.resourcePath ?? loaderContext?.resource ?? '');
  const pathOnly = String(rawPath).replace(/\\/g, '/').split('?')[0] ?? '';

  if (!pathOnly.endsWith('.module.scss')) {
    return content;
  }

  if (pathOnly.includes('/node_modules/')) {
    return content;
  }

  return `${configImport}${content}`;
}

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        // ToDo: delete
        protocol: 'https',
        hostname: 'picsum.photos',
      },
      {
        protocol: 'https',
        hostname: 's3.twcstorage.ru',
      },
      {
        protocol: 'https',
        hostname: '*.r2.dev',
      },
      {
        protocol: 'http',
        hostname: 'dev.ym.kg',
      },
      {
        protocol: 'https',
        hostname: 'dev.ym.kg',
      },
      {
        protocol: 'http',
        hostname: 'ym.kg',
      },
      {
        protocol: 'https',
        hostname: 'ym.kg',
      },
    ],
  },
  sassOptions: {
    includePaths: [stylesRoot],
    loadPaths: [stylesRoot],
    additionalData(content, loaderContext) {
      return prependConfigToCssModules(content, loaderContext);
    },
  },
};

export default nextConfig;
