function $$(selector, context) {
  context = context || document
  let elements = context.querySelectorAll(selector)
  return Array.prototype.slice.call(elements)
}

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
  if (n <= 0) {
    return new Error('n需要大于等于1')
  }
  var arr = [1]
  var i2, i3, i5
  i2 = i3 = i5 = 0
  while (arr.length < n) {
    arr.push(Math.min(arr[i2] * 2, arr[i3] * 3, arr[i5] * 5))
    var current = arr[arr.length - 1]
    while (arr[i2] * 2 <= current) {
      i2++
    }
    while (arr[i3] * 3 <= current) {
      i3++
    }
    while (arr[i5] * 5 <= current) {
      i5++
    }
  }
  return arr[n - 1]
}

let a = nthUglyNumber(8)
console.log(a)
