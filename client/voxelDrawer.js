define([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three'
], function (DP, Eventify, ___) {
  var VoxelDrawer=function( params ){DP( params );
    Eventify.enable(this);

    this.voxel=params.voxel;
    this.world=params.world;
    this.graphics=params.graphics;

    this.geometry = new THREE.BoxGeometry( 1, 1, 1 );

    this.texture = THREE.ImageUtils.loadTexture( 'textures/voxels/null.png' );
    this.texture.anisotropy = this.graphics.renderer.getMaxAnisotropy();

    this.material = new THREE.MeshBasicMaterial( { map: this.texture } );

    this.mesh = new THREE.Mesh( this.geometry, this.material );
    this.actor = this.graphics.scene.add( this.mesh );
  }
  VoxelDrawer.prototype.remove = function(){
    
  }
  return VoxelDrawer;
});
