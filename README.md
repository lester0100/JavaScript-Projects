# JavaScript Tutorial Projects

Welcome! This repository contains beginner JavaScript projects and coding challenges I completed while following a step-by-step tutorial. Each exercise is short and focused on helping you practice core JavaScript concepts, including variables, operators, functions, arrays, objects, loops, and basic problem-solving.



## Description

All projects use plain JavaScript (ES6+) and were built as I completed an online tutorial series with coding challenges. Use these projects for learning, experimenting, or as a reference.



<hr/>
**Coding Challenges**

- 1_BMI - Computes BMI for Mark and John and logs the values and a boolean comparing them.

- 2_BMI_with_string
Same BMI calculation but prints a descriptive message with template strings showing which BMI is higher.

- 3_Comparison - Example comparing average scores for two teams (Dolphins vs Koalas) and prints the winner.

- 4_Tip_calculator - Tip calculation using a ternary operator that chooses 15% for bills between 50 and 300 and 20% otherwise.

- 5_Functions - Demonstrates a function to calculate averages and a checkWinner function implementing a "double score" rule.

- 6_Tip_calculator_array - Tip calculator implemented using an array of bills and a helper function to compute tips and totals.

- 7_BMI_using_object - Uses objects to represent Mark and John; each object includes a method to calculate BMI and compares the results.

- 8_loop - Uses loops to compute tips and totals for many bills and includes a bonus function to calculate the average of an array.

- S5_Challenge_1 - A small "printForecast" function to build and return a forecast string from temperature arrays (Section 5 challenge).

- S9_Challenge_1 - A more involved challenge (soccer/football betting app data): array destructuring, spread operator, odds handling, and a printGoals helper.

<hr/>
   
**My First Modal**

This section features a simple, accessible modal window built using plain HTML, CSS, and JavaScript. The project demonstrates how to open and close a modal dialog, apply an overlay, and support keyboard actions such as the Escape key. I created this while following a JavaScript tutorial to practice DOM selection, event handling, and basic UI patterns.
<hr/>

**Number Guessing Game**

An interactive browser game where the player guesses a random number between 1 and 20, built using HTML, CSS, and JavaScript. Created to practice DOM selection, event handling, game logic, and state management.

Game overview
- On load, a secret integer between 1 and 20 is generated.
- The player types a guess and clicks "Check!".
  > If the guess is correct: the game reveals the secret number, updates the highscore, changes the background to green, and disables the Check button.
  
  > If the guess is incorrect, the game provides directional feedback ("Try higher"/"Try lower") and decrements the score.
  
  > If the score reaches 0, the player loses, the secret number is revealed, and the Check button is disabled.
- Clicking "Again!" resets the game (new secret number, score back to 20, UI reset).
