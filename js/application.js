window.onload=function() {
    var players = [];
    var list = document.getElementsByClassName("playerList")[0];

    players.push(new Player("Ross"));

    players.forEach(function(player) {
        list.appendChild(player.name);
    }, this);
}