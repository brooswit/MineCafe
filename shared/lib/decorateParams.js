// Universal params decorator.

define(['shared/lib/three'], function(___){
  return function ( params ) {
    var newParams = {};
    if(params!==undefined){
      for (var key in params) {
          //copy all the fields
          newParams[key] = params[key];
      }
      if(params.x!==undefined && params.y!==undefined && params.z!==undefined){
        newParams.pos = new THREE.Vector3(params.x,params.y,params.z);
        delete params.x; delete params.y; delete params.z;
      } else if(params.pos!==undefined){
        newParams.pos = new THREE.Vector3(params.pos.x,params.pos.y,params.pos.z);
      }
    }
    return newParams;
  }
});