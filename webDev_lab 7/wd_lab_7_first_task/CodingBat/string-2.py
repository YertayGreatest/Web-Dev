# ------1 Task-------
def double_char(str):
  res = ''
  for c in str:
    res+=c*2
  return res

# ------2 Task-------

def count_hi(str):
  str = str.replace(' ', '')
  cnt = 0
  for i in range(len(str)-1):
    if str[i:i+2] == 'hi':
      cnt+=1
  return cnt
    
# ------3 Task-------

def cat_dog(str):
  catcnt = 0
  dogcnt = 0
  for i in range(len(str)-1):
    if str[i:i+3] == 'cat':
      catcnt+=1
    elif str[i:i+3] == 'dog':
      dogcnt+=1
  return catcnt==dogcnt
  

# ------4 Task-------

def count_code(str):
  cnt=0
  for i in range(len(str)-3):
    if str[i:i+2]=='co' and str[i+3]=='e':
      cnt+=1
  return cnt

# ------5 Task-------

def end_other(a, b):
  m = len(a) if len(a) < len(b) else len(b)
  return a[::-1].lower()[:m]==b[::-1].lower()[:m]
  
# ------6 Task-------

def xyz_there(str):
  if str[:3] == 'xyz':
    return True
  for i in range(1, len(str)-2):
    if str[i-1] != '.' and str[i:i+3] == 'xyz':
      return True
  return False
  







