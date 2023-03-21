import patterns from '../data/patterns';

export default (text: string | string[]) => {
  let allTags: RegExpMatchArray | string[];
  if (typeof text === 'string') {
    allTags = text.match(patterns.hasgtag) || [];
  } else {
    allTags = [...text];
  }
  const set = new Set(allTags);
  return Array.from(set);
};
