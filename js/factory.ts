const factory = {
    mario: () => new ActionCard(3, "Mario", "Action", "img/mario.png"),
    money: () => new MoneyCard(2, "Monaie", "Argent", 3),
    point: () => new PointCard(2, "3 points", "Point", 3)
}