class NotSpecification<T> extends AbstractCompositeSpecification<T>{
  private other:Specification<T>;

  constructor(other:Specification<T>){
    super();
    this.other = other;
  }

  isSatisfiedBy(candidate:T):boolean{
    return !this.other.isSatisfiedBy(candidate);
  }

  toString():string{
    return `(not ${this.other.toString()})`;
  }
}