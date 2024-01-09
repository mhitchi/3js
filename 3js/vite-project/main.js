import { TetrahedronGeometry } from 'three';
import './style.css'
import * as THREE from "three";

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

//first arg is degrees visible out of 360
//second arg is aspect ratio
//last arg is for view frustrum to control which items are visible - i think it's in a range
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector("#bg")
})

renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
camera.position.setZ(30);

//first arg is vectors to define
const geometry = new THREE.TorusGeometry( 10, 3, 6, 100);
const material = new THREE.MeshStandardMaterial( { color: 0xe1f07b });
const torus = new THREE.Mesh( geometry, material );

scene.add(torus);

const pointLight = new THREE.PointLight( 0xffffff );
pointLight.position.set( 10,5,10 );
const pointLight2 = new THREE.PointLight( 0xffffff );
pointLight2.position.set( -5,5,10 );
const pointLight3 = new THREE.PointLight( 0xffffff );
pointLight3.position.set( -1,-5,15 );
const ambientLight = new THREE.AmbientLight( 0x404040 );

scene.add( pointLight, pointLight2, pointLight3, ambientLight );

const lightHelper = new THREE.PointLightHelper(pointLight);
const lightHelper2 = new THREE.PointLightHelper(pointLight2);
const lightHelper3 = new THREE.PointLightHelper(pointLight3);
const gridHelper = new THREE.GridHelper(200,5);
scene.add(lightHelper, lightHelper2, lightHelper3, gridHelper);

//lets us move around
const controls = new OrbitControls( camera, renderer.domElement)


//recursive function (like a game loop) to create infinite loop to call render method automatically
function animate() {
  //tells browser want to animate something
  requestAnimationFrame( animate );

  //spin it
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  //mouse interaction changes reflected in ui
  controls.update(); 

  //whenever browser repaints screen, calls render method
  renderer.render( scene, camera );
}

animate();