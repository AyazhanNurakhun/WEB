n1 = int(input())
ans = 0
while n1 > 0:
    digit = n1 % 10
    n1 = n1 // 10
    ans = ans * 10
    ans = ans + digit
print(ans)