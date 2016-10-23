const grid = build(matrix);
const getMousePos = (target, evt) => {
  let rect = target.getBoundingClientRect();
  return {
    x: Math.floor((evt.clientX - rect.left) / 32),
    y: Math.floor((evt.clientY - rect.top) / 32)
  };
};
const main = get('#main').item(false);

let path = init(1, 1, 21, 15);
let stack = [];

grid.forEach((node, key) => {
  node.map((item, index) => {
    switch (item.walkable) {
      case true:
      let el = createElement({
        tag: 'div',
        text: "-"
      });
      setStyle(el, {
        position: "absolute",
        top: `${item.y * 22}px`,
        left: `${item.x * 22}px`,
        padding: "2px"
      });
      append(main, el);
      break;
      case false:
      let elem = createElement({
        tag: 'div',
        text: "+"
      });
      setStyle(elem, {
        position: "absolute",
        top: `${item.y * 22}px`,
        left: `${item.x * 22}px`,
        padding: "2px"
      });
      append(main, elem);
      break;
    }
  })
});

const anim = (path) => {
  let length = path.length;
  let count = 0;

  const ID = setInterval(() => {
    count < length ? count++ : count = length - 1
    if ( !path[count] ) {
      clearInterval(ID);

      return false;
    }

    setStyle(path[count], { color: "red" });
  }, 86);
};

const results = () => {
  let arr = [];

  R.forEach((value) => {
    let x = getStyle(value, "left");
    let y = getStyle(value, "top");

    path.forEach((item) => {
      if ((item.x * 22) === parseInt(x) && (item.y * 22) === parseInt(y)) {
        arr.push(value);
      }
    });
  }, children(main));

  return arr;
};

anim(results());
