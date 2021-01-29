import copy from "recursive-copy";
import through from "through2";
import { input, output } from "../config.mjs";

const options = {
  overwrite: true
};

copy(input.themingDir, output.themingDir, {
  ...options,
  transform: () => through((chunk, _, done) => done(null, chunk.toString().replace(/\.(\.\/components\/).+\//gm, "$1")))
});

copy(input.themingComponentsDir, output.themingComponentsDir, {
  ...options,
  filter: ["**/*.scss"],
  rename: path => {
    const matches = /^(.+)[\\|/](.+)$/.exec(path);
    const [_, __, file] = matches;
    return file;
  },
  transform: () => through((chunk, _, done) => done(null, chunk.toString().replace(/(\.\.\/[^./]+)\//gm, "")))
});
