var game = new Phaser.Game(800, 600, Phaser.AUTO,'', {preload:preload, create:create, update:update});

var score = 0;
var life = 3;
var starsCollected = 0;

function preload(){
  game.load.image('sky', 'assets/sky.png');
  game.load.image('ground', 'assets/platform.png');
  game.load.image('star', 'assets/star.png');
  game.load.image('diamond', 'assets/diamond.png');
  game.load.image('firstaid', 'assets/firstaid.png');
  game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
  game.load.spritesheet('baddie', 'assets/baddie.png', 32, 32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);
	
	// Create the sky
	game.add.sprite(0, 0, 'sky');
	// Create group of platforms
	platforms = game.add.physicsGroup();
	platforms.enableBody = true;
	// Create the ground
	var ground = platforms.create(0, 550, 'ground');
	ground.scale.setTo(2, 2);
	ground.body.immovable = true;
	// Create the ledges
	var ledge = platforms.create(400, 400, 'ground');
	ledge.body.immovable = true;
	ledge = platforms.create(-100, 250, 'ground');
	ledge.body.immovable = true;

	//set text style
	var style = {font: "bold 32px Arial", fill: "#fff"}
	//positioning the score
	scorelabel = game.add.text(300,560, "Score: ", style);
	scoretext = game.add.text(420, 560, score,style);
	scorelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	scoretext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

	//positioning the lives
	lifelabel = game.add.text(10,5, "Lives: ", style);
	lifetext = game.add.text(120,5, life,style);
	lifelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
	lifetext.setShadow(3,3,'rgba(0,0,0,0.5)',2);

	//creating the player sprite
	player = game.add.sprite(32, 400, "dude");

	//animate player sprites
	//add(variable directions are alr set, [frames on loop], frames per second, true);
	player.animations.add("left", [0,1,2,3],10,true);
	player.animations.add("right", [5,6,7,8],10,true);
	game.physics.arcade.enable(player);
	player.body.bounce.y = 0.2;
	player.body.gravity.y = 300;
	player.body.collideWorldBounds = true;

	//creating the enemy sprite
	enemy = game.add.sprite(760, 120, "baddie");
	enemy.animations.add("left", [0,1],10,true);
	enemy.animations.add("right", [2,3],10,true);
	game.physics.arcade.enable(enemy);
	enemy.body.bounce.y = 0.2;
	//enemy's gravity > player so it falls faster
	enemy.body.gravity.y = 500;
	enemy.body.collideWorldBounds = true;

	//stars
	star = game.add.physicsGroup();
	star.enableBody = true;
	for (var i=0; i<12; i++){
		var appendStars = star.create((70*i), 0, 'star');
		appendStars.body.bounce.y = 0.7 - Math.random()*0.2;
		appendStars.body.gravity.y = 700;
	}

	//diamonds
	diamond = game.add.physicsGroup();
	diamond.enableBody = true;
	

	cursors = game.input.keyboard.createCursorKeys();
}

function update(){
	game.physics.arcade.collide(player,platforms);
	game.physics.arcade.collide(star,platforms);
	game.physics.arcade.collide(diamond,platforms);
	game.physics.arcade.collide(enemy,platforms);
	game.physics.arcade.overlap(player, star, collectStar);
	game.physics.arcade.overlap(player, diamond, collectDiamond);
	game.physics.arcade.overlap(player, enemy, loseLife);

	//player not doing anything or default condition
	player.body.velocity.x=0;


	//player control
	if (cursors.left.isDown){
		player.body.velocity.x = (-150);
		player.animations.play("left");
	}
	else if (cursors.right.isDown) {
		player.body.velocity.x = 150;
		player.animations.play("right");
	}
	else {
		player.animations.stop();
		player.frame = 4;
	}
	if (cursors.up.isDown && player.body.touching.down){
		player.body.velocity.y = (-300);
	}

	function collectStar(player, star){
		score += 1;
		starsCollected += 1;
		scoretext.setText(score);
		star.kill();
		star.reset(Math.floor(Math.random()*750),0);
		if (starsCollected==15) {
			starsCollected = 0;
			var appendDiamond = diamond.create(Math.floor(Math.random()*750),0, 'diamond');
			appendDiamond.body.bounce.y = 0.7 - Math.random()*0.2;
			appendDiamond.body.gravity.y = 700;
		}
	}

	function collectDiamond(player, diamond){
		score += 30;
		scoretext.setText(score);
		diamond.kill();
	}

	function loseLife(player, enemy){
		life --;
		lifetext.setText(life);
		enemy.kill();
		enemy.reset(10,20);
		enemy.animations.play("left");
		enemy.body.velocity.x = (-120);
	}

	function moveEnemy(){
		//enemy AI

		//checking condition
		if(enemy.x > 350 && enemy.x < 150){
			//if player is around first base
			if(player.y>(250)){
				//if enemy is on thrid base
					if (enemy.y <100){
						//get out of ledge by moving right to second base
						enemy.animations.play("right");
				 		enemy.body.velocity.x = 120;
			 		}
		 		//if enemy is on second base
			 		else if (enemy.y <250){
			 			//get out of ledge by moving left to first base
			 			enemy.animations.play("left");
				 		enemy.body.velocity.x = (-120);
			 		}
		 		//if enemy is on first base too
			 		else if(enemy.x > 759 && player.x < enemy.x){
						enemy.animations.play("left");
						enemy.body.velocity.x = (-120);
					}
					else if(enemy.x > 0 && player.x > enemy.x){
						enemy.animations.play("right");
						enemy.body.velocity.x = (120);
					}
			}
			else if(player.y>(250)){
				//if enemy is on thrid base
					if (enemy.y <100){
						//get out of ledge by moving right to second base
						enemy.animations.play("right");
				 		enemy.body.velocity.x = 120;
			 		}
		 		//if enemy is on second base
			 		else if (enemy.y <250){
			 			//get out of ledge by moving left to first base
			 			enemy.animations.play("left");
				 		enemy.body.velocity.x = (-120);
			 		}
		 		//if enemy is on first base too
			 		else if(enemy.x > 759 && player.x < enemy.x){
						enemy.animations.play("left");
						enemy.body.velocity.x = (-120);
					}
					else if(enemy.x > 0 && player.x > enemy.x){
						enemy.animations.play("right");
						enemy.body.velocity.x = (120);
					}
			}
			// else if(player.y<(250)){
			// 	//second base
			// 	enemy.animations.play("right");
		 // 		enemy.body.velocity.x = 120;
		 // 		enemy.body.velocity.y = 120;
			// }
			// else if(player.y<(100)){
			// 	//third base
			// 	enemy.animations.play("right");
		 // 		enemy.body.velocity.x = 120;
		 // 		enemy.body.velocity.y = 120;
			// }
		}


		// else if(player.y > (250) && enemy.x<1){
		// 	enemy.animations.play("right");
		// 	enemy.body.velocity.x = 120;
		// }

		// else if(player.y < (250) && enemy.x < 405){
		// 	enemy.animations.play("right");
		//  	enemy.body.velocity.x = 120;
		//  }
	}

	function endGame(){
		player.kill();
		scorelabel.text = "GAME OVER, you've scored: "+score;
		scoretext.visible = false;
		lifelabel.visible = false;
		lifetext.visible = false;
	}

	moveEnemy();

	if(life<0){
		endGame();
	}

}