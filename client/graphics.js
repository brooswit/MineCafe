define([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three'
], function (DP, Eventify, ___) {
  var graphics = function( params ){ params=DP( params );
    Eventify.enable( this );

    this.renderer = new THREE.WebGLRenderer();
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( this.renderer.domElement );
    
    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
      this.camera.position.z = 4;

    this.scene = new THREE.Scene();

    window.addEventListener( 'resize', onWindowResize, false );
    var that=this;
    function onWindowResize() {
      that.trigger('resize');
      that.camera.aspect = window.innerWidth / window.innerHeight;
      that.camera.updateProjectionMatrix();

      that.renderer.setSize( window.innerWidth, window.innerHeight );
    }
    render();
    function render() {
      that.trigger('render');
      requestAnimationFrame( render );
      that.renderer.render( that.scene, that.camera );
    }
  }
  return graphics;
});
