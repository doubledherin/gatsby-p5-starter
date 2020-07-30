// This instance of p5 is for using static methods, which for some reason are not available on the 'p' instance.
// If you need it, uncomment it.
// import p5 from '../p5.min'; 

// The basic idea here is that you'll need to use the `p` namespace to access
// all non-static p5 methods and variables here. Any static methods need to be accessed with the p5 namespace (imported above).
export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~
  var centerX
  var centerY
  var radius
  var totalDegrees = 369
  var direction
  var rotation
  var r = 255
  var g = 128
  var b = 128
 

  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(0)
    centerX = p.width / 2
    centerY = p.height / 2
    radius = 1
    p.angleMode(p.DEGREES)
    p.translateX = 0
    p.translateY = 0
    p.opacity = 255
    direction = "out"
    rotation = 24.0
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    p.noFill()
    p.stroke(r, g, b, p.opacity)
    p.beginShape()
        for (let i=0; i <=totalDegrees; i++) {
            var noiseFactor = p.noise(i / 40, p.frameCount / 320)
            var x = centerX + radius * p.cos(i) * noiseFactor
            var y = centerY + radius * p.sin(i) * noiseFactor
            p.curveVertex(x, y)
            p.rotate(p.PI/rotation)
        }
        p.endShape(p.CLOSE)
    if (direction == "out") {
        if (radius > p.height / 2) {
            direction == "in"
        } else {
            radius += 0.65
        }
    } else {
        if (radius <= 0) {
            radius = 100
            direction == "out"
        } else {
            radius -= 0.65
        }
    }
    rotation += 0.1
    if (p.frameCount > 200) {
      p.translateX = 0
      p.translateY = 0
    }
    if (r > 255) {
        r = 0
    }
    if (g > 255) {
        g = 0
    }
    if (b > 255) {
        b = 0
    }
    if (p.opacity == 0) {
      p.opacity = 255
    }
    p.translateX *= p.frameCount
    p.translateY *= p.frameCount
    p.opacity -= 1
    r += 1
    g += 1
    b += 1
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
    
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
