
function Piece() {
  this.height = 1;
  this.width = 4;
  this.bufferLeft = 0;
  this.bufferRight = 0;
  // this.blocks = [  [0,0], [0,1] ];
  // this.blocks = [ [0, -1], [0,0], [0,1], [0,2]];
  this.blocks = [ [0, 0], [-1,0], [-2,0], [-3,0]];
  this.center = [0, 0];
};