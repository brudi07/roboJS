// create the game canvas/world
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// create the player
function Player(game) {
  this.game = game;
  this.health = 20;

  this.getHealth = function() {
    return this.health;
  }

  this.setHealth = function(health) {
    return this.health = health;
  }
}

// main menu
var main_menu = {

    preload: function() { 

        // create battle button
        main_menu.game.load.image('battle_button', 'assets/robo/battle.png');

    },

    create: function() { 

        // add the battle button to the menu
        main_menu.game.add.button(game.world.centerX - 75, game.world.centerY - 25, 'battle_button', this.goToBattle, this);

    },

    goToBattle: function() {

        // goto battle
        main_menu.game.state.add('battle', battle);  
        main_menu.game.state.start('battle'); 

    },

    exitGame: function() {

        // exit the game (only applies to mobile devices)

    }
};

// battle state
var battle = {

    preload: function() { 

        // background image
        battle.stage.game.stage.backgroundColor = '#000000';

        // buttons
        battle.game.load.image('run_button', 'assets/robo/run.png');

        // load images for robots
        battle.game.load.image('robot', 'assets/robo/robot.png');  

    },

    create: function() { 

        // create robot on screen
        battle.robot = this.game.add.sprite(100, 245, 'robot');

        // create health bar for player
        var style = { font: "30px Arial", fill: "#ffffff" };
        battle.label_health = this.game.add.text(200, 245, player.health, style); 

        // create buttons
        battle.game.add.button(100, 345, 'run_button', this.runAway, this);

    },

    updateHealth: function() {

        // update health
        battle.label_health.content = player.health;  

    },

    runAway: function() {

        // return to main menu
        game.state.add('main_menu', main_menu);  
        game.state.start('main_menu'); 

    }
};

// load the main menu on start up
var player = new Player(game);
game.state.add('main_menu', main_menu);  
game.state.start('main_menu'); 