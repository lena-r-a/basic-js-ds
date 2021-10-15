const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor () {
    this.first=null;
  }
 
  root() {
    return this.first;
  }

  add(data) {
    let newNode = new Node(data);
    if (!this.first) {this.first = newNode;}
    else addNewNode(this.root,newNode);

    function addNewNode(currentNode, addNode) {
        if (currentNode.data<addNode.first) {
          if (!currentNode.right) {currentNode.right=addNode} else {addNewNode(currentNode.right,addNode)}
        }
        else {
          if(!currentNode.first) {currentNode.left=addNode} else {addNewNode(currentNode.left,addNode)}
        }
    }
  }

  has(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

}