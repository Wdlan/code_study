import ArrayStack from "./02_实现栈结构(重构)"

function decimalToBinary(decimal: number): string {
  const stack = new ArrayStack
  
  //使用循环：1.while：不确定次数，只知道循环结束跳转； for：知道循环的次数时
  while(decimal > 0){
    const result = decimal % 2
    stack.push(result)
    decimal = Math.floor(decimal / 2)
  }
  let binary = ''
  while(!stack.isEmpty()){
    // console.log(stack.pop())
    binary += stack.pop()
  }

  return binary
}
console.log(decimalToBinary(35))
console.log("---------------")
console.log(decimalToBinary(100))

export {}