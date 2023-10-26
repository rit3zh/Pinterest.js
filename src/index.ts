import { searchPins, suggestions } from "./functions";
import { Pinterest } from "./classes/index";

async function get() {
  const response = await searchPins("AESTHETIC");
  const res = response?.response;
  console.log(res);
}

get();
