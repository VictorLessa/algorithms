'use strict'
class MyCustomError extends Error {
  constructor(options) {
    super();
    this.errors = options.errors;
    this.name = 'MyCustomError';
  }
}

class Stack {
  constructor(length, battery) {
    this.length = length;
    this.battery = battery || [];
  }

  isAny() {
    if (this.battery.length < 1) {
      return true;
    } else {
      return false
    }
  }

  createBattery(...data) {
    this.battery.length = this.length
    return this.create(data)
  }

  create(data) {
    if (typeof data[0] === 'object') {
      data = data[0]
    }
    if (data.length > this.length) {
      throw new Error(`Maximum size ${this.length}`)
      return
    }
    for (let i = 0; i < data.length; i++) {
      this.battery[i] = data[i]
    }
    return this.battery;
  }

  insert(list, ...data) {
    this.length = list.length;
    let undef = 0;
    list = list.reverse()
    for (let i = 0; i < list.length; i++) {
      if (list[i] === undefined) undef++
    }
    if (typeof data[0] === 'object') {
      data = data[0]
    }
    if (data.length > undef) {
      throw new Error('Stack does not support size');
    }
    for (let i = 0; i < undef; i++) {
      if (data[i] !== undefined) {
        list.push(data[i])
      }
    }
    list = list.reverse()
    list.length = this.length
    return list
  }

  cleanBattery() {
    this.battery = []
    return this.battery
  }
}

module.exports = {
  stack(data) {
    return new Stack(data)
  }
}