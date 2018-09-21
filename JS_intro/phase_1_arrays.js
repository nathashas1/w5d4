Array.prototype.uniq = function(){
  const arr = []; 
  for (let i = 0; i < this.length; i++) {
    if (! (arr.includes(this[i]))) {
      arr.push(this[i]); 
    }
  }
  return arr;
}

Array.prototype.twoSum = function() {
  var pos = [];
  for (let i = 0; i < this.length-1; i++) {
    var sec = 0 - this[i];
    for (let j = i+1; j < this.length; j++) {
      if (sec === this[j]) {
        pos.push([i,j]);
      }
    }
  }
  return pos;
}

Array.prototype.transpose = function() {
  let matrix = new Array(this[0].length);
  for (var i =0; i < this[0].length; i++) {
    matrix[i] = new Array(this.length);
  }
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this[i].length; j++) {
      matrix[j][i] = this[i][j];
    }
  }
  console.log(matrix);
  return matrix;
}


