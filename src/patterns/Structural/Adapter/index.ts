class Target {
  send(): string {
    return 'Target: uses our normal interface. Sent successfully.';
  }
}

class Adaptee {
  private isLoggedIn: boolean = false;
  logIn() {
    this.isLoggedIn = true;
  }
  specificSend() {
    if (!this.isLoggedIn) {
      throw new Error('Have to login before send');
    }
    return 'Adaptee: sent after login successfully!';
  }
}

class Adapter {
  private adaptee: Adaptee;
  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }
  send() {
    console.log('Adapter: a call is from here.')
    this.adaptee.logIn();
    return this.adaptee.specificSend();
  }
}

const App = () => {
  console.log('I can use the interface I know.');
  const target = new Target();
  console.log( target.send() );

  console.log('...');

  console.log('But I cannot use the interface I don\'t know!');
  try {
    const testAdaptee = new Adaptee();
    // testAdaptee.send();            // Cannot use it
    testAdaptee.specificSend();
  } catch(e) {
    console.log(e);
  }

  console.log('...');

  console.log('To allow client code to use Adaptee class with Target interface, I should create an Adapter.');
  const adaptee = new Adaptee();
  const adapter = new Adapter(adaptee);
  console.log( adapter.send() );
  
  console.log('...');
  console.log('That\'s it! The pattern was successfully learned :)');
}

export default App;
