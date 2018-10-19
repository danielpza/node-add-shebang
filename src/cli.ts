import { addShebang } from "./index";

addShebang().catch((err) => {
  console.error(err);
  process.exit(1)
});
