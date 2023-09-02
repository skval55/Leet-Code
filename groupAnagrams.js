const groupAnagrams = (strs) => {
  let result = [];
  let obj = {};

  for (let i = 0; i < strs.length; i++) {
    const match = strs[i].split("").sort().join("");
    !obj[match] ? (obj[match] = Array(strs[i])) : obj[match].push(strs[i]);
  }

  for (let key in obj) result.push(obj[key]);

  return result;
};
