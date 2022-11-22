import React from "react";
import { ArticleProps } from "../../ts";
import styles from "./ListArticles.module.scss";

export const ListArticles: React.FC<ArticleProps> = ({ list }) => {
  return (
    <ul className={styles.list}>
      {list.map((item, index) => {
        return (
          <li className={styles.element} key={index}>
            <img className={styles.image} src={item.photo} alt="home" />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
            <hr className={styles.linier}></hr>
            <div className={styles.block}>
              <time className={styles.date}>{item.time}</time>
              <a className={styles.link} href={`./${item.id}`}>
                Читать
              </a>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
