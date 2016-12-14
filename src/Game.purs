module Game where

import Array (modify)
import Data.List
import Prelude ((==))

type Board = Array Char

type Game = {
  board :: Board,
  exit :: Boolean,
  player :: Char
}

move :: Game -> Int -> Game
move game p = game {
  board = modify p (\_ -> game.player) game.board,
  player = if game.player == 'x' then 'o' else 'x'
}

moves :: Board -> List Board
moves board = board : Nil

newgame :: Game -> Game
newgame game = game {
  board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  player = 'x'
}
