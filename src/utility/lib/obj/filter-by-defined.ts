type Obj = Record<keyof any, unknown>;

export const filterByDefined = (obj: Obj) => {
  const newObj: Obj = {};
  for (const [key, value] of Object.entries(obj)) {
    if (value !== undefined) {
      newObj[key] = value;
    }
  }
  return newObj;
};
