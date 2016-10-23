const backtrace = node => {
  var path = [node];

  while(node.parent) {
    node = node.parent;
    path.push(node);
  }

  return path.reverse();
};
const wave = (start, end) => {
  var start = start;
  var end = end;
  var path = new Array();
  var node;
  var neighbors;
  var neighbor;

  start.g = 0;
  start.f = 0;

  path.push(start);
  start.open = true;

  while(path.length !== 0) {
    node = path.pop();
    node.close = true;

    if (node === end) {
      return backtrace(end);
    }

    neighbors = getNeighbors(node);

    for(var i = 0; i < neighbors.length; i++) {
      neighbor = neighbors[i];

      if(neighbor.close) {
        continue;
      }

      var nodeg = node.g + ((neighbor.x - node.x === 0 || neighbor.y - node.y === 0) ? 1 : Math.SQRT2);

      if(!neighbor.open || nodeg < neighbor.g) {
        neighbor.g = nodeg;
        neighbor.h = neighbor.h || Math.abs(neighbor.x - end.x) + Math.abs(neighbor.y - end.y);
        neighbor.f = neighbor.g + neighbor.h;
        neighbor.parent = node;
        path.push(neighbor);
          if(!neighbor.open) {
            neighbor.step += (path.length - 1);
            neighbor.open = true;
          }
      } else {
        break;
      }
    }
  }

  return [];
};

const init = (startx, starty, endx, endy) => {
  var start = use(startx, starty);
  var end = use(endx, endy);
  var path = wave(start, end);

  return path;
};
