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

  return neighbors;
};
const build = matrix => {
  /*
  Height of Grid
  */
  var model = new Array(height);

  for( var i = 0; i < matrix.length; i++ ) {

    model[i] = new Array(width);
    for(var j = 0; j < matrix[i].length; j++) {
      switch( matrix[i][j] ) {
        case '0':
          model[i][j] = { x: j, y: i, width: 32, height: 32, walkable: true };
        break;

        case '1':
          model[i][j] = { x: j, y: i, width: 32, height: 32, walkable: false };
        break;

        case undefined:
          return model;
        break;
      }
    }
  }

  return model;
};

const matrix =
  R.init([
    ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
    ['1','0','0','1','0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
    ['1','0','1','1','0','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','0','1'],
    ['1','0','0','0','0','0','1','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','1'],
    ['1','0','0','1','0','1','1','0','1','1','1','1','1','0','1','1','1','1','1','0','1','0','1'],
    ['1','0','0','1','0','0','0','0','0','0','0','0','1','0','1','0','0','0','1','1','1','0','1'],
    ['1','0','0','1','1','1','1','1','1','0','0','0','1','0','1','0','0','0','0','0','0','0','1'],
    ['1','0','0','1','0','1','0','0','1','0','0','0','0','0','1','1','1','1','0','0','0','0','1'],
    ['1','0','1','0','0','1','0','0','1','1','1','1','0','0','1','0','0','1','0','0','0','0','1'],
    ['1','0','1','0','0','0','0','0','1','0','0','1','0','0','1','0','0','1','0','1','1','1','1'],
    ['1','0','1','0','0','0','0','0','1','0','0','0','0','0','1','0','1','1','0','0','0','0','1'],
    ['1','0','1','0','0','0','0','0','0','0','1','0','1','0','1','0','0','0','0','0','0','0','1'],
    ['1','0','1','0','1','1','1','1','1','1','1','0','1','0','1','1','1','1','1','1','0','1','1'],
    ['1','0','1','0','1','0','0','0','0','0','0','0','1','0','1','0','0','0','0','0','0','0','1'],
    ['1','0','1','0','1','1','0','1','1','1','1','1','0','0','1','1','1','0','0','1','1','1','1'],
    ['1','0','1','0','0','1','0','0','0','0','0','0','1','0','1','0','0','0','0','0','0','0','1'],
    ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
    ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
  ]);
const width = matrix[0].length;
const height = matrix.length;