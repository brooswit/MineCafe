//The goal of the client app is to do as little as possible.
//Just set up the systems and the connections between them and let them do their thing.

DEBUG=true;

requirejs.config({
    baseUrl: '../',
    paths: {
    }
});

clientApp={};

require([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three',

  'shared/world',
  'shared/voxelTypes',
  'shared/voxelType',

  'client/graphics',
  'client/worldDrawer'
], function( DP, Eventify, ___, World, VoxelTypes, VoxelType, Graphics, WorldDrawer ){
  Eventify.enable(clientApp);

  clientApp.graphics = clientApp.graphics=new Graphics();

  clientApp.voxelTypes = new VoxelTypes();

  clientApp.world = new World({
    voxelTypes : clientApp.voxelTypes,
    force      : DEBUG
  });

  clientApp.worldDrawer = new WorldDrawer({
    graphics : clientApp.graphics,
    world    : clientApp.world
  });

  //TESTS
  if(DEBUG){
    clientApp.voxelTypes.register(new VoxelType({id:-1,name:'test'}));
    clientApp.world.setVoxelAt({x:0,y:0,z:0,voxelType:-1});
  }
});