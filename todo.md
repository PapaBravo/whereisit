# Prototype Requirement 

## To Do
* Load tiles (background) from server
* Record coordinates from click

## Done
* Load polygons from server


# Game Progression
1. Choose game
2. Load game from json
  1. Background tiles
  2. Features (polygons, lines or points) with `question` and `answer`
  3. Payout function `(x,y) => [0,1000]`
3. Shuffle features and draw at most `numberOfRounds` features
4. For each feature
  1. Zoom to `center`
  2. Show `question`
  3. Count down to zero from `guessingDuration` in seconds
  4. On `click` 
    1. Calculate payout and add to `score`
    2. `Mark` guess
    3. Show `feature` and `answer`
