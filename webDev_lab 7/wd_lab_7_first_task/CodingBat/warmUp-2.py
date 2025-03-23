# -------1 Task-------

def string_times(str, n):
  return str*n

# -------2 Task-------

def front_times(str, n):
  return str[:3]*n if len(str)>2 else str*n

# -------3 Task-------

def string_bits(str):
  return str[::2]

# -------4 Task-------

def string_splosion(str):
  s = ''
  for i in range(len(str)):
    s += str[:i+1]
  return s

# -------5 Task-------

def last2(str):
  if len(str)<2:
    return 0
  pat = str[-2:]
  cnt=0
  for i in range(len(str)):
    if str[i:i+2] == pat:
      cnt+=1
  return cnt-1

# -------6 Task-------

def array_count9(nums):
  cnt = 0
  for num in nums:
    if num==9:
      cnt+=1
  return cnt

# -------7 Task-------

def array_front9(nums):
  if len(nums)>3:
    for i in range(4):
      if nums[i]==9:
        return True
  else:
    for i in range(len(nums)):
      if nums[i]==9:
        return True
  return False

# -------8 Task-------
    
def array123(nums):
  for i in range(len(nums) - 2):
    if nums[i]==1 and nums[i+1]==2 and nums[i+2]==3:
      return True
  return False

# -------9 Task-------

def string_match(a, b):
  n = max(len(a), len(b))
  cnt = 0
  for i in range(n-1):
    if a[i:i+2] == b[i:i+2]:
      cnt+=1
  return cnt




