document.addEventListener('DOMContentLoaded', function () {
    var searchInput = document.getElementById('search');
    var addPlayerBtn = document.getElementById('addPlayer');
    var totalPrice = document.getElementById('price');
    var playerList = document.querySelector('#playerList ul');
    var total = 0;
    var selectedPlayers = [];

    var players = [
        { name: "Alexis Mac Allister", price: 26 },
        { name: "Christopher Nkunku", price: 82 },
        { name: "Darwin Nunez", price: 52.5 },
        { name: "Marcus Rashford", price: 62.4 }
        // Add more players here
    ];

    addPlayerBtn.addEventListener('click', function () {
        var selectedPlayer = searchInput.value.trim();
        if (selectedPlayer !== "") {
            var player = getPlayer(selectedPlayer);
            if (player !== null) {
                total += player.price;
                totalPrice.textContent = total;
                searchInput.value = "";
                addPlayerToList(player.name);
                selectedPlayers.push(player.name);
            } else {
                alert("Player not found in the database!");
            }
        } else {
            alert("Please enter a player name!");
        }
    });

    function getPlayer(playerName) {
        var searchTerms = playerName.toLowerCase().split(" ");
        for (var i = 0; i < players.length; i++) {
            var player = players[i];
            var playerNameParts = player.name.toLowerCase().split(" ");
            var found = true;
            for (var j = 0; j < searchTerms.length; j++) {
                if (playerNameParts.indexOf(searchTerms[j]) === -1) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return player;
            }
        }
        return null;
    }

    function addPlayerToList(playerName) {
        var li = document.createElement('li');
        li.textContent = playerName;
        playerList.appendChild(li);
    }
});
