class BinaryTreeItem {
  constructor(itemValue) {
    this.value = itemValue;
    this.left = null;
    this.right = null;
  }
}

const elementExistMessage =
  "The element has already in the tree";

class BinaryTree {
  // в конструкторе передаем функцию сравнения
  constructor(compareFunction) {
    this.root = null;
    this.compareFunction = compareFunction;
  }

  insertItem(newItem) {
    const newNode = new BinaryTreeItem(newItem);

    if (this.root === null) {
      this.root = newNode;
      return;
    }

    this._insertItem(this.root, newNode);
  }

  breadthFirstHandler(handlerFunction) {
    // .....
  }

  _insertItem(currentNode, newNode) {
    // вместо сравнения value
    // вызываем функцию сравнения
    // и проверяем больше или меньше нуля
    // получился результат сравнения
    if (this.compareFunction(currentNode.value,
      newNode.value) > 0) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
      } else {
        this._insertItem(currentNode.left, newNode);
      }
    }

    // текущий узел меньше нового,
    // значит новый узел должен быть отправлен
    // в правое поддерево
    if (this.compareFunction(currentNode.value,
      newNode.value) < 0) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
      } else {
        this._insertItem(currentNode.right, newNode);
      }
    }
    
    if (this.compareFunction(currentNode.value,
      newNode.value) === 0) {
      console.warn(elementExistMessage);
    }
  }
}

const compare = (object1, object2) => {
  return object1.key - object2.key;
};
const binaryTree = new BinaryTree(compare);
binaryTree.insertItem({ key: 3 });
binaryTree.insertItem({ key: 1 });
binaryTree.insertItem({ key: 6 });
binaryTree.insertItem({ key: 4 });
binaryTree.insertItem({ key: 8 });
binaryTree.insertItem({ key: -1 });
binaryTree.insertItem({ key: 3.5 });

binaryTree.breadthFirstHandler(console.log);