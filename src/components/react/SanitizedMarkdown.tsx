import { TinaMarkdown } from 'tinacms/dist/rich-text';
import type { TinaMarkdownContent } from 'tinacms/dist/rich-text';

// Własna funkcja filtrująca niedozwolone typy (np. raw HTML)
function filterBlocks(content: TinaMarkdownContent): TinaMarkdownContent {
  if (!Array.isArray(content)) return [] as unknown as TinaMarkdownContent;

  return content.filter((block) => {
    // np. tylko tekstowe i headingi
    return block && typeof block === 'object' && ['paragraph', 'heading', 'blockquote', 'list'].includes(block._type);
  }) as unknown as TinaMarkdownContent;
}

export const SafeTinaMarkdown = ({ content }: { content: TinaMarkdownContent }) => {
  const filtered = filterBlocks(content);
  return <TinaMarkdown content={filtered} />;
};
