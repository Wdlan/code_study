/**
 * 哈希函数，将key映射成index函数
 * @param key 转换的key
 * @param max 数组的长度（最大的数值）
 * @returns 索引值
 */
function hashFunc(key: string, max: number): number {
  //计算hashCode
  let hashCode = 0
  const length = key.length
  for(let i = 0; i < length; i++){
    hashCode = 31 * hashCode + key.charCodeAt(i)
  }
  const index = hashCode % max
  return index
} 

console.log(hashFunc("shyy",7))
console.log(hashFunc("wxh",7))

export {}