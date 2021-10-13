class Node:
  def __init__(self, item):
    self.data = item
    self.next = None

class LinkedList:
  def __init__(self):
    self.head = None
    self.tail = None
    self.nodeCount = 0

  def __repr__(self):
    if self.nodeCount == 0:
      return 'LinkedList: empty'

    s = ''
    curr = self.head
    while curr is not None:
      s += repr(curr.data)
      if curr.next is not None:
        s += ' -> '
      curr = curr.next
    
    return s

  def getAt(self, pos):


  def 

  
# a1 = Node(10)
# b1 = Node(20)
# c1 = Node(30)
# L1 = LinkedList()

# a2 = Node(100)
# b2 = Node(200)
# c2 = Node(300)
# L2 = LinkedList()

# L1.insertAt(1, a1)
# L1.insertAt(2, b1)
# L1.insertAt(3, c1)

# L2.insertAt(1, a2)
# L2.insertAt(2, b2)
# L2.insertAt(3, c2)


# print(L1, L2)
# L1.concat(L2)
# print(L1)