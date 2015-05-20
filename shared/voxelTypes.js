/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 10:51:46
*/
define([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three',
  
  'client/voxelDrawer'
], function (DP, Eventify, ___, VoxelDrawer) {
  var VoxelTypes=function( params ){
    Eventify.enable(this);
  };

  VoxelTypes.prototype.register= function(voxelType){
    this.trigger('register');
    //if id is negetive then automatically assign an available id.
    while(voxelType.id<0 && this[voxelType.id]!==undefined){voxelType.id--;}

    if(voxelType.id==='register'){
      console.error('ERROR: Invalid VoxelType name: ' + this[voxelType.id].getDebugName());
      return;
    }

    if(this[voxelType.id]!==undefined){
      console.error(
        'ERROR: VoxelType collision between ' + this[voxelType.id].getDebugName()+ ' and ' +voxelType.getDebugName()
      );
    }
    else {
      this[voxelType.id] = voxelType;
    }
  }

  return VoxelTypes;
});
