document.addEventListener('DOMContentLoaded', function() {
    var select = document.getElementById('options');
    select.addEventListener('mousedown', function(event) {
      event.preventDefault();
      
      var originalScrollTop = select.scrollTop;
      
      event.target.selected = !event.target.selected;
      
      setTimeout(function() {
        select.scrollTop = originalScrollTop;
      }, 0);
    });
  });
  