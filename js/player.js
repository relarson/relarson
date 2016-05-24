// Player class
define(["./round"], function(Round) {
    var counter = 1;
    var Player = function(name) {
        this.name = name;
        this.id = 'player-id-' + counter;
        this.rounds = {
            "1": new Round(),
            "2": new Round(),
            "3": new Round()
        }
        counter++;
    };
    
    Player.prototype.updateRound = function(roundNum, newRound) {
        if (["1", "2", "3"].indexOf(roundNum) === -1) {
            console.err("Player.updateRound: Invalid round: " + roundNum);
        }
        this.rounds[roundNum] = newRound;
    };
    
    Player.prototype.getPuddingCount = function() {
        return this.rounds["1"].pudding + 
            this.rounds["2"].pudding + 
            this.rounds["3"].pudding;
    };
    
    return Player;
});
