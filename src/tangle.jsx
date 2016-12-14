"use strict"

var Action = require("../output/Action")
var IO = require("../output/IO")
var React = require("react")
var ReactDOM = require("react-dom")

var Button = require("semantic-ui-react").Button
var Container = require("semantic-ui-react").Container
var Divider = require("semantic-ui-react").Divider
var Header = require("semantic-ui-react").Header
var Icon = require("semantic-ui-react").Icon

var handler, test;


// dispatch :: (a => Action) => (a => ())
var dispatch = f => x => handler(f(x))

// poll :: IO Action
exports.poll = IO.IO.create(ret => {
  handler = action => {
    handler = undefined
    return ret(action)
  }
})

// jshint browser: true
test = document.getElementById("test")

const onMove = p => () => Action.Move.create(p)
const onNewGame = () => Action.NewGame.value

// render :: Game => IO ()
exports.render = x => IO.IO.create(ret => {
  var cells;

  cells = x.board.map((c, i) => (
    <Icon color={c === ' ' ? "grey" : "black" } inverted={c === ' '} name={c === 'x' ? "x" : (c === 'o' ? "radio" : "square")} onClick={c === ' ' ? dispatch(onMove(i)) : undefined} size="massive" />
  ))
  ReactDOM.render(
    <Container textAlign="center">
      <Divider hidden />
      <Header size="huge">Voids and Units</Header>
      { cells[0] } { cells[1] } { cells[2] } 
      <Divider hidden />
      { cells[3] } { cells[4] } { cells[5] } 
      <Divider hidden />
      { cells[6] } { cells[7] } { cells[8] } 
      <Divider hidden />
      <Button onClick={dispatch(onNewGame)}>New game</Button>
    </Container>, test)

  return ret()
})
