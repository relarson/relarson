window.onload=function() {
    var players = [];
    var list = document.getElementsByClassName("player-list")[0];

    players.push(new Player("Ross"));

    players.forEach(function(player) {
        list.appendChild(player.name);
    }, this);
}