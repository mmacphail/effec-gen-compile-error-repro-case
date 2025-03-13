# Step to reproduce

- Clone this repo
- Try to `tsc`
- Get the following error : 

```
index.ts(7,7): error TS2322: Type 'Effect<any, unknown, unknown>' is not assignable to type 'Effect<number, never, never>'.
  Type 'unknown' is not assignable to type 'never'.
index.ts(8,25): error TS2488: Type 'Effect<number, never, never>' must have a '[Symbol.iterator]()' method that returns an iterator.
```