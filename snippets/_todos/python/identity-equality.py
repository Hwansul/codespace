a = [1, 2, 3]
b = a
c = [x for x in a]

print([
  a == b, # True
  a is b, # True
  a == c, # True
  a is c  # False
])

x = 'hi'
y = x
z = 'HI'.lower()

print([
  x == y, # True
  x is y, # True
  x == z, # True
  x is z  # False
])
