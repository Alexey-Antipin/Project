import { useEffect, useState } from "react";
import axios from "axios";
import {
  LinkNavigation,
  ListArticles,
  PaginationArticles,
} from "../../common";
import { Sprite } from "../../svg";
import { Article } from "../../ts";
import styles from "./NewsDetailed.module.scss";

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
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <LinkNavigation link={news} />
        </div>
        <div className={styles["container-list"]}>
          <ListArticles list={filterList} />
        </div>
        <PaginationArticles setPage={setPage} page={page} />
        <div className={styles.background}>
          <div className={styles.block}>
            <input
              className={styles.search}
              placeholder="Поиск по статьям"
              onChange={(event) => setValue(event.target.value)}
              value={value}
            />
            <button
              className={styles.button}
              onClick={() => searchArticle()}>
              <Sprite id="search" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
