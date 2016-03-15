var model = {
 
  block: undefined,
  score: 0,
  tetrisGrid: [],
  emptySlots: [],

  generateTile: function() {
    
    var tile = {
      occupied: false 
    }

    return tile;
  },

  getScore: function() {
    return this.score;
  },

  init: function()  {
    for (var i = 0;  i < 200; i++) {
      this.tetrisGrid[i] = this.generateTile();
    }
  },

   dropTile: function() {

   },


  addScore: function() {
   this.score++;
  },









  getGrid: function() {
    return this.numberGrid;
  },

  getEmptyTiles: function() {
    grid = this.getGrid();
    this.emptySlots = [];
    for (var i = 0; i < 16; i++) {
      if (grid[i].value === 0) {
        this.emptySlots.push(i);
      };
    };
    return this.emptySlots;
  },

  getTile: function(index) {

    return this.getGrid[index];
  },

  getTileValue: function(tile) {
      return tile.value;
  },

  placeTileAt: function(number) {
    
    while(true) {
      var emptySlots = this.getEmptyTiles();
      var index = emptySlots[Math.floor(Math.random() * emptySlots.length)];

      tile = this.getGrid()[index];
      if (tile.value == 0) { 
         tile.value = number;
         return index;
      };
    }
  },

  isGridFull: function() {
    grid = this.getGrid()
    for (var i = 0; i < 16; i++) {
      if (grid[i].value === 0) {
         return true;
      }; 
    };
    return false;
  },

  slideLeft: function() {

    for (var i = 0; i < 4; i++) {
      
      var start = (i * 4) + 1;
      var end = (i * 4) + 4;
      
      for (var j =  start; j < end; j++) {

        var adj = this.getGrid()[j - 1];
        var curr = this.getGrid()[j];

        if (adj.value != 0) {

          if (adj.value == curr.value) {
            adj.value = curr.value * 2;
            this.addScore();
            curr.value = 0;

          };

        } else {
          adj.value = curr.value;
          curr.value = 0;
        };

      };
    };

  },

  slideRight: function() {

    for (var i = 1; i < 5; i++) {
      
      start = (i * 4) - 2;

      for (var j = start; j >= (i * 4) - 4; j--) {

        var adj = this.getGrid()[j + 1];
        var curr = this.getGrid()[j];

        if (adj.value) {
          if (adj.value == curr.value) {
            adj.value = curr.value * 2;
            this.addScore();
            curr.value = 0;
          }
        } else {
          adj.value = curr.value;
          curr.value = 0;
        };
      };  
    };

  },

  slideUp: function() {

    for (var i = 4; i < 16; i++) {
      
      var adj = this.getGrid()[i - 4];
      var curr = this.getGrid()[i];

      if (adj.value) {
        if (adj.value == curr.value) {
          adj.value = curr.value * 2;
          curr.value = 0;
          this.addScore();
        }
      } else {
        adj.value = curr.value;
        curr.value = 0;
      };
    };

  },

  slideDown: function() {

    for (var i = 11; i >= 0; i--) {
      
      var adj = this.getGrid()[i + 4];
      var curr = this.getGrid()[i];

      if (adj.value) {
        if (adj.value == curr.value) {
          adj.value = curr.value * 2;
          this.addScore();
        }
      } else {
        adj.value = curr.value;
        curr.value = 0;
      };
    };

  },

  checkAdjacentEmpty: function(dir) {

    switch (dir) {
      case "left" : 
        this.slideLeft();
        break;
      case "right" :
        this.slideRight();
        break;
      case "up" :
        this.slideUp();
        break;
      case "down" :
        this.slideDown();
        break;     
    }
  },

}