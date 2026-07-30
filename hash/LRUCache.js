/*
 * :file description: LeetCode 146 - LRU 缓存
 * :leetcode: https://leetcode.cn/problems/lru-cache/
 */
// 运用所掌握的数据结构，设计和实现一个 LRU (最近最少使用) 缓存。
// get 和 put 都必须 O(1) 时间复杂度。

/** 双向链表节点 */
class Node {
  constructor(key = 0, value = 0) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}

/** 写法 1：哈希表 + 双向链表（标准解法） */
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map() // key -> Node

    // 哨兵头尾，避免边界判空
    this.head = new Node()
    this.tail = new Node()
    this.head.next = this.tail
    this.tail.prev = this.head
  }

  /** 从链表中摘掉 node */
  _remove(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
  }

  /** 插到链表头部（最近使用） */
  _addToHead(node) {
    node.prev = this.head
    node.next = this.head.next
    this.head.next.prev = node
    this.head.next = node
  }

  /** 移到头部 */
  _moveToHead(node) {
    this._remove(node)
    this._addToHead(node)
  }

  /** 删掉尾部（最久未使用），返回被删节点 */
  _removeTail() {
    const node = this.tail.prev
    this._remove(node)
    return node
  }

  get(key) {
    if (!this.map.has(key)) return -1
    const node = this.map.get(key)
    this._moveToHead(node)
    return node.value
  }

  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key)
      node.value = value
      this._moveToHead(node)
      return
    }

    const node = new Node(key, value)
    this.map.set(key, node)
    this._addToHead(node)

    if (this.map.size > this.capacity) {
      const tail = this._removeTail()
      this.map.delete(tail.key)
    }
  }
}

/** 写法 2：Map 保序（JS 特有捷径） */
class LRUCacheByMap {
  constructor(capacity) {
    this.capacity = capacity
    this.map = new Map()
  }

  get(key) {
    if (!this.map.has(key)) return -1
    const val = this.map.get(key)
    this.map.delete(key)
    this.map.set(key, val)
    return val
  }

  put(key, value) {
    if (this.map.has(key)) this.map.delete(key)
    this.map.set(key, value)
    if (this.map.size > this.capacity) {
      const oldest = this.map.keys().next().value
      this.map.delete(oldest)
    }
  }
}

/** 按 LeetCode 风格执行操作序列 */
const runOps = (CacheClass, ops, args) => {
  const out = []
  let cache = null
  for (let i = 0; i < ops.length; i++) {
    const op = ops[i]
    const params = args[i]
    if (op === 'LRUCache') {
      cache = new CacheClass(params[0])
      out.push(null)
    } else if (op === 'get') {
      out.push(cache.get(params[0]))
    } else if (op === 'put') {
      cache.put(params[0], params[1])
      out.push(null)
    }
  }
  return out
}

const sameOutput = (a, b) => a.length === b.length && a.every((v, i) => v === b[i])

const testCases = [
  {
    ops: ['LRUCache', 'put', 'put', 'get', 'put', 'get', 'put', 'get', 'get', 'get'],
    args: [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]],
    expected: [null, null, null, 1, null, -1, null, -1, 3, 4],
    desc: 'LeetCode 经典用例，capacity=2',
  },
  {
    ops: ['LRUCache', 'put', 'get'],
    args: [[1], [2, 1], [2]],
    expected: [null, null, 1],
    desc: '单容量，写入后命中',
  },
  {
    ops: ['LRUCache', 'put', 'put', 'get'],
    args: [[1], [2, 1], [1, 2], [2]],
    expected: [null, null, null, -1],
    desc: '单容量，新值淘汰旧值',
  },
  {
    ops: ['LRUCache', 'put', 'put', 'put', 'get', 'get'],
    args: [[2], [1, 10], [2, 20], [1, 100], [1], [2]],
    expected: [null, null, null, null, 100, 20],
    desc: '更新已有 key 并刷新顺序',
  },
]

const implementations = [
  { name: '哈希表 + 双向链表', CacheClass: LRUCache },
  { name: 'Map 保序', CacheClass: LRUCacheByMap },
]

implementations.forEach(({ name, CacheClass }) => {
  console.log(`\n=== ${name} ===`)
  testCases.forEach(({ ops, args, expected, desc }, i) => {
    const result = runOps(CacheClass, ops, args)
    const pass = sameOutput(result, expected)
    console.log(
      `case ${i + 1} [${desc}]:`,
      pass ? 'PASS' : `FAIL (got ${JSON.stringify(result)}, expected ${JSON.stringify(expected)})`
    )
  })
})
