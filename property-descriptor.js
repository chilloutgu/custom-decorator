var obj = {
    name: 'obj',
    lengthOfName: 3
};
console.log(Object.getOwnPropertyDescriptor(obj, 'name'));
console.log(Object.getOwnPropertyDescriptor(obj, 'lengthOfName'));
var getMethodName = 'getName';
var setMethodName = 'setName';
var propKey = 'name';
Object.defineProperty(obj, getMethodName, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: function () { return (obj[propKey]); }
});
/* 어느 시점에 생성이 되는가.. */
Object.defineProperty(obj, setMethodName, {
    configurable: false,
    writable: false,
    enumerable: false,
    value: function (value) {
        obj[propKey] = value;
    }
});
Object.defineProperty(obj, 'createdAt', {
    configurable: false,
    writable: false,
    enumerable: true,
    value: new Date()
});
console.log(obj.setName('hello'));
console.log(obj.getName());
console.log(obj);
