module.exports = function (data) {
  let x;
  let min;
  if (typeof data !== 'object') {
    throw new Error('Parameter is not an Object')
  }
  for (let i = 0; i < data.length; i++) {
    min = i;
    for (let j = i + 1; j < data.length; j++) {
      if (data[j] < data[min]) {
        min = j;
      };
    };
    x = data[min];
    data[min] = data[i];
    data[i] = x;
  };
  return data
};