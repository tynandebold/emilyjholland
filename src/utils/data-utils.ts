import { type CollectionEntry } from 'astro:content';

export function sortItemsByDateDesc(
  itemA: CollectionEntry<'media' | 'research'>,
  itemB: CollectionEntry<'media' | 'research'>
) {
  return (
    new Date(itemB.data.publishDate).getTime() -
    new Date(itemA.data.publishDate).getTime()
  );
}
