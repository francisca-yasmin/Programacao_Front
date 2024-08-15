#inventario
print(">>>>>>>> INVENTARIO <<<<<<<<<")

nomeProduto = str(input("informe o nome do produto: "))
codBarras = str(input("informe o codigo de barras do produto: "))
qtdEstoque = int(input("qual a quantidade do produto "))
peso = float(input("informe o peso do produto "))
embalagem = str(input("informe o tipo da embalagem do produto "))
qtdPack = int(input("quantos itens vem na embalagem fechada? "))

print("\n>>>>>>>>>> FICHA DO PRODUTO <<<<<<<<<\n")
print(f"O produto {nomeProduto}, tem descrito na embalagem de {embalagem} o peso {peso}, e o seu codigo de barras eh {codBarras}. \n"
       f"No pack fechado vem {qtdPack} unidades e no meu inventario tem cerca de {qtdEstoque} unidades do produto. ")