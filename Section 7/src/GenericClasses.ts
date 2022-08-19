class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('Zooby');
textStorage.addItem('PMtHk');
textStorage.removeItem('Zooby');
// console.log(textStorage.getItems());

const numStorage = new DataStorage<number>();

// need specialized DataStorage Class

// const objStorage = new DataStorage<>();
// objStorage.addItem({ name: 'Max' });
// objStorage.addItem({ name: 'Manu' });
// // ...
// objStorage.removeItem({ name: 'Max' });
// console.log(objStorage.getItems());
