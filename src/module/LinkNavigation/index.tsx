import React from "react";
import { Sprite } from "../../svg";
import { LinkProps } from "../../ts";
import "./index.scss";

export const LinkNavigation: React.FC<LinkProps> = ({
  link,
  deeperLink,
}) => {
  return (
    <div className="link__article-link">
      <span className="link__home">
        <Sprite id="home" colour={deeperLink && "#4E64F9"} />

        {!deeperLink && <div className="link__round"></div>}

        <span className={`link__text ${deeperLink && "link__text--blue"}`}>
          {link}
        </span>

        {deeperLink && (
          <>
            <div className="link__round"></div>
            <span className="link__text">{deeperLink}</span>
          </>
        )}
        <h1 className="link__title">{deeperLink || link}</h1>
      </span>
    </div>
  );
};
