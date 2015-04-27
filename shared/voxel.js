/*==============================================================================
====   Changes  ====
v0.1
  Initialization

==============================================================================*/
var Null = {};

define(['shared/lib/decorateParams', 'shared/lib/eventify'],
function ( DP, Eventify ) {
  var Voxel = function( params ){ params=DP( params );
    Eventify(this);

    this._voxelType = params.voxelType;

    this._world = params.world;
    this._chunk = params.chunk;
  }

  Voxel.Null = Null;

  return Voxel;
});