import Node from "../types/Node";

import { btPrint } from 'hy-algokit';

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
  //当前节点的父节点
  parent: TreeNode<T> | null = null
  // 判断当前节点是父节点的左子节点
  get isLeft(): boolean{
    return !!(this.parent && this.parent.left === this)
  }
  // 判断当前节点是父节点的右子节点
  get isRight(): boolean{
    return !!(this.parent && this.parent.right === this)
  }
}

class BSTree<T>{
  private root: TreeNode<T> | null = null
  insert(value:T){
    //1.根据传入value创建Node（TreeNode）节点
    const newNode = new TreeNode(value)
    //2.判断是否有根节点
    if(!this.root){
      this.root = newNode;
    }else{
      this.insertNode(this.root, newNode)
    }
  }
  private searchNode(value: T): TreeNode<T> | null {
    let current = this.root
    let parent: TreeNode<T> | null = null
    while(current){
      if(current.value ===  value){
        return current
      }

      parent = current
      if(current.value < value){
        current = current.right
      }else {
        current = current.left
      }
      //如果current有值，那么current保存自己的父节点
      if(current) current.parent = parent
    }
    return null
  }

  private insertNode(node: TreeNode<T>, newNode: TreeNode<T>){
    if(newNode.value < node.value){
      if(node.left === null){
        node.left = this.root
      }else {
        this.insertNode(node.left,newNode)
      }
    }else{
      if(node.right === null){
        node.right = newNode
      }else {
        this.insertNode(node.right, newNode)
      }
    }
  }
  /**遍历操作 */
  //先序遍历
  preOrderTraverse(){
    this.preOrderTraverseNode(this.root)
  }
  private preOrderTraverseNode(node: TreeNode<T> | null){
    if(node){
      console.log(node.value)
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
    }
  }
  //中序遍历
  inOderTraverse(){
    this.inOrderTraverseNode(this.root)
  }
  private inOrderTraverseNode(node: TreeNode<T> | null){
    if(node){
      this.preOrderTraverseNode(node.left)
      console.log(node.value)
      this.preOrderTraverseNode(node.right)
    }
  }
  //后续遍历
  postOrderTraverse(){
    this.postOrderTraverseNode(this.root)
  }
  private postOrderTraverseNode(node: TreeNode<T> | null){
    if(node){
      this.preOrderTraverseNode(node.left)
      this.preOrderTraverseNode(node.right)
      console.log(node.value)
    }
  }
  //层次遍历
  levelOrderTraverse(){
    //1.如果没有根节点，直接返回
    if(!this.root) return

    //2.创建队列结构
    const queue: TreeNode<T>[] = []
    //3.遍历队列中的所有节点（依次出队）
    while(queue.length){
      //3.1访问节点
      const current = queue.shift()!
      console.log(current.value)
      //3.2将左子节点放入队列
      if(current.left){
        queue.push(current.left)
      }
      //3.2将右子节点放入队列 
      if(current.right){
        queue.push(current.right)
      }
    }
  }
  /**最大、小值 */
  getMaxValue(): T | null{
    let current = this.root
    while(current && current.right){
      current = current.right
    }
    return current?.value ?? null
  }
  getMinValue(): T | null{
    let current = this.root
    while(current && current.left){
      current = current.left
    }
    return current?.value ?? null
  }

  //搜索
  search(value: T): boolean{
    return !!this.searchNode(value)
  }

  //删除操作
  private getSuccessor(delNode:TreeNode<T>): TreeNode<T>{
    //获取右子树
    let current = delNode.right
    let successor: TreeNode<T> | null = null
    while(current){
      successor = current
      current = current.left
      if(current){
        current.parent = successor
      }
    }

    if(successor !== delNode.right){
      successor!.parent!.left = successor!.right
      successor!.right = delNode.right
    }

    //获取后继节点
    successor!.left = delNode.left

    return successor!
  }

  remove(value: T): boolean {
    //1.搜索：当前是否有这个value
    const current = this.searchNode(value)
    if(!current) return false

    let replaceNode:TreeNode<T> | null = null;


    if(current.left === null && current.right === null){
      replaceNode = null
    }else if(current.right === null){//只有一个子节点：只有左子节点
      replaceNode = current.left
    }else if(current.left === null){//只有一个子节点：只有右子节点
      replaceNode = current.right
    }else {
      const successor = this.getSuccessor(current)
      replaceNode = successor
    }
    
    if(current === this.root){
      this.root = replaceNode
    }else if(current.isLeft){
      current.parent!.left = replaceNode
    }else{
      current.parent!.right = replaceNode
    }

    return true
  }
}

const bst = new BSTree<number>()
bst.insert(20)
bst.insert(30)
bst.insert(18)

export {}