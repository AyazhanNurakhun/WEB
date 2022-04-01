n = int(input())
a = list(map(int,(input()).split()))
for i in range(0, n // 2):
    b = a[i]
    a[i] = a[n - 1 - i]
    a[n - 1 - i] = b
print(a)