'use strict'

class list {
	constructor(list) {
		this.list = list
	}
	insere (...data) {
		for (let value of data) {
			this.list.push(value)
		}
		return this.list;
	}
	retira(apontador) {
		let newList = []
		if (apontador >= this.list.length || apontador < 0) {
			console.log('Err: Posição não existe')
			return this.list
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
	insere: function (array, ...data) {
		return new list(array).insere(...data)
	},
	retira: function (array, apontador) {
		return new list(array).retira(apontador)	
	} 
}
