#1
import math
import os
import random
import re
import sys

if __name__ == '__main__':
    n = int(input().strip())

    if n % 2 == 1:
        print("Weird")
    elif 2 <= n <= 5:
        print("Not Weird")
    elif 6 <= n <= 20:
        print("Weird")
    else: 
        print("Not Weird")

#2
if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(a + b)
    print(a - b)
    print(a * b)

#3
if __name__ == '__main__':
    a = int(input())
    b = int(input())

    print(a // b)
    print(a / b)

#4
if __name__ == '__main__':
    n = int(input())

    for i in range(n):
        print(i ** 2)

#5
if __name__ == '__main__':
    n = int(input())
    elements = tuple(map(int, input().split()))
    print(hash(elements))

#6
if __name__ == '__main__':
    n = int(input())
    lst = []

    for _ in range(n):
        command = input().split()
        operation = command[0]
        args = list(map(int, command[1:]))

        if operation == "insert":
            lst.insert(args[0], args[1])
        elif operation == "print":
            print(lst)
        elif operation == "remove":
            lst.remove(args[0])
        elif operation == "append":
            lst.append(args[0])
        elif operation == "sort":
            lst.sort()
        elif operation == "pop":
            lst.pop()
        elif operation == "reverse":
            lst.reverse()

#7
if __name__ == '__main__':
    students = []

    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    scores = sorted(set(score for _, score in students))
    second_lowest = scores[1]

    names = sorted([name for name, score in students if score == second_lowest])

    for name in names:
        print(name)

#8
if __name__ == '__main__':
    n = int(input())
    scores = list(map(int, input().split()))
    
    max_score = max(scores)
    runner_up = max([score for score in scores if score != max_score])
    
    print(runner_up)

#9
if __name__ == '__main__':
    x = int(input())
    y = int(input())
    z = int(input())
    n = int(input())

    result = [[i, j, k] for i in range(x + 1) 
                        for j in range(y + 1) 
                        for k in range(z + 1) 
                        if (i + j + k) != n]
    
    print(result)

#10
if __name__ == '__main__':
    n = int(input())

    for i in range(1, n + 1):
        print(i, end="")