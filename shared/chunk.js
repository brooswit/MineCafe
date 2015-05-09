/*==============================================================================

====   Changes  ====
v0.1
  Added method:
    getLocalVoxel
    getVoxel
    setLocalVoxel
    setVoxel

==============================================================================*/


var NullChunk;

define([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three',

  'shared/voxel'
], function (DP, Eventify, ___, Voxel) {
  NullChunk = NullChunk || {
    getVoxel : function(){ return Voxel.Null; },
    getVoxelAt      : function(){ return Voxel.Null; },
    setVoxel : function(){ return Voxel.Null; },
    setVoxelAt      : function(){ return Voxel.Null; }
  };
  Eventify.enable(NullChunk);
  var Chunk = function( params ){ params=DP( params );
    Eventify.enable(this);

    this.world=params.world;
    this.offset=params.offset;
    this.voxels=[];

    for( var x=0; x<this.world.chunkSize; x++ ){
      this.voxels[x]=[]
      for( var y=0; y<this.world.chunkSize; y++ ){
        this.voxels[x][y]=[];
        for( var z=0; z<this.world.chunkSize; z++ ){
          this.voxels[x][y][z]=Voxel.Null;
        }
      }
    }
  };
  //helpers
  Chunk.prototype.worldspaceToChunkspace = function( pos ){
    return pos.sub( this.offset );
  };

  //methods
  Chunk.prototype.getVoxel = function( params ){ params=DP( params );
    return this.voxels[params.pos.x][params.pos.y][params.pos.z];
  };

  Chunk.prototype.getVoxelAt      = function( params ){ params=DP( params );
    return this.getVoxel({pos: this.worldspaceToChunkspace()});
  };

  Chunk.prototype.setVoxel = function( params ){ params=DP( params );
    params.pos.floor();
    params.world=this.world;
    params.chunk=this;

    this.voxels[params.pos.x][params.pos.y][params.pos.z].trigger('remove');
    this.voxels[params.pos.x][params.pos.y][params.pos.z] = new Voxel({
      voxelType : params.voxelType,
      world     : this.world,
      chunk     : this
    });
    this.voxels[params.pos.x][params.pos.y][params.pos.z].trigger('set');
  };
  Chunk.prototype.setVoxelAt      = function( params ){ params=DP( params );
    this.setVoxel({
      pos: this.worldspaceToChunkspace(params.pos),
      voxelType: params.voxelType
    });
  };

  Chunk.Null = NullChunk;

  return Chunk;
});