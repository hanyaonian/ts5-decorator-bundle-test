# Bundling with ts5.0 decorators

Here will be some small test, for new feature `decorators` in TypeScript(5.0), using esbuild/rollup/typescript(tsc).

refer:

0. [decorators in typescript5.0](https://devblogs.microsoft.com/typescript/announcing-typescript-5-0/#decorators)
1. [can not use decorator in vite/tsx](https://github.com/evanw/esbuild/issues/3496)
2. [esbuild transform typescript to javascript](https://esbuild.github.io/api/#transform)
3. [rollup config](https://www.rollupjs.com/)

## Test

Results can be check by opening test/index.html, or in terminal console.

### Default

```sh
npm run test
```

result:

```text
LOG: Entering method.
Hello, my name is Ron.
LOG: Exiting method.
```

### With rollup

```sh
# bundle with rollup
npm run test:rollup

# works well, correct
```

### with esbuild

```sh
npm run test:esbuild

# ERROR: Transforming JavaScript decorators to the configured target environment ("es2015") is not supported yet
```

```ts
// this would work, but not official gramma.
// Could use packages like `relect-meta` to support `decorators`.
await esbuild.transform(ts_content, {
  loader: "ts",
  target: ["es6"],
  tsconfigRaw: {
    compilerOptions: {
      experimentalDecorators: true,
    },
  },
});
```
