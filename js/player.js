// Player class

var Player = function(name) {
    this.name = name;
    this.scores = [0, 0, 0, 0]; // 3 roundsS plus dessert
};

// add member functions
Player.prototype.addScore = function(round, value) {
    this.scores[round-1] = value;
};

Player.prototype.getTotalScore = function() {
    return this.scores.reduce( (prev, curr) => prev + curr );
}