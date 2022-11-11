import React, { useState, useEffect } from "react";
import { PaginationProps } from "../../ts";
import "./index.scss";

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
    <div className="pagination">
      <div className="pagination__wrapper">
        <ul className="pagination__list">
          {allPages.map((el, index) => {
            return (
              <li
                className={
                  "pagination__item " +
                  (el === page ? "pagination__item--active" : "")
                }
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
