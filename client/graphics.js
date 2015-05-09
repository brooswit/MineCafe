/*==============================================================================

== Graphics Library v0.1 ==
An eventified graphics library.

==== Properties ====
renderer : THREE.WebGLRenderer
camera : THREE.PerspectiveCamera
scene : new THREE.Scene

====   Methods  ====
on( eventName, callBack )
  Registers an event
trigger( eventName )
  Triggers an event

====   Events   ====
resize
  when window is resized.
render
  when scene is rendered.

====   Changes  ====
v0.1
  Eventified with Eventify
  Added properties: renderer, camera and scene
  Added events: resize and render

==============================================================================*/

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



/*
  var geometry = new THREE.BoxGeometry( 200, 200, 200 );

  var texture = THREE.ImageUtils.loadTexture( 'textures/crate.gif' );
  texture.anisotropy = renderer.getMaxAnisotropy();

  var material = new THREE.MeshBasicMaterial( { map: texture } );

  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
*/

