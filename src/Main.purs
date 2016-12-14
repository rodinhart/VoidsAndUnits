module Main where

import Game
import Action (Action, act)
import IO (IO, bind, pure)
import Prelude (Unit, (==))

foreign import poll :: IO Action
foreign import render :: Game -> IO Unit

loop :: Game -> IO Game
loop s = do
  a <- poll
  (let t = act s a in do -- remove do and brackets
    render t
    if t.exit == true then pure t else loop t)

main :: Game -> IO Game
main s = do
  render s
  loop s
