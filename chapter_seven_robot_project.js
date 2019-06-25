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
  for (let turn = 0; ; turn++) {
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

function randomPick(array) {
  let choice = Math.floor(Math.random() * array.length);
  return array[choice];
}

DeliveryState.random = function (parcelCount = 5) {
  let parcels = [];
  for (let i = 0; i < parcelCount; i++) {
    let addressTo = randomPick(Object.keys(roadGraph));
    let location;
    do {
      location = randomPick(Object.keys(roadGraph));
    } while (addressTo == location);
    parcels.push({ location, addressTo })
  }
  return new DeliveryState('Post Office', parcels);
}

function findRoute(graph, from, to) {
  let work = [{at: from, route: []}];
  for (let i = 0; i < work.length; i++) {
    let {at, route} = work[i];
    for (let place of graph[at]) {
      if (place == to) return route.concat(place);
      if (!work.some(w => w.at == place)) {
        work.push({at: place, route: route.concat(place)});
      }
    }
  }
}

function goalOrientedRobot({currentPlace, parcels}, route) {
  if (route.length == 0) {
    let parcel = parcels[0];
    if (parcel.location != currentPlace) {
      route = findRoute(roadGraph, currentPlace, parcel.location);
    } else {
      route = findRoute(roadGraph, currentPlace, parcel.addressTo);
    }
  }
  return {direction: route[0], memory: route.slice(1)};
}

runRobot(DeliveryState.random(), goalOrientedRobot, []);
