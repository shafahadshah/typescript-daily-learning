// Generic interface for function

interface IdentityFn<T> {
  (value: T): T;
}

const identity: IdentityFn<string> = (value) => value;

console.log(identity("Ali"));