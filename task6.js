//graphs
class Graph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    addEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return; // One or both vertices do not exist
        }
        if (!this.adjacencyList[vertex1].includes(vertex2)) {
            this.adjacencyList[vertex1].push(vertex2);
        }
        if (!this.adjacencyList[vertex2].includes(vertex1)) {
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return; // Vertex does not exist
        }
        // Remove edges connected to the vertex
        for (let connectedVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, connectedVertex);
        }
        // Remove the vertex itself
        delete this.adjacencyList[vertex];
    }

    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) {
            return; // One or both vertices do not exist
        }
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
    }
}

function breadthFirstSearch(graph, startVertex) {
    const visited = {};
    const queue = [startVertex];
    const result = [];

    visited[startVertex] = true;

    while (queue.length) {
        const currentVertex = queue.shift();
        result.push(currentVertex);

        for (let neighbor of graph.adjacencyList[currentVertex]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                queue.push(neighbor);
            }
        }
    }

    return result;
}
