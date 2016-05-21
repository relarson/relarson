// Player class
define(["./round"], function(Round) {
    var Player = function(name) {
        this.name = name;
        this.rounds = {
            "1": new Round(),
            "2": new Round(),
            "3": new Round()
        }
    };
    
    return Player
});
