// rollup.config.js
import ascii from "rollup-plugin-ascii";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "index.js",
    plugins: [
        ascii()
    ],
    output: {
      extend: true,
      file: "dist/tiny-tfidf.js",
      format: "umd",
      name: "tiny-tfidf"
    }
  },
  {
    input: "index.js",
    plugins: [
        ascii(),
        terser()
    ],
    output: {
      extend: true,
      file: "dist/tiny-tfidf.min.js",
      format: "umd",
      name: "tiny-tfidf"
    }
  }
];
