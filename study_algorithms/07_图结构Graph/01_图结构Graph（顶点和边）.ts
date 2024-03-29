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
}

const graph = new Graph()

export{}