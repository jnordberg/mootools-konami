// mootools-konami.js

(function(){

var step = 0, code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

Element.Events.konami = {
  base: 'keydown',
  condition: function(event){
    step = (event.code == code[step]) ? step + 1 : 0; 
    if (step >= code.length) {
      step = 0;
      return true;
    } else {
      return false;
    }
  }
};

})();
