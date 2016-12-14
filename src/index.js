"use strict"

// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

var IO = require("../output/IO")
var Main = require("../output/Main")

var state

state = {
  board: [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
  exit: false,
  player: 'x'
}

IO.unsafe(console.log)(Main.main(state))
