// This instance of p5 is for using static methods, which for some reason are not available on the 'p' instance.
// If you need it, uncomment it.
// import p5 from '../p5.min'; 

// The basic idea here is that you'll need to use the `p` namespace to access
// all non-static p5 methods and variables here. Any static methods need to be accessed with the p5 namespace (imported above).

export default function sketch(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~

  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(720, 720)
    p.noFill()
    p.background(255)
    p.strokeWeight(2)
    p.stroke(0, 25)
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    if (p.mouseIsPressed && p.mouseButton == p.LEFT) {
      p.push()
      p.translate(p.width / 2, p.height / 2)
  
      var circleResolution = p.int(p.map(p.mouseY + 100, 0, p.height, 2, 10))
      var radius = p.mouseX - p.width / 2
      var angle = p.TAU / circleResolution
  
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
    if (p.keyCode == p.DELETE || p.keyCode == p.BACKSPACE) p.background(255)  
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
