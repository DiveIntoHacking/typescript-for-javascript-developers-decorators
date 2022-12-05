class User {
  name: string = 'Ham';

  @sampleDecorator
  sayName(): void {
    console.log(`My name is ${this.name}.`);
  }
}

function sampleDecorator(
  target: any,
  propertyKey: string,
  descriptor: any
): void {
  console.log('target: ', target);
  console.log('propertyKey: ', propertyKey);
  console.log('descriptor: ', descriptor);
}
