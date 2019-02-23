var game = new Phaser.Game(800, 600, Phaser.AUTO, '', {preload:preload, create:create, update:update});
//800, 600 = width, height of canvas
//Phaser.AUTO = setting auto to browser
//'' = <body> 
		//<canvas>
		//</canvas>
	//<//body>
//preload, create, update = preload from function preload, create for create, etc...

//initial scores/things to keep track
var score = 0;
var life = 3;

function preload(){
	//two important things: image (static img) and sprite sheet (animation thing)
	//(id, src)
	game.load.image ('platform','assets/platform.png');
	game.load.image ('sky','assets/sky.png');
	//game.load.image ('star','../globalres/lesson7assets/star.png');
	//game.load.image ('diamond','../globalres/lesson7assets/diamond.png');
	//game.load.image ('firstaid','../globalres/lesson7assets/firstaid.png');
	//game.load.spritesheet ('player','../globalres/lesson7assets/dude.png', 32, 48);
	//game.load.spritesheet ('enemy','../globalres/lesson7assets/baddie.png', 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	//BACKGROUND
	//sky
	game.add.sprite(0,0,'sky');

	// //this is a variable that stores a function
	// platforms = game.add.physicsGroup();
	// platforms.enableBody = true;

	// //ground
	// var ground = platforms.create(0,550,'ground');
	// //multiplies height and width of src 'platform' by 2
	// ground.scale.setTo(2,2);
	// //when things are colliding, ground would bounce back, thus gotta make it immovable
	// ground.body.immovable = true;

	// //ledge 1
	// var ledge1 = platforms.create((-100),270,'ground');
	// ledge1.body.immovable = true;

	// //ledge 2
	// var ledge2 = platforms.create(400,410,'ground');
	// ledge2.body.immovable = true;

	// //ITEMS
	// var stlye = {font: 'bold 32px Arial', fill:'#fff'}
	// scorelabel = game.add.text(300,560,'Score: ', style);
	// scoretext = game.add.text(420, 560, score, style);

	// lifelable = game.add.text(10,5, 'Lives: ', style);
	// lifetext = game.add.text(120,5, life, style);
}

function update(){
	
}