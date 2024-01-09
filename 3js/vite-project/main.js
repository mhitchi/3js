import { TetrahedronGeometry } from 'three';
import './style.css'
import * as THREE from "three";


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
const geometry = new THREE.TorusKnotGeometry( 10, 3, 6, 100);
const material = new THREE.MeshBasicMaterial( { color: 0x019a73, wireframe: true });
const torus = new THREE.Mesh( geometry, material );

scene.add(torus);

// const light = new THREE.AmbientLight( 0x404040 );

//recursive function (like a game loop) to create infinite loop to call render method automatically
function animate() {
  //tells browser want to animate something
  requestAnimationFrame( animate );

  //spin it
  torus.rotation.x += 0.01;
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  //whenever browser repaints screen, calls render method
  renderer.render( scene, camera );
}

animate();