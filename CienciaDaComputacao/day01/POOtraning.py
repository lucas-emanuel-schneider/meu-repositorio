class Person:
    def __init__(self, name, age):
        self._name = name
        self.age = age

    @property
    def name(self):
        return self._name

    @name.setter
    def name(self, new_name):
        self._name = new_name

    def speak(self, phrase):
        print(f'The {self.name} say: {phrase}')


class Hero(Person):
    def __init__(self, Person: Person, hero_name, power):
        super().__init__(Person.name, Person.age)
        self.hero_name = hero_name
        self.power = power

    def save_people(self):
        print(
            f'{self.hero_name} saves the day using his power: {self.power}')


Lucas = Person('Lucas', 28)
print(Lucas.name)
Lucas.name = 'Daniel'
print(Lucas.name)
Vingador = Hero(Lucas, 'Lo Hombre Malo', 'Judgement')
Vingador.speak('Hello')
Vingador.save_people()
# print(Lucas.name)
