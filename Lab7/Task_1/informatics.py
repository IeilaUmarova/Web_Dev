#ВВОД - ВЫВОД 
#a
a = int(input())
b = int(input())
c = (a**2 + b**2) ** 0.5
print(c)

#b
num = int(input())
print('The next number for the number %d is %d.' % (num, num + 1))
print('The previous number for the number %d is %d.' % (num, num - 1))

#c
n = int(input())
k = int(input())
print(k//n)

#d
n = int(input())
k = int(input())
print(k % n)

#e
v = int(input())
t = int(input())
result = 0
if v > 0:
    result = (v * t)
else:
    result = (-v * t) % 109
    result = 109 - result
print(result % 109)


#УСЛОВНЫЕ ОПЕРАТОРЫ
#a
a = int(input())
b = int(input())
if a > b :
    print(a)
else:
    print(b)

#b
y = int(input())
if (y % 100 != 0 and y % 4 == 0) or y % 400 == 0:
    print('YES')
else:
    print('NO')

#c
a = int(input())
b = int(input())
if(a==b):
    print('YES')
else:
    print('NO')

#d
x = int(input())
if x > 0:
    print(1)
elif x == 0:
    print(0)
else:
    print(-1)

#e
x = int(input())
y = int(input())
if x > y:
    print(1)
elif x < y:
    print(2)
else:
    print(0)


#ЦИКЛЫ
#for
#a
a = int(input())
b = int(input())
for i in range(a, b + 1):
    if i % 2 == 0:
        print(i, end=" ")

#b
a = int(input())
b = int(input())
c = int(input())
d = int(input())
for i in range(a, b + 1):
    if i % d == c:
        print(i, end=" ")

#c
import math
a = int(input())
b = int(input())
for i in range(math.isqrt(a), math.isqrt(b) + 1):
    square = i * i
    if a <= square <= b:
        print(square, end=" ")

#d
x, d = input().split()
count = 0
for digit in x:
    if digit == d:
        count += 1
print(count)

#e
x = input()
sum_digits = 0
for digit in x:
    sum_digits += int(digit)
print(sum_digits)

#f
x = input()
reversed_number = ""
for i in range(len(x) - 1, -1, -1):
    reversed_number += x[i]
print(int(reversed_number))  

#g
x = int(input())
for i in range(2, x + 1):
    if x % i == 0:
        print(i)
        break

#h
x = int(input())
for i in range(1, x + 1):
    if x % i == 0:
        print(i, end=" ")

#i
x = int(input())
count = 0
for i in range(1, x + 1):
    if x % i == 0:
        count += 1
print(count)

#j
total = 0  
for i in range(100):  
    total += int(input())  
print(total)

#k
N = int(input())  
total = 0  
for i in range(N):  
    total += int(input())  
print(total)

#l
binary_number = input()  
decimal_number = 0  
power = 0  
for digit in reversed(binary_number):
    decimal_number += int(digit) * (2 ** power)
    power += 1  
print(decimal_number)

#m
N = int(input())  
zero_count = 0  
for i in range(N):  
    if int(input()) == 0:  
        zero_count += 1  
print(zero_count)

#while
#a
N = int(input())  
i = 1  
while i * i <= N:  
    print(i * i)  
    i += 1  

#b
N = int(input())  
for i in range(2, N + 1):  
    if N % i == 0:  
        print(i)  
        break  

#c
N = int(input())  
power = 1  
while power <= N:  
    print(power, end=" ")  
    power *= 2  

#d
N = int(input())  
power = 1  
while power < N:  
    power *= 2  
print("YES" if power == N else "NO")  

#e
N = int(input())  
k = 0  
power = 1 
while power < N:  
    power *= 2  
    k += 1  
print(k)  