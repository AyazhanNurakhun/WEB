def func(a, n):
    if n == 0:
        return 1
    else:
        return a * func(a, n - 1)
a = float(input())
n = int(input())
ans = int(func(a,n))
print(ans)