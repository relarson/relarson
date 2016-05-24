window.onerror = function(error) {
    alert(error);
};

define(["./player", "./game"], function(Player, Game) {
    var players = [];
    var table = undefined;
    var game = new Game();

    table = document.getElementById("player-table-body");

    var addPlayer = function() {
        if (table !== undefined) {
            var input = document.getElementById("add-player");
            var player = new Player(input.value);
            players.push(player);
            game.addPlayer(player);
            var rowCount = table.rows.length;
            var row = table.insertRow(rowCount);
 
            var nameCell = row.insertCell(0);
            nameCell.innerHTML = player.name;
            var rd1 = row.insertCell(1);
            rd1.innerHTML = 0;
            var rd2 = row.insertCell(2);
            rd2.innerHTML = 0;
            var rd3 = row.insertCell(3);
            rd3.innerHTML = 0;
            var dessert = row.insertCell(4);
            dessert.innerHTML = 0;
            var total = row.insertCell(5);
            total.innerHTML = 0;

            row.id = player.id;
            input.value = '';
            
            if (rowCount >= 4) { // rowCount doesnt include new player so max is 4, not 5
                input.readOnly = true;
                input.hidden = true;
            }
            
            updateScores();
        }
    }

    var searchKeyPress = function(e) {
        // look for window.event in case event isn't passed in
        e = e || window.event;
        if (e.keyCode == 13)
        {
            addPlayer();
            return false;
        }
        return true;
    }
    
    var updateScores = function() {
        var scores = game.getScores();
        return 0;
    }
    
    document.getElementById("add-player").onkeypress = searchKeyPress
    
    return {
        addPlayer: addPlayer,
        searchKeyPress: searchKeyPress
    }
    
});

