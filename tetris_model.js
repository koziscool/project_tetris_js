var model = {
 
  // block: undefined,
  // blockX: 0,
  // blockY: 0,
  blockSize: 1,  
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
    var blockY = Math.floor(Math.random()*maxCol);
    var blockX = 0;

    this.setTile( blockX, blockY, true );

    console.log("Generate the block position: " + blockX + " , " + blockY);
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
    var row, col;
    blocks = [];
    for (var row = 0;  row < this.numRows; row++) {
      for (var col = 0;  col < this.numCols; col++) {
        if( this.tetrisGrid[ this.gridKey(row, col) ] ) {
          blocks.push( this.gridKey(row, col) );
        }
      }
    }

    for( var i = 0; i < blocks.length; i++ ) {
      row = (+blocks[i].split(',')[0]);
      col = (+blocks[i].split(',')[1]);
      var newRow = row + 1;

      if( newRow < this.numRows && !this.getTile[ this.gridKey(row + 1, col)]) {
        this.setTile( newRow, col, true );  
        this.setTile( row, col, false );  
          // this.blockX = newX;
            // return true;   
        // for (var col = this.blockY; col < this.blockY + this.blockSize ; col++) {
      }
    }

    //    this.tetrisGrid[ this.gridKey(newX, col) ] = true;
    // }   
    // return false;
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