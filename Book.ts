function classDecorator(param1: string, param2: string) {
  return function <T extends {new(...args: any[]): {}}> (constructor: T) {
    return class extends constructor {
      firstProperty = param1;
      secondProperty = param2;
    }
  }
}


function logger(className: string) {
  /* implementing logic */
  console.log('Decorator Factory');
  return function(target: Function) {
    console.log(`클래스 이름: ${className}`);
  }
}

function prop(target: Object, name: string) {
  Object.defineProperty(target, name, {
    get: function() { return this[name]; },
    set: function(value) { this[name] = value; },
    enumerable: true,
    configurable: true
  });
}

@logger('Book')
export class Book {

}


@classDecorator('first', 'second')
export class Test {

}

export class Person {
  @prop private name: string;
  @prop private age: number;
}