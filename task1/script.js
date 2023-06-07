const expo = (number, power, callback) => {
  if (power === 0) {
    return 1;
  } else {
    return number * expo(number, power - 1);
  }
};

const result = expo(5, 3);
console.log(result); // Output: 125
