function objectCreatePolyfill(obj, props) {
  function F() {}
  F.prototype = obj;

  const returning = new F();

  if (props) {
    for (const prop in props) {
      returning[prop] = props[prop];
    }
  }

  return returning;
}

const newObj = objectCreatePolyfill(
  { a: 2, b: 3 },
  {
    sayHi() {
      console.log('hey there', this.a);
    },
  },
);

// console.log(newObj);
// newObj.sayHi();

Object.myCreate = function (prototype, properties) {
  //Your code goes here
  //And remember: you need not to reinvent Object.defineProperties on your own!
  let out = {};
  if (prototype === null) {
    out.__proto__ = null;
    return out;
  }
  if (prototype !== Object(prototype)) {
    throw new TypeError('Wrong prorotype');
  }
  out = Object.setPrototypeOf({}, prototype);
  if (properties !== undefined) {
    Object.defineProperties(out, properties);
  }
  return out;
};

const newObj2 = Object.myCreate(
  { a: 2, b: 3 },
  {
    sayHi: {
      value: function () {
        console.log('hey there', this.a);
      },
    },
  },
);

newObj2.sayHi();
