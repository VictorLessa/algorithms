'use strict'
class MyCustomError extends Error {
	constructor(options) {
		super()
		this.errors = options.errors;
		this.name = 'MyCustomError';
	}
}


class List {
	constructor(list) {
		this.list = list
	}
	insere(...data) {
		if (data.length < 1) {
			throw new MyCustomError({
				errors: [{
					message: "arguments not null"
				}]
			})
		}
		for (let value of data) {
			this.list.push(value)
		}
		return this.list;
	}
	isAny() {
		if (this.list.length < 1) {
			return true
		} else {
			return false
		}
	}
	retira(apontador) {
		let newList = []
		if (apontador >= this.list.length || apontador < 0) {
			throw new MyCustomError({
				errors: [{
					message: 'Posição não existe'
				}]
			})
		} else {
			for (let i = 0; i < this.list.length; i++) {
				if (i != apontador) {
					newList.push(this.list[i])
				}
			}
		}
		this.list = newList
		return this.list
	}
}

module.exports = {
	list(array) {
		return new List(array)
	}
}
