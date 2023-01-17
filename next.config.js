/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: 'default-src \'self\'; script-src \'none\'; sandbox;',
  },
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    // Configura o @svgr como um loader para imagens SVG usando o hook para o Webpack
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // O objeto config modificado precisa ser retornado
    return config;
  },


};

module.exports = withBundleAnalyzer({nextConfig});
