const obj = {
    get prop() {
        return this.__prop__;
    },
    set prop(value) {
      this.__prop__ = value * 2;
    },
};

obj.prop = 12;

  console.log(obj.prop); //24

/////
const obj = {};

Object.defineProperty(obj, //objeto target
  'prop', //nombre propiedad
{
    enumerable: true,
    configurable: true,
    get prop() { //getter
        return this.__prop__;
    },
    set prop(value) { //setter
      this.__prop__ = value * 2;
    },
});
obj.prop = 12;

var atr = Object.getOwnPropertyDescriptor(obj, 'prop')
console.log(atr);
