window.Rd = window.Rd || {}

window.Rd.each = function (list, callback) {
  return Array.prototype.forEach.call(list, callback)
}

window.Rd.filter = function (list, callback) {
  return Array.prototype.filter.call(list, callback)
}

window.Rd.flatten = function (tree) {
  return Array.prototype.concat.apply([], tree)
}

window.Rd.toArray = function (list) {
  return Array.prototype.concat.call([], list)
}
