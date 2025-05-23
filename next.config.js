/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

export default {
  output: isProd ? 'export' : undefined,
  basePath: isProd ? '/Portifolio-Pessoal' : '',
  assetPrefix: isProd ? '/Portifolio-Pessoal/' : '',
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
  output: 'export',
  distDir: 'out',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/Portifolio-Pessoal' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/Portifolio-Pessoal/' : '',
}

module.exports = nextConfig

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