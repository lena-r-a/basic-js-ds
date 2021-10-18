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
    if (this.first===null) {this.first = newNode;}
    else {this.addNewNode(this.first,newNode)};
  }

  addNewNode(currentNode, addNode) {
    if (currentNode.data<addNode.data) {
      if (currentNode.right===null) {currentNode.right=addNode} else {this.addNewNode(currentNode.right,addNode)}
    }
    else {
      if(currentNode.left===null) {currentNode.left=addNode} else {this.addNewNode(currentNode.left,addNode)}
    }
}
  has(data) {
    if (this.first==null) return false;
    if (this.first.data==data) {return true}
    else return hasData(this.first, data)

    function hasData (currentNode,searchnode) {
        if (currentNode.data>searchnode) {
          if (currentNode.left==null) {return false}
          if(currentNode.left.data==searchnode){return true} else {return hasData(currentNode.left,searchnode)}
        }
        else {
          if (currentNode.right==null) {return false}
          if(currentNode.right.data==searchnode){return true} else {return hasData(currentNode.right,searchnode)}
        }
    }
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
    if (!this.first) {return null} else {return getMin(this.first)}
    function getMin(node) {
      if (node.left===null) {return node.data}
      else {return getMin(node.left)}
    }
  }

  max() {
    if (!this.first) {return null} else {return getMax(this.first)}
    function getMax(node) {
      if (node.right===null) {return node.data}
      else {return getMax(node.right)}
    }
  }

}