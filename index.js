var arrayOrder = require('array-order')

module.exports = ISet
/*
	Set with Position Index
	API similar javascript Set. Exceptions:
		Number get(item) => index
		Any    index(index) => item
		self   sort(sorter|order)
*/
function ISet(items) {
	this._map = new Map()
	this._arr = []
	if (items) items.forEach(this.add, this)
}
ISet.prototype = {
	get size() { return this._arr.length },
	has: function(item) { return this._map.has(item) },
	get: function(item) { return this._map.get(item) },
	add: function(item) {
		var arr = this._arr,
				map = this._map
		if (!map.has(item)) {
			map.set(item, arr.length)
			arr[arr.length] = item
		}
		return this
	},
	index: function(i) { return this._arr[i] },
	clear: function() {
		this._map.clear()
		this._arr.length = 0
	},
	forEach: function(fcn, ctx) { this._arr.forEach(fcn, ctx) },
	delete: function(item) {
		var arr = this._arr,
				map = this._map,
				idx = map.get(item),
				has = map.delete(item)
		if (has) {
			arr.splice(idx, 1)
			for (var i=idx; i<arr.length; ++i) map.set(arr[i], i)
		}
		return has
	},
	sort: function(sorter) {
		var arr = this._arr,
				map = this._map
		arr.sort(sorter).forEach(map.set, map)
		return this
	},
	order: function(order) {
		var arr = this._arr,
				map = this._map
		arrayOrder(arr, order).forEach(map.set, map)
		return this
	}
}
