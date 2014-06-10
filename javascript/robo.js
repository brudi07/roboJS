// create the game canvas/world
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// main menu state
var main_menu = {

    preload: function() { 

        // create battle_menu button
        main_menu.game.load.image('battle_menu_button', 'assets/robo/battle_menu.png');

    },

    create: function() { 

        // add the battle_menu button to the menu
        main_menu.game.add.button(game.world.centerX - 75, game.world.centerY - 25, 'battle_menu_button', this.goTobattle_menu, this);

    },

    goTobattle_menu: function() {

        // goto battle_menu
        main_menu.game.state.add('battle_menu', battle_menu);  
        main_menu.game.state.start('battle_menu'); 

    },

    exitGame: function() {

        // exit the game (only applies to mobile devices)

    }
};

// battle menu state
var battle_menu = {

    preload: function() { 

        // background image
        battle_menu.stage.game.stage.backgroundColor = '#000000';

        // buttons
        battle_menu.game.load.image('run_button', 'assets/robo/run.png');

        // load images for robots
        battle_menu.game.load.image('player', 'assets/robo/robot.png');  
        battle_menu.game.load.image('enemy', 'assets/robo/robot.png');  

    },

    create: function() { 

        // create robot on screen
        battle_menu.player = this.game.add.sprite(100, 245, 'player');
        battle_menu.enemy = this.game.add.sprite(300, 145, 'enemy');

        // create health bar for player
        var style = { font: "30px Arial", fill: "#ffffff" };
        battle_menu.label_name = this.game.add.text(175, 245, robot.name, style); 
        battle_menu.label_health = this.game.add.text(200, 245, robot.Currenthealth, style); 

        // create buttons
        var runButton = battle_menu.game.add.button(100, 345, 'run_button', this.runAway, this);

    },

    updateHealth: function() {

        // update health
        battle_menu.label_health.content = player.currentHealth;  

    },

    runAway: function() {

        // return to main menu
        game.state.add('main_menu', main_menu);  
        game.state.start('main_menu'); 

    }
};

// robot object
function robot(name, health, physicalAttack, physicalDefense, specialAttack, specialDefense, speed) {
    // name
    this.name = name;
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

    // getters and setters for attributes
    this.getMaxHealth = function() {
        return this.maxHealth;
    }

    this.seMaxHealth = function(maxHealth) {
        return this.maxHealth = maxHealth;
    }

    this.getCurrentHealth = function() {
        return this.currentHealth;
    }

    this.seCurrentHealth = function(currentHealth) {
        return this.currentHealth = currentHealth;
    }

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
var player = new robot("Player", 10, 5, 5, 5, 5, 5, 5);
var enemy = new robot("Enemy", 10, 5, 5, 5, 5, 5, 5);

// load the main menu on start up
game.state.add('main_menu', main_menu);  
game.state.start('main_menu'); 
