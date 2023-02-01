module.exports = {
  siteUrl: 'https://buosearquitetura.com.br',
  generateRobotsTxt: true, // opcional
  priority: null,
  changefreq: null,
  exclude: ['/server-sitemap.xml', '/instagram/*'],
  robotsTxtOptions: {
    additionalSitemaps: ['https://buosearquitetura.com.br/server-sitemap.xml'],
  },
};