# -------1 Task-------

def cigar_party(cigars, is_weekend):
  if not is_weekend and (39 < cigars < 61):
    return True
  if cigars > 39 and is_weekend:
    return True
  return False

# -------2 Task-------

def date_fashion(you, date):
  if you < 3 or date < 3:
    return 0
  elif you > 7 or date > 7:
    return 2
  return 1


# -------3 Task-------

def squirrel_play(temp, is_summer):
  if temp > 59:
    return temp < 101 if is_summer else temp < 91 
  return False

# -------4 Task-------

def caught_speeding(speed, is_birthday):
  if is_birthday and speed < 66:
    return 0
  elif speed < 61:
    return 0
  if is_birthday and speed < 86:
    return 1
  elif speed < 81:
    return 1
  return 2

# -------5 Task-------

def sorta_sum(a, b):
  return 20 if 9<a+b<20 else a+b

# -------6 Task-------

def alarm_clock(day, vacation):
  if day not in [6, 0]:
    return '7:00' if not vacation else '10:00'
  return 'off' if vacation else '10:00'

# -------7 Task-------

def love6(a, b):
  if 6 in [a, b]:
    return True
  return a+b==6 or abs(a-b)==6

# -------8 Task-------

def in1to10(n, outside_mode):
  if not outside_mode:
    return 0<n<11
  return not (1<n<10)

# -------9 Task-------

def near_ten(num):
  return num%10 <= 2 or num%10 >= 8
