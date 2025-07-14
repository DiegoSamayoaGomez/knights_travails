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
}
