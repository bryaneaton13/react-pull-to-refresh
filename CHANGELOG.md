## 2.0.0 (Nov 4 2022)

- Switch to TypeScript
- Change `onRefresh` to expect a Promise. No more `resolve/reject`, you can use `async/await`

  ```typescript
  async handleRefresh() {
    await asyncCode();
  }
  ```

- Use `tsup` internally for building
