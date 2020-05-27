// P_1_2_1_01
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
 * shows how to interpolate colors in different styles/ color modes
 *
 * MOUSE
 * left click          : new random color set
 * position x          : interpolation resolution
 * position y          : row count
 *
 * KEYS
 * 1-2                 : switch interpolation style
 * s                   : save png
 * c                   : save color palette
 */
'use strict';

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~
  var tileCountX = 2;
  var tileCountY = 10;
  
  var colorsLeft = [];
  var colorsRight = [];
  var colors = [];
  
  var interpolateShortest = true;
  
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(800, 800);
    p.colorMode(p.HSB);
    p.noStroke();
    shakeColors();
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    tileCountX = p.int(p.map(p.mouseX, 0, p.width, 2, 100));
    tileCountY = p.int(p.map(p.mouseY, 0, p.height, 2, 10));
    var tileWidth = p.width / tileCountX;
    var tileHeight = p.height / tileCountY;
    var interCol;
    colors = [];
  
    for (var gridY = 0; gridY < tileCountY; gridY++) {
      var col1 = colorsLeft[gridY];
      var col2 = colorsRight[gridY];
  
      for (var gridX = 0; gridX < tileCountX; gridX++) {
        var amount = p.map(gridX, 0, tileCountX - 1, 0, 1);
  
        if (interpolateShortest) {
          // switch to rgb
          p.colorMode(p.RGB);
          interCol = p.lerpColor(col1, col2, amount);
          // switch back
          p.colorMode(p.HSB);
        } else {
          interCol = p.lerpColor(col1, col2, amount);
        }
  
        p.fill(interCol);
  
        var posX = tileWidth * gridX;
        var posY = tileHeight * gridY;
        p.rect(posX, posY, tileWidth, tileHeight);
  
        // save color for potential ase export
        colors.push(interCol);
      }
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {

  }

  p.mouseReleased = () => {
    shakeColors();
  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png');
    if (p.key == '1') interpolateShortest = true;
    if (p.key == '2') interpolateShortest = false;
  
  }

  p.keyReleased = () => {
    
  }

  // ~~~~~~ Helper functions ~~~~~~~~~
  function shakeColors() {
    for (var i = 0; i < tileCountY; i++) {
      colorsLeft[i] = p.color(p.random(0, 60), p.random(0, 100), 100);
      colorsRight[i] = p.color(p.random(160, 190), 100, p.random(0, 100));
    }
  }
  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
