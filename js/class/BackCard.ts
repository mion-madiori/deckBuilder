class BackCard{
    constructor(divContainer:HTMLElement){
        const card = document.createElement('div');

        card.className = 'backCard';

        divContainer.appendChild(card);
    }
}