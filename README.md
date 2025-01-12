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
<img src="https://github.com/user-attachments/assets/8df28b61-0cb9-40a7-a6b9-30f9069be1df" alt="firstimg" width="400"/>
<img src="https://github.com/user-attachments/assets/e5a80347-8046-4ae0-8a52-ac6ac529917a" alt="secondimg" width="400"/>

Tests covers:
- Instruction input validation.
- Robot movement in grid.
- Boundaries.
