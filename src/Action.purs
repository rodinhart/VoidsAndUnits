module Action where

import Game

data Action
  = None
  | Move Int

act :: Game -> Action -> Game
act game (Move p) = move game p
act state _ = state
