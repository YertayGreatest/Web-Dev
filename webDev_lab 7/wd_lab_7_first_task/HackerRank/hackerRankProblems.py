# 1 Task: Introduction to Sets
def average(array):
    s = set(array)
    return sum(s)/len(s)

# 2 Task: Python If-Else

def func(n):
    if n % 2 != 0:
        print("Weird")
    else:
        if 2 <= n <= 5:
            print("Not Weird")
        elif 6 <= n <= 20:
            print("Weird")
        elif n>20:
            print("Not Weird")

# 3 Task: Arithmetic Operations
def ao():
    a = int(input())
    b = int(input())
    print(f'{a+b}\n{a-b}\n{a*b}')
    
# 4 Task: Python: Devision

def dev():
    a = int(input())
    b = int(input())
    print(f'{a//b}\n{a/b}')
    

# 5 Task: Python: Loops
def loops():
    n = int(input())
    for num in [x**2 for x in range(n)]:
        print(num)
        
        
# 6 Task: finding percentage

def prc():
    n = int(input())
    student_marks = {}
    for _ in range(n):
        name, *line = input().split()
        scores = list(map(float, line))
        student_marks[name] = scores
    query_name = input()
    l = student_marks[query_name]
    print("{:.2f}".format(sum(l)/len(l)))

# 7 Task: Exceptions

def excp():
    k = int(input())
    for i in range(k):
    
        ab = input().split()
        try:
            
            print(int(ab[0])//int(ab[1]))
        except ValueError as ve:
            print("Error Code:",ve)
        except ZeroDivisionError as ze:
            print("Error Code:",ze)


# 8 Task: Power

def power():    
    a = int(input())
    b = int(input())
    m = int(input())

    print(pow(a, b))
    print(pow(a, b)%m)
    
# 9 Task: runner

def runner():
    n = int(input())
    arr = map(int, input().split())
    arr1 = set(arr)
    arr2 = sorted(arr1)
    print(arr2[-2])
    
# 10 Task: swap cases
def swap_case(s):
    s = ""

    for i in s:
        if i.isupper():
            s += (i.lower())
        else:
            s += (i.upper())

    return s