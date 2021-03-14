const getMinimumUniqueSum = (arrayNum) => {
  const arraySorted = arrayNum.sort((a, b) => a - b);
  const minimalUniqueArr = arraySorted.reduce((acc, curr) => {
    while (acc.includes(curr)) curr++;
    acc.push(curr);
    return acc;
  }, []);
  return minimalUniqueArr.reduce((acc, cur) => acc + cur, 0);
};

// console.log(getMinimumUniqueSum([3, 2, 1, 4, 7]));
