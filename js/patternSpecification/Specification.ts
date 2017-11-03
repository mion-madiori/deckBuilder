interface Specification<T>{
  isSatisfiedBy(candidate:T):boolean;
  and(specification:Specification<T>):Specification<T>;
  andNot(specification:Specification<T>):Specification<T>;
  or(specification:Specification<T>):Specification<T>;
  orNot(specification:Specification<T>):Specification<T>;
  not()
}