const assert = require('assert')
require('./index')

arr = [1,2,3]
arr.nth[-1] = 'foo'

assert.equal(arr[2], 'foo')

console.log('It works!')
