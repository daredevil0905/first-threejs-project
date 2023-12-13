import * as THREE from 'three'

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

//Object
const geometry = new THREE.BoxGeometry(1, 1, 1) // Geometry
const material = new THREE.MeshBasicMaterial({ color: 'red' }) // Material
const mesh = new THREE.Mesh(geometry, material) // Final mesh
scene.add(mesh)

// Camera
// Size of the render (Aspect)
const sizes = {
  width: 800,
  height: 600
}

// Field of view
const fov = 75
const camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height)
camera.position.x = 0.75
camera.position.y = 0.25
camera.position.z = 3
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)