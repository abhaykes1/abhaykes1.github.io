console.log(' i am here')
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var options = {
      fullWidth: true, 
      indicators: true,
  };

    var elem1 = document.querySelectorAll('.sidenav');
    var elem2 = document.querySelector('.carousel');

    var instances1 = M.Sidenav.init(elem1);
    var instances2 = M.Carousel.init(elem, options);
    instances2.pressed = false;
    M.autoinit();
  });
