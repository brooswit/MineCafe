// Universal params decorator.

define(['shared/lib/three'], function(THREE){
  return function ( params ) {
    params=params||{};
    params.getPos = function( ) {
      this.pos = this.pos === undefined ? THREE.Vector3(this.x,this.y,this.z) : this.pos;
    };

  return params;
  }
});