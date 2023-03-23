# Exercício 1: Crie uma função que receba dois números e retorne o maior deles.

def get_biggest_number(na, nb):
    if na > nb:
        return na
    else:
        return nb


print(get_biggest_number(2, 1))

# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.


def sum_average(list):
    result = 0
    for num in list:
        result += num
    return result / len(list)


print(sum_average([10, 20, 15, 25]))

# Exercício 3: Faça um programa que, dado um valor n qualquer,
#  tal que n > 1, imprima na tela um quadrado feito de asteriscos
#  de lado de tamanho n. Por exemplo:


def make_square(n):
    line = ''
    letter = '*'
    for i in range(n):
        line += letter
    for c in range(n):
        print(line)


make_square(5)

# Exercício 4: Crie uma função que receba uma lista de nomes e retorne o nom
#  com a
# maior quantidade de caracteres. Por exemplo, para ["José", "Lucas", "Nádia",
# # "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".


def get_biggest_name(list_names):
    biggest_name = ''
    for name in list_names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name


print(get_biggest_name(
    ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))

# Exercício 5: Considere que a cobertura da tinta é de 1 litro para cada
# 3 metros quadrados e que a tinta é vendida em latas de 18 litros,
#  que custam R$ 80,00.
#  Crie uma função que retorne dois valores em uma tupla contendo a quantidade
#  de latas de tinta a serem compradas e o preço total
#  a partir do tamanho de uma parede (em m²).


def get_wall_price(area):
    can_price = 80
    required_liters = area / 3
    required_cans = required_liters // 18
    if required_liters % 18:
        required_cans += 1
    return required_cans, required_cans * can_price


print(get_wall_price(100))
