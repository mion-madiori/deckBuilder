class Game {
    private listPlayers: Array<Player>;

    constructor(listPlayers?: Array<Player>) {
        this.listPlayers = listPlayers;
    }

    startGame() {
        let baseDeck: Array<any> = [];

        for (let i = 0; i < 7; i++) {
            baseDeck.push(factory.money1Player);
        }

        for (let i = 0; i < 3; i++) {
            baseDeck.push(factory.pointPlayer);
        }

        let shuffle = Utils.shuffleArray(baseDeck);

        shuffle.forEach(element => {
            element();
        });
    }

    private shuffle() {

    }
}