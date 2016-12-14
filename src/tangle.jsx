"use strict"

var Action = require("../output/Action")
var IO = require("../output/IO")
var React = require("react")
var ReactDOM = require("react-dom")

var Button = require("semantic-ui-react").Button
var Container = require("semantic-ui-react").Container
var Divider = require("semantic-ui-react").Divider
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

// render :: Game => IO ()
exports.render = x => IO.IO.create(ret => {
  ReactDOM.render(
    <Container>
      <Icon onClick={dispatch(onMove)} name="x" size="massive" />
      <Icon inverted name="square" size="massive" />
      <Icon name="x" size="massive" />
      <Divider />
      <Icon name="radio" size="massive" />
      <Icon name="x" size="massive" />
      <Icon name="x" size="massive" />
      <Divider />
      <Icon name="x" size="massive" />
      <Icon name="radio" size="massive" />
      <Icon name="radio" size="massive" />
      <Divider />
      <Button>New game {x.player}</Button>
    </Container>, test)

  return ret()
})

function onMove() {
  console.log("move")
  return Action.Move.create(1)
}
