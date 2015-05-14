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
