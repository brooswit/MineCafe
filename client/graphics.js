/* 
* @Author: awate
* @Date:   2015-05-18 14:09:35
* @Last Modified by:   awate
* @Last Modified time: 2015-05-19 20:42:43
*/

define([
  'shared/lib/decorateParams',
  'shared/lib/eventify',
  'shared/lib/three',
  'shared/lib/lumber',
  'client/lib/jquery'
], function (DP, Eventify, ___, ___) {
  var graphics = function( params ){ params=DP( params );
    Lumber.log('Initializing Graphics');
    Lumber.prefix.push('  ');
    Lumber.log('Eventifying');
    Eventify.enable( this );

    Lumber.log('Modifying the dom');
    $('body')

    Lumber.log('Setting up renderer');
    Lumber.prefix.push('  ');
    this.renderer = new THREE.WebGLRenderer();
      Lumber.log('Setting pixel radio');
      this.renderer.setPixelRatio( window.devicePixelRatio );
      Lumber.log('Setting size');
      this.renderer.setSize( window.innerWidth, window.innerHeight );
      document.body.appendChild( this.renderer.domElement );
    Lumber.prefix.pop( );

    Lumber.log('Setting up camera');
    this.camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 1000 );
      this.camera.position.z = 4;

    Lumber.log('Setting up scene');
    this.scene = new THREE.Scene();

    Lumber.log('Setting up events');
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
    Lumber.log('Done!');
    Lumber.prefix.pop();
  }
  return graphics;
});
