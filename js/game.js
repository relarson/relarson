define(["./player", "./round"] function() {
   var Game = function() {
       this.players = {};
   };
   
   Game.prototype.addPlayer = function(player) {
       this.players[player.id] = player;
   };
   
   Game.prototype.removePlayer = function(playerId) {
       this.players
   };
   
   return Game;
});