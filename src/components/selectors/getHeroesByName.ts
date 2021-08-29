import { memo } from "react";
import { Heroes } from "../data/Heroes";

export const getHeroesByName = (name: string) => {
  console.log("getHeroesByName");
  

  return name===""?Heroes: Heroes.filter((x) => x.superhero.toUpperCase().includes(name.toUpperCase()) );
};

 

 