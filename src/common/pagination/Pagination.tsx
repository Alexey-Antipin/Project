import clsx from "clsx";
import React, { useState, useEffect } from "react";
import { PaginationProps } from "../../ts";
import styles from "./Pagination.module.scss";

export const PaginationArticles: React.FC<PaginationProps> = ({
  setPage,
  page,
}) => {
  const [allPages, setAllPages] = useState<string[] | number[]>([]);

  useEffect(() => {
    pagesCount();
  }, []);

  const pagesCount = async () => {
    //Всего страниц.
    const item = 36;
    //Округление страниц.
    const pages = Math.ceil(item / 9);
    //Количество страниц.
    const countPage = [];

    for (let i = 1; i < pages + 1; i++) {
      countPage.push(i);
    }

    setAllPages(countPage);
  };

  const handleclick = (index: number) => {
    setPage(index + 1);
  };

  return (
    <div>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          {allPages.map((el, index) => {
            return (
              <li
                className={clsx(
                  styles.item,
                  el === page ? styles["item-active"] : ""
                )}
                onClick={() => handleclick(index)}
                key={index}>
                {el}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
