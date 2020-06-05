function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let letterCounter1 = {};
  let letterCounter2 = {};
  for (let val of str1) {
    letterCounter1[val] = (letterCounter1[val] || 0) + 1;
  }
  for (let val of str2) {
    letterCounter2[val] = (letterCounter2[val] || 0) + 1;
  }
  console.log(letterCounter1);
  console.log(letterCounter2);
  for (let key in letterCounter1) {
    if (!(key in letterCounter2)) {
      return false;
    }
    if (letterCounter2[key] !== letterCounter1[key]) {
      return false;
    }
  }
  return true;
}

validAnagram("car", "rac");
console.log(validAnagram("car", "rat"));

// *** Colts Solution
// function validAnagram(first, second) {
//   if (first.length !== second.length) {
//     return false;
//   }

//   const lookup = {};

//   for (let i = 0; i < first.length; i++) {
//     let letter = first[i];
//     // if letter exists, increment, otherwise set to 1
//     lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
//   }
//   console.log(lookup)

//   for (let i = 0; i < second.length; i++) {
//     let letter = second[i];
//     // can't find letter or letter is zero then it's not an anagram
//     if (!lookup[letter]) {
//       return false;
//     } else {
//       lookup[letter] -= 1;
//     }
//   }

//   return true;
// }

// // {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')
