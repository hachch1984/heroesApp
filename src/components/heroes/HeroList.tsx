import React, { FC, useState } from "react";
import { useMemo } from "react";
import { getHeroesByPublisher } from "../selectors/getHeroesByPublisher";
import { HeroCard, HeroCardMemo } from "./HeroCard";

export const HeroList: FC<{ publisher: string }> = (props) => {
  
  const arr = useMemo(
    () => getHeroesByPublisher(props.publisher),
    [props.publisher]
  );

  const [show, setShow] = useState(false);
  
  return (
    <>
      <button
        className="btn btn-outline-info mb-2"
        onClick={() => setShow(!show)}
      >
        Show: {JSON.stringify(show)}
      </button>

      <div className="card-columns   ">
        {arr.map((h, i) => (
          <HeroCardMemo key={h.id} hero={h} indice={i} />
        ))}
      </div>
    </>
  );
};
