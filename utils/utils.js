// 取价格的整数部分
export function getPriceIntergetPart(price) {
  let val = Math.floor(price).toString();
  return val;
}

// 取价格的小数部分
export function getPriceDecimalPart(price) {
  let val = price.toFixed(2).split('.')[1];
  return val;
}
