// Round class
define(function() {
   var Round = function() {
       // more than 5 still gets 15 points
       var dumplingScores = [0, 1, 3, 6, 10, 15];
       this.maki = 0;
       this.dumpling = 0;
       this.tempura = 0;
       this.sashimi = 0;
       this.pudding = 0;
       this.egg = 0;
       this.salmon = 0;
       this.squid = 0;
       this.wasabiEgg = 0;
       this.wasabiSalmon = 0;
       this.wasabiSquid = 0;
   };
   
   Round.prototype.getStaticPoints = function() {
       return dumplingScores[Math.min(this.dumpling, 5)] +
            ( Math.floor( this.tempura / 2 ) * 5 ) +
            ( Math.floor(this.sashimi / 3 ) * 10 ) +
            this.egg + 
            ( this.salmon * 2 ) +
            ( this.squid * 3 ) +
            ( this.wasabiEgg * 3 ) +
            ( this.wasabiSalmon * 6 ) +
            ( this.wasabiSquid * 9 );
   };
   
   return Round;
});