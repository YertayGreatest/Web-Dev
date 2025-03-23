# -------1 Task-------

def hello_name(name):
  return 'Hello '+name+'!'

# -------2 Task-------

def make_abba(a, b):
  return a+b+b+a

# -------3 Task-------

def make_tags(tag, word):
  return '<'+tag+'>'+word+'</'+tag+'>'

# -------4 Task-------

def make_out_word(out, word):
  return out[:2]+word+out[2:]

# -------5 Task-------

def extra_end(str):
  return str[-2:]*3

# -------6 Task-------

def first_two(str):
  return str[0:2]

# -------7 Task-------

def first_half(str):
  return str[:len(str)//2]

# -------8 Task-------

def without_end(str):
  return str[1:-1]

# -------9 Task-------

def combo_string(a, b): # a = short
  if len(a)>len(b):
    a, b = b, a
  return a+b+a

# -------10 Task-------

def non_start(a, b):
  return a[1:]+b[1:]

# -------11 Task-------

def left2(str):
  return str[2:]+str[:2]

