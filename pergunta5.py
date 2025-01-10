texto = input("Digite um texto: ")
index = len(texto) - 1

for letra in texto:
    print(texto[index])
    index -= 1
