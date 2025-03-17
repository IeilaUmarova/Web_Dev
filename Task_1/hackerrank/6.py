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
