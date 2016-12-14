"use strict"

exports.modify = function(n) {
  return function(f) {
    return function(xs) {
      var x

      x = xs[n]
      xs = xs.slice()
      xs[n] = f(x)

      return xs
    }
  }
}
