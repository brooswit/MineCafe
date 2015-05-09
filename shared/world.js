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
define([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three',

  'shared/voxelTypes', 
  'shared/chunk'
], function (DP, Eventify, ___, VoxelTypes, Chunk) {
  var World=function( params ){ params=DP( params );
    Eventify.enable( this );

    this.voxelTypes   = params.voxelTypes    || new VoxelTypes();
    this.chunkSize    = params.chunkSize     || 16;
//  this.voxelSize    = params.voxelSize     ||  1;
    this.force        = params.force;//todo: better name.

    this.chunks       = [];
  };

  //internal hepers
  World.prototype.worldToChunk = function( pos ){
    return pos.divideScalar(this.chunkSize).floor();
  }

  //methods
  World.prototype.chunkExists = function( params ){ params=DP( params );
    return !( this.chunks[params.pos.x]                             === undefined
          || this.chunks[params.pos.x][params.pos.y]               === undefined
          || this.chunks[params.pos.x][params.pos.y][params.pos.z] === undefined);
  }

  World.prototype.chunkExistsAt = function( params ){ params=DP( params );
    return this.chunkExists({
      pos : this.worldToChunk(params.pos)
    });
  }
  World.prototype.createChunk = function( params ){ params=DP( params );
    if( this.chunkExists({pos: params.pos}) ){ return; }
    params.pos.floor();

    if(this.chunks[params.pos.x]               === undefined) this.chunks[params.pos.x]               = [];
    if(this.chunks[params.pos.x][params.pos.y] === undefined) this.chunks[params.pos.x][params.pos.y] = [];

    this.chunks[params.pos.x][params.pos.y][params.pos.z] = new Chunk({
      world  : this,
      offset : params.pos.multiplyScalar(this.chunkSize)
    });
  };

  World.prototype.createChunkAt = function( params ){ params=DP( params );
    return this.createChunk({
      world : this.world,
      pos   : this.worldToChunk(params.pos)
    });
  };

  World.prototype.getChunk = function( params ){ params=DP( params );
    if( this.chunks[params.pos.x]                             === undefined
     || this.chunks[params.pos.x][params.pos.y]               === undefined
     || this.chunks[params.pos.x][params.pos.y][params.pos.z] === undefined) return Chunk.Null;
    return this.chunks[params.pos.x][params.pos.y][params.pos.z]
  }
  World.prototype.getChunkAt = function ( params ){ params=DP( params );
    return this.getChunk({
      pos : this.worldToChunk(params.pos)
    });
  };

  World.prototype.getVoxelAt = function( params ){ params=DP( params );
    return this.getChunkAt({
      pos: params.pos,
    }).getVoxelAt({
      pos: params.pos
    });
  };
  World.prototype.setVoxelAt = function( params ){ params=DP( params );
    if( this.force && !this.chunkExistsAt({pos: params.pos}) ){
      this.createChunkAt({
        pos: params.pos
      });
    }
    if(typeof params.voxel==='number'){
      params.voxelType = this.voxelTypes[params.voxelType];
    }
    return this.getChunkAt({
      pos: params.pos
    }).setVoxelAt({
      pos: params.pos,
      voxel: params.voxelType
    });
  };
  return World;
});
