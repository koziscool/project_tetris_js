var model = {

  blockSize: 1,  
  score: 0,
  numRows: 20,
  numCols: 10,
  tetrisGrid: {},
  emptySlots: [],

  generateTile: function() {
    
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

  getMovingTile: function() {
    console.log("In here");
    for (var row = 0; row < this.numRows; row++) { 
      for (var col = 0; col < this.numCows; col++) { 
        if (getTile(row,col) === "moving") {
           console.log("In moving");
           return [row,col]
        }
      }
    }       
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
    var blockY = Math.floor(Math.random()*maxCol);
    var blockX = 0;

    this.setTile( blockX, blockY, "moving" );

  },

  checkEmptyGrid: function(x,y) {
    for (var col = y; col < y + this.blockSize ; col++) {
      if (this.tetrisGrid[ this.gridKey(x, col) ] == true) {
        return false;
      }
    }
    return true;
  },

  moveBlocks: function() {

    for( var i = this.numRows - 1; i >= 0; i-- ) { 

      for (var j = 0; j < this.numCols; j++) {

        if( this.getTile( i, j) ) {
          var nextRow = i  + 1;

          if( nextRow < this.numRows && !this.getTile( nextRow, j) ) {
            this.setTile( nextRow, j, this.getTile( i, j) );  
            this.setTile( i, j, false );  
          }
        }
      }
    }

  },

  handleInterval: function(){
    //this.dropTiles();
    this.generateBlockPosition();
    return this.moveBlocks();
  },

  dropTiles: function() {

  },

  createNewRandomTile: function() {

  },

  addScore: function() {
   this.score++;
  },



}