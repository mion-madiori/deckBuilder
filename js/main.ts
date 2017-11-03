(()=>{
  for (let i = 0; i < 5; i++) {
    factory.pickPlayer();
  }

  for (let i = 0; i < 5; i++) {
    factory.money1Player();   
  }

  let me:Player = {
    surname: 'Madiori',
    score: 100
  }

  let rule = new GameOverIfPointsEqual100();

  rule.toString();
  console.log(rule.isSatisfiedBy(me));

  console.log(rule.or(new GameOverIfPointsEqual50()).isSatisfiedBy(me));
})();