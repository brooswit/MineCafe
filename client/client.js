/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 21:05:37
*/

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

  'shared/world',
  'shared/voxelTypes',
  'shared/voxelType',

  'client/graphics',
  'client/worldDrawer',
  'shared/lib/lumber',
  'shared/lib/three',
  'client/lib/input'
], function( DP, Eventify, World, VoxelTypes, VoxelType, Graphics, WorldDrawer ){
  //TODO: Refactor this so that it doesn't leave behind a clientApp object
  //  make every library in a singleton and make it apply itself to the
  //  global scope instead of return an instance of itself.
  Lumber.log('Initializing MineCafe');
  Lumber.prefix.push('  ');
  Lumber.log('Eventifing');
  //TODO Refactor this out.
  Eventify.enable(clientApp);

  //TODO: Refactor into a singleton in the global scope
  clientApp.graphics = clientApp.graphics=new Graphics();

  //TODO: Refactor into a singleton in the global scope?
  clientApp.voxelTypes = new VoxelTypes();

  //TODO: Refactor into a Worlds object in the global scope that contains all worlds
  clientApp.world = new World({
    voxelTypes : clientApp.voxelTypes,
    force      : DEBUG
  });

  //TODO: Refactor to work with new Worlds object. Make this into a decorator for world.
  //worldClientDecorator
  clientApp.worldDrawer = new WorldDrawer({
    graphics : clientApp.graphics,
    world    : clientApp.world
  });
  Lumber.prefix.pop( );
  //TESTS
  if(DEBUG){
    clientApp.voxelTypes.register(new VoxelType({id:-1,name:'test'}));
    clientApp.world.setVoxelAt({x:0,y:0,z:0,voxelType:-1});
  }
});
