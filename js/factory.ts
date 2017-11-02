const player = document.getElementById('player');
const table = document.getElementById('table');
const pick = document.getElementById('pick');

const factory = {
    pickPlayer: () => new BackCard(pick),
    
    marioPlayer: () => new ActionCard(player, 3, "Mario", "Action", "img/mario.png"),
    money1Player: () => new MoneyCard(player, 1, "Monaie", "Argent", 1),
    money2Player: () => new MoneyCard(player, 2, "Monaie", "Argent", 2),
    money3Player: () => new MoneyCard(player, 3, "Monaie", "Argent", 3),
    pointPlayer: () => new PointCard(player, 2, "3 points", "Point", 3),

    marioTable: () => new ActionCard(table, 3, "Mario", "Action", "img/mario.png"),
    money1Table: () => new MoneyCard(player, 1, "Monaie", "Argent", 1),
    money2Table: () => new MoneyCard(player, 2, "Monaie", "Argent", 2),
    money3Table: () => new MoneyCard(player, 3, "Monaie", "Argent", 3),
    pointTable: () => new PointCard(table, 2, "3 points", "Point", 3)
}