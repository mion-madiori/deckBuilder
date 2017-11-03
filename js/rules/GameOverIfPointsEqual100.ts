class GameOverIfPointsEqual100 extends AbstractCompositeSpecification<Player>{

  isSatisfiedBy(candidate: Player): boolean {
    return candidate.score === 100;
  }

  toString():string{
    return `Game over if points of player is equal than 100`;
  }
}