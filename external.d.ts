declare module "prepend-file" {
  function prependFile(
    file: string,
    data: string,
    cb: (err: Error) => void
  ): void;
  export = prependFile;
}
