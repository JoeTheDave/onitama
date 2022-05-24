const resolveSquareName = location => {
  const column = (location % 5) + 1;
  const row = 'ABCDE'[Math.floor(location / 5)];
  return row + column;
};

export default {
  resolveSquareName,
};
