var controller = {

  handleInterval: function() {
    model.handleInterval();
    view.render();

  },

  giveKeyPress: function(dir) {
    model.updateTilePos(dir);
  },

  init: function() {
    model.init();
    view.init();
    view.displayBlock(model.blockX,model.blockY,model.blockSize); 
    view.showGameLoop();
    view.getKeyPress();
  }  
}