interface ITransport {
  delivery: (from: string, to: string) => void,
  getName: () => string,
}

class Truck implements ITransport {
  delivery(from: string, to: string) {
    console.log(`[Truck] will deliver from ${from} to ${to} by road.`);
  }
  getName() {
    return 'Truck';
  }
}

class Ship implements ITransport {
  delivery(from: string, to: string) {
    console.log(`[Ship] will deliver from ${from} to ${to} by sea.`);
  }
  getName() {
    return 'Ship';
  }
}

abstract class Logistics {
  planDelivery() {
    const transport = this.createTransport();
    console.log(`Planned delivery by ${transport.getName()}.`);
    return transport;
  }
  abstract createTransport(): ITransport
}

class RoadLogistics extends Logistics {
  createTransport(): ITransport {
    return new Truck();
  }
}

class SeaLogistics extends Logistics {
  createTransport(): ITransport {
    return new Ship();
  }
}

const App = () => {
  const logistics = [
    new RoadLogistics(),
    new SeaLogistics()
  ];
  const rand = Math.floor(Math.random() * logistics.length);
  console.log('rand = ' + rand)
  const logistic = logistics[rand];
  const transport = logistic.planDelivery();
  transport.delivery('NY', 'London');
}

export default App;