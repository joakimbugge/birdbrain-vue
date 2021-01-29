import fs from "fs-extra";
import sass from "sass";
import { input, output } from "../config.mjs";

const result = sass.renderSync({
  file: `${input.baseDir}/style.scss`,
  outFile: `${output.baseDir}/style.css`
});

fs.writeFileSync(`${output.baseDir}/style.css`, result.css.toString());
