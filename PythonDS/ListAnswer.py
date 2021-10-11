class Node:
  def __init__(self, item):
    self.data = item
    self.next = None
  
class LinkedList:


  def __init__(self):
    self.nodeCount = 0
    self.head = None
    self.tail = None


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
    if pos < 1 or pos > self.nodeCount:
      return None

    i = 1
    curr = self.head
    while i < pos:
      curr = curr.next
      i += 1

    return curr


  def insertAt(self, pos, newNode):
    if pos < 1 or pos > self.nodeCount + 1:
      return False

    if pos == 1:
      newNode.next = self.head
      self.head = newNode

    else:
      if pos == self.nodeCount + 1:
        prev = self.tail
      else:
        prev = self.getAt(pos - 1)
      newNode.next = prev.next
      prev.next = newNode
    
    if pos == self.nodeCount + 1:
      self.tail = newNode

    self.nodeCount += 1
    return True


  def popAt(self, pos):
    if pos < 1 or pos > self.nodeCount:
      raise IndexError
    
    if pos == 1:
      curr = self.head
      self.head = curr.next
      
      if self.nodeCount == 1:
        self.tail = self.head
      
    else:
      prev = self.getAt(pos - 1)
      curr = prev.next
      prev.next = curr.next

      if pos == self.nodeCount:
        self.tail = prev

    self.nodeCount -= 1
    return curr.data


  def getLength(self):
    return self.nodeCount


  def traverse(self):
    result = []
    curr = self.head
    while curr is not None:
      result.append(curr.data)
      curr = curr.next

    return result
  
  
  def concat(self, L):
    self.tail.next = L.head
    if L.tail:
      self.tail = L.tail
    self.nodeCount += L.nodeCount

  
a1 = Node(10)
b1 = Node(20)
c1 = Node(30)
L1 = LinkedList()

a2 = Node(100)
b2 = Node(200)
c2 = Node(300)
L2 = LinkedList()

L1.insertAt(1, a1)
L1.insertAt(2, b1)
L1.insertAt(3, c1)

L2.insertAt(1, a2)
L2.insertAt(2, b2)
L2.insertAt(3, c2)


print(L1, L2)
L1.concat(L2)
print(L1)