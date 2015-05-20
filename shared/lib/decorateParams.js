/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 10:51:42
*/
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
