class ActionCard extends Card {
    constructor(divContainer:HTMLElement, cost:number, textHeader:string, textFooter:string, imgParam:string) {
        super(divContainer, cost, textHeader, textFooter);

        const img:HTMLImageElement = document.createElement("img");
        const body:HTMLElement = document.createElement("article");
        const txtBody:Text = document.createTextNode("Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.")

        img.className = "img";
        body.className = "body";

        img.src = imgParam;

        body.appendChild(txtBody);

        this.container.appendChild(img);
        this.container.appendChild(body);
    }
}