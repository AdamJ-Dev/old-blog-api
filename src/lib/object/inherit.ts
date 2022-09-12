export const inheritKeys = (obj: Record<string, string>, keys: string[]) => {
  const newObj = {} as any;
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
};
