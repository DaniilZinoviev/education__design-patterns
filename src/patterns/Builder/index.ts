interface IBuilder {
  reset: () => void,
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

const Main = (builder: IBuilder) => {
  builder.addPartA()
         .addPartB()
         .addPartC();
  const result = builder.getResult();
  console.log(result.toString());
}

const App = () => {
  console.log('App created new builder.');
  const builder = new FirstBuilder();
  Main(builder)
}

export default App;