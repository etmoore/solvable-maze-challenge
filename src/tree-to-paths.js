// implement a recursive depth-first-search algorithm
// that takes a node and returns an array of arrays
// containing all of the possible paths down the tree, starting at the root
//
// WHY? - this forms the basis of the maze solution
//  - it builds on the default value pattern, but in this case uses an array
//  - it also builds on the accumulator pattern

module.exports = function treeToPaths(node, path) {
  path = path || [];

  path.push(node.value);
  let paths = [path];

  node.children.forEach(child => {
    paths = paths.concat(treeToPaths(child, path.slice()));
  });

  return paths;
};

// What's happening internally
// console.log(
//   [["A"]].concat(
//     [["A", "B"]].concat(
//       [["A", "B", "E"]].concat(
//         [["A", "C"]].concat(
//           [["A", "D"]].concat([["A", "D", "F"]].concat([["A", "D", "G"]]))
//         )
//       )
//     )
//   )
// );
