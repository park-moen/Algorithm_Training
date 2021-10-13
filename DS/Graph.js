class Vertex {
  constructor(value, adjList = new Array()) {
    this.value = value;
    this.adjList = adjList;
  }
}

class Graph {
  constructor() {
    this.vertices = new Array();
  }

  insert(value, adjList) {
    const vertex = new Vertex(value, adjList);
    const newIdx = this.vertices.length;

    adjList.forEach(index => {
      this.vertices[index].adjList.push(newIdx);
    });

    this.vertices.push(vertex);
  }

  bfs(value) {}

  dfs(vertexIdx) {}
}

const graph = new Graph();
graph.insert(0, []);
graph.insert(1, [0]);
graph.insert(2, [1]);
graph.insert(3, [2]);
graph.insert(4, [0, 2, 3]);
// console.log(graph.vertices);

console.log(graph.bfs(1));
// console.log(graph.dfs(0));

// [
//   Vertex { value: 0, adjList: [ 1, 4 ] },
//   Vertex { value: 1, adjList: [ 0, 2 ] },
//   Vertex { value: 2, adjList: [ 1, 3, 4 ] },
//   Vertex { value: 3, adjList: [ 2, 4 ] },
//   Vertex { value: 4, adjList: [ 0, 2, 3 ] }
// ]
