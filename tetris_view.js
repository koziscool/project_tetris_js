var view = {

  showTile: function(number,grid,tilePosition) {
    $("#number-" + String(tilePosition)).
      append('<span><h2 class="text-center text-shadow-effect">' + String(number) + "</h2></span>");
  },


  init: function() {
    var INTERVAL = 30; // ~30 fps

    setInterval(function() {
        controller.dropTile();
        view.render();
      }, INTERVAL);
  },

  showNewBlock: function() {
    $('.grid-container').append("<div class='block'></div>");
  },


  render: function(grid,score) {

    for (var i = 0; i < 16; i++) {

      var number = grid[i].value;

      var target = "#number-" + String(i);

      if (number != 0) {

        $(target).empty();
        $(target).append('<span><h2 class="text-center text-shadow-effect">' + String(number) + "</h2></span>");
      } else {
        $(target).empty();
      };

      $("#score").empty();
      $("#score").text(score);
    }
  },

  getKeyPress: function() {

    window.addEventListener('keydown', function(eventObject) {
      
      pressedKey = eventObject.code;
      
      switch (pressedKey) {
        case 'ArrowRight':
          pressedKey = "right";
          break;

        case 'ArrowLeft':
          pressedKey = "left";
          break;

        case 'ArrowUp':
          pressedKey = "up";
          break;

        case 'ArrowDown':
          pressedKey = "down";
          break;

        default:
          break;
      };

      controller.gameLoop(pressedKey);
    });
  
  },        

}