interface Obj {
  name: string;
  lengthOfName: number;
}

const obj: Obj = {
  name: 'obj',
  lengthOfName: 3,
};

console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptor(obj, 'lengthOfName'));

const getMethodName = 'getName';
const setMethodName = 'setName';
const propKey = 'name';

Object.defineProperty(obj, getMethodName, {
  configurable: false,
  writable: false,
  enumerable: false,
  value: () => (obj[propKey]),
});

/* 어느 시점에 생성이 되는가.. */
Object.defineProperty(obj, setMethodName, {
  configurable: false,
  writable: false,
  enumerable: false,
  value: (value: any) => {
    obj[propKey] = value;
  },
})

Object.defineProperty(obj, 'createdAt', {
  configurable: false,
  writable: false,
  enumerable: true,
  value: new Date()
});

Object.defineProperties(obj, {
  getLengthOfName: {
    configurable: false,
    writable: false,
    enumerable: false,
    value: () => (obj.lengthOfName)
  },

  setLengthOfName: {
    configurable: false,
    writable: false,
    enumerable: false,
    value: (value: number) => {
      obj.lengthOfName = value;
    }
  }
});



/* 이 문제를 어떻게 해결할 것인가.. 컴파일 에러가 발생함. */
console.log(obj.setName('hello'));
console.log(obj.getName());
console.log(obj.setLengthOfName(5));
console.log(obj.getLengthOfName());


class Person {
  private _name: string;
  private _age: number;

  get name() { return this.name; }
  set name(value: string) { this.name = value; }

  get age() { return this.age; }
  set age(value: number) { this.age = value; }
}

const person = new Person();
