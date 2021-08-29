import queryString from "query-string";
import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { IHero } from "../data/Heroes";
import { HeroCardMemo } from "../heroes/HeroCard";
import { getHeroesByName } from "../selectors/getHeroesByName";

export const SearchScreen = () => {
  const [arr, setArr] = useState<IHero[]>([]);
  const [foundText, setFoundText] = useState("-");
  const history = useHistory();
  const location = useLocation();
  const { q } = queryString.parse(location.search);
   
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);

  const search = (text: string) => {
    if (text !== foundText) {
      setArr(getHeroesByName(text));
      history.push("?q=" + text);
      setFoundText(text);
    }
  };
  useEffect(() => {
    if (q) {
      
      setText(String(q));
      search(String(q));
    }
    return () => {};
  }, []);

  return (
    <div>
      <h1>SearchScreen</h1>
      <h1 />
      <button
        className="btn btn-outline-info mb-2"
        onClick={() => setShow(!show)}
      >
        Show: {JSON.stringify(show)}
      </button>
      <div className="row">
        <div className="col-4">
          <h4>Search Form</h4>
          <hr />
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              defaultValue={text}
              type="text"
              placeholder="Find your here"
              className="form-control mb-2"
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  search(text);
                }
              }}
              onChange={(e) => setText(e.target.value)}
            />
            <button
              className="btn btn-primary w-100"
              onClick={() => {
                search(text);
              }}
            >
              Search
            </button>
          </form>
        </div>
        <div className="col-8 ">
          <h4>Results</h4>
          <hr />
          <div className="card-columns">
            {arr.map((h, i) => (
              <HeroCardMemo key={h.id} indice={i} hero={h} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export const SearchScreen_Url = "/search";
