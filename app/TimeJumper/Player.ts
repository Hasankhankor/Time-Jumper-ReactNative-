class Player {
  x: number;
  y: number;
  speed: number;
  score: number;
  lives: number;
  isJumping: boolean;
  jumpPower: number;
  gravity: number;

  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.score = 0;
    this.lives = 3;
    this.isJumping = false;
    this.jumpPower = 15;
    this.gravity = 1;
  }

  moveLeft() {
    this.x -= this.speed;
  }

  moveRight() {
    this.x += this.speed;
  }

  jump() {
    if (!this.isJumping) {
      this.isJumping = true;
      this.y -= this.jumpPower;
    }
  }

  update() {
    if (this.isJumping) {
      this.y += this.gravity;
      this.jumpPower -= this.gravity;
      if (this.jumpPower <= 0){
        this.isJumping = false;
        this.jumpPower = 15;
      }
    }
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "blue";
    ctx.fillRect(this.x, this.y, 30, 50);
  }

  collectArtifact() {
    this.score += 10;
  }
  loseLife(){
    this.lives -=1;
  }
}

export default Player;