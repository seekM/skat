# Practise counting in skat

## Description
+ 1 player:
  + Values of all shown cards have to add up to 120
  + Two GET parameters available:
	  + `numberOfPlayers`: 1 
    + `secondsAfterCard`: >= 0.5 und < 10
+ 2 players:
  + After each trick `Player 1` or `Player 2` is shown. Add the value of the shown trick to the  shown player. The last two cards are the skat. At the end the points achieved by player 1, player 2 and the points of the skat are displayed. 
  + Three GET parameters available:
	  + `numberOfPlayers`: 2 
    + `secondsAfterCard`: >= 0.5 und < 10
    + `secondsAfterStich`: >= 0.5 und < 10

## Examples
+ https://seekm.github.io/skat/index.html?numberOfPlayers=1&secondsAfterCard=0.8
+ https://seekm.github.io/skat/index.html?numberOfPlayers=2&secondsAfterCard=0.8&secondsAfterStich=2
