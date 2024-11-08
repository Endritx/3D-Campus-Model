// Import Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Ground (Grass)
const grassGeometry = new THREE.PlaneGeometry(20, 20);
const grassMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const grass = new THREE.Mesh(grassGeometry, grassMaterial);
grass.rotation.x = -Math.PI / 2;
scene.add(grass);

// Buildings
const buildingMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
const buildingGeometry1 = new THREE.BoxGeometry(2, 2, 2);
const buildingGeometry2 = new THREE.BoxGeometry(1, 1, 4);

// Create Buildings
const building1 = new THREE.Mesh(buildingGeometry1, buildingMaterial);
building1.position.set(-5, 1, -5);
scene.add(building1);

const building2 = new THREE.Mesh(buildingGeometry1, buildingMaterial);
building2.position.set(5, 1, -5);
scene.add(building2);

const building3 = new THREE.Mesh(buildingGeometry2, new THREE.MeshBasicMaterial({ color: 0x0000ff }));
building3.position.set(-5, 1, 5);
scene.add(building3);

// Roads
const roadMaterial = new THREE.MeshBasicMaterial({ color: 0x333333 });
const roadGeometry = new THREE.PlaneGeometry(2, 20);

// Vertical Road
const verticalRoad = new THREE.Mesh(roadGeometry, roadMaterial);
verticalRoad.rotation.x = -Math.PI / 2;
verticalRoad.position.z = 0;
scene.add(verticalRoad);

// Horizontal Road
const horizontalRoad = new THREE.Mesh(roadGeometry, roadMaterial);
horizontalRoad.rotation.x = -Math.PI / 2;
horizontalRoad.rotation.z = Math.PI / 2;
horizontalRoad.position.x = 0;
scene.add(horizontalRoad);

// Camera Position
camera.position.z = 15;
camera.position.y = 10;
camera.lookAt(0, 0, 0);

// Render Loop
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
