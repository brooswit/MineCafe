/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 10:51:48
*/
define([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three'
],
function ( DP, Eventify, ___ ) {
  var VoxelType = function( params ){ params=DP( params );
    Eventify.enable(this);
    this.id=params.id || -1;
    this.name=params.name || 'UNNAMED';
  }

  return VoxelType;
});
