module Action where

import Game

data Action
  = None
  | Move Int
  | NewGame

act :: Game -> Action -> Game
act game (Move p) = move game p
act game NewGame = newgame game
act state _ = state
