// create the game canvas/world
var game = new Phaser.Game(800, 600, Phaser.AUTO, 'game_div');

// main menu state
var main_menu = {

    preload: function() { 

        // preload backgoround
        game.stage.backgroundColor = '#000000';

        // preload button
        game.load.image('battle_menu_button', 'assets/robo/button.png');

    },

    create: function() { 

        // style for text overlay on buttons
        var style = { font: "30px Arial", fill: "#ffffff", align: "center" };

        // add the battle_menu button and the battle_label to the menu and have them centered
        var battle_button = game.add.button(game.world.centerX, game.world.centerY, 'battle_menu_button', this.goTobattle_menu, this);
        var battle_label = game.add.text(game.world.centerX, game.world.centerY, "Battle", style); 
        battle_button.anchor.set(0.5);
        battle_label.anchor.set(0.5);
        battle_button.scale.setTo(1.5, .5);

    },

    goTobattle_menu: function() {

        // goto battle_menu
        game.state.start('battle_menu'); 

    },

};

// battle menu state
var battle_menu = {

    preload: function() { 

        // preload background
        // battle_menu.game.stage.backgroundColor = '#ffffff';

        // preload button
        game.load.image('button', 'assets/robo/button.png');
        game.load.image('run_button', 'assets/robo/exit.png');

        // load images for robots
        game.load.image('player', 'assets/robo/robot.png');  
        game.load.image('enemy', 'assets/robo/robot.png');  

    },

    create: function() { 

        // create robot on screen
        game.player = this.game.add.sprite(game.world.width * .33, game.world.height *.66, 'player');
        game.enemy = this.game.add.sprite(game.world.width * .66, game.world.height * .33, 'enemy');

        // create health bar for player
        var style = { font: "24px Arial", fill: "#ffffff" };
        game.label_name = this.game.add.text(game.world.width * .75, game.world.height *.66, player.roboName, style); 
        game.label_health = this.game.add.text(game.world.width * .9, game.world.height *.66, player.currentHealth, style); 

        // create buttons
        var runButton =game.add.button(game.world.width * .97, game.world.height *.03, 'run_button', this.runAway, this);
        runButton.anchor.set(0.5);
        runButton.scale.setTo(.2, .2);

    },

    updateHealth: function() {

        // update health
        game.label_health.setText(player.currentHealth);   

    },

    runAway: function() {

        // return to main menu 
        game.state.start('main_menu'); 

    }
};

// robot object
function robot(name, level, xp, health, physicalAttack, physicalDefense, specialAttack, specialDefense, speed) {
    // name
    this.roboName = name;
    // level and xp
    this.level = level;
    this.xp = xp;
    // health
    this.maxHealth = health;
    this.currentHealth = health;
    // physical attack and defense
    this.maxPhysicalAttack = physicalAttack;
    this.currentPhysicalAttack = physicalAttack;
    this.maxPhysicalDefense = physicalDefense;
    this.currentPhysicalDefense = physicalDefense;
    // special attack and defense
    this.maxSpecialAttack = specialAttack;
    this.currentSpecialAttack = specialAttack;
    this.maxSpecialDefense = specialDefense;
    this.currentSpecialDfense = specialDefense;
    // speed
    this.maxSpeed = speed;
    this.currentSpeed = speed;

    // equip parts
    this.equipPart = function() {

    }

    // check if parts equipped
    this.isEquipped = function() {

    }

    // level up! +stats
    this.levelUp = function() {

    }
}

// part object
function part(name, health, physicalAttack, physicalDefense, specialAttack, specialDefense, speed, ability) {
    // name
    this.name = name;
    // health
    this.health = health;
    // physical attack and defense
    this.physicalAttack = physicalAttack;
    this.physicalDefense = physicalDefense;
    // special attack and defense
    this.specialAttack = specialAttack;
    this.specialDefense = specialDefense;
    // speed
    this.speed = speed;
    // ability
    this.ability = ability;

}

// ability object
function ability(name, type, power, accuracy, cooldown, effect, description) {

}

var battle = function(player, enemy, battle_menu) {

    // see who goes first

    // enter battle loop (continues until forfeit or one player's health <= 0)

    // give xp and money

}

// create the player object
var player = new robot("Player", 1, 0, 10, 5, 5, 5, 5, 5, 5);
var enemy = new robot("Enemy", 1, 0, 10, 5, 5, 5, 5, 5, 5);

// add the game states
game.state.add('main_menu', main_menu);  
game.state.add('battle_menu', battle_menu);  
// load the main menu on start up
game.state.start('main_menu'); 
