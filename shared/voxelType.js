/*==============================================================================
==== Properties ====

====   Methods  ====

====   Events   ====

====   Changes  ====

==============================================================================*/

define(['shared/lib/decorateParams', 'shared/lib/eventify'],
function ( DP, Eventify ) {
  var VoxelType = function( params ){ params=DP( params );
    Eventify(this);
    
    this.id=params.id || -1;
    this.name=params.name || 'UNNAMED'
  }

  Voxel.Null = Null;

  return VoxelType;
});