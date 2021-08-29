import React, { FC, memo, useState } from "react";
import { Link } from "react-router-dom";
import { IHero } from "../data/Heroes";
import { HeroScreen_Url } from "./HeroScreen";

export const HeroCard: FC<{ hero: IHero; indice: number }> = (props) => {
  const [show] = useState(false);
    
  
  return (
    <>
      {show && (
        <div
          className="card  ms-1  animate__animated  animate__fadeInUp"
          style={{ maxWidth: "350px" }}
        >
          <div className="container-fluid">
            <div className="row no-gutters  ">
              <div className="col-12">
                <img
                  src={`./assets/heroes/${props.hero.id}.jpg`}
                  // style={{ width: "300px" ,margin:0}}
                  className="card-img-top mt-3"
                  alt={props.hero.superhero}
                />
              </div>

              <div className="col-12">
                <div className="card-body">
                  <h5 className="card-title">{props.hero.superhero}</h5>
                  {props.hero.alter_ego !== props.hero.superhero && (
                    <p className="card-text">{props.hero.characters}</p>
                  )}
                  <div>
                    <Link to={HeroScreen_Url(props.hero.id)}>More Info</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export const HeroCardMemo = memo(HeroCard);
