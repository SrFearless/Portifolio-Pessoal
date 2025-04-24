// next.config.js
/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // gera export estático (Next 14+)
  output: isProd ? 'export' : undefined,

  // ajusta a URL base para GitHub Pages (substitua pelo seu repo)
  basePath: isProd ? '/Portifolio-Pessoal' : '',
  assetPrefix: isProd ? '/Portifolio-Pessoal/' : '',

  // opcional: força trailing slash, evita 404 em rotas sem "/" 
  // (se você quiser URLs /projetos/ em vez de /projetos.html)
  trailingSlash: true,
};


let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
}

mergeConfig(nextConfig, userConfig)

function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      nextConfig[key] = userConfig[key]
    }
  }
}