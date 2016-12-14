module Game where

import Array
import Prelude ((==))

type Game = {
  board :: Array Char,
  exit :: Boolean,
  player :: Char
}

move :: Game -> Int -> Game
move game p = game {
  board = modify p (\_ -> game.player) game.board,
  player = if game.player == 'x' then 'o' else 'x'
}

newgame :: Game -> Game
newgame game = game {
  board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  player = 'x'
}
