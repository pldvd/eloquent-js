// a vector type

class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(otherVector) {
    return new Vec(this.x + otherVector.x, this.y + otherVector.y);
  }
  minus(otherVector) {
    return new Vec(this.x - otherVector.x, this.y - otherVector.y);
  }

  get length() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

//groups 

class Group {
  constructor() {
    this.members = [];
  }
  static from(iterable) {
    const newGroup = new Group()
    newGroup.members = iterable;
    return newGroup;
  }
  add(el) {
    if (!this.members.includes(el)) this.members.push(el);
    else return;
  }
  has(el) {
    return this.members.includes(el);
  }
  delete(el) {
    this.members = this.members.filter((i) => i != el);
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false