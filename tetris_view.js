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
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 10; col++) {
          var classes = '<div class="block block-' + row.toString() + '-' + col.toString() + '">' + '</div>';
          console.log("Classes " + classes);
          $('.grid-container').append(classes);
      }
    }  

    console.log("Got target" + $('.block-8-8'));

    $('.block-8-8').addClass("occupied-block");
    $('.block-8-7').addClass("occupied-block");
    $('.block-8-9').addClass("occupied-block");
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