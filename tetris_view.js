var view = {

  showTile: function(number,grid,tilePosition) {
    $("#number-" + String(tilePosition)).
      append('<span><h2 class="text-center text-shadow-effect">' + String(number) + "</h2></span>");
  },


  init: function() {
 
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 10; col++) {
          var classes = '<div class="block block-' + row.toString() + '-' + col.toString() + '">' + '</div>';
          $('.grid-container').append(classes);
      }
    }  

    // setInterval( function() {
    //     controller.handleInterval();
    //     //view.render();
    //   }, INTERVAL);
  },

  showGameLoop: function() {
    var INTERVAL = 600; // ~30 fps
    setInterval( function() {
      controller.handleInterval();
    }, INTERVAL);
  },

  showNewBlock: function() {
    $('.grid-container').append("<div class='block'></div>");
  },


  render: function() {
    for (var row = 0; row < 20; row++) {
      for (var col = 0; col < 10; col++) {
          var classes = '<div class="block block-' + row.toString() + '-' + col.toString() + '">' + '</div>';
          $('.grid-container').append(classes);
      }
    }  

  },

  displayBlock: function(x,y,size) {

    for (var i = y ; i <  y + size; i++) {
      target = ".block-" + x + "-" + i; 
      $(target).removeClass("occupied-block");
      $(target).addClass("occupied-block");
    }  
  },

  undisplayBlock: function(x,y,size) {
    x -= 1;
    for (var i = y ; i <  y + size; i++) {
      target = ".block-" + x + "-" + i; 
      $(target).removeClass("occupied-block");
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