function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property'
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

function getter(constructorF: Function) {
  

}

@logger('Book')
export class Book {

}


@classDecorator
export class Test {

}

export class Person {
  @prop private name: string;
  @prop private age: number;
}

const oatmeal = {
  viscosity: 20,
  flavor: 'Brown Sugar Cinnamon',
}

console.log(Object.getOwnPropertyDescriptor(oatmeal, 'viscosity'));

function readOnly(target, key, descriptor) {
  return {
    ...descriptor,
    writable: false,
  }
}

const obj = {
  name: 'obj',
  lengthOfName: 3
};

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptor(obj, 'lengthOfName'));

