const randomCell = (x, y) => [Math.floor(Math.random() * y), Math.floor(Math.random() * x)];
const maze = (x, y) => {
  let size = R.multiply(x, y);
  let nodes = [];
  let unvisited = [];

  for ( let i = 0; i < y; i++ ) {
    nodes[i] = new Array();
    unvisited[i] = new Array();

    for ( let j = 0; j < x; j++ ) {
      nodes[i][j] = [0, 0, 0, 0];
      unvisited[i][j] = true;
    }
  }

  let currentCell = randomCell(x, y);
  let path = [currentCell];

  unvisited[currentCell[0]][currentCell[1]] = false;

  let visited = 1;

  while ( visited < size ) {
    let pot =
      [
        [currentCell[0]-1, currentCell[1], 0, 2],
        [currentCell[0], currentCell[1]+1, 1, 2],
        [currentCell[0]+1, currentCell[1], 2, 0],
        [currentCell[0], currentCell[1]-1, 3, 1]
      ];

    let neighbors = [];

    for ( let l = 0; l < 4; l++ ) {
      if (pot[l][0] > -1 && pot[l][0] < y && pot[l][1] > -1 && pot[l][1] < x && unvisited[pot[l][0]][pot[l][1]])  neighbors.push(pot[l]);
    }

    if (R.length(neighbors)) {
      let next = neighbors[Math.floor(Math.random()*neighbors.length)];

      nodes[currentCell[0]][currentCell[1]][next[2]] = 1;
      // nodes[next[0]][next[1]][next[2]] = 1;

      unvisited[next[0]][next[1]] = false;
      visited++;
      currentCell = [next[0], next[1]];

      path.push(currentCell);
    } else {
      currentCell = path.pop();
    }
  }

  return nodes;
};
