var model = {
 
  block: undefined,
  blockX: 0,
  blockY: 0,
  blockSize: 3,  
  score: 0,
  numRows: 20,
  numCols: 10,
  tetrisGrid: {},
  emptySlots: [],

  generateTile: function() {
    
    // var tile = {
    //   occupied: false 
    // }

    // return tile;
  },

  gridKey: function(row, col) {
    return row.toString() + ',' + col.toString();
  },  

  setTile: function(row, col, value) {
    this.tetrisGrid[ this.gridKey(row, col) ] = value;
  },

  getTile: function(x, y) {
    return this.tetrisGrid[ this.gridKey(x, y) ];
  },

  getScore: function() {
    return this.score;
  },

  init: function()  {
    for (var row = 0;  row < this.numRows; row++) {
      for (var col = 0;  col < this.numCols; col++) {
        this.tetrisGrid[ this.gridKey(row, col) ] = false;
      }
    }

    //generates the position of the 1st falling block
    this.generateBlockPosition();
  },

  generateBlockPosition: function() {
    var maxCol = this.numCols - this.blockSize + 1;
    var y = Math.floor(Math.random()*maxCol);
    this.blockX = 0;
    this.blockY = y;

    console.log("Generate the block position: " + this.blockX + " , " + this.blockY);
  },

  checkEmptyGrid: function(x,y) {
    for (var col = y; col < y + this.blockSize ; col++) {
      if (this.tetrisGrid[ this.gridKey(x, col) ] == true) {
        return false;
      }
    }
    return true;
  },

  moveBlock: function() {
    var newX = this.blockX + 1;
    if (newX < this.numRows && this.checkEmptyGrid(newX,this.blockY)) {  
        this.blockX = newX;
        return true;   
    }
    for (var col = this.blockY; col < this.blockY + this.blockSize ; col++) {
       this.tetrisGrid[ this.gridKey(newX, col) ] = true;
    }   
    return false;
  },

  handleInterval: function(){
    //this.dropTiles();
    //this.createNewRandomTile();
    return moveBlock();
  },

  dropTiles: function() {

  },

  createNewRandomTile: function() {

  },

  addScore: function() {
   this.score++;
  },



}