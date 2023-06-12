// panggil data pakai import
import { index, store } from "./controller.mjs";

const main = function () {
  const user = { name: "Hasna", age: 19 };
  store(user);
  index();
};

main();
