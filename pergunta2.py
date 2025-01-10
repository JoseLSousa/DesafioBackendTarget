def fibonnaci(n):
    sequence = [0, 1]

    while sequence[-1] < n:
        sequence.append(sequence[-1] + sequence[-2])

    return sequence


def isAFibonacciNumber(n):
    sequence = fibonnaci(n)
    if n in sequence:
        return f"O número {n} pertence à sequência de Fibonacci."
    else:
        return f"O número {n} não pertence à sequência de Fibonacci."


try:
    numberInput = int(input("Digite um número: "))
    print(isAFibonacciNumber(numberInput))
except ValueError:
    print("Digite um número válido.")
