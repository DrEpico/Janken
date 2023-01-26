# Janken
Rock Paper Scissors Game
This code creates a simple Rock Paper Scissors game where the player can select their choice by clicking on one of the three buttons representing rock, paper, or scissors. The game then randomly selects a choice for the computer and compares the two choices to determine a winner.

Getting Started
In this game, there are two players: the player and the computer. The player can select their choice by clicking on one of the three buttons representing rock, paper, or scissors. The game then randomly selects a choice for the computer and compares the two choices to determine a winner.

The game keeps score of the number of wins for both the player and the computer. If either the player or computer reaches a score of 5, the game will declare a final winner and reset the scores to 0.

Game Logic
The game logic is based on the following rules:

Rock beats scissors
-Scissors beat paper
-Paper beats rock
-If the player's choice is the same as the computer's choice, it is a draw.

Score Keeping
The player's score and the computer's score are tracked using the playerScore and computerScore variables, respectively. These scores are incremented each round depending on the outcome of the round.

If the computer's score reaches 5, the game will declare the computer as the winner and reset the scores to 0. If the player's score reaches 5, the game will declare the player as the winner and reset the scores to 0.

