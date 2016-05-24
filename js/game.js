define(["./player", "./round"], function() {
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
       var maki = getMakiScores();
       var pudding = getPuddingCounts();
       playerIds.forEach(function(playerId) {
           var player = this.players[playerId];
           var round1Maki = getMakiPoints(maki["1"], player.rounds["1"].maki);         
           var round2Maki = getMakiPoints(maki["2"], player.rounds["2"].maki);
           var round3Maki = getMakiPoints(maki["3"], player.rounds["3"].maki);
           scores[playerId] = {
               "1": player.rounds["1"].getStaticScore + round1Maki,
               "2": player.rounds["2"].getStaticScore + round2Maki,
               "3": player.rounds["3"].getStaticScore + round3Maki,
               "dessert": getPuddingPoints(pudding, player.getPuddingCount())
           };
          
       }, this);  
   };
   
    var getMakiScores = function() {
       var playerIds = Object.keys(this.players);
       var maki = {
           "1": [],
           "2": [],
           "3": []
       };       
       playerIds.forEach(function(playerId) {
           var player = this.players[playerId];
           maki["1"].push(player.rounds["1"].maki);     
           maki["2"].push(player.rounds["2"].maki); 
           maki["3"].push(player.rounds["3"].maki);  
       }, this);
       function compareNums(a, b) {
           return b - a;
       } 
       maki["1"].sort(compareNums);
       maki["2"].sort(compareNums);
       maki["3"].sort(compareNums);
       return maki; 
   };
   
   var getPuddingCounts = function() {
       var playerIds = Object.keys(this.players);
       var pudding = [];       
       playerIds.forEach(function(playerId) {
           pudding.push(player.getPuddingCount()); 
       }, this);
       function compareNums(a, b) {
           return b - a;
       } 
       pudding.sort(compareNums);
       return pudding; 
   }
   
   var getMakiPoints = function(allMaki, playerMaki) {
       var place = allMaki.indexOf(playerMaki);
       if (place === 0) {
           // solo or tied for first
           var firstPlaceCount = allMaki.lastIndexOf(playerMaki) + 1; // add 1 since solo will return 0 tie with 2 will return 1 etc
           return Math.floor( 6 / firstPlaceCount ); // 6 points shared evenly, remainder lost
       } else if (place === 1) {
           //solo or tied for second (and there wasnt tie for first)
           var secondPlaceCount = allMaki.lastIndexOf(playerMaki); // dont need + 1 as return is 1 for solo, 2 for tie with 2 etc
           return Math.floor( 3 / secondPlaceCount ); // 3 points shared evenly, remainder lost
       } else {
           // didnt get shared-first or second (no second place points if shared first)
           return 0;
       }
   }
   
   var getPuddingPoints = function(allPudding, playerPudding) {
       var place = allPudding.indexOf(playerPudding);
       if (place === 0) {
           // solo or tied for first
           var firstPlaceCount = allMaki.lastIndexOf(playerMaki) + 1; // add 1 since solo will return 0 tie with 2 will return 1 etc
           return Math.floor( 6 / firstPlaceCount ); // 6 points shared evenly, remainder lost
       } else {
           if (allPudding.length < 3) {
               return 0; // in 2 player, if you aint first, you last (but no negative points)
           } else {
               // last place gets -6
               var lastIndex = allPudding.lastIndexOf(playerPudding);
               if (lastIndex === allPudding.length-1) {
                   // last place of some sort
                   // if lastIndex === place then it is solo loss and you lose all 6 points
                   return Math.floor( -6 / (lastIndex - place + 1));
               } else {
                   // middling, 0 points
                   return 0;
               }
           }
       }
   }
   
   return Game;
});