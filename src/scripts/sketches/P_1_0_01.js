// P_1_0_01
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
 * changing colors and size by moving the mouse
 *
 * MOUSE
 * position x          : size
 * position y          : color
 *
 * KEYS
 * s                   : save png
 */
'use strict';

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(720, 720);
    p.noCursor();
  
    p.colorMode(p.HSB, 360, 100, 100);
    p.rectMode(p.CENTER);
    p.noStroke();
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    p.background(p.mouseY / 2, 100, 100);

    p.fill(360 - p.mouseY / 2, 100, 100);
    p.rect(360, 360, p.mouseX + 1, p.mouseX + 1);
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {

  }

  p.keyReleased = () => {
    
  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png');
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
