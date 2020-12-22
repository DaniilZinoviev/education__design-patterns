class Prototype {
  public primitive: number = 0;
  public object = {};
  
  public clone(): this {
    const clone = Object.create(this);
    clone.object = Object.assign(this.object);
    return clone;
  }
}

const App = () => {
  const original = new Prototype();
  original.primitive = 123;
  original.object = new Date();

  const clone = original.clone();

  if (original.primitive === clone.primitive) {
    console.log(`Original and clone has the same primitive value (${original.primitive})`);
  } else {
    console.log(`Original and clone has different primitive values (original: ${original.primitive}) (clone: ${clone.primitive})`);
  }

  if (original.object === clone.object) {
    console.log(`Original and clone has the same object value (${original.object.toString()})`);
  } else {
    console.log(`Original and clone has different object values (original: ${original.object.toString()}) (clone: ${clone.object.toString()})`);
  }
}

export default App;
