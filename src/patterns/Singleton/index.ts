class Singleton {
  public static instance: Singleton | null = null;

  constructor() {}

  public static createInstance() {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  notStaticMethod() {}
}

const App = () => {
  const s1 = Singleton.createInstance();
  const s2 = Singleton.createInstance();

  if (s1 === s2) {
    console.log('Singleton works. It returns the same object');
  } else {
    console.log('Singleton doesn\'t work. It returns a different object');
  }
}

export default App;
