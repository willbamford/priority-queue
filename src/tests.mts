import { priorityQueue } from "./index.mjs";

const test = (title: string, actual: unknown, expected: unknown) => {
  if (actual != expected) {
    console.log(`❌ ${title}. expected=${expected}, actual=${actual}`);
    process.exit(1);
  }

  console.log(`✅ ${title} (${expected})`);
};

{
  type Item = string;
  console.log("Testing with String type");

  const q = priorityQueue<Item>();

  q.insert("foo", 1);

  test("peek() is 'foo'", q.peek(), "foo");
  test("not empty", q.isEmpty(), false);
  test("size is 1", q.size(), 1);

  q.insert("bar", 0.5);
  q.insert("baz", 1.5);

  test("peek() is 'bar'", q.peek(), "bar");
  test("queue not empty", q.isEmpty(), false);
  test("size is 3", q.size(), 3);
}
