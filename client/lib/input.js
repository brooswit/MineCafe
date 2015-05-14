var Input;
define(['shared/lib/eventify','client/lib/jquery'], function(Eventify, ___){
  return function ( ) {
    //Declare the library as an eventified object;
    if(Input===undefined){
      console.log('initializing input system');
      Input = Eventify.create( );

      Input.get = function(input){
        if(inputs[input]===undefined) return false;
        return inputs[input];
      };
      
      var inputs = { };  //state of ever input
      var binds  = { };  //input->input binding
      var keys   = { };  //static list of keycodes

      var change = function(id, value){
        inputs[id] += value;
        var input = keys[id];
        if(input !== undefined){
          inputs[input] += value;
          var bind=binds[input];
          if(bind !== undefined){
            inputs[bind] += value;
          }
        }
      };

      //Wrap events
      $.mousemove(function( event ){
        console.log('mousemove', event);
      });
      window.addEventListener('keydown', function( event ) {
        change(event.keyCode, +1);
        Input.trigger('keyDown', event.keyCode);
        console.log('keydown', event);
      });
      window.addEventListener('keyup', function( event ) {
        change(event.keyCode, -1);
        Input.trigger('keyUp', event.keyCode);
        console.log('keyup', event);
      });
      return Input;
    }
  }
});
