var controller = {

  gameLoop: function(dir,grid) {

    if (["right","up","left","down"].indexOf(dir) >= 0) {
      model.checkAdjacentEmpty(dir);

      var number = model.nextNumber;
      var tilePosition = model.placeTileAt(number);
      var score = model.getScore();
      view.showTile(number,model.getGrid(),tilePosition);
      view.render(model.getGrid(),score);
    };

  },

  dropTile: function() {
      //view.showNewBlock();
      //model.dropTile();
  },


  init: function() {
    view.showNewBlock();
    model.init();

    // var number = model.nextNumber;
    // var tilePosition = model.placeTileAt(number);

    // view.init(number,model.getGrid(),tilePosition);

    // view.getKeyPress();

  }  
}