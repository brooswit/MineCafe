define(['shared/lib/decorateParams', 'shared/lib/eventify', 'client/voxelDrawer'],
function (DP, Eventify, VoxelDrawer) {
  var WorldDrawer=function( params ){DP( params )
    this.world=params.world;
    this.graphics=params.graphics;

    var that=this;
    this.world.on('add', function( params ){DP( params )
      var voxel=params.voxel;
      voxel.drawer=new VoxelDrawer(params);
    });

    this.world.on('remove', function( params ){DP( params )
      //TODO: remove drawer somehow
    });
  }
  return WorldDrawer;
});