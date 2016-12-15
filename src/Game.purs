module Game where

import Data.List
import Array (get, set)
import Data.Maybe (Maybe(..))
import Prelude ((==), (>=), (+))

type Board = Array Char

type Game = {
  board :: Board,
  exit :: Boolean,
  player :: Char
}

move :: Game -> Int -> Game
move game p = let g = game { board = set p game.player game.board, player = toggle game.player } in think (head (moves g.board)) g

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

think :: Maybe Int -> Game -> Game
think (Just p) game = game {
  board = set p game.player game.board,
  player = toggle game.player
}
think _ game = game

toggle :: Char -> Char
toggle 'x' = 'o'
toggle 'o' = 'x'
toggle x = x -- make player an enum
