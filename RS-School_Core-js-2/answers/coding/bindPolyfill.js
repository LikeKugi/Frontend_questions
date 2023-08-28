function func(...args) {
  console.log(`${this}`, args.join(' '));
}

Function.prototype.myBind = function (obj, ...args) {
  const fn = this;
  return (...newArgs) => fn.apply(obj, [...args, ...newArgs]);
};

const newFn = func.myBind('here', 'a', 'b', 1);
newFn(12);

const bindedFn = func.bind('hello world', 1, 2, 3);
bindedFn();
