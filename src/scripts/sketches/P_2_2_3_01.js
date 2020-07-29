// P_2_2_3_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * form mophing process by connected random agents
 *
 * MOUSE
 * click               : start a new circe
 * position x/y        : direction of floating
 *
 * KEYS
 * 1-2                 : fill styles
 * f                   : freeze. loop on/off
 * Delete/Backspace    : clear display
 * s                   : save png
 */
'use strict'

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  var formResolution = 15
  var stepSize = 2
  var initRadius = 150
  var centerX
  var centerY
  var x = []
  var y = []
  
  var filled = false
  var freeze = false
  
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)

    // init shape
    centerX = p.width / 2
    centerY = p.height / 2
    var angle = p.radians(360 / formResolution)
    for (var i = 0; i < formResolution; i++) {
      x.push(p.cos(angle * i) * initRadius)
      y.push(p.sin(angle * i) * initRadius)
    }
  
    p.stroke(0, 50)
    p.strokeWeight(0.75)
    p.background(255)
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
  // floating towards mouse position
  centerX += (p.mouseX - centerX) * 0.01
  centerY += (p.mouseY - centerY) * 0.01

  // calculate new points
  for (var i = 0; i < formResolution; i++) {
    x[i] += p.random(-stepSize, stepSize)
    y[i] += p.random(-stepSize, stepSize)
    // uncomment the following line to show position of the agents
    // ellipse(x[i] + centerX, y[i] + centerY, 5, 5);
  }

  if (filled) {
    p.fill(p.random(255))
  } else {
    p.noFill()
  }

  p.beginShape()
  // first controlpoint
  p.curveVertex(x[formResolution - 1] + centerX, y[formResolution - 1] + centerY)

  // only these points are drawn
  for (var j = 0; j < formResolution; j++) {
    p.curveVertex(x[j] + centerX, y[j] + centerY)
  }
  p.curveVertex(x[0] + centerX, y[0] + centerY)

  // end controlpoint
  p.curveVertex(x[1] + centerX, y[1] + centerY)
  p.endShape()
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {
  // init shape on mouse position
  centerX = p.mouseX
  centerY = p.mouseY
  var angle = p.radians(360 / formResolution)
  for (var i = 0; i < formResolution; i++) {
    x[i] = p.cos(angle * i) * initRadius
    y[i] = p.sin(angle * i) * initRadius
  }
  }

  p.mouseReleased = () => {

  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png')
  }

  p.keyReleased = () => {
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255)
    if (p.key == '1') filled = false
    if (p.key == '2') filled = true
  
    // pauze/play draw loop
    if (p.key == 'f' || p.key == 'F') freeze = !freeze
    if (freeze) {
      p.noLoop()
    } else {
      p.loop()
    }
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
