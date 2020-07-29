// P_2_1_3_01
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
 * changing circle amount, size and position in a grid
 *
 * MOUSE
 * position x          : circle amount and size
 * position y          : circle position
 * left click          : random position
 *
 * KEYS
 * s                   : save png
 */
'use-strict'

 export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  var tileCountX = 10
  var tileCountY = 10
  var tileWidth = 0
  var tileHeight = 0
  
  
  var circleCount = 0
  var endSize = 0
  var endOffset = 0
  
  var actRandomSeed = 0

  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(800, 800)
    p.background(0, 204, 204)
    tileWidth = p.width / tileCountX
    tileHeight = p.height / tileCountY
    p.noFill()
    p.stroke(255, 150, 50)
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    p.background(0, 204, 204)

    p.randomSeed(actRandomSeed)
  
    p.translate(tileWidth / 2, tileHeight / 2)
  
    circleCount = p.mouseX / 30 + 1
    endSize = p.map(p.mouseX, 0, p.max(p.width, p.mouseX), tileWidth / 2, 0)
    endOffset = p.map(p.mouseY, 0, p.max(p.height, p.mouseY), 0, (tileWidth - endSize) / 2)
  
    for (var gridY = 0; gridY <= tileCountY; gridY++) {
      for (var gridX = 0; gridX <= tileCountX; gridX++) {
        p.push()
        p.translate(tileWidth * gridX, tileHeight * gridY)
        p.scale(1, tileHeight / tileWidth)
  
        var toggle = p.int(p.random(0, 4))
        if (toggle == 0) p.rotate(-p.HALF_PI)
        if (toggle == 1) p.rotate(0)
        if (toggle == 2) p.rotate(p.HALF_PI)
        if (toggle == 3) p.rotate(p.PI)
  
        // draw module
        for (var i = 0; i < circleCount; i++) {
          var diameter = p.map(i, 0, circleCount, tileWidth, endSize)
          var offset = p.map(i, 0, circleCount, 0, endOffset)
          p.ellipse(offset, 0, diameter, diameter)
        }
        p.pop()
      }
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {
    actRandomSeed = p.random(100000)
  }

  p.mouseReleased = () => {

  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png')
  }

  p.keyReleased = () => {
    
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
