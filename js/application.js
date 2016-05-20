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
    if (list !== undefined) {
        var input = document.getElementById("add-player");
        var player = new Player(input.value);
        players.push(player);
        var item = document.createElement("li");
        var name = document.createTextNode(player.name);
        item.appendChild(name);
        list.appendChild(item);
        input.value = '';
    }
}

var searchKeyPress = function(e) {
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('add-player-btn').click();
        return false;
    }
    return true;
}