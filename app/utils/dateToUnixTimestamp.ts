export const dateToUnixTimestamp = (dateStr: string): number => {
  const date = new Date(dateStr);

  return Math.floor(date.getTime() / 1000);
};
