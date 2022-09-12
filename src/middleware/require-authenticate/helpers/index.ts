import User from '../../../models/user';

export const getUserId = async (candidate: string) => {
  const userId = await User.findOne({ _id: candidate }).select('_id');
  return userId;
};

export const getTokenByAuthHeader = (header: string) => {
  return header.split(' ')[1];
};
