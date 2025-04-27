class Obstacle {
  x: number;
  y: number;
  width: number;
  height: number;
  type: string;

  constructor(x: number, y: number, width: number, height: number, type: string) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.type = type;
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "red";
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Obstacle;