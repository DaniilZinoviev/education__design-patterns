/**
 * Abstract factory interface.
 * All concrete factories should implement it
 */
interface IAbstractFactory {
  createProductA: () => IProductA;
  createProductB: () => IProductB;
}
interface IProductA {
  doSmth: () => string;
}
interface IProductB {
  doSmthAnother: () => string;
  doSmthWithProductA: (productA: IProductA) => string;
}

class FirstConcreteFactory implements IAbstractFactory {
  createProductA() {
    return new FirstProductA();
  }
  createProductB() {
    return new FirstProductB();
  }
}
class FirstProductA implements IProductA {
  doSmth() {
    return 'FirstProductA';
  }
}
class FirstProductB implements IProductB {
  doSmthAnother() {
    return 'FirstProductB.doSmthAnother()';
  }
  doSmthWithProductA(productA: IProductA) {
    return `FirstProductB with (${productA.doSmth()})`;
  }
}

class SecondConcreteFactory implements IAbstractFactory {
  createProductA() {
    return new SecondProductA();
  }
  createProductB() {
    return new SecondProductB();
  }
}
class SecondProductA implements IProductA {
  doSmth() {
    return 'SecondProductA';
  }
}
class SecondProductB implements IProductB {
  doSmthAnother() {
    return 'SecondProductB.doSmthAnother()';
  }
  doSmthWithProductA(productA: IProductA) {
    return `SecondProductB with (${productA.doSmth()})`;
  }
}

const Main = (factory: IAbstractFactory) => {
  const a = factory.createProductA();
  const b = factory.createProductB();
  console.log( a.doSmth() );
  console.log( b.doSmthAnother() );
  console.log( b.doSmthWithProductA(a) );
};

const App = () => {
  console.log('=== First factory ===')
  const firstFactory = new FirstConcreteFactory();
  Main(firstFactory);

  console.log('=== Second factory ===')
  const secondFactory = new SecondConcreteFactory();
  Main(secondFactory);
};

export default App;
