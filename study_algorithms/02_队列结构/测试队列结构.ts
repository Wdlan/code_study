import ArrayQueue from "./01_实现队列结构queue";

const queue = new ArrayQueue<string>()


queue.enqueue("abc")
queue.enqueue("cba")
queue.enqueue("wxh")

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.isEmpty())
console.log(queue.peek())
console.log(queue.size())