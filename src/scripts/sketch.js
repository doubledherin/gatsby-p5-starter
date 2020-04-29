export default function sketch(p) {
  // ~~~~~~ Initialize variables ~~~~~~~~~
  let numberOfVertices = 20
  let friction = 0.01
  let shapeSize = (p.windowWidth * p.windowHeight) / 19000
  let positionX
  let positionY
  let x = []
  let y = []
    
  // ~~~~~~ React lifecycle methods ~~~~~~
  p.preload = () => {

  }

  // ~~~~~~ Setup ~~~~~~
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
    positionX = p.random(0, p.width)
    positionY = p.random(0, p.height)
    let angle = p.radians(360 / numberOfVertices)
    for (let i = 0; i < numberOfVertices; i++) {
      x.push(p.cos(angle * i) * shapeSize)
      y.push(p.sin(angle * i) * shapeSize)
    }
    p.stroke(255, 100, 0, 70)
    p.background(0)
    p.noFill()
  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {
    p.beginShape()
      p.curveVertex(positionX + x[0], positionY + y[0])
      p.curveVertex(positionX + x[numberOfVertices - 1], positionY +y[numberOfVertices - 1])
      for (let i = 0; i < numberOfVertices; i++) {
        p.curveVertex(positionX + x[i], positionY + y[i])
      }
      p.curveVertex(positionX + x[1], positionY + y[1])
    p.endShape()

    positionX += (p.mouseX - positionX) * friction
    positionY += (p.mouseY - positionY) * friction

  }

  p.mousePressed = () => {
    positionX = p.mouseX
    positionY = p.mouseY
    setVertices()
  }

  // ~~~~~~ Helper functions ~~~~~~~~~
  function setVertices() {
    for (let i = 0; i < numberOfVertices; i++) {
      x[i] += p.random(-1, 1)
      y[i] += p.random(-1, 1)
    }
  }
  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
