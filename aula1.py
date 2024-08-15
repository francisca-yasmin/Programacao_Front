"""PRINT EXIBE MENSAGENS NA TELA"""

print(">>>>>>>>>Vamos fazer uma panqueca<<<<<<<<<")

"""input serve para perguntar ao usuario"""
cozinheiro = input("Quem é o cozinheiro de hoje? ")

#ingredientes
ovos = int(input("qual a quantidade de ovos necessaria? "))
leite = float(input("quanto leite sera necessario? "))
farinha = float(input("quanto de farinha sera necessario? "))

"""cozinheiro = "fran"
ovos = 2
farinha = 0.5
leite = 0.200"""

"""print(type(cozinheiro))
print(type(ovos))
print(type(farinha))
print(type(leite))"""

print(f"ola {cozinheiro}, pronto para a nossa receita de hoje? ")
print("na nossa receita")
print(f"usaremos {ovos} ovos, {leite} xicaras de leite e {farinha} xicaras de farinha")


