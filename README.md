# Prioq - TS priority queue

TypeScript priority queue implementation based on Wim Jongeneel's [priority queues article](https://itnext.io/priority-queue-in-typescript-6ef23116901).

## Usage

```ts
import { priorityQueue } from "prioq";

// Any type
type Item = string;

const q = priorityQueue<Item>();

// Second argument is priority - lower is higher priority
q.insert("foo", 1);
q.insert("bar", 2);
q.insert("baz", 0.5);

q.peek(); // 'baz'
q.size(); // 3
q.isEmpty(); // false

q.pop(); // 'baz'
q.pop(); // 'foo'
q.pop(); // 'bar'

q.peek(); // null
q.size(); // 0
q.isEmpty(); // true
```

## Credit

- [Wim Jongeneel](https://wim-jongeneel.medium.com/)
