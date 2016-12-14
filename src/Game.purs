module Game where

import Prelude ((==))

type Game = {
  board :: Array Char,
  exit :: Boolean,
  player :: Char
}

move :: Game -> Int -> Game
move game p = game {
  player = if game.player == 'x' then 'o' else 'x'
}
