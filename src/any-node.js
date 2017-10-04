// implement a recursive depth-first-search algorithm
// that takes a node and returns a boolean
// indicating whether any node in the tree contains the given value
//
// WHY? - the maze finder will require you to check if any nodes are border nodes

module.exports = function anyNode(node, value) {
  if (node.value === value) return true;

  result = false;
  node.children.forEach(child => {
    result = result || anyNode(child, value);
  });

  return result;
};
