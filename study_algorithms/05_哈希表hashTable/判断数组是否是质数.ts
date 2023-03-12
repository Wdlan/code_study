/**
 * 传入一个数字，判断是否为质数
 * @param num 要判断的数字
 * @returns 是否是一个质数
 */

function isPrime(num: number): boolean{
  //只能被1和num整除
  for(let i = 2; i < num; i++){
    if(num % i === 0){
      return false
    }
  }
  return true
}

export {}