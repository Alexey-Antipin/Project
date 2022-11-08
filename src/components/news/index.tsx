import axios from "axios";
import { useEffect, useState } from "react";
import points from "../../image/points.png";
import { Sprite } from "../../svg";
import "./index.scss";

export const News: React.FC = () => {
  interface Article {
    id: number;
    title: string;
    time: string;
    photo: string;
    text: string[];
    description: string;
  }

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
      `http://localhost:3001/articles/${id}`
    );

    setArticle(data);
  };

  const getArticles = async () => {
    let { data } = await axios.get<Article[]>(
      "http://localhost:3001/articles"
    );

    let filterData = data.filter((el) => el.id !== id);
    setArticles(filterData);
  };

  const combineData = async () => {
    await getData();
    await getArticles();
  };

  return (
    <div className="news">
      <div className="news__header">
        <div className="news__wrapper">
          <div className="news__article-link">
            <span className="news__home">
              <Sprite id="home" />
            </span>
            <span className="new__text--blue">Новости</span>
            <div className="new__round"></div>
            <span className="news__text">{article?.title}</span>
          </div>

          <h1 className="news__title">{article?.title}</h1>
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
          {article?.text.map((item, index) => {
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
          <ul className="news__articles-list">
            {articles.map((item, index) => {
              return (
                <li className="news__element" key={index}>
                  <img
                    className="news__image"
                    src={item.photo}
                    alt="home"
                  />
                  <h3 className="news__title">{item.title}</h3>
                  <p className="news__description">{item.description}</p>
                  <hr className="news__linier"></hr>
                  <div className="news__block-ready">
                    <time className="news__date">{item.time}</time>
                    <a className="news__link" href={`./${item.id}`}>
                      Читать
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
