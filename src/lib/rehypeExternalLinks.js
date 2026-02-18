import { visit } from 'unist-util-visit';

export function rehypeExternalLinks() {
  return (tree) => {
    visit(tree, 'element', (node) => {
      if (
        node.tagName === 'a' &&
        node.properties?.href &&
        node.properties.href.includes('http') &&
        !node.properties.href.includes('tsukie.com')
      ) {
        node.properties.target = '_blank';
        node.properties.rel = 'nofollow noopener noreferrer';
      }
    });
  };
}
