function getName(node) {
    return node.name
}

function next(node, collection) {
    return collection[node.next]
}

function headNode(linkedlist, collection) {
    return collection[linkedlist]
}

function nodeAt(index, linkedlist, collection) {
  let currentNode = headNode(linkedlist, collection)
    for (let i = 0; i < index; i++ ) {
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

function addressAt(index, linkedlist, collection) {
  
  if (index === 0) {
    return linkedlist
  } else {
    let currentNode = nodeAt(index-1, linkedlist, collection)
      return currentNode.next
  }
}

function indexAt(node, collection, linkedlist) {
  let currentNode = headNode(linkedlist, collection)
  let index = 0
  while (currentNode != node) {
    index++
    currentNode = next(currentNode, collection)
  }
  return index;
}

function insertNodeAt(index, newNode, linkedlist, collection) {
  let previousNode = nodeAt(index - 1, linkedlist, collection)
  let nextNode = nodeAt(index, linkedlist, collection)
  
  let previousNodeIndex = indexAt(previousNode, collection, linkedlist)
  let previousNodeAddress = addressAt(previousNode, linkedlist, collection)
  let nextNodeInde = indexAt(nextNode, collection, linkedlist)
  let nextNodeAddress = addressAt(nextNodeAddress, linkedlist, collection)
  
  previousNode.next = newNode
  newNode.next = nextNode
  
}