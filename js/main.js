let mathFuncs = {
  add: function(a, b){
    return a + b;
  },
  subtract: function(a, b){
    return a - b;
  },
  multiply: function(a, b){
    return a * b;
  },
  divide: function(a, b){
    return a / b;
  },
  square: function(a) {
    return a * a;
  },
  cube: function(a) {
    return this.square(a) * a;
  },
  remainder: function(a, b){
    return a % b;
  }
}

console.log(mathFuncs.add(2,3));
console.log(mathFuncs.cube(2));
