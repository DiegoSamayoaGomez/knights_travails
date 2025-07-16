function knightMoves(start, end) {
  // Create an array of all possible movements (L patterns)
  const directions = [
    [-2, -1],
    [-2, 1],
    [-1, -2],
    [-1, 2],
    [1, -2],
    [1, 2],
    [2, -1],
    [2, 1],
  ];

  // Check if the position is out of bounds (8 X 8)
  const isValid = (row, col) => {
    return row >= 0 && row < 8 && col >= 0 && col < 8;
  };

  // Create queue
  const queue = [];
  // Create set to store visited positions
  const visited = new Set();

  queue.push({ pos: start, path: [start] });
  visited.add(start.toString());

  // BFS loop
  while (queue.length > 0) {
    //console.log(visited);
    // Remove from the Q the next node
    const { pos, path } = queue.shift();
    const [row, col] = pos;

    // If we havent reach the end position, return the path
    if (row === end[0] && col === end[1]) {
      //console.log("PATH", path);
      return path;
    }

    // Explore all 8 possible knight moves
    for (const [dRow, dCol] of directions) {
      const newRow = row + dRow;
      const newCol = col + dCol;
      const newPos = [newRow, newCol];

      // If the new position is valid and not yet visited
      if (isValid(newRow, newCol) && !visited.has(newPos.toString())) {
        // Check as visited
        visited.add(newPos.toString());
        // Add the new position to the queue with the updated path
        queue.push({ pos: newPos, path: [...path, newPos] });
      }
    }
  }
  // If the end wasnt reached, return an empty path
  return [];
}

const start = [0, 0]; // Starting position of the knight
const end = [3, 3]; // Target position

const path = knightMoves(start, end);

console.log("Shortest path:");
console.log(path);
