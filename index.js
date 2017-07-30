const descriptor = {
  name: 'nth',
  configurable: true,
  enumerable: true,
  get: function() {
    return new Proxy(this, {
      get: function(array, index) {
        return array[index[0] === '-' ? array.length + parseInt(index, 10) : index]
      },
      set: function(array, index, value) {
        array[index[0] === '-' ? array.length + parseInt(index, 10) : index] = value
        return true
      },
    })
  }
}

Object.defineProperty(Array.prototype, 'nth', descriptor)
