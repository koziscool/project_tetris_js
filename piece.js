
function Piece() {
  this.height = 1;
  this.width = 4;
  this.bufferLeft = 1;
  this.bufferRight = 2;
  this.blocks = [ [0, -1], [0,0], [0,1], [0,2]];
  this.center = [0, 0];
};