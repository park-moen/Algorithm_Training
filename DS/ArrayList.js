class ArrayList {
  constructor(capacity) {
      this.capacity = capacity;
      this.array = new Int32Array(capacity);
      this.length = 0;
  }
  
  isEmpty() {
    return this.length === 0 ? true : false;
  }

  prepend(value) {
    if (this.length === this.capacity) {
      this.capacity *= 2;

      const newArr = new Int32Array(this.capacity);

      for (let i = 0; i < this.length; i++) {
        newArr[i + 1] = this.array[i];
      }

      this.array = newArr;
    } else {
      for (let i = this.length - 1; i >= 0; i--) {
        this.array[i + 1] = this.array[i];
      }
    }

    ++this.length;
    this.array[0] = value;

    return;
  }

  append(value) {
    if (this.length === this.capacity) {
      this.capacity *= 2;

      const newArr = new Int32Array(this.capacity);

      for (let i = 0; i < this.length; i++) {
        newArr[i] = this.array[i];
      }

      this.array = newArr;
    } 

    this.array[this.length++] = value;

    return;
  }

  setHead(index) {

    if (this.length < index) return false;
    
    this.array = this.array.slice(index);
    this.capacity -= index;
    this.length -= index;

    return true;
  }

  access(index) {
    if (length.length <= index) return undefined;

    return this.array[index];
  }

  insert(index, value) {
    if (this.length < index) return false;

    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArr = Int32Array(this.capacity);

      for (let i = 0; i < index; i++) {
        newArr = this.array[i];
      }

      for (let i = this.length - 1; i >= index; i--) {
        newArr[i + 1] = this.array[i];
      }

    } else {
      for (let i = this.length - 1; i >= index; i--) {
        this.array[i + 1] = this.array[i];
      }
    }

    this.array[index] = value;
    ++this.length;

    return true;
  }

  remove(index) {
    if (this.length <= index) return false;

    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i + 1];
    }

    --this.length;

    return true;
  }

  print() {
    if (this.length === 0) {
      return '[]';
    }

    let result = ' ';

    for (let i = 0; i < this.length; i++) {
      result += this.array[i] + ' '
    }

    return `[${result}]`
  }
}

const myList = new ArrayList(8);

console.log(myList.isEmpty());

console.log(myList.print());

for (let i = 0; i < 5; i++) {
  myList.append(i + 1);
}

myList.remove(0);

console.log(myList.print());

