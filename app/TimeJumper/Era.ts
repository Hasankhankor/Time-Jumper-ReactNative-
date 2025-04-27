// Era.ts
abstract class Era {
  public name: string;
  public background: string; // Type of background is string
  public obstacles: any[]; // Array of any
  public artifacts: any[]; // Array of any

  constructor(name: string, background: string) {
    this.name = name;
    this.background = background;
    this.obstacles = [];
    this.artifacts = [];
  }

  public abstract update(deltaTime: number): void;

  public abstract render(ctx: CanvasRenderingContext2D): void;

  public addObstacle(obstacle: any): void {
    this.obstacles.push(obstacle);
  }
}

class DinosaurAge extends Era {
  constructor() {
    super("Dinosaur Age", "jungle_background.jpg");
  }

  public update(deltaTime: number): void {
    // Update logic for the Dinosaur Age
    console.log("Updating Dinosaur Age");
  }

  public render(ctx: CanvasRenderingContext2D): void {
    // Render logic for the Dinosaur Age
    console.log("Rendering Dinosaur Age");
  }
}

class MedievalAge extends Era {
  constructor() {
    super("Medieval Age", "castle_background.jpg");
  }

  public update(deltaTime: number): void {
    // Update logic for the Medieval Age
    console.log("Updating Medieval Age");
  }

  public render(ctx: CanvasRenderingContext2D): void {
    // Render logic for the Medieval Age
    console.log("Rendering Medieval Age");
  }
}

class CyberFuture extends Era {
  constructor() {
    super("Cyber Future", "cyber_city_background.jpg");
  }

  public update(deltaTime: number): void {
    // Update logic for the Cyber Future
    console.log("Updating Cyber Future");
  }

  public render(ctx: CanvasRenderingContext2D): void {
    // Render logic for the Cyber Future
    console.log("Rendering Cyber Future");
  }
}

export { Era, DinosaurAge, MedievalAge, CyberFuture };