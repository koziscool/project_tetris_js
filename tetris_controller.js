var controller = {

  handleInterval: function() {
    model.handleInterval();
    view.render();

  },

  giveKeyPress: function(dir) {
    // console.log(dir);
    // model.updateTilePos(dir);
    switch (dir) {
    case 'right':
      model.moveRight();
      break;
    case 'left':
      model.moveLeft();
      break;
    case 'right':
      model.moveDown();
      break;
    }
  },


  init: function() {
    model.init();
    view.init();
    view.displayBlock(model.blockX,model.blockY,model.blockSize); 
    view.showGameLoop();
    view.getKeyPress();
  }  
}