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

class VillageState {
  constructor(currentPlace, parcels) {
    this.currentPlace = currentPlace;
    this.parcels = parcels;
  }

  move(destination) {
    if (this.currentPlace.includes(destination)) {
       return this;
      } else {
        let parcels = this.parcels.map(p => {
          if (p.place != this.currentPlace) return p;
          return {place: destination, addressTo: p.addressTo};
        }).filter(p => p.place != p.addressTo);
        return new VillageState(destination, parcels);
      }
  }
}

const first = new VillageState('Post Office', [{place: 'Post Office', addressTo: 'Alice\'s House'}])

let next = first.move('Alice\'s House');

console.log(next.parcels, next.currentPlace);