class HashTable<T = any>{
  //创建一个数组，用来存放链地址中的链（数据）
  private storage: [string, T][][] = []
  // 定义数组长度
  private length: number = 7
  //记录已经存放元素的个数
  private count:number = 0

  private  hashFunc(key: string, max: number): number {
    //计算hashCode
    let hashCode = 0
    const length = key.length
    for(let i = 0; i < length; i++){
      hashCode = 31 * hashCode + key.charCodeAt(i)
    }
    const index = hashCode % max
    return index
  }

  private resize(newLength: number){
    //设置新的长度
    this.length = newLength
    //获取原来所有的数据，并且重新放入到新的容量数组中
    //1.对数组进行初始化操作
    const oldStorage = this.storage
    this.storage = []
    this.count = 0
    //2.获取原来数据，放入新的数组中
    oldStorage.forEach(bucket => {
      if(!bucket) return
      for(let i = 0; i < bucket.length; i++){
        const tuple = bucket[i]
        this.put(tuple[0],tuple[1])
      }
    })
  }

  //插入与修改
  put(key:string, value: T){
    //1.根据key获取数组中对应的索引值
    const index = this.hashFunc(key,this.length)
    //2.取出索引值对应位置的数组（桶）
    let bucket = this.storage[index]
    //3.判断bucked是否有值
    if(!bucket){
      bucket = []
      this.storage[index] = bucket
    }
    //4.确定已经有一个数组了，但是数组中是否已经存在key是不确定的
    let isUpdata = false
    for(let i = 0; i < bucket.length; i++){
      const tuple = bucket[i]
      const tupleKey = tuple[0]
      if(tupleKey === key){
        tuple[1] = value
        isUpdata = true
      }
    }
    //5.如果上面代码没有进行覆盖，那么在该位置进行添加
    if(!isUpdata){
      bucket.push([key,value])
      this.count++

      //发现loadFactor比例大于0.75，就进行扩容
      const loadFactor = this.count / this.length
      if(loadFactor > 0.75) {
        this.resize(this.length * 2)
      }
    }
  }
  
  //获取值
  get(key: string): T | undefined {
    //1.根据key获取索引值index
    let index = this.hashFunc(key, this.length)
    //2.获取bucket（桶）
    const bucket = this.storage[index]
    if(!bucket) return undefined
    //3.对bucket进行遍历
    for(let i = 0; i < bucket.length; i++){
      const tuple = bucket[1]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]
      if(tupleKey === key){
        return tupleValue
      }
    }

    return undefined
  }
  //删除操作
  delete(key: string): T | undefined{
    //1.根据key获取索引值index
    let index = this.hashFunc(key, this.length)
    //2.获取bucket（桶）
    const bucket = this.storage[index]
    if(!bucket) return undefined
    //3.对bucket进行遍历
    for(let i = 0; i < bucket.length; i++){
      const tuple = bucket[1]
      const tupleKey = tuple[0]
      const tupleValue = tuple[1]
      if(tupleKey === key){
        bucket.splice(i, i)
        this.count--

        //如果laodFactor小于0.25，缩容操作
        const loadFactor = this.count / this.length
        if(loadFactor < 0.25 && this.length > 7){
          this.resize(Math.floor(this.length / 2))
        }

        return tupleValue
      }
    }

    return undefined
  }
}

export default HashTable