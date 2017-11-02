const player = document.getElementById('player');
const table = document.getElementById('table');

const factory = {
    marioPlayer: () => new ActionCard(player, 3, "Mario", "Action", "img/mario.png"),
    moneyPlayer: () => new MoneyCard(player, 2, "Monaie", "Argent", 3),
    pointPlayer: () => new PointCard(player, 2, "3 points", "Point", 3),
    marioTable: () => new ActionCard(table, 3, "Mario", "Action", "img/mario.png"),
    moneyTable: () => new MoneyCard(table, 2, "Monaie", "Argent", 3),
    pointTable: () => new PointCard(table, 2, "3 points", "Point", 3)
}