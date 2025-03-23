# ------1 Task------

def sleep_in(weekday, vacation):
  return not weekday or vacation

# ------2 Task------

def monkey_trouble(a_smile, b_smile):
  return not (a_smile ^ b_smile)

# ------3 Task------

def sum_double(a, b):
  return a+b if a!=b else 2*(a+b)

# ------4 Task------

def diff21(n):
  return (21-n) if n<=21 else 2*(n-21)

# ------5 Task------

def parrot_trouble(talking, hour):
  return talking and not (6<hour<21)

# ------6 Task------

def makes10(a, b):
  return a==10 or b==10 or a+b==10

# ------7 Task------

def near_hundred(n):
  return abs(n-100)<=10 or abs(n-200)<=10

# ------8 Task------

def pos_neg(a, b, negative):
  return not ((a>0 and b>0) or (a<0 and b<0)) if not negative else (a<0 and b<0)

# ------9 Task------

def not_string(str):
  if str[:3] == "not":
    return str
  return "not " + str

# ------10 Task------

def missing_char(str, n):
  return str[:n]+str[n+1:]

# ------11 Task------

def front_back(str):
  if len(str)>1:
    return str[-1]+str[1:-1]+str[0]
  return str

# ------12 Task------

def front3(str):
  return str[:3]*3 if len(str)>2 else str*3
