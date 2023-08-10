import { build, emptyDir } from "https://deno.land/x/dnt@0.37.0/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.ts"],
  outDir: "./npm",
  shims: {
    deno: true,
  },
  package: {
    name: "greek-holidays",
    version: Deno.args[0],
    description:
      "Easily get the fixed and movable holidays for Greece in any given year.",
    license: "MIT",
    repository: {
      type: "git",
      url: "git+https://github.com/imertz/greek-holidays.git",
    },
    bugs: {
      url: "https://github.com/imertz/greek-holidays/issues",
    },
  },
  postBuild() {
    Deno.copyFileSync("LICENSE", "npm/LICENSE");
    Deno.copyFileSync("README.md", "npm/README.md");
  },
});
