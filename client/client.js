requirejs.config({
    baseUrl: '../',
    paths: {
    }
});

clientApp={};

require(['shared/lib/eventify', 'shared/lib/three', 'shared/world', 'client/graphics', 'client/worldDrawer'],
function(Eventify, THREE, World, Graphics, WorldDrawer){
  Eventify.enable(clientApp);

  var voxelTypes = {};
  voxelTypes.register= function(voxelType){
    //if id is negetive then automatically assign an available id.
    while(voxelType.id<0 && this[id]!==undefined){voxelType.id;}

    if(voxelType.id==='register'){
      console.error('ERROR: Invalid VoxelType name: ' + this[voxelType.id].getDebugName());
      return;
    }
    if(this[id]!==undefined){
      console.error(
        'ERROR: VoxelType collision between ' + this[voxelType.id].getDebugName()+ ' and ' +voxelType.getDebugName()
      );
    }
    this[voxelType.id] = voxelType;
  }

  var world = clientApp.world=new World({voxelTypes:voxelTypes});
  var graphics = clientApp.graphics=new Graphics(clientApp.world);
  var worldDrawer = new WorldDrawer({
    graphics : graphics,
    world    : world
  });
});