
//创建Node节点类
class Node<T> {
  value:T
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

  //封装私有方法
  //根据position获取当前的节点（不是当前的value，而是获取节点）
  private getNode(position: number): Node<T> | null{
    let index = 0 
    let current = this.head
    while(index++ < position && current){
      current = current.next
    }
    return current
  }

  append(value: T){
    const newNode = new Node(value)

    if (!this.head){
      this.head = newNode
    } else{
      let current = this.head
      while (current.next){
        current = current.next
      }
      //current肯定是指向最后一个节点的
      current.next = newNode
    }

    this.size++
  }
  //遍历链表的方法
  traverse(){
    const value: T[] = []

    let current = this.head
    while(current){
      value.push(current.value)
      current = current.next
    }
    console.log(value.join("->"))
  }
  //插入方法：abc
  insert(value: T, position: number): boolean {
    //1.越界判断
    if (position < 0 || position > this.size) return false

    //2.根据value创建新的节点
    const newNode = new Node(value)
    if(position === 0){
      newNode.next = this.head
      this.head = newNode 
    }else {
      const previous = this.getNode(position - 1)
      newNode.next = previous!.next
      previous!.next = newNode
    }
    return true
  }
  //删除操作
  removeAt(position: number): T | null {
    //1.越界判断
    if(position < 0 || position >= this.size) return null

    //2.判断是否为第一个节点
    let current = this.head
    if(position === 0){
      this.head = current?.next ?? null
    }else {
      const previous = this.getNode(position - 1)
      previous!.next = previous?.next?.next ?? null
    }
    this.size--

    return current?.value ?? null
  }
  //获取方法
  get(position: number): T | null {
    //越界判断
    if (position < 0 || position >= this.size) return null

    return this.getNode(position)?.value ?? null
  }
  //更新方法
  update(value: T, position: number): boolean{
    if(position < 0 || position >= this.size) return false
    const currentNode = this.getNode(position)
    currentNode!.value = value
    return true
  } 
  //根据值，获取对应位置的索引
  indexOf(value : T): number {
    let index = 0 
    let current = this.head
    while(current){
      if(current.value === value){
        return index
      }
      index++
      current = current.next
    }
    return -1
  }
}
const linkedList = new LiskedList<string>()

linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.append("wxh")
linkedList.traverse()
console.log("--------------insert-----------------")
linkedList.insert("shyy",0)
linkedList.insert("ss",2)

linkedList.traverse()
console.log("--------------removeAt-----------------")
// console.log(linkedList.removeAt(0))
console.log(linkedList.removeAt(3))
linkedList.traverse()

console.log("-------------get------------------")
console.log(linkedList.get(0))
console.log(linkedList.get(1))
linkedList.traverse()


console.log("-------------updata------------------")
console.log(linkedList.update("syy",1))
linkedList.traverse()

console.log("-------------indexOf------------------")
console.log(linkedList.indexOf("syy"))
console.log(linkedList.indexOf("coder"))
linkedList.traverse()

export {}