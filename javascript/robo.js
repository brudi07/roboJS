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
        game.load.image('testHead', 'assets/robo/robot.png');  

    },

    create: function() { 

        // create the robots on screen
        game.player = this.game.add.sprite(game.world.width * .33, game.world.height *.5, player.headPart.part.image);
        game.enemy = this.game.add.sprite(game.world.width * .66, game.world.height * .1, enemy.headPart.part.image);
        game.player.anchor.set(0.5);
        game.enemy.anchor.set(0.5);

        // style for text
        var style = { font: "24px Arial", fill: "#ffffff" };

        // create player name and health bar
        game.label_playerName = this.game.add.text(game.world.width * .6, game.world.height *.5, player.roboName, style); 
        game.label_playerHealth = this.game.add.text(game.world.width * .8, game.world.height * .5, player.currentHealth + " / " + player.maxHealth, style); 
        game.label_playerName.anchor.set(0.5);
        game.label_playerHealth.anchor.set(0.5);

        // create enemy name and health bar
        game.label_enemyName = this.game.add.text(game.world.width * .2, game.world.height *.1, enemy.roboName, style); 
        game.label_enemyHealth = this.game.add.text(game.world.width * .4, game.world.height * .1, enemy.currentHealth + " / " + enemy.maxHealth, style); 
        game.label_enemyName.anchor.set(0.5);
        game.label_enemyHealth.anchor.set(0.5);

        // create exit button
        var runButton = game.add.button(game.world.width * .97, game.world.height *.03, 'run_button', this.runAway, this);
        runButton.anchor.set(0.5);
        runButton.scale.setTo(.2, .2);

        // head ability button and text
        var headButton = game.add.button(game.world.width * .1, game.world.height *.95, 'button', this.getPlayerInput, {selectedPart: player.headPart});
        headButton.anchor.set(0.5);
        headButton.scale.setTo(1.5, .5);
        game.label_headButton = this.game.add.text(game.world.width * .1, game.world.height *.95, player.headPart.part.ability.name, style); 
        game.label_headButton.anchor.set(0.5);

        // left arm ability button and text
        var lArmButton = game.add.button(game.world.width * .3, game.world.height *.95, 'button', this.getPlayerInput, {selectedPart: player.lArmPart});
        lArmButton.anchor.set(0.5);
        lArmButton.scale.setTo(1.5, .5);
        game.label_lArmButton = this.game.add.text(game.world.width * .3, game.world.height *.95, player.lArmPart.part.ability.name, style); 
        game.label_lArmButton.anchor.set(0.5);

        // right arm ability button and text
        var rArmButton = game.add.button(game.world.width * .5, game.world.height *.95, 'button', this.getPlayerInput, {selectedPart: player.rArmPart});
        rArmButton.anchor.set(0.5);
        rArmButton.scale.setTo(1.5, .5);
        game.label_rArmButton = this.game.add.text(game.world.width * .5, game.world.height *.95, player.rArmPart.part.ability.name, style); 
        game.label_rArmButton.anchor.set(0.5);

        // body ability button and text
        var bodyButton = game.add.button(game.world.width * .7, game.world.height *.95, 'button', this.getPlayerInput, {selectedPart: player.bodyPart});
        bodyButton.anchor.set(0.5);
        bodyButton.scale.setTo(1.5, .5);
        game.label_bodyButton = this.game.add.text(game.world.width * .7, game.world.height *.95, player.bodyPart.part.ability.name, style); 
        game.label_bodyButton.anchor.set(0.5);

        // 
        var legsButton = game.add.button(game.world.width * .9, game.world.height *.95, 'button', this.getPlayerInput, {selectedPart: player.legsPart});
        legsButton.anchor.set(0.5);
        legsButton.scale.setTo(1.5, .5);
        game.label_legsButton = this.game.add.text(game.world.width * .9, game.world.height *.95, player.legsPart.part.ability.name, style); 
        game.label_legsButton.anchor.set(0.5);

    },

    // battle loop that continues until one players health reaches 0
    battle: function(player, enemy, playerPart, enemyPart) {
        console.log("FIGHT!");
        // wait until both players select their ability 
        if (playerPart.part.ability.selected && enemyPart.part.ability.selected) {

            console.log("Player selected " + playerPart.part.ability.name + " and Enemy selected " + enemyPart.part.ability.name);

            // disable buttons so that no further input can happen until turn is over

            // see who goes first, based on ability priority and player speed

            // players attack in determined order
            
            // check if either player is dead after attack

            // if no player is dead, re-enable buttons
            playerPart.part.ability.selected = false;
            enemyPart.part.ability.selected = false;
        }
    },

    // check to see who goes first
    isFirst: function(player, enemy, playerPart, enemyPart) { 

    },

    // check to see if either player has died
    isDead: function(player, enemy) {

        console.log(player.currentHealth <= 0 || enemy.currentHealth <= 0);
        return (player.currentHealth <= 0 || enemy.currentHealth <= 0);
         
    },

    // get the users input (*this needs to be refactored*)
    getPlayerInput: function() {
        if (!this.selectedPart.part.ability.selected) {
            battle_menu.getEnemyInput();
            battle_menu.battle(player, enemy, this.selectedPart, battle_menu.getEnemyInput()); 
        }

    },

    // get the enemy input (*this needs to be refactored*)
    getEnemyInput: function() {
        var input = "";
        var rng = Math.floor(Math.random()*4);
        if (rng === 0) {
            input = enemy.headPart;
        } else if (rng === 1) {
            input = enemy.bodyPart;
        } else if (rng === 2) {
            input = enemy.lArmPart;
        } else if (rng === 3) {
            input = enemy.rArmPart;
        } else {
            input = enemy.legsPart;
        }
        input = enemy.headPart;
        input.part.ability.selected = true;
        return input;
    },

    // update the health displayed on screen
    updateHealth: function() {

        game.label_playerHealth.setText(player.currentHealth + " / " + player.maxHealth);   

    },

    // return to the main menu
    runAway: function() {
 
        console.log("Run Away!");
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
    // status effect robot can have
    this.statusEffect = null;
    // parts of robot
    this.headPart = {
        "partType":"Head",
        "part":"null"
    }
    this.bodyPart = {
        "partType":"Body",
        "part":"null"
    }
    this.lArmPart = {
        "partType":"Left Arm",
        "part":"null"
    }
    this.rArmPart = {
        "partType":"Right Arm",
        "part":"null"
    }
    this.legsPart = {
        "partType":"Legs",
        "part":"null"
    }

    // equip parts
    this.equipPart = function(oldPart, newPart) {

        if (oldPart.partType === newPart.partType) {
            oldPart.part = newPart;
            console.log("Equipped " + oldPart.part.name + " as " + oldPart.partType);
        }

    }

    // check if parts equipped
    this.isEquipped = function(part) {

        var equipped = false;
        if (part != null) {
            equipped = true;
        }
        return equipped;

    }

    // level up! +stats
    this.levelUp = function() {

        this.level += 1;
        this.maxHealth += 5;
        this.maxPhysicalAttack += 1;
        this.maxPhysicalDefense += 1;
        this.maxSpecialAttack += 1;
        this.maxSpecialDefense += 1;
        this.maxSpeed += 1;

    }

}

// part object
function part(name, partType, ability, requiredLevel, gem) {
    // name
    this.name = name;
    //type
    this.partType = partType;
    // ability
    this.ability = ability;
    // required level
    this.requiredLevel = requiredLevel;
    // gem (socket for +stats)
    this.gem = gem;
    // image to display on screen
    this.image = null;

}

// ability object
function ability(name, type, priority, power, accuracy, cooldown, effect, description) {
    // name
    this.name = name;
    // type
    this.type = type;
    // priority (determines which attack goes first)
    this.priority = priority;
    // power (ability power)
    this.power = power;
    // accuracy
    this.accuracy = accuracy;
    // cooldown (how many turns before move can be used again)
    this.cooldown = cooldown;
    // effect (special effects the ability can have i.e. stat reduction, status effects, non damage abilities)
    this.effect = effect;
    // description (ability description to display to user)
    this.description = description;
    // check if ability has been selected for attack
    this.selected = false;

    // effect functions
    this.physicalAttackUp = function(player, enemy) {

        player.currentPhysicalAttack += 5;
        console.log(player.roboName + "'s physical attack increased to " + player.currentPhysicalAttack);

    }

}

// create the player object
var player = new robot("Player", 1, 0, 10, 5, 5, 5, 5, 5, 5);
var enemy = new robot("Enemy", 1, 0, 10, 5, 5, 5, 5, 5, 5);
var testAbility = new ability("Test Ability", "Attack", 1, 20, 100, 0, null, "Test description");
var headPart = new part("Test Part", "Head", testAbility, 1, null);
var bodyPart = new part("Test Part", "Body", testAbility, 1, null);
var lArmPart = new part("Test Part", "Left Arm", testAbility, 1, null);
var rArmPart = new part("Test Part", "Right Arm", testAbility, 1, null);
var legsPart = new part("Test Part", "Legs", testAbility, 1, null);
headPart.image = "testHead";
player.equipPart(player.headPart, headPart);
player.equipPart(player.bodyPart, bodyPart);
player.equipPart(player.lArmPart, lArmPart);
player.equipPart(player.rArmPart, rArmPart);
player.equipPart(player.legsPart, legsPart);
enemy.equipPart(enemy.headPart, headPart);

// add the game states
game.state.add('main_menu', main_menu);  
game.state.add('battle_menu', battle_menu);  
// load the main menu on start up
game.state.start('main_menu'); 
