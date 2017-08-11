$(document).on('turbolinks:load', function() {
var camera, scene, renderer,
    geometry, material, mesh;
 
init();
animate(); 

function init() {
    //stats = new Stats();
    //stats.setMode(0);
    //stats.domElement.style.position = 'absolute';
    //stats.domElement.style.left = '0px';
    //stats.domElement.style.top = '0px';
    //document.body.appendChild(stats.domElement);

    clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );

    scene = new THREE.Scene();
 
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.z = 1000;
    scene.add( camera );
 
    geometry = new THREE.CubeGeometry( 300, 500, 200 );
    material = new THREE.MeshLambertMaterial( { color: 0xaa6666, wireframe: false } );
    mesh = new THREE.Mesh( geometry, material );
    //scene.add( mesh );
    cubeSineDriver = 0;
 
    textGeo = new THREE.PlaneGeometry(300,300);
    THREE.ImageUtils.crossOrigin = ''; //Need this to pull in crossdomain images from AWS
    textTexture = THREE.ImageUtils.loadTexture("https://2.bp.blogspot.com/-EorngjMUVSg/U8SOie45JRI/AAAAAAAAJlM/-epZtQ4O3pI/s1600/The+ruins+of+Dresden,+1945+2.jpg");
    textMaterial = new
      THREE.MeshLambertMaterial({color: 0x00ffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    text = new THREE.Mesh(textGeo,textMaterial);
    text.position.z = 1000;
    scene.add(text);

    light = new THREE.DirectionalLight(0xffffff,0.5);
    light.position.set(-1,0.01,1);
    scene.add(light);
                                           
    textTexture = THREE.ImageUtils.loadTexture("//i.kinja-img.com/gawker-media/image/upload/okeyedjfngxxwj2cqbul.jpg");
    textMaterial = new THREE.MeshLambertMaterial({color: 0x00ffff, opacity: 1, map: textTexture, transparent: true, blending: THREE.AdditiveBlending})
    text = new THREE.Mesh(textGeo,textMaterial);
    text.position.z = 900;
    scene.add(text);

    light = new THREE.DirectionalLight(0xffffff,0.5);
    light.position.set(-1,0,1);
    scene.add(light);
  
    smokeTexture = THREE.ImageUtils.loadTexture('https://s3-us-west-2.amazonaws.com/s.cdpn.io/95637/Smoke-Element.png');
    smokeMaterial = new THREE.MeshLambertMaterial({color: 0x00ddff, map: smokeTexture, transparent: true});
    smokeGeo = new THREE.PlaneGeometry(300,350);
    smokeParticles = [];


    for (p = 0; p < 150; p++) {
        var particle = new THREE.Mesh(smokeGeo,smokeMaterial);
        particle.position.set(Math.random()*500-250,Math.random()*500-250,Math.random()*1000-100);
        particle.rotation.z = Math.random() * 360;
        scene.add(particle);
        smokeParticles.push(particle);
    }
 
    document.body.appendChild( renderer.domElement );
 
}
 
function animate() {
 
    // note: three.js includes requestAnimationFrame shim
   // stats.begin();
    delta = clock.getDelta();
    requestAnimationFrame( animate );
    evolveSmoke();
    render();
    stats.end();
}
 
function evolveSmoke() {
    var sp = smokeParticles.length;
    while(sp--) {
        smokeParticles[sp].rotation.z += (delta * 0.22);
    }
}

function render() {
 
    mesh.rotation.x += 0.005;
    mesh.rotation.y += 0.015;
    cubeSineDriver += .01;
    mesh.position.z = 100 + (Math.sin(cubeSineDriver) * 600);
    renderer.render( scene, camera );
 
}
//instantiate a listener
var audioListener = new THREE.AudioListener();

// add the listener to the camera
camera.add( audioListener );

// instantiate audio object
var oceanAmbientSound = new THREE.Audio( audioListener );

// add the audio object to the scene
scene.add( oceanAmbientSound );

// instantiate a loader
var loader = new THREE.AudioLoader();

// load a resource
loader.load(
	// resource URL
	'http://www.orangefreesounds.com/wp-content/uploads/2016/09/Air-raid-siren.mp3',
	// Function when resource is loaded
	function ( audioBuffer ) {
		// set the audio object buffer to the loaded object
		oceanAmbientSound.setBuffer( audioBuffer );

		// play the audio
		oceanAmbientSound.play();
	},
	// Function called when download progresses
	function ( xhr ) {
		console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );
	},
	// Function called when download errors
	function ( xhr ) {
		console.log( 'An error happened' );
	}
);
]);