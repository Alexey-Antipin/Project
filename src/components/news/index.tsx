import { useEffect, useState } from "react";
import { LinkNavigation } from "../../module/LinkNavigation";
import { ListArticles } from "../../module/list";
import points from "../../image/points.png";
import { Sprite } from "../../svg";
import { Article } from "../../ts";
import axios from "axios";
import "./index.scss";

export const News: React.FC = () => {
  //id click, потом убрать.
  let id = 1;

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
    <div className="news">
      <div className="news__header">
        <div className="news__wrapper">
          <LinkNavigation link={"Новости"} deeperLink={article?.title} />
        </div>

        <div className="news__network">
          <time className="news__date">{article?.time}</time>
          <nav className="news__nav">
            <span className="news__label">Поделиться</span>
            <ul className="news__list">
              <li className="news__item">
                <a href="/">
                  <Sprite id="vk_violet" />
                </a>
              </li>
              <li className="news__item">
                <a href="/">
                  <Sprite id="facebook_violet" />
                </a>
              </li>
              <li className="news__item">
                <a href="/">
                  <Sprite id="viber_violet" />
                </a>
              </li>
              <li className="news__item">
                <a href="/">
                  <Sprite id="telegram_violet" />
                </a>
              </li>
              <li className="news__item">
                <a href="/">
                  <Sprite id="tel_violet" />
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="news__main">
        <div className="news__block">
          <img className="news__point" src={points} alt="points" />
          <img
            className="news__photo"
            src={article?.photo}
            alt="article"
          />
        </div>

        <div className="news__text-block">
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

      <div className="news__footer">
        <div className="news__wrapper">
          <h2 className="news__main-title">Читайте также</h2>
          <ListArticles list={articles} />
        </div>
      </div>
    </div>
  );
};
