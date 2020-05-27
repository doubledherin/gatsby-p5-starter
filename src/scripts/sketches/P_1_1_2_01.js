// P_1_1_2_01
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
 * changing the color circle by moving the mouse.
 *
 * MOUSE
 * position x          : saturation
 * position y          : brighness
 *
 * KEYS
 * 1-5                 : number of segments
 * s                   : save png
 */
'use strict';

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  var segmentCount = 360;
  var radius = 300;
  
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(800, 800);
    p.noStroke();
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    p.colorMode(p.HSB, 360, p.width, p.height);
    p.background(360, 0, p.height);
  
    var angleStep = 360 / segmentCount;
  
    p.beginShape(p.TRIANGLE_FAN);
    p.vertex(p.width / 2, p.height / 2);
  
    for (var angle = 0; angle <= 360; angle += angleStep) {
      var vx = p.width / 2 + p.cos(p.radians(angle)) * radius;
      var vy = p.height / 2 + p.sin(p.radians(angle)) * radius;
      p.vertex(vx, vy);
      p.fill(angle, p.mouseX, p.mouseY);
    }
  
    p.endShape();
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {

  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png');


  switch (p.key) {
    case '1':
      segmentCount = 360;
      break;
    case '2':
      segmentCount = 45;
      break;
    case '3':
      segmentCount = 24;
      break;
    case '4':
      segmentCount = 12;
      break;
    case '5':
      segmentCount = 6;
      break;
    }
  }

  p.keyReleased = () => {
    
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
