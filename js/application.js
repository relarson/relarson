window.onload=function() {
    initTabs();
    var players = [];
    var list = document.getElementsByClassName("playerList")[0];

    players.push(new Player("Ross"));

    players.forEach(function(player) {
        var item = document.createElement("li");
        var name = document.createTextNode(player.name);
        item.appendChild(name);
        list.appendChild(item);
    }, this);
}