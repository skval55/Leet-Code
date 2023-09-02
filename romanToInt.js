/** Roman numerals to Interger
 *
 * Goal : Take a roman numeral and terun it into an integer
 *
 *
 *
 */

// const specRomanNum = {
//   CM: 900,
//   CD: 400,
//   XC: 90,
//   XL: 40,
//   IX: 9,
//   IV: 4,
// };
// const regRomanNum = {
//   I: 1,
//   V: 5,
//   X: 10,
//   L: 50,
//   C: 100,
//   D: 500,
//   M: 1000,
// };

// const romanToInt = (s) => {
//   let int = 0;
//   let remain = "";

//   for (let i = 0; i < s.length; i++) {
//     if (specRomanNum[s[i] + s[i + 1]]) {
//       int = int + specRomanNum[s[i] + s[i + 1]];
//       i = i + 1;
//     } else remain = remain + s[i];
//   }
//   for (let i = 0; i < remain.length; i++) {
//     if (regRomanNum[remain[i]]) int = int + regRomanNum[remain[i]];
//   }
//   return int;
// };

const romanToInt = (s) => {
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  for (let i = 0; i < s.length; i++) {
    roman[s[i]] < roman[s[i + 1]]
      ? (result = result - roman[s[i]])
      : (result = result + roman[s[i]]);
  }
  return result;
};

romanToInt("III");
romanToInt("LVIII");
romanToInt("MCMXCIV");
