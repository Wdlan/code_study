import Node from "../types/Node";

import { btPrint } from 'hy-algokit';

class TreeNode<T> extends Node<T> {
  left: TreeNode<T> | null = null
  right: TreeNode<T> | null = null
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
 
}

const bst = new BSTree<number>()
bst.insert(20)
bst.insert(30)
bst.insert(18)

export {}