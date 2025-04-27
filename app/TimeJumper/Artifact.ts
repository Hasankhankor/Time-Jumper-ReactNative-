class Artifact {
  x: number;
  y: number;
  type: string;

  constructor(x: number, y: number, type: string) {
    this.x = x;
    this.y = y;
    this.type = type;
  }

  render(ctx: CanvasRenderingContext2D) {
    // Basic rendering, can be expanded for different artifact types
    ctx.fillStyle = this.type === 'coin' ? 'gold' : 'blue';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    ctx.fill();
  }
}

export default Artifact;