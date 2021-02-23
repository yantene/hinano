export class Hello {
  constructor (public name: string) {
  }

  greet () {
    return `Hello, ${this.name}!`;
  }
}
