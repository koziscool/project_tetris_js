
var model = {

  blockSize: 1,  
  score: 0,
  numRows: 20,
  numCols: 10,
  tetrisGrid: {},
  emptySlots: [],

  currentPiece: {},

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
    this.currentPiece = new Piece();
    var minCol = this.currentPiece.bufferLeft;
    var maxCol = this.numCols - 1 - this.currentPiece.bufferRight;
    var blockY = Math.floor(Math.random()*(maxCol-minCol)) + minCol;
    this.currentPiece.center = [0, blockY];
    // var blockX = 0;

    for ( i = 0; i < this.currentPiece.blocks.length; i++ ) {
      var row = this.currentPiece.blocks[i][0] + this.currentPiece.center[0];
      var col = this.currentPiece.blocks[i][1] + this.currentPiece.center[1];
      this.setTile( row, col, "moving" );
    }
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
    var canMove = true;
    for (var i = 0; i < this.currentPiece.blocks.length; i++ ) {
      var row = this.currentPiece.blocks[i][0] + this.currentPiece.center[0];
      var col = this.currentPiece.blocks[i][1] + this.currentPiece.center[1];
      var nextRow = row + 1;
      canMove = canMove && nextRow < this.numRows && !this.getTile( nextRow, col);
    }

    if(canMove) {
      for( var i = 0; i < this.currentPiece.blocks.length; i++ ) {
        var row = this.currentPiece.blocks[i][0] + this.currentPiece.center[0];
        var col = this.currentPiece.blocks[i][1] + this.currentPiece.center[1];
        this.setTile( row, col, false);
      } 
      this.currentPiece.center[0] += 1; 
      for( var i = 0; i < this.currentPiece.blocks.length; i++ ) {
        var row = this.currentPiece.blocks[i][0] + this.currentPiece.center[0];
        var col = this.currentPiece.blocks[i][1] + this.currentPiece.center[1];
        this.setTile( row, col, 'moving');
      } 
    } else {
      for( var i = 0; i < this.currentPiece.blocks.length; i++ ) {
        var row = this.currentPiece.blocks[i][0] + this.currentPiece.center[0];
        var col = this.currentPiece.blocks[i][1] + this.currentPiece.center[1];
        this.setTile( row, col, 'stationary');
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

    for( var i = 0; i < this.currentPiece.blocks.length; i++ ) {
      var row = this.currentPiece.blocks[i][0] + this.currentPiece.center[0];
      var col = this.currentPiece.blocks[i][1] + this.currentPiece.center[1];
      this.setTile( row, col, false);
    } 

    var canMove = true;
    for (var dropLength = 0; dropLength < this.numRows; dropLength++ ) {
      for (var i = 0; i < this.currentPiece.blocks.length; i++ ) {
        var row = this.currentPiece.blocks[i][0] + this.currentPiece.center[0] + dropLength;
        var col = this.currentPiece.blocks[i][1] + this.currentPiece.center[1];
        canMove = canMove && row < this.numRows && !this.getTile( row, col);
      }
      if( !canMove ) {
        dropLength--;
        this.currentPiece.center[0] += dropLength; 
        for (var i = 0; i < this.currentPiece.blocks.length; i++ ) {
          var row = this.currentPiece.blocks[i][0] + this.currentPiece.center[0];
          var col = this.currentPiece.blocks[i][1] + this.currentPiece.center[1];
          this.setTile( row, col, 'stationary');
        }
        break;
      }
    }
  },

  addScore: function() {
   this.score++;
  },

}