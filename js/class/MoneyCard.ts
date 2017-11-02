class MoneyCard extends Card{
    private value:number;

    constructor(costParam:number, textHeaderParam:string, textFooterParam:string, valueParam:number){
        super(costParam, textHeaderParam, textFooterParam);
        this.value = valueParam;

        const img:HTMLImageElement = document.createElement("img");
        const valueContainer:HTMLElement = document.createElement("div");
        const value:Text = document.createTextNode(`${valueParam}`)

        img.className = "imgMoney";
        valueContainer.className = "valueContainer";

        img.src = "img/money.png"

        valueContainer.appendChild(value);

        this.container.appendChild(img);
        this.container.appendChild(valueContainer);
    }

    get getValue(){
        return this.value;
    }
}