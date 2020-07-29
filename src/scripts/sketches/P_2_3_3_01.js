// P_2_3_3_01
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
 * draw tool. shows how to draw with dynamic elements.
 *
 * MOUSE
 * drag                : draw with text
 *
 * KEYS
 * del, backspace      : clear screen
 * arrow up            : angle distortion +
 * arrow down          : angle distortion -
 * s                   : save png
 */
'use strict'

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  var x = 0
  var y = 0
  var stepSize = 5.0
  
  var font = 'Georgia'
  var letters = 'All the world\'s a stage, and all the men and women merely players. They have their exits and their entrances.'
  var fontSizeMin = 3
  var angleDistortion = 0.0
  
  var counter = 0
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
  // use full screen size
  p.createCanvas(p.displayWidth, p.displayHeight)
  p.background(255)
  p.cursor(p.CROSS)

  x = p.mouseX
  y = p.mouseY

  p.textFont(font)
  p.textAlign(p.LEFT)
  p.fill(0)
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    if (p.mouseIsPressed && p.mouseButton == p.LEFT) {
      var d = p.dist(x, y, p.mouseX, p.mouseY)
      p.textSize(fontSizeMin + d / 2)
      var newLetter = letters.charAt(counter)
      stepSize = p.textWidth(newLetter)
  
      if (d > stepSize) {
        var angle = p.atan2(p.mouseY - y, p.mouseX - x)
  
        p.push()
        p.translate(x, y)
        p.rotate(angle + p.random(angleDistortion))
        p.text(newLetter, 0, 0)
        p.pop()
  
        counter++
        if (counter >= letters.length) counter = 0
  
        x = x + p.cos(angle) * stepSize
        y = y + p.sin(angle) * stepSize
      }
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {
    x = p.mouseX
    y = p.mouseY
  }

  p.mouseReleased = () => {

  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png')
    // angleDistortion ctrls arrowkeys up/down
    if (p.keyCode == p.UP_ARROW) angleDistortion += 0.1
    if (p.keyCode == p.DOWN_ARROW) angleDistortion -= 0.1
  }

  p.keyReleased = () => {
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255)

  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
