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
renderer.render( scene, camera )