class AndSpecification<T> extends AbstractCompositeSpecification<T>{
  private left: Specification<T>;
  private right: Specification<T>;

  constructor(left:Specification<T>, right:Specification<T>){
    super();
    this.left = left;
    this.right = right;
  }

  isSatisfiedBy(candidate:T):boolean{
    return this.left.isSatisfiedBy(candidate) && this.right.isSatisfiedBy(candidate);
  }

  toString():string{
    return `(${this.left.toString()} and ${this.right.toString()})`;
  }
}