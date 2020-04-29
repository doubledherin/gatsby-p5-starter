import p5 from './p5.min'; // This instance of p5 is for using static methods, which for some reason are not available on the 'p' instance.

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

  p.keyReleased = () => {
    
  }

  // ~~~~~~ Helper functions ~~~~~~~~~

  // ~~~~~~ Classes ~~~~~~~~~~~~
  
}
