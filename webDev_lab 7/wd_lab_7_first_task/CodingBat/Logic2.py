# ------1 Task------

def make_bricks(small, big, goal):
  if (goal % (big * 5)) != 0:
    return 0<=(small - (goal%(big*5))) <= 3
  return False


# ------2 Task------

def make_bricks(small, big, goal):
  bigs = goal // 5 
  if bigs > big:
    bigs = big
  smalls = goal - (bigs * 5) 
  return smalls <= small 

# ------3 Task------

def lone_sum(a, b, c):
  if a==b and a==c:
    return 0
  elif a==b:
    return c
  elif a==c:
    return b
  elif b==c:
    return a
  return a+b+c

# ------4 Task------

def lucky_sum(a, b, c):
  if a == 13:
    return 0
  elif b==13:
    return a
  elif c==13:
    return a+b
  return a+b+c
    

# ------5 Task------

def no_teen_sum(a, b, c):
  return fix_teen(a)+fix_teen(b)+fix_teen(c)
  
def fix_teen(n):
  if 13<=n<=19 and n not in [15, 16]:
    return 0
  return n

# ------6 Task------

def round_sum(a, b, c):
  
  def round10(num):
    return (((num + 5) // 10) * 10)
  
  return round10(a)+round10(b)+round10(c)

# ------7 Task------

def close_far(a, b, c):
  if abs(b-a) < 2 and abs(c-a)+abs(c-b) > 3:
    return True
  elif abs(b-a)+abs(b-c) > 3 and abs(c-a) < 2:
    return True
  return False

# ------8 Task------

def make_chocolate(small, big, goal):
  bigbars = goal // 5
  if bigbars > big:
    bigbars = big
  smalls = goal - bigbars*5
  if smalls<=small:
    return smalls
  return -1
  





