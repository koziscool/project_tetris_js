var controller = {


  handleInterval: function() {
      model.handleInterval();
  },


  init: function() {
    view.render();
    model.init();

    // var number = model.nextNumber;
    // var tilePosition = model.placeTileAt(number);

    // view.init(number,model.getGrid(),tilePosition);

    // view.getKeyPress();

  }  
}