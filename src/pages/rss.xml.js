import rss from '@astrojs/rss';
import { getPagesFromDB } from '@/lib/contentFetcher.js';

export async function GET(context) {
  const { pages } = await getPagesFromDB();

  return rss({
    title: 'tsukie - tech, soul, and dream',
    description: 'A blog where coding, life, and my indie hacker journey converge.',
    site: context.site,
    items: pages.map((page) => ({
      title: page.title,
      description: page.summary,
      pubDate: new Date(page.date),
      link: `/en/${page.tag}/${page.slug}`,
    })),
  });
}
