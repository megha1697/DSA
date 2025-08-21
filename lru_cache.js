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


class Node{
    constructor(key, value) {
        this.key=key;
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}

class LRU{
    constructor(capacity){
        this.capacity=capacity
        this.cache=new Map()
        this.head = new Node(-1,-1)
        this.tail = new Node(-1,-1)
        this.head.next=this.tail
        this.tail.prev=this.head
    }
    addNode(node){
        const nextNode = this.head.next;
        this.head.next = node
        node.prev = this.head
        node.next=nextNode
        nextNode.prev = node
    }
    remove(node){
        const prevNode = node.prev
        const nextNode = node.next
        prevNode.next = nextNode
        nextNode.prev = prevNode
    }
    get(key) {
        if(!this.cache.has(key)) {return -1}
        const node =this.cache.get(key);
        this.remove(node);
        this.addNode(node);
        return node.value;
    }

    put(key, value) {
        if(this.cache.has(key)) {
            const node  = this.cache.get(key)
            this.remove(node);
            this.cache.delete(key)
        } 
        if (this.cache.size >= this.capacity){
            const lru = this.tail.prev;
            this.remove(lru)
            this.cache.delete(lru)
        }
        const node = new Node(key, value);
        this.addNode(node);
        this.cache.set(key, node)
    }
}

const cache = new LRU(2);
cache.put(1, 1);
cache.put(2, 2);
console.log(cache.get(1));
cache.put(3, 3);
console.log(cache.get(2));
cache.put(4, 4);
console.log(cache.get(1));
console.log(cache.get(3));
console.log(cache.get(4));