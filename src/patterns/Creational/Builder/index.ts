interface IBuilder {
  reset: () => this,
  addPartA: () => this,
  addPartB: () => this,
  addPartC: () => this,
  getResult: () => IFirstProduct
}
interface IFirstProduct {
  parts: string[],
  toString: () => string
}

class FirstProduct implements IFirstProduct {
  parts: string[] = [];
  toString() {
    return `The FirstProducts parts are: [${this.parts.join(', ')}]`;
  }
}

class FirstBuilder implements IBuilder {
  private product: IFirstProduct = new FirstProduct();

  reset() {
    this.product = new FirstProduct();
    return this;
  }
  addPartA() {
    this.product.parts.push('A');
    return this;
  }
  addPartB() {
    this.product.parts.push('B');
    return this;
  }
  addPartC() {
    this.product.parts.push('C');
    return this;
  }
  getResult() {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  getAB(builder: IBuilder) {
    return builder.reset().addPartA().addPartB();
  }
  getBAC(builder: IBuilder) {
    return builder.reset().addPartB().addPartA().addPartC();
  }
}

const Main = (builder: IBuilder) => {
  const director = new Director();

  // Custom builder use
  builder.addPartA()
         .addPartB()
         .addPartC();
  console.log(builder.getResult().toString());

  // Use some pre-defined builds from the Director class
  director.getAB(builder);
  console.log(builder.getResult().toString());

  director.getBAC(builder);
  console.log(builder.getResult().toString());
}

const App = () => {
  console.log('App created new builder.');
  const builder = new FirstBuilder();
  Main(builder)
}

export default App;