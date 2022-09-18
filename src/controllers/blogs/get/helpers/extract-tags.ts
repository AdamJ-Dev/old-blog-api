type HasTags = {
  tags: string[];
};

export const extractTags = (blogs: HasTags[]) => {
  const uniques: Record<string, string> = {};
  for (const blog of blogs) {
    for (const tag of blog.tags) {
      uniques[tag] = tag;
    }
  }
  return Object.keys(uniques);
};
