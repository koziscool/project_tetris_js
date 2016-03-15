var controller = {

  handleInterval: function() {
    model.handleInterval();
    view.render();

  },

  getMovingTilePos: function() {
     return model.getMovingTile();
  },

  init: function() {
    model.init();
    view.init();
    view.displayBlock(model.blockX,model.blockY,model.blockSize); 
    view.showGameLoop();
    view.getKeyPress();
  }  
}