# knights_travails
Use of search algorithms into real problems


Given enough turns, a knight on a standard 8x8 chess board can move from any square to any other square. 

Its basic move is two steps forward and one step to the side or one step forward and two steps to the side (L pattern). It can face any direction inside the bounds.

## Explanation

In this problem, the chessboard can be represented as a graph:

- Each square on the board is a node. 
- A knight’s valid moves from any square represent the edges between the vertices.
- The problem of finding the shortest path for the knight’s movement becomes a graph traversal problem. 

The goal is to traverse the graph (the chessboard) to find the shortest route between two nodes (the start and end positions).


To reach the end in the shortest way, the game uses the `BFS algorithm` where each node visited is stored to ensure an infinite loop is not produced. 

## How to play
At the end of the code there are two variables:
- `start:` define the start position in a [row, column] order
- `end:` define the end position in a [row, column] order

Make sure to use positions according to an 8 X 8 board

Then call the `knightMoves(start, end)` function and print it, it will show you the path. 

