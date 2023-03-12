
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
}
const linkedList = new LiskedList<string>()

linkedList.append("aaa")
linkedList.append("bbb")
linkedList.append("ccc")
linkedList.append("wxh")
linkedList.traverse()

export {}