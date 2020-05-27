// P_1_1_1_01
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
 * draw the color spectrum by moving the mouse
 *
 * MOUSE
 * position x/y        : resolution
 *
 * KEYS
 * s                   : save png
 */
'use strict';

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  var stepX;
  var stepY;
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(800, 800);
    p.noStroke();
    p.colorMode(p.HSB, p.width, p.height, 100);
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    stepX = p.mouseX + 2;
    stepY = p.mouseY + 2;
  
    for (var gridY = 0; gridY < p.height; gridY += stepY) {
      for (var gridX = 0; gridX < p.width; gridX += stepX) {
        p.fill(gridX, p.height - gridY, 100);
        p.rect(gridX, gridY, stepX, stepY);
      }
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {

  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png');
  }

  p.keyReleased = () => {
    
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
