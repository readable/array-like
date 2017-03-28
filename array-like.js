window.Rd = window.Rd || {}

;(function () {
  var methodNames = [
    'every', 'forEach', 'filter', 'find', 'map',
    'includes', 'reduce', 'slice', 'some'
  ]

  methodNames.forEach(function (methodName) {
    window.Rd[methodName] = function (list, action, optional) {
      return Array.prototype[methodName].call(list, action, optional)
    }
  })
}())

window.Rd.flatten = function (tree) {
  return Array.prototype.concat.apply([], tree)
}

// TODO: add Array.prototype.from and Array.prototype.of polyfills
