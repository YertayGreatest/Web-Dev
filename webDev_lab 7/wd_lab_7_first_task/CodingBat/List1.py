# -------1 Task-------

def first_last6(nums):
  return nums[0] == 6 or nums[-1] == 6

# -------2 Task-------

def same_first_last(nums):
  return (len(nums)>0) and (nums[0]==nums[-1])

# -------3 Task-------

def make_pi():
  return [3,1,4]

# -------4 Task-------

def common_end(a, b):
  return (a[0]==b[0]) or (a[-1]==b[-1])

# -------5 Task-------

def sum3(nums):
  return sum(nums)

# -------6 Task-------

def rotate_left3(nums):
  return nums[1:]+nums[:1]

# -------7 Task-------

def reverse3(nums):
  return nums[::-1]

# -------8 Task-------

def max_end3(nums):
  n = max((nums[0]), (nums[2]))
  return [n for i in range(3)]

# -------9 Task-------

def sum2(nums):
  if len(nums)==0:
    return 0
  return nums[0]+nums[1] if len(nums)>1 else nums[0]

# -------10 Task-------

def middle_way(a, b):
  return [a[1], b[1]]

# -------11 Task-------

def make_ends(nums):
  return [nums[0], nums[0]] if len(nums)==1 else [nums[0], nums[-1]]

# -------12 Task-------

def has23(nums):
  if (2 in nums) or (3 in nums):
    return True
  return False

