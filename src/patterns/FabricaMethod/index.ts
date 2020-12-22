interface ITransport {
  delivery: (from: string, to: string) => void,
  // Etc..
}

interface ILogistics {
  createTransport: () => ITransport,
  checkWeather: () => void,
}

class Truck implements ITransport {
  delivery(from: string, to: string) {
    console.log(`[Truck] will deliver from ${from} to ${to} by road.`);
  }
}

class Ship implements ITransport {
  delivery(from: string, to: string) {
    console.log(`[Ship] will deliver from ${from} to ${to} by sea.`);
  }
}

class RoadLogistics implements ILogistics {
  createTransport(): ITransport {
    return new Truck();
  }

  checkWeather() {
    console.log('The weather over land is clear. Our Trucks is good enough to deliver in any weather.');
  }
}

class SeaLogistics implements ILogistics {
  createTransport(): ITransport {
    return new Ship();
  }

  checkWeather() {
    console.log('The weather over sea is clear. Good enough for our ships.')
  }
}

class Logistics {
  planDelivery() {
    const transport = Logistics.createTransport();
    transport.delivery('NY', 'London');
    console.log(`Planned delivery by ${transport.constructor.name}.`);
  }
  static createTransport() {
    let logistic;
    if ( Math.random() > 0.5 ) {
      logistic = new RoadLogistics();
    } else {
      logistic = new SeaLogistics();
    }
    return logistic.createTransport();
  }
}

const App = () => {
  const logistics = new Logistics();
  logistics.planDelivery();
}

export default App;