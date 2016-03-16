
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
    for (var row = 0; row < this.numRows; row++) { 
      for (var col = 0; col < this.numCols; col++) { 
        if (this.getTile(row,col) === "moving") {
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

  updateTilePos: function(dir) {
    
    var pos = getMovingTile;

    if (dir === "right") {
        var posY = pos[1] + 1;
    } else {
        var posY = pos[1] - 1;
    }  
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
          } else {
            this.setTile( i, j, 'stationary' );
          }
        }
      }
    }
  },

  handleBottomRowFull: function() {
    var row = this.numRows - 1
    var rowFull = true; 
    for (var j = 0; j < this.numCols; j++) {
      rowFull = rowFull && this.getTile( row, j)
    }
    if( rowFull ){
      for (var j = 0; j < this.numCols; j++) {
        this.setTile( row, j, false );  
      }

      for( var i = this.numRows - 2; i >= 0; i-- ) { 
        for (var j = 0; j < this.numCols; j++) {
          var currentStatus = this.getTile( i, j);
          if( currentStatus ) {
            var nextRow = i  + 1;
            this.setTile( nextRow, j, currentStatus );  
            this.setTile( i, j, false );  
          }
        }
      }
    }
  },

  numMovingBlocks: function() {
    var numBlocks = 0;
    for( var i = this.numRows - 1; i >= 0; i-- ) { 
      for (var j = 0; j < this.numCols; j++) {
        if( this.getTile( i, j) === 'moving' ) {
          numBlocks += 1;
        }
      }
    }
    return numBlocks;
  },

  handleInterval: function(){
    if (this.numMovingBlocks() === 0 ){
      this.generateBlockPosition();
    }
    this.moveBlocks();
    this.handleBottomRowFull();
  },

  moveRight: function() {
    for( var i = this.numRows - 1; i >= 0; i-- ) { 
      for (var j = this.numCols - 1; j >= 0; j-- ) {
        if( this.getTile( i, j) === 'moving' && j < this.numCols - 1) {
          this.setTile( i, j+1, 'moving' );  
          this.setTile( i, j, false ); 
        }
      }
    }
  },

  moveLeft: function() {
    for( var i = this.numRows - 1; i >= 0; i-- ) { 
      for (var j = 0; j < this.numCols; j++) {
        if( this.getTile( i, j) === 'moving' && j > 0 ) {
          this.setTile( i, j-1, 'moving' );  
          this.setTile( i, j, false ); 
        }
      }
    }
  },

  dropTile: function() {
    for( var i = this.numRows - 1; i >= 0; i-- ) { 
      for (var j = 0; j < this.numCols; j++) {
        if( this.getTile( i, j) === 'moving' ) {

          for( var k = this.numRows - 1; k >= 0; k-- ) { 

            if( !this.getTile(k, j) ) {
              this.setTile( k, j, 'moving' );  
              this.setTile( i, j, false ); 
              break;
            }

          }
        }
      }
    }
  },

  createNewRandomTile: function() {

  },

  addScore: function() {
   this.score++;
  },



}