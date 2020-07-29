// P_2_2_6_01
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
 * A chain of linked pendulums. Each a little shorter and faster than the one it's linked to.
 * Each joint of the pendulum leaves behind its own trail.
 *
 * KEYS
 * 1                   : toggle pendulum
 * 2                   : toggle pendulum path
 * -                   : decrease speed relation
 * +                   : increase speed relation
 * arrow down          : decrease length of lines
 * arrow up            : increase length of lines
 * arrow left          : decrease joints
 * arrow right         : increase joints
 * del, backspace      : clear screen
 * s                   : save png
 *
 * CONTRIBUTED BY
 * [Niels Poldervaart](http://NielsPoldervaart.nl)
 */
'use strict'
import p5 from '../p5.min.js'

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~


  var joints = 5
  var lineLength = 100
  var speedRelation = 2
  var center
  var pendulumPath
  var angle = 0
  var maxAngle = 360
  var speed
  
  var showPendulum = true
  var showPendulumPath = true
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.colorMode(p.HSB, 360, 100, 100, 100)
    p.noFill()
    p.strokeWeight(1)
  
    center = p.createVector(p.width / 2, p.height / 2)
  
    startDrawing()
  
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    p.background(0, 0, 100)

    angle += speed
  
    // each frame, create new positions for each joint
    if (angle <= maxAngle + speed) {
      // start at the center position
      var pos = center.copy()
  
      for (var i = 0; i < joints; i++) {
        var a = angle * p.pow(speedRelation, i)
        if (i % 2 == 1) a = -a
        var nextPos = p5.Vector.fromAngle(p.radians(a))
        nextPos.setMag((joints - i) / joints * lineLength)
        nextPos.add(pos)
  
        if (showPendulum) {
          p.noStroke()
          p.fill(0, 10)
          p.ellipse(pos.x, pos.y, 4, 4)
          p.noFill()
          p.stroke(0, 10)
          p.line(pos.x, pos.y, nextPos.x, nextPos.y)
        }
  
        pendulumPath[i].push(nextPos)
        pos = nextPos
      }
    }
  
    // draw the path for each joint
    if (showPendulumPath) {
      p.strokeWeight(1.6)
      for (var j = 0; j < pendulumPath.length; j++) {
        var path = pendulumPath[j]
  
        p.beginShape()
        var hue = p.map(i, 0, joints, 120, 360)
        p.stroke(hue, 80, 60, 50)
        for (var k = 0; k < path.length; k++) {
          p.vertex(path[k].x, path[k].y)
        }
        p.endShape()
      }
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {

  }

  p.mouseReleased = () => {

  }

  p.keyPressed = () => {
    if (p.key == 's' || p.key == 'S') p.saveCanvas(Date.now().toString(), 'png')

  if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) startDrawing()

  if (p.keyCode == p.UP_ARROW) {
    lineLength += 2
    startDrawing()
  }
  if (p.keyCode == p.DOWN_ARROW) {
    lineLength -= 2
    startDrawing()
  }
  if (p.keyCode == p.LEFT_ARROW) {
    joints--
    if (joints < 1) joints = 1
    startDrawing()
  }
  if (p.keyCode == p.RIGHT_ARROW) {
    joints++
    if (joints > 10) joints = 10
    startDrawing()
  }

  if (p.key == '+') {
    speedRelation += 0.5
    if (speedRelation > 5) speedRelation = 5
    startDrawing()
  }
  if (p.key == '-') {
    speedRelation -= 0.5
    if (speedRelation < 2) speedRelation = 2
    startDrawing()
  }

  if (p.key == '1') showPendulum = !showPendulum
  if (p.key == '2') showPendulumPath = !showPendulumPath
  }

  p.keyReleased = () => {
    
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  function startDrawing() {
    pendulumPath = []
    // new empty array for each joint
    for (var i = 0; i < joints; i++) {
      pendulumPath.push([])
    }
  
    angle = 0
    speed = (8 / p.pow(1.75, joints - 1) / p.pow(2, speedRelation - 1))
  }
  // ~~~~~~ Classes ~~~~~~~~~~~~
}