<!-- markdownlint-disable MD004 MD007 MD010 MD012 MD041 MD022 MD024 MD032 MD036 -->

# i-set

*indexed set of ordered unique values that can be re-sorted or re-ordered with an API similar to the native javascript Set*

```javascript
var ISet = require('i-set'),
    iset = new ISet(['a', 'b'])

iset.add('c').add('d')
iset.has('e') // false
iset.get('a') // 0
iset.index(1) // 'b'

iset.forEach(function(k,i) { console.log(i, ':', k)}) // 0:a 1:b 2:c 3:d

iset.order([4,3,2,1])
iset.forEach(function(k,i) { console.log(i, ':', k)}) // 0:d 1:c 2:b 3:a

iset.sort()
iset.forEach(function(k,i) { console.log(i, ':', k)}) // 0:a 1:b 2:c 3:d

iset.clear()
```

In short, the API is similar to the Set API with the following exceptions:
* `get(value) => index` (Map-like)
* `index(index) => value` (Array-like)
* `sort([function]) => self` (Array-like)
* `order(Array) => self`
* forEach behaves like in Arrays (`callback(value, index, array)`)

Internally there is a `._map` property with a native Map (value:index) and a `_arr` property with a native Array (index:value)


## License

[MIT](http://www.opensource.org/licenses/MIT) © [Hugo Villeneuve](https://github.com/hville)
