import { memo, useMemo } from "react";
import { Heroes } from "../data/Heroes";

export const getHeroesByPublisher = (publisher: string) => {
 


  console.log("getHeroesByPublisher");
  const validPublishers = ["DC Comics", "Marvel Comics"];
  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher ${publisher} no es correcto`);
  }

  return Heroes.filter((x) => x.publisher === publisher);
};

 