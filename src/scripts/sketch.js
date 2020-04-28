import p5 from './p5.min';

export default function sketch(p) {
  console.log("P is: ", p);
  let w;
  let canvas;

  function randomInt(max) {
    return p.floor(p.random(max + 1));
  }

  class Walker {
    constructor() {
      this.p5 = new p5()
      this.pos = p.createVector(p.width / 2, p.height / 2);
      this.vel = p.createVector(0, 0);
      this.update = () => {
        const mouse = p.createVector(this.p5.mouseX, this.p5.mouseY);
        this.acc = p5.Vector.sub(mouse, this.pos);
        this.acc.setMag(0.05);
        this.vel.add(this.acc);
        this.pos.add(this.vel);
      };
      this.display = () => {
        p.fill(randomInt(255), randomInt(255), randomInt(255));
        p.ellipse(this.pos.x, this.pos.y, 48, 48);
      };
    }
  }
  p.keyTyped = () => {
    if (p.key === 's') {
      p.saveCanvas('snapshot', 'png')
    }
  };

  p.setup = () => {
    canvas = p.createCanvas(3 * 640, 3 * 360);
    p.background(randomInt(255), randomInt(255), randomInt(255));
    w = new Walker();
  };

  p.draw = () => {
    w.update();
    w.display();
  };
}
