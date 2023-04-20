import { nodeResolve } from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import git from "git-rev-sync";
import dts from "rollup-plugin-dts";
import typescript from "rollup-plugin-typescript2";
import { name, version } from "./package.json";

let commitHash = "";

try {
  commitHash = git.short();
} catch (_) { }

const OUTRO = `
const __info__ = {};
__info__.name = '${name}';
__info__.version = '${version}';
__info__.date = '${new Date().toISOString()}';
__info__.hash = '${commitHash}';
`;

/**
 * Get the rollup config based on the arguments
 * @param {"esm" | "cjs" | "iife"} format format of the bundle
 * @param {string} generatedFileName generated file name
 * @param {boolean} minified should it be minified
 */
function getConfigForFormat(format, minified = false) {
  return {
    file: minified ? `dist/${name}.${format}.min.js` : `dist/${name}.${format}.js`,
    format,
    name,
    extend: true,
    globals: { "@odoo/owl": "owl" },
    outro: OUTRO,
    plugins: minified ? [terser()] : [],
  };
}

export default (commandLineArgs) => {
  let output = [];
  let input = "";
  let plugins = [nodeResolve()];
  let config = {};

  if (commandLineArgs.configDev) {
    // Only build iife version to improve speed
    input = "build/js/index.js";
    output = [
      {
        file: `build/${name}.js`,
        format: "iife",
        name,
        extend: true,
        outro: OUTRO,
        globals: { "@odoo/owl": "owl" },
      },
    ];
    config = {
      input,
      external: ["@odoo/owl"],
      output,
      plugins,
    };
  } else {
    input = "src/index.ts";
    output = [
      getConfigForFormat("esm"),
      getConfigForFormat("cjs"),
      getConfigForFormat("iife"),
      getConfigForFormat("iife", true),
    ];
    plugins.push(typescript({ useTsconfigDeclarationDir: true }));
    config = [
      {
        input,
        external: ["@odoo/owl"],
        output,
        plugins,
      },
      {
        input: "dist/types/index.d.ts",
        output: [{ file: `dist/${name}.d.ts`, format: "es" }],
        plugins: [dts(), nodeResolve()],
      },
    ];
  }

  return config;
};
