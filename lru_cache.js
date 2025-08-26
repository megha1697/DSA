/**
 * Cache replacement algorithms are efficiently designed to replace the cache when the space is full.
 * The Least Recently Used (LRU) is one of those algorithms. As the name suggests when 
 * the cache memory is full, LRU picks the data that is least recently used and 
 * removes it in order to make space for the new data. 
 * The priority of the data in the cache changes according to the need of that data i.e.
 * if some data is fetched or updated recently then the priority of that data would be changed 
 * and assigned to the highest priority , and the priority of the data decreases if it remains unused
 *  operations after operations. */

/** Operations on LRU Cache:
LRUCache (Capacity c): Initialize LRU cache with positive size capacity c.
get (key) : Returns the value of key ' k' if it is present in the cache otherwise it returns -1. Also updates the priority of data in the LRU cache.
put (key, value): Update the value of the key if that key exists, Otherwise, 
add a key-value pair to the cache. If the number of keys exceeds the capacity of the LRU cache
 then dismiss the least recently used key */

class Node {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}
class LRU {
    constructor(capacity) {
        this.capacity = capacity;
        this.map = new Map();
        this.head = new Node(-1, -1)
        this.tail = new Node(-1, -1)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    remove(node) {
        const prevNode = node.prev;
        const nextNode = node.next;
        prevNode.next = nextNode;
        nextNode.prev = prevNode;
    }

    add(node) {
        const headNext = this.head.next;
        this.head.next = node;
        node.prev = this.head;
        node.next = headNext;
        headNext.prev = node
    }

    get(key) {
        if (!this.map.has(key)) return -1
        const node = this.map.get(key);
        console.log(node);

        this.remove(node)
        this.add(node)
        return node.value
    }

    put(key, value) {
        if (this.map.has(key)) {
            let node = this.map.get(key)
            this.remove(node)
            this.add(node)
        } else {
            if (this.map.size === this.capacity) {
                let node = this.tail.prev;
                this.map.delete(key)
                this.remove(node)
            }
            let newnode = new Node(key, value);
            this.add(newnode);
            this.map.set(key, newnode)
        }
    }
}


let lRUCache = new LRU(2);
lRUCache.put(1, 1); // cache is {1=1}
lRUCache.put(2, 2); // cache is {1=1, 2=2}
lRUCache.get(1);    // return 1
lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
lRUCache.get(2);    // returns -1 (not found)
lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
lRUCache.get(1);    // return -1 (not found)
lRUCache.get(3);    // return 3
lRUCache.get(4);