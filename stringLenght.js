const str_len = (str) => {
  if (str.length > 0 && str.length < 10) {
    return str.length;
  } else {
    throw new Error('Less Than 1 character');
  }
};
module.exports = str_len;
