import prependFileCb from "prepend-file";
import { promisify } from "util";
import { readFile as readFileCb } from "fs";

const SHEBANG = "#!/usr/bin/env node\n";
const readFile = promisify(readFileCb);
const prependFile = promisify(prependFileCb);

async function addSebangToFile(file: string) {
  await prependFile(file, SHEBANG);
}

function values<T extends { [id in keyof T]: K }, K = T[keyof T]>(obj: T): K[] {
  const values: K[] = [];
  for (const key in obj) {
    values.push(obj[key]);
  }
  return values;
}

export async function addShebang() {
  const packageJson = JSON.parse(
    (await readFile("./package.json")).toString()
  ) as { bin: string | string[] | { [id: string]: string } };
  if (packageJson.bin === undefined) return; // TODO maybe should throw error
  const files =
    typeof packageJson.bin === "string"
      ? [packageJson.bin]
      : Array.isArray(packageJson.bin)
        ? packageJson.bin
        : values(packageJson.bin);
  await Promise.all(files.map(addSebangToFile));
}
