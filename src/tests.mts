import { priorityQueue } from "./index.mjs";

const expect = (title: string, actual: unknown, expected: unknown) => {
  const a = JSON.stringify(actual);
  const e = JSON.stringify(expected);
  if (a != e) {
    console.log(`❌ ${title}. expected=${e}, actual=${a}`);
    process.exit(1);
  }

  console.log(`✅ ${title} (${e})`);
};

{
  console.log("Testing with string type");

  const q = priorityQueue<string>();

  q.insert("foo", 1);

  expect("peek() is 'foo'", q.peek(), "foo");
  expect("is not empty", q.isEmpty(), false);
  expect("size is 1", q.size(), 1);

  q.insert("bar", 0.5);
  q.insert("baz2", 1.5);
  q.insert("baz1", 1.5);

  expect("peek() is 'bar'", q.peek(), "bar");
  expect("queue not empty", q.isEmpty(), false);
  expect("size is 4", q.size(), 4);

  expect('pop() is "bar"', q.pop(), "bar");
  expect("size is 3", q.size(), 3);
  expect('pop() is "foo"', q.pop(), "foo");
  expect('pop() is "baz1"', q.pop(), "baz1");
  expect('pop() is "baz2"', q.pop(), "baz2");
  expect("queue is empty", q.isEmpty(), true);
  expect("peek() is null", q.peek(), null);
  expect("size() is 0", q.size(), 0);
  q.pop();
  expect("peek() is null", q.peek(), null);
}

{
  console.log("Testing with object type");

  const q = priorityQueue<{ a: string }>();

  q.insert({ a: "foo" }, 1);

  expect("peek() is 'foo'", q.peek(), { a: "foo" });
  expect("is not empty", q.isEmpty(), false);
  expect("size is 1", q.size(), 1);
  expect('pop() is object with "foo"', q.pop(), { a: "foo" });
  expect("size is 0", q.size(), 0);
  expect("is  empty", q.isEmpty(), true);
}

{
  console.log("Testing performance");

  const n = 3000000;
  console.time(`time ${n} items`);
  const q = priorityQueue<string>();

  console.time("first-half insert");
  for (let i = 0; i < n * 0.5; i += 1) {
    const r = Math.floor(Math.random() * 1000);
    q.insert(`item ${i}`, r);
  }
  console.timeEnd("first-half insert");

  console.time("second-half insert");
  for (let i = n * 0.5; i < n; i += 1) {
    const r = Math.floor(Math.random() * 1000);
    q.insert(`item ${i}`, r);
  }
  console.timeEnd("second-half insert");

  console.time("pop");
  for (let i = 0; i < n; i += 1) {
    q.pop();
  }
  console.timeEnd("pop");

  console.timeEnd(`time ${n} items`);
}
