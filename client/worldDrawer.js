define([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three',
  
  'client/voxelDrawer'
], function (DP, Eventify, ___, VoxelDrawer) {
  var WorldDrawer=function( params ){DP( params )
    this.world=params.world;
    this.graphics=params.graphics;

    var that=this;
    this.world.on('set', function( voxel ){
      voxel.drawer=new VoxelDrawer({
        graphics: that.graphics,
        world: that.world,
        voxel: voxel
      });
    });

    this.world.on('remove', function( voxel ){
      voxel.drawer.remove();
      voxel.drawer=undefined;
    });
  }
  return WorldDrawer;
});
