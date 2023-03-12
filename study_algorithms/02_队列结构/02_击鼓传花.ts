import ArrayQueue from "./01_实现队列结构queue";

function hotPotato(names: string[], num: number): number{
  if ( names.length === 0) return -1 
  const queue = new ArrayQueue<string>()
  //将所有name入队操作
  for(const name of names){
    queue.enqueue(name)
  }
  //淘汰规则
  while(queue.size() > 1){
    for(let i = 0; i < num; i++){
      const name = queue.dequeue()
      if (name) queue.enqueue(name)
    }
    //淘汰
    queue.dequeue()
  }
  // return queue.dequeue()
  const leftName = queue.dequeue()!
  const index = names.indexOf(leftName)
  return index
}