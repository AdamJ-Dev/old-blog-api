export const getUpdates = (body: string, pinned?: string) => {
  const updates: { body: string, pinned?: boolean } = { body };
  if (pinned !== undefined) updates.pinned = Boolean(pinned) 
  return updates; 
};