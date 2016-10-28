const getLength = matrix => matrix.length;
const use = (x, y) => grid[y][x];
const isIn = (x, y) => (x >= 0 && x < width) && (y >= 0 && y < height);
const isWalkable = (x, y) => isIn(x, y) && grid[y][x].walkable;
const getNeighbors = node => {
  let x = node.x;
  let y = node.y;
  let neighbors = [];

  let nodes = grid;
  // ↑
  if (isWalkable(x, y - 1)) {
      neighbors.push(grid[y - 1][x]);
  }
  // →
  if (isWalkable(x + 1, y)) {
      neighbors.push(grid[y][x + 1]);
  }
  // ↓
  if (isWalkable(x, y + 1)) {
      neighbors.push(grid[y + 1][x]);
  }
  // ←
  if (isWalkable(x - 1, y)) {
      neighbors.push(grid[y][x - 1]);
  }
  if (isWalkable(x, y - 1)) {
      neighbors.push(grid[y - 1][x]);
  }
  // →
  if (isWalkable(x + 1, y)) {
      neighbors.push(grid[y][x + 1]);
  }
  // ↓
  if (isWalkable(x, y + 1)) {
      neighbors.push(grid[y + 1][x]);
  }

  if (isWalkable(x - 1, y - 1)) {
      neighbors.push(grid[y - 1][x - 1]);
  }
  if (isWalkable(x + 1, y + 1)) {
      neighbors.push(grid[y + 1][x + 1]);
  }

  if (isWalkable(x + 1, y - 1)) {
      neighbors.push(grid[y - 1][x + 1]);
  }
  if (isWalkable(x - 1, y + 1)) {
      neighbors.push(grid[y + 1][x - 1]);
  }
  return neighbors;
};
const build = matrix => {
  /*
  Height of Grid
  */

  let model = new Array(height);

  for( let i = 0; i < matrix.length; i++ ) {
    model[i] = new Array(width);
    for(let j = 0; j < matrix[i].length; j++) {
      for (let node of matrix[i][j]) {
        switch( node ) {
          case 0:
            model[i][j] = { x: i, y: j, walkable: true };
          break;

          case 1:
            model[i][j] = { x: i, y: j, walkable: false };
          break;
          case undefined:
            return model;
          break;
        }
      }
    }
  }

  return model;
};

const matrix = maze(80, 80);

const width = matrix[0].length;
const height = matrix.length;
