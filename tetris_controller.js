var controller = {

  handleInterval: function() {
    model.handleInterval();
    view.render();

  },


  init: function() {
    model.init();
    view.init();
    view.displayBlock(model.blockX,model.blockY,model.blockSize); 
    view.showGameLoop();

  }  
}