module Game where

import Data.List
import Array (get, set)
import Data.Maybe (maybe)
import Prelude ((==), ($), (>=), (+))

type Board = Array Char

type Game = {
  board :: Board,
  exit :: Boolean,
  player :: Char
}

move :: Game -> Int -> Game
move game p = think $ game {
  board = set p game.player game.board,
  player = toggle game.player
}

moves :: Board -> List Int
moves board = moves_ 0 board where
  moves_ :: Int -> Board -> List Int
  moves_ p _ | p >= 9 = Nil
  moves_ p b = if get p b == ' ' then p : moves_ (p + 1) b else moves_ (p + 1) b

newgame :: Game -> Game
newgame game = game {
  board = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  player = 'x'
}

think :: Game -> Game
think game = game {
  board = set (let xs = moves game.board in maybe 0 (\x -> x) (head xs)) game.player game.board,
  player = toggle game.player
}

toggle :: Char -> Char
toggle 'x' = 'o'
toggle 'o' = 'x'
toggle x = x -- make player an enum
