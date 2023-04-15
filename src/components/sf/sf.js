function checkIdicator(ind) {
  if (ind === 0) {
    return 1;
  }
  const bagi = ind / 4;
  const split = String(bagi).split('.');
  if (split.length === 1) {
    return String(bagi).substring(0, 1);
    // `bindicator`;
  }
  return getBIndicator(split[1]);
}
function getBIndicator(value) {
  switch (true) {
    case (value > 1 && value < 25):
      return 1;
    case (value >= 25 && value < 50):
      return 2;
    case (value >= 50 && value < 75):
      return 3;
    case (value >= 75 && value < 100):
      return 4;
    default:
      return value;
  }
}

export {
  checkIdicator,
};
