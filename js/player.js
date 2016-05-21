// Player class
define(["./round"], function(Round) {
    var Player = function(name) {
        this.name = name;
        this.rounds = {
            "1": new Round.Round(),
            "2": new Round.Round(),
            "3": new Round.Round()
        }
    };
    
    return {
        Player: Player
    }
});
