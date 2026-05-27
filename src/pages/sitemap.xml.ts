export async function GET() {
  const siteUrl = 'https://escolaeducabem.com.br';

  const pages = [
    { url: '/', priority: '1.0', changefreq: 'weekly' },
    { url: '/proposta-pedagogica', priority: '0.9', changefreq: 'monthly' },
    { url: '/bercario', priority: '0.9', changefreq: 'monthly' },
    { url: '/educacao-infantil', priority: '0.9', changefreq: 'monthly' },
    { url: '/alimentacao', priority: '0.8', changefreq: 'monthly' },
    { url: '/estrutura', priority: '0.8', changefreq: 'monthly' },
    { url: '/faq', priority: '0.7', changefreq: 'monthly' },
    { url: '/contato', priority: '0.7', changefreq: 'monthly' },
    { url: '/blog', priority: '0.8', changefreq: 'weekly' },
    { url: '/blog/metodologia-reggio-emilia', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/como-escolher-bercario-pompeia', priority: '0.8', changefreq: 'monthly' },
    { url: '/blog/quando-colocar-filho-na-escola', priority: '0.8', changefreq: 'monthly' },
  ];

  const today = new Date().toISOString().split('T')[0];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${siteUrl}${page.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
