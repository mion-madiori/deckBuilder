class Card {
  constructor(costParam, textHeaderParam, textFooterParam) {
    this.cost = costParam;

    const card = document.createElement('div');

    const textHeader = document.createTextNode(textHeaderParam);
    const textFooter = document.createTextNode(textFooterParam);
    const textCost = document.createTextNode(costParam);

    const header = document.createElement('header');
    this.container = document.createElement('div');
    const footer = document.createElement('footer');
    const badgeCost = document.createElement('div');

    card.className = 'card';
    header.className = 'header';
    this.container.className = 'container';
    footer.className = 'footer';
    badgeCost.className = 'badgeCost';

    badgeCost.appendChild(textCost);

    header.appendChild(textHeader);
    footer.appendChild(textFooter);
    footer.appendChild(badgeCost);

    card.appendChild(header);
    card.appendChild(this.container);
    card.appendChild(footer);

    document.body.appendChild(card);
  }

  get getCost() {
    return this.cost;
  }
}