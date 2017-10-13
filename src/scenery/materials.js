// Scenery
export let road = new THREE.MeshLambertMaterial({ color: 0x87836E });
export let lines = new THREE.LineBasicMaterial({ color: 0xFFFFFF });
export let divider = new THREE.MeshLambertMaterial({ color: 0xFFFF86 });
export let grass = new THREE.MeshLambertMaterial({ color: 0x77c997 });
export let treeTall = new THREE.MeshLambertMaterial({ color: 0x62c192});
export let treeShort = new THREE.MeshLambertMaterial({ color: 0x78c9a1 });
export let shadows = new THREE.ShadowMaterial({ opacity: .3  });
export let windowColor = new THREE.MeshLambertMaterial({ color: 0xD0DDE3, transparent: true, opacity: .5 });
export let indoorColor = new THREE.MeshBasicMaterial({ color: 0xD0DDE3});
export let brick = new THREE.MeshLambertMaterial({ color: 0xaa5050 });
export let stone = new THREE.MeshLambertMaterial({ color: 0xe5d2a9 });
export let truckMaterial = new THREE.MeshLambertMaterial({ color: 0xef8547 });
export let foundation = new THREE.MeshLambertMaterial({ color: 0xF4EEEF });
export let awningRed = new THREE.MeshLambertMaterial({ color: 0xbad3d8 });
export let molding = new THREE.MeshLambertMaterial({ color: 0xbad3d8 });
// Skin
export let skinTone1 = new THREE.MeshLambertMaterial({ color: 0x8d5524 }); // Brown
export let skinTone2 = new THREE.MeshLambertMaterial({ color: 0xc68642 }); // Light Brown
export let skinTone3 = new THREE.MeshLambertMaterial({ color: 0xf1c27d }); // Tan
export let skinTone4 = new THREE.MeshLambertMaterial({ color: 0xffdbac }); // Pale

// Colors
export let red = new THREE.MeshLambertMaterial({ color: 0xF87676});
export let green = new THREE.MeshLambertMaterial({ color: 0x78C789 });
export let blue = new THREE.MeshLambertMaterial({ color: 0x22B8E2 });
export let orange = new THREE.MeshLambertMaterial({ color: 0xF6B331 });
export let safetyOrange = new THREE.MeshLambertMaterial({ color: 0xFF7900});
export let yellow = new THREE.MeshLambertMaterial({ color: 0xFDDB4C });
export let purple = new THREE.MeshLambertMaterial({ color: 0xB78DD1 });
export let white = new THREE.MeshLambertMaterial({ color: 0xffffff });
export let offwhite = new THREE.MeshLambertMaterial({ color: 0xf2f2f2 });
export let gray = new THREE.MeshLambertMaterial({ color: 0x555555 });
export let palegray = new THREE.MeshLambertMaterial({ color: 0xa5a5a5 });
export let jean = new THREE.MeshLambertMaterial({ color: 0x416bad });
// Signs
export let workerSign = new THREE.TextureLoader().load( "images/sign-01.png" );
export let workerSignMaterial = new THREE.MeshBasicMaterial( { map: workerSign } );
export let flaggerSign = new THREE.TextureLoader().load( "images/sign-02.png" );
export let flaggerSignMaterial = new THREE.MeshBasicMaterial( { map: flaggerSign } );
export let flagAheadSign = new THREE.TextureLoader().load( "images/sign-03.png" );
export let flagAheadSignMaterial = new THREE.MeshBasicMaterial( { map: flagAheadSign } );
export let menWorkSign = new THREE.TextureLoader().load( "images/sign-04.png" );
export let menWorkSignMaterial = new THREE.MeshBasicMaterial( { map: menWorkSign } );
export let prepareStopSign = new THREE.TextureLoader().load( "images/sign-05.png" );
export let prepareStopSignMaterial = new THREE.MeshBasicMaterial( { map: prepareStopSign } );
export let oneLaneSign = new THREE.TextureLoader().load( "images/sign-06.png" );
export let oneLaneSignMaterial = new THREE.MeshBasicMaterial( { map: oneLaneSign } );
export let workAheadSign = new THREE.TextureLoader().load( "images/sign-07.png" );
export let workAheadSignMaterial = new THREE.MeshBasicMaterial( { map: workAheadSign } );
// Geometry
export let tallTree = new THREE.Geometry()
export let tallCone = new THREE.ConeGeometry( 1.68, 4, 32 )
tallCone.translate(0, 1.35, 0)
tallTree.merge(tallCone)
export let tallSphere = new THREE.SphereGeometry( 1.8, 60, 60)
tallSphere.translate(0, -1.3, 0)
tallTree.merge(tallSphere)
export let shortTree = tallTree.clone()
shortTree.scale(.5, .5, .5)
/* Cone */
export let coreGeometry = new THREE.CylinderGeometry(.07, .2, .5, 32, .8, false, .8)
export let coneBottomG = new THREE.BoxGeometry( .5, .06, .5 )
coneBottomG.translate(0, -.23, 0)
export let coneGeometry = new THREE.Geometry()
coneGeometry.merge(coreGeometry)
coneGeometry.merge(coneBottomG)
export let stripeGeometry = new THREE.CylinderGeometry(.116, .155, .15, 32, 1, false, .8)
export let stripe = new THREE.Mesh( stripeGeometry, white )
