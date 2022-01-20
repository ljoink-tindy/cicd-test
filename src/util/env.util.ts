const get = (key: string): string => {
  if (process.env.STAGE) {
    key = `${process.env.STAGE}_${key}`;
  }
  return process.env[key] || "";
};

export default {
  get,
};
