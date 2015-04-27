define(['shared/lib/decorateParams', 'shared/lib/three', 'shared/lib/eventify'],
function (DP, THREE, Eventify) {
  var VoxelDrawer=function( params ){DP( params );
    Eventify.enable(this);

    this.voxel=params.voxel;
    this.world=params.world;
    this.graphics=params.graphics;

    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );

    this.texture = THREE.ImageUtils.loadTexture( 'textures/crate.gif' );
    this.texture.anisotropy = this.graphics.renderer.getMaxAnisotropy();

    this.material = new THREE.MeshBasicMaterial( { map: this.texture } );

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.actor = this.graphics.scene.add( this.mesh );

    var that=this;
    this._world.on('add', function( params ){DP( params )
      var voxel=params.voxel;
      voxel.drawer=new VoxelDrawer(voxel);
    });

    this._world.on('remove', function( params ){DP( params )
      var voxel=params.voxel;
      voxel.drawer.remove();
    });
  }
  return VoxelDrawer;
});