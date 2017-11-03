class GameOverIfPointsEqual50 extends AbstractCompositeSpecification<Player>{
  
    isSatisfiedBy(candidate: Player): boolean {
      return candidate.score === 50;
    }
  
    toString():string{
      return `Game over if points of player is equal than 100`;
    }
  }