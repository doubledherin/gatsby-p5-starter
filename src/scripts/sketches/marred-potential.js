// import p5 from './p5.min'; // This instance of p5 is for using static methods, which for some reason are not available on the 'p' instance.

// The basic idea here is that you'll need to use the `p` namespace to access
// all non-static p5 methods and variables here. Any static methods need to be accessed with the p5 namespace (imported above).
export default function marredPotential(p) {

  // ~~~~~~ Initialize variables ~~~~~~~~~
  let hypotrochoids = []
  let angle = 45.0
  
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    p.background(0)
    p.smooth()
    p.ellipseMode(p.CENTER)
    p.stroke(245, 230, 156, 100)
    const hValues = [19, 140, 175, 50, 90]
    const fixedCircleRadius = 240.0
    const rollingCircleRadius = 160.0

    for (let i = 0; i < hValues.length; i++) {
      hypotrochoids[i] = [fixedCircleRadius, rollingCircleRadius, hValues[i]]
    }
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    for (let i = 0; i < hypotrochoids.length; i++) {
      let [fixedCircleRadius, rollingCircleRadius, h] = hypotrochoids[i]
      hypotrochoid(fixedCircleRadius, rollingCircleRadius, h);
    }
  }

  // ~~~~~~ Other commonly used p5 methods
  p.mousePressed = () => {

  }

  p.keyReleased = () => {
    
  }

  // ~~~~~~ Helper functions ~~~~~~~~~
  function hypotrochoid(fixedCircleRadius, rollingCircleRadius, h) {
    let x = ((fixedCircleRadius - rollingCircleRadius) * Math.cos(angle)) + (h * Math.cos(((fixedCircleRadius - rollingCircleRadius) / rollingCircleRadius) * angle)) + 300
    let y = ((fixedCircleRadius - rollingCircleRadius) * Math.sin(angle)) - (h * Math.sin(((fixedCircleRadius - rollingCircleRadius) / rollingCircleRadius) * angle)) + 300
    p.ellipse(x, y, 1, 1)
    angle += 0.00111;
  }
  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}

