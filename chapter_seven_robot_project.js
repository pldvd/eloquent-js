// a robot
// the description of the project can be found here: https://eloquentjavascript.net/07_robot.html

const roads = [
  "Alice's House-Bob's House", "Alice's House-Cabin",
  "Alice's House-Post Office", "Bob's House-Town Hall",
  "Daria's House-Ernie's House", "Daria's House-Town Hall",
  "Ernie's House-Grete's House", "Grete's House-Farm",
  "Grete's House-Shop", "Marketplace-Farm",
  "Marketplace-Post Office", "Marketplace-Shop",
  "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(from, to) {
  let graph = Object.create(null);
  function addEdge(from, to) {
    if (!graph[from]) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }
  for (let [from, to] of roads.map(r => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }
  return graph;
}

const roadGraph = buildGraph(roads);

class DeliveryState {
  constructor(currentPlace, parcels) {
    this.currentPlace = currentPlace;
    this.parcels = parcels;
  }

  move(destination) {
    if (!roadGraph[this.currentPlace].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels.map(p => {
        if (p.location != this.currentPlace) return p;
        return { location: destination, addressTo: p.addressTo };
      }).filter(p => p.location != p.addressTo);
      return new DeliveryState(destination, parcels);
    }
  }
}

function runRobot(state, robot, memory) {
  for (let turn = 0; ;turn++) {
    if (state.parcels.length == 0) {
      console.log(`Finished in ${turn} turns.`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`)
  }
}