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

    this.array[0] = value;
    ++this.length;

    return undefined;
  }

  append(value) {
    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArr = new Uint8Array(this.capacity);

      for (let i = 0; i < this.length; i++) {
        newArr[i] = this.array[i];
      }

      this.array = newArr;
    }  

    this.array[this.length++] = value;

    return undefined;
  }

  setHead(index) {
    if (this.length < index) return false
    
    this.array = this.array.slice(index)
    this.capacity -= index;
    this.length -= index;

    return true
  }

  access(index) {
    if (this.length <= index) return false 

    return this.array[index];
  }

  insert(index, value) {
    if (this.length === this.capacity) {
      this.capacity *= 2;
      const newArr = new Uint8Array(this.capacity);

      for (let i = 0; i < index; i++) {
        newArr[i] = this.array[i];
      }

      for (let i = index; i < this.length; i++) {
        newArr[i + 1] = this.array[i];
      }

      this.array = newArr;
    } else {
      for (let i = this.length - 1; i >= index; i--) {
        this.array[i + 1] = this.array[i];
      }
    }
    
    this.array[index] = value;
    ++this.length;

    return false;
  }

  remove(index) { // index = 2, this.length = 7
    if (this.length > index) {
      for (let i = index + 1; i < this.length; i++) { 
        this.array[i - 1] = this.array[i]
      }

      --this.length;
      return true
    }

    return false;
  }

  print() {
    let result = '';
    for (let i = 0; i < this.length; i++) {
      result += this.array[i] + ' ';
    }
      return result;
  }
}

const arr = new ArrayList(3);

for (let i = 0; i < 6; i++) {
  arr.append(i);
}

arr.setHead(2);

console.log(arr.access(2));

arr.insert(1, 2);

console.log(arr.print());

