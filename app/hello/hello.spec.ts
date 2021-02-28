import { Hello } from "./hello";

describe("hello", (): void => {
  test("should say hello to yantene.", (): void => {
    const hello = new Hello("yantene");

    expect(hello.greet()).toBe("Hello, yantene!");
  });
});
