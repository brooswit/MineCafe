/*==============================================================================
====   Changes  ====
v0.1
  Initialization

==============================================================================*/
var NullVoxel;

define([
  'shared/lib/decorateParams',
  'shared/lib/three',
  'shared/lib/eventify'
], function ( DP, THREE, Eventify ) {
    NullVoxel = NullVoxel || {};
    Eventify.enable(NullVoxel);
  var Voxel = function( params ){ params=DP( params );
    Eventify.enable(this);

    this.voxelType = params.voxelType;

    this.world = params.world;
    this.chunk = params.chunk;

    this.on('set', function(){
      this.world.trigger('set', this);
      this.chunk.trigger('set', this);
    });
    
    this.on('remove', function(){
      this.world.trigger('remove', this);
      this.chunk.trigger('remove', this);
    });
  }

  Voxel.Null = NullVoxel;
  return Voxel;
});