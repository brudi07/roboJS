// create the game canvas/world
var game = new Phaser.Game(400, 490, Phaser.AUTO, 'game_div');

// main menu
var main_menu = {

    preload: function() { 

        // create battle button
        game.load.image('battle_button', 'assets/robo/battle.png');

    },

    create: function() { 

        // add the battle button to the menu
        this.game.add.button(200, 200, 'battle_button', this.goToBattle, this);

    },

    goToBattle: function() {

        // goto battle

    }
};

// load the main menu on start up
game.state.add('main_menu', main_menu);  
game.state.start('main_menu'); 