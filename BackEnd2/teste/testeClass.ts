abstract class Personagem {
  constructor() { }
  protected abstract set name(newName: string)
  protected abstract get name(): string
  abstract speak():void
  abstract atack():void
}

class Guerreiro extends Personagem {
  constructor(private _name: string, private _age: number, private _power: string) {
    super()
  }
  get name(): string {
    return this._name
  }
  set name(newName: string) {
    this._name = newName
  }
  set age(newAge: number) {
    this._age = newAge
  }
  set power(newPower: string) {
    this._power = newPower
  }
  public speak(): void {
    console.log(`O personagem ${this._name} falou!`)
  }
  public atack() {
    console.log(`O personagem ${this._name} usou seu ${this._power}`)
  }
}

const Thor = new Guerreiro('Thor', 33, 'Raio');
const Hulk = new Guerreiro('Hulk', 43, 'Esmagar');
Thor.speak();
Thor.atack();
Hulk.speak();
Hulk.atack();