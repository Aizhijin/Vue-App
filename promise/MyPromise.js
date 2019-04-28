/*
 自定义Prmoise
 */
(function (window) {
  /*
    MyPromise 构造函数
   */
  function MyPromise (excutor) { // excutor 同步执行的回调函数
    // 1. 初始化状态
    const self = this //劫持this
    self.status = 'pending' // 状态属性, 初始值为pending, 后面会改变为: resolved/rejected
    self.data = undefined   // 用来保存将来产生了成功数据(value)或/失败数据(reason)
    self.callBack = []        // 用来存储包含待处理onResolved和onRejected回调函数方法的对象的数组
    //2.定义 resolve/reject
    /*
    当异步处理成功后应该立即执行的函数
    value: 需要传递给onResolved函数的成功的值
    内部:
      1. 同步修改状态和保存数据
      2. 异步调用成功的回调函数
     */
    function resolve (value) {
      if (self.status !== 'pending') {
        return
      }
      // 1. 同步修改状态和保存数据
      self.status = 'resolved'
      self.data = value
      console.log('resolved', value)
      // 2. 异步处理成功的回调
      setTimeout(() => {//异步
        self.callBack.forEach((obj) => {
          obj.onResolved(value)
        })
      })
    }

    /*
   当异步处理失败/异常时后应该立即执行的函数
   reason: 需要传递给onRejected函数的失败的值
   内部:
     1. 同步修改状态和保存数据
     2. 异步调用失败的回调函数
  */
    function reject (reason) {
      if (self.status !== 'pending') {
        return
      }
      // 1. 同步修改状态和保存数据
      self.status = 'rejected'
      self.data = reason
      console.log(reason)
      // 2. 异步处理失败的回调
      setTimeout(() => {//异步
        self.callBack.forEach((obj) => {
          obj.onRejected(reason)
        })
      })
    }

    //将定义好的resolve、reject传入excutor
    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }

  /*
  指定成功和失败后回调函数
  函数的返回值是一个新的promise
   */
  MyPromise.prototype.then = function (onResolved, onRejected) {
    //判断是否传参
    onResolved = typeof onResolved === 'function' ? onResolved : value => value
    onRejected = typeof onRejected === 'function' ? onResolved : reason => {throw reason}
    const self = this
    let promise

    function action (callBack, resolve, reject) {
      try {
        const result = callBack(self.data)//调用then里面成功的回调函数，获取其返回值

        // 1. 返回值是promise,将其的结果的返回值作为返回的pomise的值
        if (result instanceof MyPromise) {
          result.then(resolve, reject) // 此处与所要返回的pomise共用resolve,reject 状态相同、返回值相同
        } else {
          // 2. 返回一个一般值(undefined) ===> 将这个值作为返回的promise的成功值
          resolve(result)
        }
      } catch (error) {
        // 3.执行报错/异常，抛出异常，改变返回promise的状态为rejected
        reject(error)
      }
    }

    if (self.status === 'resolved') {      // 成功的promise
      promise = new MyPromise((resolve, reject) => {
        setTimeout(() => {//异步
          action(onResolved, resolve, reject)
        })
      })
    }
    else if (self.status === 'rejected') { //失败的promise
      promise = new MyPromise((resolve, reject) => {
        setTimeout(() => {//异步
          action(onRejected, resolve, reject)

        })
      })
    }
    else {         // 当前promise还未确定 pending
      promise = new MyPromise((resolve, reject) => {
        // 将onResolved和onRejected保存起来 （then里面的回调函数）
        self.callBack.push({
          onResolved (value) {
            action(onResolved, resolve, reject)
          },
          onRejected (reason) {
            action(onRejected, resolve, reject)
          }
        })
      })
    }
    //返回一个promise
    return promise
  }  /*
  方法返回一个Promise，并且处理拒绝的情况。它的行为与调用Promise.prototype.then(undefined, onRejected) 相同
  then()的语法糖
   */

  MyPromise.prototype.catch = function (onRejected) {
    return this.then(null, onRejected)
  }
  /*
 返回一个以给定值解析后的Promise 对象
 value也可能是一个promise
  */
  MyPromise.resolve = function (value) {
    return new MyPromise((resolve, reject)=>{
      if ( resolve instanceof MyPromise) {// 如果value是一个promise, 取这个promise的结果值作为返回的promise的结果值
        value.then(resolve, reject)// 如果value成功, 调用resolve(val), 如果value失败了, 调用reject(reason)
      }else {
        resolve(value)
      }
    })
  }
  MyPromise.reject = function (reason) {
    return new MyPromise((resolve, reject)=>{
      reject(reason)
    })
  }
  MyPromise.all = function () {

  }

  window.MyPromise = MyPromise
})(window)
