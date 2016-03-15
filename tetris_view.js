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


  render: function() {
    for (var j = 0; j < 20; j++) {
      for (var i = 0; i < 10; i++) {
          $('.grid-container').append('<div class="block"> <div>');
      }
      $('.grid-container').append('<br>');
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