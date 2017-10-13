/* Variables */
var scene, camera, controls, renderer, ambient, sun, raycaster;
var objects = [];
var flaggers = [];

raycaster = new THREE.Raycaster();
var mouse = new THREE.Vector2();
var offset = new THREE.Vector3();
var intersection = new THREE.Vector3();
var selected = null, hovered = null;

// Scenery
var road = new THREE.MeshLambertMaterial({ color: 0x87836E });
var lines = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
var divider = new THREE.MeshLambertMaterial({ color: 0xFFFF86 });
var grass = new THREE.MeshLambertMaterial({ color: 0x77c997 });
var treeTall = new THREE.MeshLambertMaterial({ color: 0x62c192});
var treeShort = new THREE.MeshLambertMaterial({ color: 0x78c9a1 });
var shadows = new THREE.ShadowMaterial({ opacity: .3  });
var windowColor = new THREE.MeshLambertMaterial({ color: 0xD0DDE3, transparent: true, opacity: .5 });
var indoorColor = new THREE.MeshBasicMaterial({ color: 0xD0DDE3});
var brick = new THREE.MeshLambertMaterial({ color: 0xaa5050 });
var stone = new THREE.MeshLambertMaterial({ color: 0xe5d2a9 });
var truckMaterial = new THREE.MeshLambertMaterial({ color: 0xef8547 });
var foundation = new THREE.MeshLambertMaterial({ color: 0xF4EEEF });
var awningRed = new THREE.MeshLambertMaterial({ color: 0xbad3d8 });
var molding = new THREE.MeshLambertMaterial({ color: 0xbad3d8 });
// Skin
var skinTone1 = new THREE.MeshLambertMaterial({ color: 0x8d5524 }); // Brown
var skinTone2 = new THREE.MeshLambertMaterial({ color: 0xc68642 }); // Light Brown
var skinTone3 = new THREE.MeshLambertMaterial({ color: 0xf1c27d }); // Tan
var skinTone4 = new THREE.MeshLambertMaterial({ color: 0xffdbac }); // Pale

// Colors
var red = new THREE.MeshLambertMaterial({ color: 0xF87676});
var green = new THREE.MeshLambertMaterial({ color: 0x78C789 });
var blue = new THREE.MeshLambertMaterial({ color: 0x22B8E2 });
var orange = new THREE.MeshLambertMaterial({ color: 0xF6B331 });
var safetyOrange = new THREE.MeshLambertMaterial({ color: 0xFF7900});
var yellow = new THREE.MeshLambertMaterial({ color: 0xFDDB4C });
var purple = new THREE.MeshLambertMaterial({ color: 0xB78DD1 });
var white = new THREE.MeshLambertMaterial({ color: 0xffffff });
var offwhite = new THREE.MeshLambertMaterial({ color: 0xf2f2f2 });
var gray = new THREE.MeshLambertMaterial({ color: 0x555555 });
var palegray = new THREE.MeshLambertMaterial({ color: 0xa5a5a5 });
var jean = new THREE.MeshLambertMaterial({ color: 0x416bad });
// Signs
var workerSign = new THREE.TextureLoader().load( "images/sign-01.png" );
var workerSignMaterial = new THREE.MeshBasicMaterial( { map: workerSign } );
var flaggerSign = new THREE.TextureLoader().load( "images/sign-02.png" );
var flaggerSignMaterial = new THREE.MeshBasicMaterial( { map: flaggerSign } );
var flagAheadSign = new THREE.TextureLoader().load( "images/sign-03.png" );
var flagAheadSignMaterial = new THREE.MeshBasicMaterial( { map: flagAheadSign } );
var menWorkSign = new THREE.TextureLoader().load( "images/sign-04.png" );
var menWorkSignMaterial = new THREE.MeshBasicMaterial( { map: menWorkSign } );
var prepareStopSign = new THREE.TextureLoader().load( "images/sign-05.png" );
var prepareStopSignMaterial = new THREE.MeshBasicMaterial( { map: prepareStopSign } );
var oneLaneSign = new THREE.TextureLoader().load( "images/sign-06.png" );
var oneLaneSignMaterial = new THREE.MeshBasicMaterial( { map: oneLaneSign } );
var workAheadSign = new THREE.TextureLoader().load( "images/sign-07.png" );
var workAheadSignMaterial = new THREE.MeshBasicMaterial( { map: workAheadSign } );
/* Cone */
var coreGeometry = new THREE.CylinderGeometry(.07, .2, .5, 32, .8, false, .8)
var coneBottomG = new THREE.BoxGeometry( .5, .06, .5 )
coneBottomG.translate(0, -.23, 0)
var coneGeometry = new THREE.Geometry()
coneGeometry.merge(coreGeometry)
coneGeometry.merge(coneBottomG)
var stripeGeometry = new THREE.CylinderGeometry(.116, .155, .15, 32, 1, false, .8)
var stripe = new THREE.Mesh( stripeGeometry, white )


/* Start */
function init() {
	scene = new THREE.Scene()
	// Scenery
	initRoad()
	initTrees()
	initShop()
	//initApartment()
	//initBench()
	//initBackHoe()
	//initTruck()
	//initWorkers()
	// Mechanics
	initCamera()
	initLights()
	initRender()
}


function initCamera() {
	camera = new THREE.PerspectiveCamera( 60, ((window.innerWidth-100) / (window.innerHeight-50)), 1, 100 )
	camera.position.set(0, 23, 20)
	camera.lookAt( 0, 0, 0 )
}

function initLights() {
		ambient = new THREE.HemisphereLight(0xdeeef2,0x665c6d, 1.2)
		sun = new THREE.SpotLight(0xfcdc74, .2)
		sun.position.set(-50, 40, -5)
		sun.castShadow = true
		sun.shadow.camera.left = -10
		sun.shadow.camera.right = 10
		sun.shadow.camera.top = 10
		sun.shadow.camera.bottom = -10
		sun.shadow.camera.near = .1
		sun.shadow.camera.far = 1000
		sun.shadow.mapSize.width = 2048
		sun.shadow.mapSize.height = 2048
		scene.add(ambient)
		scene.add(sun)
}

function initRender() {
	renderer = new THREE.WebGLRenderer({antialias: true})
	renderer.setSize( window.innerWidth-100, (window.innerHeight-55) )
	renderer.setClearColor( 0xffffff, 1 )
	renderer.shadowMap.enabled = true
	renderer.shadowMap.type = THREE.PCFSoftShadowMap
	var container = document.getElementById('container')
	container.appendChild( renderer.domElement )
	controls = new THREE.OrbitControls( camera, renderer.domElement )
/*
	container.addEventListener( 'mousemove', onDocumentMouseMove, false )
	container.addEventListener( 'mouseup', onDocumentMouseCancel, false )
	container.addEventListener( 'mousedown', onDocumentMouseDown, false )
	container.addEventListener( 'touchmove', onDocumentTouchMove, false )
	container.addEventListener( 'touchstart', onDocumentTouchStart, false )
	container.addEventListener( 'touchend', onDocumentTouchEnd, false )
*/
}

/**********************/
function render() {
		scene.position.set(0, 0, 3)
		renderer.render(scene, camera);
}

function animate() {
		requestAnimationFrame(animate);
		render();
		controls.update();
}

init()
animate()

function initRoad() {
	var topGeometry = new THREE.BoxGeometry( 45, 1, 10 )
	var grassTop = new THREE.Mesh( topGeometry, grass )
	grassTop.position.set(0, 0, -9)
	scene.add( grassTop )

	var roadGeometry = new THREE.BoxGeometry( 45, 1, 8 )
	var roadMesh = new THREE.Mesh( roadGeometry, road )
	roadMesh.position.set(0, 0, 0)
	scene.add( roadMesh )

	var lineGeometry = new THREE.Geometry()
	lineGeometry.vertices.push(
		new THREE.Vector3(-22.5, .51, -3.7),
		new THREE.Vector3(22.5, .51, -3.7)
	)
	var topLine = new THREE.Line(lineGeometry, lines)
	scene.add(topLine)

	lineGeometry = new THREE.Geometry()
	lineGeometry.vertices.push(
		new THREE.Vector3(-22.5, .51, 3.7),
		new THREE.Vector3(22.5, .51, 3.7)
	)
	var bottomLine = new THREE.Line(lineGeometry, lines)
	scene.add(bottomLine)

	var bottomGeometry = new THREE.BoxGeometry( 45, 1, 7 )
	var grassBottom = new THREE.Mesh( bottomGeometry, grass )
	grassBottom.position.set(0, 0, 7.5)
	scene.add( grassBottom )

	var dividerGeometry = new THREE.BoxGeometry( 1, .1, .2 )
	var yellowLines = new THREE.Mesh( dividerGeometry, divider )
	yellowLines.position.set(0, .5, 0)
	scene.add( yellowLines )
	for (var i = 22; i>-23; i-=2) {
		var newyellowLines = yellowLines.clone()
		newyellowLines.position.set(i, .5, 0)
		scene.add( newyellowLines )
	}
  var shadowGeometry = new THREE.BoxGeometry( 45, 1, 25 )
  var floorShadows = new THREE.Mesh( shadowGeometry, shadows )
  floorShadows.position.set(0, .05, -1.5)
  floorShadows.receiveShadow = true
  scene.add( floorShadows )
  objects.push(floorShadows)

  var coneCore = new THREE.Mesh( coneGeometry, gray )
	//coneCore.receiveShadow = true
	coneCore.castShadow = true
	var cone = new THREE.Group()
	cone.add(coneCore)
	cone.add(stripe)
	cone.position.set(0, .75, .5)
	scene.add(cone)
	for (var i = 1.5; i<10; i+=1.5) {
		var newCone = cone.clone()
		newCone.position.set(i, .75, .5)
		scene.add(newCone)
	}
}

function initTrees() {
	// Geometry
	var trees = new THREE.Geometry()
	var tallTree = new THREE.Geometry()
	var tallCone = new THREE.ConeGeometry( 1.68, 4, 32 )
	tallCone.translate(0, 1.35, 0)
	tallTree.merge(tallCone)
	var tallSphere = new THREE.SphereGeometry( 1.8, 60, 60)
	tallSphere.translate(0, -1.3, 0)
	tallTree.merge(tallSphere)

	tallTree.translate(-18, 3, -10.5)
	trees.merge(tallTree)
	tallTree.translate(7, 0, 18.5)
	trees.merge(tallTree)

	var shortTree = tallTree.clone()
	shortTree.scale(.5, .5, .5)
	shortTree.translate(0, .2, -12)
	trees.merge(shortTree)
	shortTree.translate(17.5, 0, 14)
	trees.merge(shortTree)
	shortTree.translate(4.5, 0, -16.5)
	trees.merge(shortTree)

	var allTrees = new THREE.Mesh(trees, treeTall)
	allTrees.castShadow = true
	scene.add( allTrees )
	var treeShadows = new THREE.Mesh(trees, shadows)
	treeShadows.receiveShadow = true
	scene.add( treeShadows )
}

function initShop() {
  var shop = new THREE.Group()
  var shopBase = new THREE.Geometry()

// Foundation
  var bottom = new THREE.BoxGeometry(10, 1, 5)
  shopBase.merge(bottom)
  var bottomStair = new THREE.BoxGeometry(2, .5, .5)
  bottomStair.translate(0, .25, 2.75)
  shopBase.merge(bottomStair)
  var topStair = new THREE.BoxGeometry(2, .5, 1)
  topStair.translate(0, -.25, 3)
  shopBase.merge(topStair)
  var building = new THREE.Mesh(shopBase, foundation)
	building.castShadow = true
  shop.add(building)

// Building
  var glass = new THREE.BoxGeometry(9.75, 4.9, .125)
  glass.translate(0, 3, 2.4)
  var windows = new THREE.Mesh(glass, windowColor)
  shop.add(windows)
  var shopCore = new THREE.Geometry()
  var bottomFront = new THREE.BoxGeometry(4, 1, .75)
  bottomFront.translate(-3, 1, 2.125)
  shopCore.merge(bottomFront)
  bottomFront.translate(6, 0, 0)
  shopCore.merge(bottomFront)
  var topFront = new THREE.BoxGeometry(10, 1.5, .5)
  topFront.translate(0, 4.75, 2.25)
  shopCore.merge(topFront)
  var sides = new THREE.BoxGeometry(1, 5, 5)
  sides.translate(-4.5, 3, 0)
  shopCore.merge(sides)
  sides.translate(9, 0, 0)
  shopCore.merge(sides)
  var inner = new THREE.BoxGeometry(1, 2.5, .5)
  inner.translate(-1.5, 2.75, 2.25)
  shopCore.merge(inner)
  inner.translate(3, 0, 0)
  shopCore.merge(inner)
  var center = new THREE.BoxGeometry(10, 5, 1)
  center.translate(0, 3, -2)
  shopCore.merge(center)
  var top = new THREE.BoxGeometry(10, 2, 5)
  top.translate(0, 5, 0)
  shopCore.merge(top)
  var building = new THREE.Mesh(shopCore, stone)
	building.castShadow = true
  shop.add(building)
  var shopShadowGeometry = new THREE.Geometry()
  var coreShopShadow = shopCore.clone()
  var shopStepsShadow = shopBase.clone()
  shopShadowGeometry.merge(coreShopShadow)
  shopShadowGeometry.merge(shopStepsShadow)
  var shopShadow = new THREE.Mesh(shopShadowGeometry, shadows)
  shopShadow.receiveShadow = true
  shop.add(shopShadow)

// Insides
  var counter = new THREE.BoxGeometry(3, 1.5, 1)
  counter.translate(0, 1.25, 0)
  var Counters = new THREE.Mesh(counter, stone)
  shop.add(Counters)

  var shelf = new THREE.BoxGeometry(.5, .1, 3)
  shelf.translate(3.75, 2, 0)
  var shelf2 = new THREE.BoxGeometry(.5, .1, 3)
  shelf2.translate(3.75, 3, 0)
  shelf.merge(shelf2)
  shelf2.translate(0, 1, 0)
  shelf.merge(shelf2)
  shelf2.translate(-7.5, 0, 0)
  shelf.merge(shelf2)
  shelf2.translate(0, -1, 0)
  shelf.merge(shelf2)
  shelf2.translate(0, -1, 0)
  shelf.merge(shelf2)
  var shelves = new THREE.Mesh(shelf, stone)
  shop.add(shelves)

  var surfaceShadows = new THREE.Geometry()
  var counterShadows = counter.clone(true)
  surfaceShadows.merge(counterShadows)
  var shelfShadows = shelf.clone(true)
  surfaceShadows.merge(shelfShadows)
  var surfaceInteriorShadows = new THREE.Mesh(surfaceShadows, shadows)
  surfaceInteriorShadows.receiveShadow = true
  shop.add(surfaceInteriorShadows)

  var book1 = new THREE.BoxGeometry(.7, .75, .2)
  book1.translate(3.75, 3.45, 0)
  var book2 = new THREE.BoxGeometry(.7, .75, .2)
  book2.translate(3.75, 3.45, 1)
  book1.merge(book2)
  book2.translate(0, 1, -1.5)
  book1.merge(book2)
  book2.translate(0, -2, -.5)
  book1.merge(book2)
  book2.translate(0, 0, .75)
  book1.merge(book2)
  book2.translate(0, 0, 1)
  book1.merge(book2)
  book2.translate(-7.5, 0, 0)
  book1.merge(book2)
  book2.translate(0, 0, -1.5)
  book1.merge(book2)
  book2.translate(0, 1, .5)
  book1.merge(book2)
  book2.translate(0, 0, .75)
  book1.merge(book2)
  book2.translate(0, 1, .25)
  book1.merge(book2)
  book2.translate(0, 0, -.75)
  book1.merge(book2)
  book2.translate(0, 0, -.5)
  book1.merge(book2)
  var book7 = new THREE.BoxGeometry(.7, .75, .2)
  book7.translate(-3.5, 1.87, 2.25)
  book1.merge(book7)
  var redBooks = new THREE.Mesh(book1, red)
  redBooks.castShadow = true
  shop.add(redBooks)

  var books2 = new THREE.Geometry()
  var book3 = new THREE.BoxGeometry(.7, .75, .2)
  book3.translate(3.75, 3.45, 1.2)
  books2.merge(book3)
  book3.translate(0, 1, -1.5)
  books2.merge(book3)
  book3.translate(0, -2, -.5)
  books2.merge(book3)
  book3.translate(0, 0, .75)
  books2.merge(book3)
  book3.translate(0, 0, 1)
  books2.merge(book3)
  book3.translate(-7.5, 0, 0)
  books2.merge(book3)
  book3.translate(0, 0, -1.5)
  books2.merge(book3)
  book3.translate(0, 1, .5)
  books2.merge(book3)
  book3.translate(0, 0, .75)
  books2.merge(book3)
  book3.translate(0, 1, .25)
  books2.merge(book3)
  book3.translate(0, 0, -.75)
  books2.merge(book3)
  book3.translate(0, 0, -.5)
  books2.merge(book3)
  var book8 = new THREE.BoxGeometry(.7, .75, .2)
  book8.translate(-2.5, 1.87, 2.25)
  books2.merge(book8)
  var blueBooks = new THREE.Mesh(books2, blue)
  blueBooks.castShadow = true
  shop.add(blueBooks)

  var books3 = new THREE.Geometry()
  var book4 = new THREE.BoxGeometry(.7, .75, .2)
  book4.translate(3.75, 3.45, 1.4)
  books3.merge(book4)
  book4.translate(0, 1, -1.5)
  books3.merge(book4)
  book4.translate(0, -2, -.5)
  books3.merge(book4)
  book4.translate(0, 0, .75)
  books3.merge(book4)
  book4.translate(0, 0, 1)
  books3.merge(book4)
  book4.translate(-7.5, 0, 0)
  books3.merge(book4)
  book4.translate(0, 0, -1.5)
  books3.merge(book4)
  book4.translate(0, 1, .5)
  books3.merge(book4)
  book4.translate(0, 0, .75)
  books3.merge(book4)
  book4.translate(0, 1, .25)
  books3.merge(book4)
  book4.translate(0, 0, -.75)
  books3.merge(book4)
  book4.translate(0, 0, -1.5)
  books3.merge(book4)
  book4.translate(7.5, 0, 2)
  books3.merge(book4)
  book4.translate(0, -1, -1.75)
  books3.merge(book4)
  var purpleBooks = new THREE.Mesh(books3, purple)
  purpleBooks.castShadow = true
  shop.add(purpleBooks)

  var books4 = new THREE.Geometry()
  var book5 = new THREE.BoxGeometry(.7, .75, .2)
  book5.translate(3.75, 3.45, .6)
  books4.merge(book5)
  book5.translate(0, 0, -1)
  books4.merge(book5)
  book5.translate(0, 1, -.75)
  books4.merge(book5)
  book5.translate(0, 0, 1.5)
  books4.merge(book5)
  book5.translate(0, 0, .75)
  books4.merge(book5)
  book5.translate(-7.5, -1, -1.75)
  books4.merge(book5)
  book5.translate(0, -1, -.5)
  books4.merge(book5)
  book5.translate(0, 0, 1.5)
  books4.merge(book5)
  var book6 = new THREE.BoxGeometry(.7, .75, .2)
  book6.translate(3.5, 1.87, 2.25)
  books4.merge(book6)
  var orangeBooks = new THREE.Mesh(books4, orange)
  orangeBooks.castShadow = true
  shop.add(orangeBooks)

  var booksShadows = new THREE.Geometry()
  var redShadows = book1.clone(true)
  booksShadows.merge(redShadows)
  var blueShadows = books2.clone(true)
  booksShadows.merge(blueShadows)
  var purpleShadows = books3.clone(true)
  purpleShadows.translate(-.00, .001, .001)
  booksShadows.merge(purpleShadows)
  var orangeShadows = books4.clone(true)
  booksShadows.merge(orangeShadows)
  var showInteriorShadows = new THREE.Mesh(booksShadows, shadows)
  showInteriorShadows.receiveShadow = true
  shop.add(showInteriorShadows)

// Awning
  // White Stripes
  var awningA = new THREE.Geometry()
  var aA1 = new THREE.BoxGeometry(1.1, 1.25, 2)
  aA1.translate(-4.4, 5.25, 3.5)
  aA1.vertices[0].y-=.9;
  aA1.vertices[5].y-=.9;
  awningA.merge(aA1)
  aA1.translate(2.2, 0, 0)
  awningA.merge(aA1)
  aA1.translate(2.2, 0, 0)
  awningA.merge(aA1)
  aA1.translate(2.2, 0, 0)
  awningA.merge(aA1)
  aA1.translate(2.2, 0, 0)
  awningA.merge(aA1)
  var As = new THREE.Mesh(awningA, offwhite)
  As.castShadow = true
  // Red Stripes
  var awningB = new THREE.Geometry()
  var aB1 = new THREE.BoxGeometry(1.1, 1.25, 2)
  aB1.translate(-3.3, 5.25, 3.5)
  aB1.vertices[0].y-=.9;
  aB1.vertices[5].y-=.9;
  awningB.merge(aB1)
  aB1.translate(2.2, 0, 0)
  awningB.merge(aB1)
  aB1.translate(2.2, 0, 0)
  awningB.merge(aB1)
  aB1.translate(2.2, 0, 0)
  awningB.merge(aB1)
  var Bs = new THREE.Mesh(awningB, blue)
  Bs.castShadow = true
  var awningShadowGeometry = new THREE.Geometry()
  var aShadow = awningA.clone()
  var bShadow = awningB.clone()
  awningShadowGeometry.merge(aShadow)
  awningShadowGeometry.merge(bShadow)
  var awningShadows = new THREE.Mesh(awningShadowGeometry, shadows)
  awningShadows.scale.set(1.01, 1.01, 1.01)
  awningShadows.receiveShadow = true
  shop.add(awningShadows)
  shop.add(As)
  shop.add(Bs)

// Add To Scene
  shop.position.set(8, 1, -9) // 8, -9
  scene.add(shop)

}
