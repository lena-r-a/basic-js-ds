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

  find(data) {
    if (this.first===null) {return null};
    if (this.first.data===data) {return this.first}
    else return findData(this.first, data)

    function findData (currentNode,searchnode) {
        if (currentNode.data>searchnode) {
          if (currentNode.left===null) {return null}
          if(currentNode.left.data===searchnode){return currentNode.left} else {return findData(currentNode.left,searchnode)}
        }
        else {
          if (currentNode.right===null) {return null}
          if(currentNode.right.data===searchnode){return currentNode.right} else {return findData(currentNode.right,searchnode)}
        }
    }
  }
 

  remove(data) {
    if (this.has(data)) {
      this.first = removeNode(this.first,data)
    }
    function removeNode(currentNode,removedata) {
      if (removedata<currentNode.data) {
        currentNode.left=removeNode(currentNode.left,removedata);
        return currentNode;
      }
      else if (removedata>currentNode.data) {
        currentNode.right=removeNode(currentNode.right,removedata)
        return currentNode;
      }
      else {
        if (currentNode.left===null & currentNode.right===null) {
          currentNode = null;
          return currentNode;
        }
        if (currentNode.left===null) {
          currentNode=currentNode.right;
          return currentNode;
        }
        if (currentNode.right === null) {
          currentNode=currentNode.left;
          return currentNode;
        }

        let minRightNode = currentNode.right;
        while (minRightNode.left) {
          minRightNode=minRightNode.left;
        }
        currentNode.data=minRightNode.data;
        currentNode.right = removeNode(currentNode.right,minRightNode.data)
        return currentNode;
      }
    }
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