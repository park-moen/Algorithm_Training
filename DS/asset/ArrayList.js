class ArrayList {
  constructor(capacity) {
    this.capacity = capacity;
    this.array = new Int32Array(capacity);
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  prepend(value) {
    this.insert(0, value);
  }

  append(value) {
    this.insert(this.length, value);
  }

  setHead(index) {
    if (index < 0 || index > this.length) return false;

    this.array = this.array.slice(index);
    this.capacity -= index;
    this.length -= index;

    return true;
  }

  access(index) {
    if (index < 0 || index >= this.length) return;

    return this.array[index];
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;

    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArray = new Int32Array(this.capacity);

      for (let i = 0; i < index; i++) {
        newArray[i] = this.array[i];
      }

      for (let i = index; i < this.length; i++) {
        newArray[i + 1] = this.array[i];
      }

      this.array = newArray;
    } else {
      for (let i = this.length - 1; i >= index; i--) {
        this.array[i + 1] = this.array[i];
      }
    }

    this.array[index] = value;
    this.length++;

    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return false;

    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }

    this.length--;
    return true;
  }

  print() {
    if (!this.length) {
      console.log([]);
      return [];
    }

    let result = [];

    for (let i = 0; i < this.length; i++) {
      result.push(this.array[i]);
    }

    console.log(result);
    return result;
  }
}

const myList = new ArrayList(8);

console.log(myList.isEmpty());

console.log(myList.print());

for (let i = 0; i < 5; i++) {
  myList.append(i + 1);
}

myList.remove(0);

myList.print();
