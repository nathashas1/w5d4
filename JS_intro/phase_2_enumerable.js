Array.prototype.myEach = function(callback) {
  for (let i=0; i< this.length; i++) {
    callback(this[i]);
  }
};
// [1,2,3].myEach(function(){ alert('hi')});

Array.prototype.myMap = function(callback) {
  let arr = [];
  
  const func = function(el) {
    arr.push(callback(el));
  };
  
  this.myEach(func);
  return arr;
};

// Array.prototype.myMapBad = function(callback) {
//   const arr = [];
//   for(i=0; i < this.length; i++) {
//     arr.push(callback(this[i]));
//   }
//   return arr;
// };

Array.prototype.myReduce = function(callback, initialValue) {
  let acc = initialValue || this[0];
  for(i=0; i < this.length; i++) {
    acc = callback(acc, this[i]);
  };
  return acc;
};

Array.prototype.myReduce3 = function(callback, initialValue) {
  let acc = initialValue || this[0];
  const func = function(el) {
    acc = callback(acc, el);
  };
  let arr = this.slice(1);
  arr.myEach(func);
  return acc;
};

Array.prototype.myReduceBetter = function(callback, initialValue = 0) {
  if (initialValue != 0) {
    let acc = initialValue;
    this.myEach(el => acc = callback(acc,el));
    return acc;
  } else {
    let acc = this[0];
    let arr = this.slice(1);
    arr.myEach(el => acc = callback(acc,el));
    return acc;
  }
};
