abstract class Personagem {
  constructor() { }
  abstract speak():void
  abstract atack():void
}

class Guerreiro extends Personagem {
  constructor(private _name: string, private _age: number, private _power: string) {
    super()
  }
  public get name(): string {
    return this._name
  }
  public set name(newName: string) {
    if (newName.length > 25) throw new Error('Nome Muito GRANDE!');
    
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
// teste de erro
// Thor.name = 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'