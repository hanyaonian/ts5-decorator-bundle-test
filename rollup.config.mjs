import typescript from "rollup-plugin-typescript2";

export default {
  input: "src/index.ts",
  output: {
    file: "dist/rollup.js",
    format: "umd",
  },
  plugins: [typescript()],
};
