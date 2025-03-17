if __name__ == '__main__':
    n = int(input())
    elements = tuple(map(int, input().split()))
    print(hash(elements))
