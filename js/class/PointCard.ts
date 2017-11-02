class PointCard extends Card{
  private point:number

  constructor(costParam:number, textHeaderParam:string, textFooterParam:string, pointParam:number){
    super(costParam, textHeaderParam, textFooterParam);
    this.point = pointParam;

    const imgPoint:HTMLImageElement = document.createElement('img');
    const valuePointContainer:HTMLElement = document.createElement('div');
    const value:Text = document.createTextNode(`${this.point}`);

    imgPoint.className = 'imgPoint';
    valuePointContainer.className = 'valuePointContainer';

    imgPoint.src = 'img/point.png';

    valuePointContainer.appendChild(value);

    this.container.appendChild(imgPoint);
    this.container.appendChild(valuePointContainer);
  }

  get getPoint(){
    return this.point;
  }
}