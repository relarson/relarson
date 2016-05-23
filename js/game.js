define(["./player", "./round"] function() {
   var Game = function() {
       this.players = {};
   };
   
   Game.prototype.addPlayer = function(player) {
       this.players[player.id] = player;
   };
   
   Game.prototype.removePlayer = function(playerId) {
       return delete this.players[playerId];
   };
   
   Game.prototype.getScores = function() {
       var scores = {};
       var playerIds = Object.keys(this.players);
       playerIds.forEach(function(playerId) {
           var player = this.players[playerId];
           // this is a long way off, need to figure out maki scoring
           // and pudding is just doing count for now which is wrong
           scores[playerId] = {
               "1": player.rounds["1"].getStaticScore + round1Maki,
               "2": player.rounds["2"].getStaticScore + round2Maki,
               "3": player.rounds["3"].getStaticScore + round3Maki,
               "dessert": player.getPuddingCount();
           };
          
       }, this);  
   };
   
   return Game;
});