import * as THREE from 'three';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { ThreeMFLoader } from 'three/addons/loaders/3MFLoader.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

let camera, scene, renderer, object, loader, controls;

init();

function init() {

  renderer = new THREE.WebGLRenderer( { antialias: true } );
  renderer.setPixelRatio( window.devicePixelRatio );
  
  // renderer.setSize( window.innerWidth, window.innerHeight );
  renderer.setSize( 600, 400 );
  //document.body.appendChild( renderer.domElement );
  document.getElementById("stlviewer").appendChild( renderer.domElement );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xC4C4C4 );

  //camera = new THREE.PerspectiveCamera( 35, window.innerWidth / window.innerHeight, 1, 500 );
  camera = new THREE.PerspectiveCamera( 35, 600 / 400, 1, 500 );
  camera.zoom = 2;

  // Z is up for objects intended to be 3D printed.

  camera.up.set( 0, 0, 1 );
  camera.position.set( - 100, - 250, 100 );

  scene.add( camera );

  controls = new OrbitControls( camera, renderer.domElement );
  controls.addEventListener( 'change', render );
  controls.minDistance = 50;
  //controls.minDistance = 1;
  controls.maxDistance = 400;
  //controls.maxDistance = 5;
  controls.enablePan = true;
  controls.update();



  //scene.add( new THREE.AmbientLight( 0x404040 ) );

  const light = new THREE.DirectionalLight( 0xfdf4dc, 2 );
  light.position.set( - 1, - 2.5, 1 );
  camera.add( light );

  
  const light2 = new THREE.DirectionalLight( 0xfdf4dc, 2 );
  light2.position.set( 1, 2.5, -1 );
  camera.add( light2 );

  const manager = new THREE.LoadingManager();

  manager.onLoad = function () {
    // Fixes for zoom level on mm/inches - https://discourse.threejs.org/t/help-loaded-model-placed-very-far-away/33586/4
    const box = new THREE.Box3().setFromObject( object );
    const center = box.getCenter( new THREE.Vector3() );
    const size = box.getSize(new THREE.Vector3()).length();

    object.position.x += ( object.position.x - center.x );
    object.position.y += ( object.position.y - center.y );
    object.position.z += ( object.position.z - center.z );

    controls.maxDistance = size * 4;
    controls.minDistance = size;

    controls.reset();

    scene.add( object );
    render();

  };

  loader = new ThreeMFLoader( manager );
  loadAsset( params.asset );

  window.addEventListener( 'resize', onWindowResize );

  // GUI for changing models
  const gui = new GUI( { autoPlace: false, width: 400, title: 'Select model' } );
  gui.add( params, 'STL', assets ).onChange( function ( value ) {
    loadAsset( value );
    umami.track('STL viewer: ' + value);  // This fires when the loaded item changes
  } );
  document.getElementById("modelpicker").appendChild( gui.domElement );

}

function loadAsset( asset ) {
  // umami.track('STL viewer: ' + value);    // This fires anytime the item is loaded, even on the first page load

  loader.load( 'models/3mf/' + asset + '.3mf', function ( group ) {

    if ( object ) {

      object.traverse( function ( child ) {

        if ( child.material ) child.material.dispose();
        if ( child.material && child.material.map ) child.material.map.dispose();
        if ( child.geometry ) child.geometry.dispose();

      } );

      scene.remove( object );

    }

    //

    object = group;

  } );

}

function onWindowResize() {

  //camera.aspect = window.innerWidth / window.innerHeight;
  //camera.updateProjectionMatrix();

  // renderer.setSize( window.innerWidth, window.innerHeight );
  //renderer.setSize( 600, 400 );

  //render();

}

function render() {
  renderer.render( scene, camera );

}