class Graph<T> {
  //定点
  private verteces: T[] = []
  //边: 连接表
  private adjList: Map<T, T[]> = new Map()

  // 添加顶点和边的方法
  addVertex(vertex: T) {
    //将顶点添加数据中保存
    this.verteces.push(vertex)
    // 创建一个邻接表中的数组
    this.adjList.set(vertex, [])
  }

  addEdge(v1: T,v2: T){
    this.adjList.get(v1)?.push(v2)
    this.adjList.get(v2)?.push(v1)
  }
  bfs(){
    if(this.verteces.length === 0) return

    const queue: T[] = []
    queue.push(this.verteces[0])

    const visited = new Set<T>()
    visited.add(this.verteces[0])

    while(queue.length){
      //访问队列中第一个顶点
      const vertex = queue.shift()!

      //相邻顶点
      const neighbors = this.adjList.get(vertex)
      if(!neighbors) continue
      for(const nei of neighbors){
        if(!visited.has(nei)){
          visited.add(nei)
          queue.push(nei)
        }
      }
    }
  }

  dfs(){
    if(this.verteces.length === 0) return

    const stack: T[] = []
    stack.push(this.verteces[0])
    
    const visited = new Set<T>()
    visited.add(this.verteces[0])

    while(stack.length){
      const vertex = stack.pop()!

      const neighbors = this.adjList.get(vertex)
      if(!neighbors) continue
      for(let i = neighbors.length -1; i >=0; i--){
        const nei = neighbors[i]
        if(!visited.has(nei)){
          visited.add(nei)
          stack.push(nei)
        }
      }
    }
  }
}

const graph = new Graph()

export{}