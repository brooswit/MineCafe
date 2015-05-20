/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 10:50:24
*/
var Input;
define(['shared/lib/eventify','client/lib/jquery'], function(Eventify, ___){
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

    //Execute immediently

    //Block right click
    $(document).bind('contextmenu', function( e ) {
      e.stopPropagation();
      e.preventDefault();
      e.stopImmediatePropagation();
      return false;
    });

    //Wait for dom to be ready.
    $(function(){
      //Wrap events
      $(document).on('mousemove', function( event ){
        inputs.mouseX=event.clientX;
        inputs.mouseY=event.clientY;
        Input.trigger('mouseMove', {x:event.clientX,y:event.clientY});
      });
      $(document).on('mousedown', function( event ){
        change('mouse' + event.which, +1);
        Input.trigger('mouseDown', event.which);
      });
      $(document).on('mouseup', function( event ){
        change('mouse' + event.which, -1);
        Input.trigger('mouseUp', event.which);
      });
      //TODO, Redo these with jQuery
      window.addEventListener('keydown', function( event ) {
        change(event.keyCode, +1);
        Input.trigger('keyDown', event.keyCode);
      });
      window.addEventListener('keyup', function( event ) {
        change(event.keyCode, -1);
        Input.trigger('keyUp', event.keyCode);
      });

      //Lock Mouse
      var canvas = $('canvas')[0];
      canvas.requestPointerLock = canvas.requestPointerLock
                               || canvas.mozRequestPointerLock
                               || canvas.webkitRequestPointerLock;

      canvas.requestPointerLock();
    });

    return Input;
  }
});
