const grid = build(matrix);

const getMousePos = (target, evt) => {
  let rect = target.getBoundingClientRect();
  return {
    x: Math.floor((evt.clientX - rect.left) / 32),
    y: Math.floor((evt.clientY - rect.top) / 32)
  };
};
const main = get('#main').item(false);
const getPath = () => {
  let arr = [];

  R.forEach((node) => {
    node.map((value, key) => {
      if ( value.walkable ) {
        arr[key] = value;
        return false;
      }
    });

    return false;
  }, grid);

  return { start: arr[0], end: arr[arr.length / 2] };
}

let pos = getPath();
let path = init(pos.start.x, pos.start.y, pos.end.x, pos.end.y);

grid.forEach((node, key) => {
  node.map((item, index) => {
    switch (item.walkable) {
      case true:
      let el = createElement({
        tag: 'div'
      });
      setStyle(el, {
        position: "absolute",
        width: "12px",
        height: "12px",
        top: `${item.y * 12}px`,
        left: `${item.x * 12}px`
      });
      append(main, el);
      break;
      case false:
      let elem = createElement({
        tag: 'div'
      });
      setStyle(elem, {
        position: "absolute",
        width: "12px",
        height: "12px",
        top: `${item.y * 12}px`,
        left: `${item.x * 12}px`,
        background: "#2F2B2B"
      });
      append(main, elem);
      break;
    }
  })
});
function gradient() {
  var c1 = {
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255)
  };
  var c2 = {
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255)
  };
  c1.rgb = 'rgb('+c1.r+','+c1.g+','+c1.b+')';
  c2.rgb = 'rgb('+c2.r+','+c2.g+','+c2.b+')';
  return 'radial-gradient(at top left, '+c1.rgb+', '+c2.rgb+')';
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * Math.PI * 16)];
    }
    return color;
}

const anim = (path) => {
  let length = path.length;
  let count = 0;
  let s = count;
  const ID = setInterval(() => {
    count < length ? count++ : null
    if ( count >= length && !path[count] ) {
      clearInterval(ID);
      return false;
    }

    setStyle(path[count], { background: "red" });
  }, 1);
};

const results = () => {
  let arr = [];

  R.forEach((value) => {
    let x = getStyle(value, "left");
    let y = getStyle(value, "top");

    path.forEach((item, key) => {
      if ((item.x * 12) === parseInt(x) && (item.y * 12) === parseInt(y)) {
        arr[key] = value;
      }
    });
  }, children(main));

  return arr;
};

anim(results());
