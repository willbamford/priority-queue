import { thingToTest } from "./index.mjs";

const assert = (actual: unknown, expected: unknown) => {
  if (actual != expected) {
    throw new Error(`expected: ${expected}, received: ${actual}`);
  }
};

assert("bar", thingToTest());
