interface IQueue<T> {
  //入队
  enqueue(element: T): void
  //出队
  dequeue(): T | undefined
  // peek
  peek(): T | undefined
  // 判读是否为空
  isEmpty(): boolean
  //元素的个数
  size(): number
}

export default IQueue;