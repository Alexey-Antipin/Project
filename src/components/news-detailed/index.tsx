import axios from "axios";
import { useEffect, useState } from "react";
import { LinkNavigation } from "../../module/LinkNavigation";
import { ListArticles } from "../../module/ListArticles";
import { PaginationArticles } from "../../module/pagination";
import { Sprite } from "../../svg";
import { Article } from "../../ts";
import "./index.scss";

export const NewsDetailed: React.FC = () => {
  const news = "Новости";
  const [value, setValue] = useState<string>("");
  const [page, setPage] = useState<string | number>(1);
  const [list, setList] = useState<Article[]>([]);
  const [filterList, setFilterList] = useState<Article[]>([]);

  useEffect(() => {
    getData();
  }, [page]);

  const getData = async () => {
    let { data } = await axios.get<Article[]>(
      `http://localhost:3001/articles?_page=${page}&_limit=9`
    );
    setList(data);
    setFilterList(data);
  };

  const searchArticle = () => {
    let newList = list.filter((item) => {
      return item.title.toLowerCase().includes(value.toLowerCase());
    });
    setFilterList(newList);
  };

  return (
    <div className="NewsDetailed">
      <div className="NewsDetailed__wrapper">
        <div className="NewsDetailed__container">
          <LinkNavigation link={news} />
        </div>
        <div className="NewsDetailed__container-list">
          <ListArticles list={filterList} />
        </div>
        <PaginationArticles
          setPage={setPage}
          page={page}
        />
        <div className="NewsDetailed__background">
          <div className="NewsDetailed__block">
            <input
              className="NewsDetailed__search"
              placeholder="Поиск по статьям"
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
            <button
              className="NewsDetailed__button"
              onClick={() => searchArticle()}>
              <Sprite id="search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
