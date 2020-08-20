let deepClone = src => {
  if(typeof src !== "object" || src === null) return src;
  let temp = src instanceof Array ? [] : {};

  for(let item in src) {
    if(src.hasOwnProperty(item)) {
      temp[item] = typeof src[item] === 'object' ? deepClone(item) : src[item];
    }
  }
  return temp;
}