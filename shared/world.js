/*==============================================================================

====   Changes  ====
v0.1
  Added method:
    setVoxelAt
    getVoxelAt
    GetChunkAt
TODO:
  Refactor this for multiWorld support
==============================================================================*/
define(['shared/lib/decorateParams', 'shared/lib/three', 'shared/lib/eventify', 'shared/chunk'],
function (DP, THREE, Eventify, Chunk) {
  var World=function( params ){ params=DP( params );
    Eventify.enable( this );

    this._tileset = params.tileset || [];
    this._chunkSize = params.chunkSize || 16;
    this._voxelSize = params.voxelSize ||  1;
    this._chunks    = [];
  };

  World.prototype.getChunkAt = function ( params ){ params=DP( params );
    getPos( ).divide( this._chunkSize ).floor( );

    if( w._chunks[params.pos.x]                             === undefined
     || w._chunks[params.pos.x][params.pos.y]               === undefined
     || w._chunks[params.pos.x][params.pos.y][params.pos.z] === undefined) return Chunk.Null;
    return this._chunks[x][y][z]
  };

  World.prototype.getVoxelAt = function( params ){ params=DP( params );
    return this.getChunkAt( params ).getVoxelAt( params );
  };
  World.prototype.setVoxelAt = function( params ){ params=DP( params );
    return this.getChunkAt( params ).setVoxelAt( params );
  };
  World.prototype.createChunk = function( params ){ params=DP( params );
    getPos().sub( this._offset );

    if(this._chunks[params.x]           === undefined) this._chunks[params.x]           = [];
    if(this._chunks[params.x][params.y] === undefined) this._chunks[params.x][params.y] = [];

    params.world=this._world;
    params.chunk=this._chunk;

    this._chunks[params.pos.x][params.pos.y][params.pos.z] = new Chunk( params );
  };
  World.prototype.createChunkAt = function( params ){ params=DP( params );
    return createChunk( DP(params).getPos().divide(this._chunkSize).floor() );
  };
  return World;
});
