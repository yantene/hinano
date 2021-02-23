export class Hello {
  constructor(public name: string) {}

  greet(): string {
    return `Hello, ${this.name}!`;
  }
}
