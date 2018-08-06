import babel from "rollup-plugin-babel";
import filesize from "rollup-plugin-filesize";
import { eslint } from "rollup-plugin-eslint";
import uglify from "rollup-plugin-uglify";
import uglifyES from "rollup-plugin-uglify-es";

const { TARGET } = process.env;
const pkg = require("./package.json");

console.log("version ", pkg.version);

export default {
  name: "Utils",
  input: "src/index.js",
  output: {
    file: {
      es: pkg.module,
      umd: pkg.main
    }[TARGET],
    format: TARGET
  },
  plugins: [
    eslint({
      exclude: [
        "package.json",
        "node_modules/**",
      ]
    }),
    babel({}),
    TARGET === "es" ? uglifyES() : uglify(),
    filesize()
  ]
};
