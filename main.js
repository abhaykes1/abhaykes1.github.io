console.log(' i am here')
document.addEventListener('DOMContentLoaded', function() {
    M.AutoInit();
    var options = {
      fullWidth: true, 
      indicators: true,
  };
  var options2 = {
    toolbarEnabled: true
  }

    var elem1 = document.querySelectorAll('.sidenav');
    var elem2 = document.querySelector('.carousel');
    var elem3 = document.querySelectorAll('.fixed-action-btn');
    var instances = M.FloatingActionButton.init(elem3, options2);

    var instances1 = M.Sidenav.init(elem1);
    var instances2 = M.Carousel.init(elem, options);
    instances2.pressed = false;
    M.AutoInit();
});
