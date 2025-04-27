export class Game {
  private currentEra: string;
  private player: any; // Replace 'any' with a Player class later
  private isRunning: boolean;

  constructor() {
    this.currentEra = "Dinosaur Age"; // Initial era
    this.player = {}; // Initialize the player
    this.isRunning = false;
  }

  public start(): void {
    this.isRunning = true;
    this.gameLoop();
  }

  private gameLoop(): void {
    if (!this.isRunning) return;
    this.update();
    this.render();
    requestAnimationFrame(this.gameLoop.bind(this));
  }

  private update(): void {
    // Update game state (player position, obstacles, etc.)
    console.log("Updating game state in:", this.currentEra);
  }

  private render(): void {
    // Render the current game state
    console.log("Rendering game in:", this.currentEra);
  }

  public stop(): void {
    this.isRunning = false;
  }
  
  public getCurrentEra(): string {
      return this.currentEra;
  }
  
  public setCurrentEra(era: string): void{
      this.currentEra = era;
  }