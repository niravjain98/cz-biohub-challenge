def fibonacci(n):
    fib_sequence = [0, 1]
    while len(fib_sequence) < n:
        print("Hello")
        fib_sequence.append(fib_sequence[-1] + fib_sequence[-2])
    return fib_sequence[:n]
