if __name__ == '__main__':
    n = int(raw_input())
    arr = map(int, raw_input().split())
    l = list(arr)
    x = max(l)
    for i in range(n):
        if(max(l) == x):
            l.remove(x)
    print(max(l))