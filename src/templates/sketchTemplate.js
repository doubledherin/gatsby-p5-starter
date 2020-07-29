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

  }

  // ~~~~~~ Draw ~~~~~~
  p.draw = () => {

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
