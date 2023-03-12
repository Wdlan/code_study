class HashTable<T = any>{
  //创建一个数组，用来存放链地址中的链（数据）
  private storage: [string, T][] = []
  // 定义数组长度
  private length: number = 7
  //记录已经存放元素的个数
  private count:number = 0
}


export default HashTable