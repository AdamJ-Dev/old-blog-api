const objectify = (key: keyof any, value: any) => {
  const obj = {} as any;
  obj[key] = value;
  return obj;
};
