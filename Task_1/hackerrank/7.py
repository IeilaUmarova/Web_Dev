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
