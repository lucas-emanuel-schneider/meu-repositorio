abstract class Character {
  abstract talk(): void
  abstract specialMove(): void
}

class MeleeCharacter extends Character {
  talk() {
    console.log('DALE raduken RYU!')
  }
  specialMove() {
    console.log('Usou o GOLPE PESADO!')
  }
}

class LongRangerCharacter extends Character {
  talk() {
    console.log('ITARACTACSETUKEN!')
  }
  specialMove() {
    console.log('Usou o ARCO DO CAOS!')
  }
}

const useCharacter = (param: Character) => {
  param.talk()
  param.specialMove()
}
const archer = new LongRangerCharacter;
const melee = new MeleeCharacter;
useCharacter(melee);
useCharacter(archer);
