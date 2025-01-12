npm install
npm run dev
npm run test


Robot on Mars!

- Displays a grid that has flexible sizing, dimensions editable in /constants.
- Robot is rendered in 0;0 (bottom, left part of the grid) - this initial position can be changed from /constants.
- Instructions inputs only allows for the permitted instructions (“R” -right, L-left,”F”-front) and loggs a message in case of not allowed inputs.
- “Move” button to start the movement and “Reset” button to place the Robot in its initial position.
- Movement is animated with 1s duration. Can be changed from /constants.
- Boundaries are checked: the Robot will not move if that instruction is beyond the grid.

Tests cover:
- Instruction input validation.
- Robot movement in grid.
- Boundaries.
