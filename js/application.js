var players = [];
var list = undefined;

window.onload=function() {
    initTabs();
    list = document.getElementsByClassName("player-list")[0];

    players.push(new Player("Ross"));

    players.forEach(function(player) {
        var item = document.createElement("li");
        var name = document.createTextNode(player.name);
        item.appendChild(name);
        list.appendChild(item);
    }, this);
}

var addPlayer = function() {
    if (event.keyCode === 13 && list !== undefined) {
        var player = new Player(document.getElementById("add-player").value);
        players.push(player);
        var item = document.createElement("li");
        var name = document.createTextNode(player.name);
        item.appendChild(name);
        list.appendChild(item);
    }
}