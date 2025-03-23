# ------1 Task------

def count_evens(nums):
  return len([i for i in nums if i%2==0])

# ------2 Task------
def big_diff(nums):
  return max(nums) - min(nums)

# ------3 Task------

def centered_average(nums):
  mx = max(nums)
  mn = min(nums)
  sum = -mx-mn
  for i in nums:
    sum += i
  return sum//(len(nums)-2)

# ------4 Task------

def sum13(nums):
  i=0
  n=len(nums)
  sum=0
  while i<n:
    if nums[i] == 13:
      i+=2
    else:
      sum += nums[i]
      i+=1
  return sum

# ------5 Task------

def sum67(nums):
  sum=0
  i=0
  n = len(nums)
  flag = False
  while i<n:
    if nums[i] == 6:
      flag = True
    elif nums[i] == 7 and flag:
      flag = False
    elif not flag:
      sum+=nums[i]
    i+=1
  return sum

# ------6 Task------

def has22(nums):
  if len(nums) < 2:
    return False
  for i in range(len(nums)-1):
    if 2 == nums[i] == nums[i+1]:
      return True
  return False




