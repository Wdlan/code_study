import ArrayQueue from "./01_实现队列结构queue";

function lastRemaining(n: number, m: number) {
  let position = 0;
  for(let i = 2; i <= n; i++){
    position = (position + m) % i
  }
  return position;
}