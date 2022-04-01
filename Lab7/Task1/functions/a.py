def func(a, b, c, d):
    return min(min(a, b), min(c, d))

a = int(input())
b = int(input())
c = int(input())
d = int(input())
print(func(a, b, c, d))