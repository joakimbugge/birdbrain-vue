/* eslint-disable @typescript-eslint/no-empty-function */
import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import externals from "rollup-plugin-node-externals";
import scss from "rollup-plugin-scss";
import typescript from "rollup-plugin-typescript2";
import vue from "rollup-plugin-vue";
import copy from "rollup-plugin-copy";
import del from "rollup-plugin-delete";
import { terser } from "rollup-plugin-terser";
import { BABEL_EXTENSIONS, input, output } from "./build/config.mjs";

export default [
  {
    input: `${input.baseDir}/index.ts`,
    output: [
      {
        file: `${output.baseDir}/index.js`,
        format: "es"
      },
      {
        file: `${output.baseDir}/index.min.js`,
        format: "es",
        plugins: [terser()]
      }
    ],
    plugins: [
      del({ targets: "dist/*" }),
      externals({ packagePath: "./package.json", deps: true }),
      vue(),
      typescript({
        typescript: require("typescript"),
        tsconfig: "tsconfig.json",
        clean: true,
        tsconfigOverride: {
          exclude: ["node_modules", "playground", "build", "tests"],
          compilerOptions: {
            declaration: true
            // declarationDir: "dist/types"
          }
        }
        // useTsconfigDeclarationDir: true
      }),
      scss({
        sass: require("sass"),
        output: true
      }),
      babel({
        exclude: [/node_modules/, /@babel\/runtime/],
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime",
        extensions: BABEL_EXTENSIONS
      }),
      resolve(),
      commonjs(),
      copy({
        targets: [{ src: "package.json", dest: output.baseDir }]
      })
    ]
  }
];
