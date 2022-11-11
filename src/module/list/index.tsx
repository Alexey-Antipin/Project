import React from "react";
import { ListProps } from "../../ts";
import "./index.scss";

export const ListArticles: React.FC<ListProps> = ({ list }) => {
  return (
    <ul className="list__articles-list">
      {list.map((item, index) => {
        return (
          <li className="list__element" key={index}>
            <img className="list__image" src={item.photo} alt="home" />
            <h3 className="list__title">{item.title}</h3>
            <p className="list__description">{item.description}</p>
            <hr className="list__linier"></hr>
            <div className="list__block-ready">
              <time className="list__date">{item.time}</time>
              <a className="list__link" href={`./${item.id}`}>
                Читать
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
