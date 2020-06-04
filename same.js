function same(arr1, arr2) {
  let trueArray = [];
  arr1.forEach((item) => {
    let square = item * item;
    if (arr2.includes(square)) {
      trueArray.push(true);
    } else {
      trueArray.push(false);
    }
  });
  console.log(trueArray);
  if (trueArray.includes(false)) {
    console.log("False");
  } else {
    console.log("True");
  }
}

same([1, 2, 3], [1, 4, 9]);
