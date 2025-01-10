import xml.etree.ElementTree as ET

tree = ET.parse("faturamentoDistribuidora.xml")

root = tree.getroot()

faturamentoDosEstados = {}

for estado in root.findall("estado"):
    nome = estado.find("nome").text
    valor = float(estado.find("valor").text)
    faturamentoDosEstados[nome] = valor

faturamentoTotal = sum(faturamentoDosEstados.values())

for estado, faturamento in faturamentoDosEstados.items():
    porcentagem = (faturamento / faturamentoTotal) * 100
    print(f"{estado}: Faturamento: R${faturamento:.2f}, Porcentagem: {porcentagem:.2f}%")
