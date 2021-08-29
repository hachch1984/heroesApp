import React from "react";
import { FC } from "react";
import { RouteComponentProps, useHistory, useParams } from "react-router-dom";
import { getHeroById } from "../selectors/getHeroById";
import * as QueryString from "query-string";
import { HeroCard } from "./HeroCard";
import { MarvelScreen_Url } from "../marvel/MarvelScreen";

export interface HeroScreenRouteParams {
  id: string;
}
interface ComponentProps extends RouteComponentProps<HeroScreenRouteParams> {}

export const HeroScreen: FC<ComponentProps> = (props) => {
  const params = useParams<HeroScreenRouteParams>();
  const hero = getHeroById(params.id);
  const history = useHistory();
  console.log("params", params); //,"query",  queryString.id  );
  return (
    <div
      className="card  mx-auto d-flex flex-row animate__animated animate__fadeIn"
      style={{ maxWidth: 550 }}
    >
      <div>
        <img
          src={`../assets/heroes/${hero.id}.jpg`}
          className="img-thumbnail animate__animated animate__fadeInLeft "
          alt={hero.superhero}
          style={{ maxWidth: 300 }}
        />
      </div>

      <div>
        <div className="card-body">
          <h5 className="card-title">{hero.superhero}</h5>
          <p className="card-text">{hero.alter_ego}</p>
          <p className="card-text">{hero.characters}</p>
          <p className="card-text">{hero.first_appearance}</p>
          <button
            className="btn btn-outline-secondary"
            onClick={() => {
              if (history.length <= 2) {
                history.push({ pathname: MarvelScreen_Url });
              }
              //  console.log(history);
              else history.goBack();
            }}
          >
            Return
          </button>
        </div>
      </div>
    </div>
  );
};

export const HeroScreen_Url = (id: string = ":id") => "/hero/" + id;
