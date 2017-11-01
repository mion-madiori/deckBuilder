class ActionCard extends Card {
    constructor(cost, textHeader, textFooter, imgParam) {
        super(cost, textHeader, textFooter);

        const img = document.createElement("img");
        const body = document.createElement("article");
        const txtBody = document.createTextNode("Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.")

        img.className = "img";
        body.className = "body";

        img.src = imgParam;

        body.appendChild(txtBody);

        this.container.appendChild(img);
        this.container.appendChild(body);
    }
}