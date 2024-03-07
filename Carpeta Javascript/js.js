document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('btnBiografia');
    if (element) {
      element.addEventListener('click', function() {
        window.location.href = 'index2.html';      
      });
    }
});

document.addEventListener('DOMContentLoaded', function() {
    var element = document.getElementById('btnVolver');
    if (element) {
      element.addEventListener('click', function() {
        window.location.href = 'index.html';      
      });
    }
});