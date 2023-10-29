export const usePromisic =  () => {
  // const promisic = function(func){
  //     return function(params = {}){
  //         return new Promise((resolve, reject) => {
  //             const args = Object.assign(params, {
  //                 success: (res) => {
  //                     resolve(res)
  //                 },  
  //                 fail: (err) => {
  //                     reject(err)
  //                 }
  //             })
  //             func(args)
  //         })
  //     }
  // }
  
  const promisic = (func) => (params = {}) => new Promise((resolve,reject) => {
    const args = Object.assign(params, {
      success: res => resolve(res),
      fail: err => reject(err),
    })
    func(args)
  })
  
  return {
    Promisic: promisic
  }
}