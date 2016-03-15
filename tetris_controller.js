var controller = {

 // Get random position of the falling block
 //Block will have x,y
 //Block will have size
 //

  handleInterval: function() {
    model.handleInterval();
    view.render();

    // if (model.moveBlock()) {
    //   view.undisplayBlock(model.blockX,model.blockY,model.blockSize); 
    //   view.displayBlock(model.blockX,model.blockY,model.blockSize); 
    // } else {
    //   model.generateBlockPosition();
    // }
  },


  init: function() {
    model.init();
    view.init();
    view.displayBlock(model.blockX,model.blockY,model.blockSize); 
    view.showGameLoop();
    // var number = model.nextNumber;
    // var tilePosition = model.placeTileAt(number);

    // view.init(number,model.getGrid(),tilePosition);

    // view.getKeyPress();

  }  
}