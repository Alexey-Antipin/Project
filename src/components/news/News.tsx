import { useEffect, useState } from "react";
import { LinkNavigation, ListArticles } from "../../common";
import points from "../../image/points.png";
import { Sprite } from "../../svg";
import { Article } from "../../ts";
import axios from "axios";
import styles from "./News.module.scss";

export const News: React.FC = () => {
  //id click, потом убрать.
  let id = 1;
  const network: Array<string> = [
    "vk",
    "facebook-2",
    "viber",
    "telegram",
    "whatsapp",
  ];
  const [article, setArticle] = useState<Article>();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    combineData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getData = async () => {
    let { data } = await axios.get<Article>(
      `http://localhost:3001/articles/1`
    );
    setArticle(data);
  };

  const getArticles = async () => {
    let { data } = await axios.get<Article[]>(
      `http://localhost:3001/articles?_start=${id}&_limit=3`
    );
    setArticles(data);
  };

  const combineData = async () => {
    await getData();
    await getArticles();
  };

  return (
    <>
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <LinkNavigation link={"Новости"} deeperLink={article?.title} />
        </div>

        <div className={styles.network}>
          <time className={styles.date}>{article?.time}</time>

          <div className={styles.nav}>
            <span className={styles.label}>Поделиться</span>

            <ul className={styles.list}>
              {network.map((elem, index) => (
                <li className={styles.item} key={index}>
                  <a href="/">
                    <Sprite id={elem} colour="#664EF9" height="13" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.block}>
          <img className={styles.point} src={points} alt="points" />
          <img
            className="news__photo"
            src={article?.photo}
            alt="article"
          />
        </div>

        <div className={styles["text-block"]}>
          {article?.text?.map((item, index) => {
            return (
              <div key={index}>
                <p>{item}</p>
                <br />
              </div>
            );
          })}
        </div>
      </div>

      <div className={styles.footer}>
        <div className={styles.container}>
          <h2 className={styles["main-title"]}>Читайте также</h2>
          <ListArticles list={articles} />
        </div>
      </div>
    </>
  );
};
