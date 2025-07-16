function knigthMoves(start, end) {
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
  const isValid = (row, column) => {
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
    // Remove from the Q the next node
    const { pos, path } = queue.shift();
    const [row, col] = pos;

    // If we havent reach the end position, return the path
    if (row === end[0] && col === end[1]) {
      //console.log("PATH", path);
      return path;
    }
  }
}
