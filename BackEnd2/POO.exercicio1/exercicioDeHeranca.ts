class Superclass {
  constructor(public isSuper: boolean = true) {}
  public sayHello():void {
    console.log('Olá Mundo!');
  }
}

class Subclass extends Superclass {
  constructor() { super(); this.isSuper = false; }
}

const myFunc = (obj: Superclass) => obj.sayHello();

const sup = new Superclass;
const sub = new Subclass;

myFunc(sup);
myFunc(sub);
console.log(sub.isSuper)