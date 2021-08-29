import { Heroes } from "../data/Heroes";

export const getHeroById = (id: string) => {
  console.log("getHeroById");
  let obj = Heroes.find((x) => x.id === id);
  if (obj) {
    return obj;
  } else {
    throw new Error(`El id:${id}, no hace referencia a un heroe`);
  }
};
