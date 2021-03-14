const isIntersect = ({ rec1, rec2 }) => {
  console.log(rec1, rec2);
  return !(
    rec2.top < rec1.top ||
    rec2.left < rec1.left ||
    rec2.bottom > rec1.bottom ||
    rec2.right > rec1.right
  );
};

// console.log(
//   isIntersect({
//     rec1: {
//       top: 0,
//       left: 0,
//       right: 6,
//       bottom: 4,
//     },
//     rec2: {
//       top: 0,
//       left: 0,
//       right: 6,
//       bottom: 3,
//     },
//   })
// );
