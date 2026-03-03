# Self-Driving Car Simulation

A browser-based self-driving car simulation developed using pure JavaScript and the HTML5 Canvas API.  
The project demonstrates real-time vehicle dynamics, ray-casting sensors, collision detection, and a lightweight neural network for autonomous navigation.

---

## Overview

This project simulates an autonomous vehicle navigating a lane-based road environment.  
The car uses virtual sensors to detect surroundings and a neural network to make steering and acceleration decisions in real time.

The goal of this project was to explore:
- Real-time simulation systems
- Geometric computation and ray casting
- Collision detection algorithms
- Neural network-based decision making
- Rendering and animation using Canvas

---

## Key Features

### Autonomous Driving System
Implements a lightweight feedforward neural network that processes real-time sensor inputs to control steering and movement.

### Ray-Casting Sensors
Simulates multiple directional distance sensors to detect obstacles and road boundaries.

### Collision Detection
Detects intersections between the car and road borders or obstacles using geometric calculations.

### Lane-Based Road Model
Generates a structured multi-lane road system for realistic navigation.

### Real-Time Rendering
Uses the HTML5 Canvas API with optimized animation loops to ensure smooth simulation performance.

---

## Tech Stack

- JavaScript (ES6)
- HTML5 Canvas API
- Custom Neural Network Implementation
- Ray-Casting and Geometry Algorithms

---

## Project Structure

| File | Description |
|------|------------|
| `index.html` | Entry point of the application |
| `main.js` | Core animation and simulation loop |
| `car.js` | Car physics and movement logic |
| `road.js` | Road generation and lane rendering |
| `sensor.js` | Ray-casting sensor implementation |
| `network.js` | Neural network architecture and inference |
| `utils.js` | Utility and helper functions |
| `style.css` | Basic layout styling |

---

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Bhupi1306/self_driving_car_game.git
