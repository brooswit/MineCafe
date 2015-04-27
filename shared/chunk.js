/*==============================================================================

====   Changes  ====
v0.1
  Added method:
    getLocalVoxel
    getVoxel
    setLocalVoxel
    setVoxel

==============================================================================*/

var Null = { };
Null.getLocalVoxel = function(){ return Voxel.Null; };
Null.getVoxel      = function(){ return Voxel.Null; };
Null.setLocalVoxel = function(){ };
Null.setVoxel      = function(){ };

define(['shared/lib/decorateParams', 'shared/lib/three', 'shared/lib/eventify', 'shared/voxel'],
function (DP, THREE, Eventify, Voxel) {
  var Chunk = function( params ){ params=DP( params );
    Eventify.enable(this);

    this._world=params.world;
    this._offset=params.offset;
    this._voxels=[];
  };

  Chunk.prototype.getVoxel = function( params ){ params=DP( params );

    if( this._voxels[params.pos.x]                             === undefined
     || this._voxels[params.pos.x][params.pos.y]               === undefined
     || this._voxels[params.pos.x][params.pos.y][params.pos.z] === undefined) return Voxel.Null;
    return this._voxels[params.pos.x][params.pos.y][params.pos.z];
  };

  Chunk.prototype.getVoxelAt      = function( params ){ params=DP( params );
    return this.getVoxel( params.getPos().sub( this._offset ) );
  };

  Chunk.prototype.setVoxel = function( params ){ params=DP( params );
    if(this._voxels[params.pos.x]               ===undefined) this._voxels[params.pos.x]               = [];
    if(this._voxels[params.pos.x][params.pos.y] ===undefined) this._voxels[params.pos.x][params.pos.y] = [];

    params.world=this._world;
    params.chunk=this._chunk;

    this._voxels[params.pos.x][params.pos.y][params.pos.z] = new Voxel(params);
  };
  Chunk.prototype.setVoxelAt      = function( params ){ params=DP( params );
    this.setVoxel( params.getPos().sub( this._offset ) );
  };

  Chunk.Null = Null;

  return Chunk;
});