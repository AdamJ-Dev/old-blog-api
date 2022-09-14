export const getTokenByAuthHeader = (header: string) => {
  return header.split(' ')[1];
};
