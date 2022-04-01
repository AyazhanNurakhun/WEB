def lone_sum(a, b, c):
    sum = 0
    if a not in [b, c]:
        sum += a
    else:
        0

    if b not in [a, c]:
        sum += b
    else:
        0

    if c not in [a, b]:
        sum += c
    else:
        0
    return sum