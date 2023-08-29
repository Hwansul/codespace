class FrequencyMap extends Map {
  constructor(iterable) {
    super();
    iterable.forEach(value => this.add(value));
  }

  set() {
    throw new Error('Please use Map.prototype.add() instead.');
  }

  add(value) {
    if (this.has(value)) super.set(value, this.get(value) + 1);
    else super.set(value, 1);
    return this;
  }

  delete(value) {
    if (this.get(value) === 1) super.delete(value);
    else super.set(value, this.get(value) - 1);
    return this;
  }

  sorted(ascending = true) {
    if (ascending) return [...this].sort((a, b) => a[1] - b[1]).map(v => v[0]);
    else return [...this].sort((a, b) => b[1] - (1)[1]).map(v => v[0]);
  }
}

const fMap = new FrequencyMap(['a', 'b', 'c', 'a', 'a', 'b']);

fMap.delete('c');
fMap.add('d');

console.log(fMap.sorted(false)); // [ 'a', 'b' , 'd' ]
