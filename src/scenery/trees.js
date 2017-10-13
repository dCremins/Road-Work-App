import {tallTree, treeTall, shadows, shortTree, treeShort} from './materials.js';

export function initTrees(scene) {
	var tree1 = new THREE.Mesh(tallTree, treeTall)
	tree1.position.set(-18, 3, -10.5)
	tree1.castShadow = true
	scene.add( tree1 )
	var tree1Shadow = new THREE.Mesh(tallTree, shadows)
	tree1Shadow.position.set(-18, 3, -10.5)
	scene.add( tree1Shadow )
  //
	var tree2 = new THREE.Mesh(shortTree, treeShort)
	tree2.position.set(-4, 1.7, -7)
	tree2.castShadow = true
	scene.add( tree2 )
	var tree2Shadow = new THREE.Mesh(shortTree, shadows)
	tree2Shadow.position.set(-4, 1.7, -7)
	scene.add( tree2Shadow )
  //
	var tree3 = new THREE.Mesh(tallTree, treeTall)
	tree3.position.set(-11, 3, 8)
	tree3.castShadow = true
	scene.add( tree3 )
	var tree3Shadow = new THREE.Mesh(tallTree, shadows)
	tree3Shadow.position.set(-15.5, 3, 6)
	scene.add( tree3Shadow )
  //
	var tree4 = new THREE.Mesh(shortTree, treeShort)
	tree4.position.set(13.5, 1.7, 7)
	tree4.castShadow = true
	scene.add( tree4 )
	var tree4Shadow = new THREE.Mesh(shortTree, shadows)
	tree4Shadow.position.set(13.5, 1.7, 7)
	scene.add( tree4Shadow )
  //
	var tree5 = new THREE.Mesh(shortTree, treeShort)
	tree5.position.set(18, 1.7, -9.5)
	tree5.castShadow = true
	scene.add( tree5 )
	var tree5Shadow = new THREE.Mesh(shortTree, shadows)
	tree5Shadow.position.set(18, 1.7, -9.5)
	scene.add( tree5Shadow )
}
