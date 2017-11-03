abstract class AbstractCompositeSpecification<T> implements Specification<T> {

  abstract isSatisfiedBy(candidate:T):boolean;

  and(specification: Specification<T>): Specification<T> {
    return new AndSpecification<T>(this, specification);
  }
  andNot(specification: Specification<T>): Specification<T> {
    return new AndNotSpecification<T>(this, specification);
  }
  or(specification: Specification<T>): Specification<T> {
    return new OrSpecification<T>(this, specification);
  }
  orNot(specification: Specification<T>): Specification<T> {
    return new OrNotSpecification<T>(this, specification);
  }
  not() {
    return new NotSpecification<T>(this);
  }

 
}