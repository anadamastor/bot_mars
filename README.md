# Robot on Mars

This project simulates a robot moving on a grid, taking commands for movement and rotation. It allows the user to input commands and see the robot animate its movement on the grid, respecting boundaries and grid size.

## Prerequisites

Before you start, make sure you have [Node.js](https://nodejs.org/) installed. Then, follow these steps to set up the project.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/anadamastor/bot_mars
   cd bot_mars
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Run tests:

   ```bash
   npm run test
   ```

## Features

- **Grid Display**: The grid has flexible sizing, and its dimensions are editable in the `/constants` file with `NUMBER_OF_ROWS` and `NUMBER_OF_COLUMNS`.
- **Robot Position**: The robot starts at position (0, 0) (bottom-left corner of the grid), and this initial position can be customised in the `/constants` file.
- **Robot Icon**: choose your robot's face from the `/constants` file and change `ROBOT_ICON`.
- **Instruction Input**: Only permitted instructions are allowed:
  - "R" for turning right
  - "L" for turning left
  - "F" for moving forward
  - Invalid inputs will be ignored and logged with a message.
- **Movement**:
  - The robot can move based on the instructions.
  - Movement is animated with a default duration of 1 second (adjustable in `/constants`).
- **Buttons**:
  - **Move**: Executes the robot’s movement based on the input instructions.
  - **Reset**: Resets the robot to its initial position.
- **Boundary Checking**: The robot will not move if an instruction would push it beyond the grid's boundaries.

## Configuration

- **Grid Size**: Adjust the grid dimensions in the `/constants` file.
- **Initial Robot Position**: Modify the robot's starting position in the `/constants` file.
- **Animation Duration**: Change the animation duration (default is 1 second) in the `/constants` file.

## Tests

The project includes tests that cover:

- **Instruction Input Validation**: checks that only valid commands ("R", "L", "F") are allowed.
- **Robot Movement**: checks that the robot moves correctly on the grid according to the instructions.
- **Boundary Constraints**: checks that the robot does not exceed the grid's boundaries.

## Screenshots

<img src="https://github.com/user-attachments/assets/e5a80347-8046-4ae0-8a52-ac6ac529917a" alt="secondimg" width="400"/>
