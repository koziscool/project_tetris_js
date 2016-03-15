var model = {
 
  block: undefined,
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
  },

  handleInterval: function(){
    this.dropTiles();
    this.createNewRandomTile();
  },

  dropTiles: function() {

  },

  createNewRandomTile: function() {

  },

  addScore: function() {
   this.score++;
  },



}