/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
       API_URL: process.env.API_URL 
    },
    webpack: (config) => { config.externals.push({ sharp: 'commonjs sharp', canvas: 'commonjs canvas' }); return config },
    reactStrictMode: true,
    trailingSlash: true,
    eslint: {
      // Warning: This allows production builds to successfully complete even if
      // your project has ESLint errors.
      ignoreDuringBuilds: true,
    },
    images: {
      unoptimized: true
    },
    optimizeFonts: false,
    i18n: {
      locales: ['en', 'ar', 'tr'],
      defaultLocale: 'en',
    },
    // images: {
        // 	loader: "akamai",
        // 	path:
        // 		process.env.NODE_ENV === "production"
        // 			? "https://admash-admin.envytheme.com/"
        // 			: "http://localhost:3000",
        // },
}

module.exports = nextConfig
