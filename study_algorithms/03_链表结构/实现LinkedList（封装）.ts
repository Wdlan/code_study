
//创建Node节点类
class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}

//创建LinkedList的类
class LiskedList<T> {
  head: Node<T> | null = null
  private size: number = 0

  get length(){
    return this.size
  }
}
const linkedList = new LiskedList<string>()
console.log(linkedList.head)
export {}