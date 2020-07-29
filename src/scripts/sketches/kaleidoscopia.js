// P_2_0_03
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
 * drawing with a changing shape by draging the mouse.
 *
 * MOUSE
 * position x          : length
 * position y          : thickness and number of lines
 * drag                : draw
 *
 * KEYS
 * 1-3                 : stroke color
 * del, backspace      : erase
 * s                   : save png
 */
'use strict'
export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~
  var strokeColor

  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
  p.createCanvas(720, 720)
  p.background(255)
  p.colorMode(p.HSB, 360, 100, 100, 100)
  p.noFill()
  p.strokeWeight(2)
  strokeColor = p.color(0, 10)
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    if (p.mouseIsPressed && p.mouseButton == p.LEFT) {
      p.push()
      p.translate(p.width / 2, p.height / 2)
  
      var circleResolution = p.int(p.map(p.mouseY + 100, 0, p.height, 2, 10))
      var radius = p.mouseX - p.width / 2
      var angle = p.TAU / circleResolution
  
      p.stroke(strokeColor)
  
      p.beginShape()
      for (var i = 0; i <= circleResolution; i++) {
        var x = p.cos(angle * i) * radius
        var y = p.sin(angle * i) * radius
        p.vertex(x, y)
      }
      p.endShape()
  
      p.pop()
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {

  }

  p.mouseReleased = () => {

  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png')
  }

  p.keyReleased = () => {
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(0, 0, 100)
  
    if (p.key == '1') strokeColor = p.color(0, 10)
    if (p.key == '2') strokeColor = p.color(192, 100, 64, 10)
    if (p.key == '3') strokeColor = p.color(52, 100, 71, 10)
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
