"use strict"

exports.get = function(i) {
  return function(xs) {
    return xs[i]
  }
}

exports.modify = function(i) {
  return function(f) {
    return function(xs) {
      var x

      x = xs[i]
      xs = xs.slice()
      xs[i] = f(x)

      return xs
    }
  }
}

exports.set = function(i) {
  return function(x) {
    return function(xs) {
      xs = xs.slice()
      xs[i] = x

      return xs
    }
  }
}
