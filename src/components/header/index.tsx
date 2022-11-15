import { useState } from "react";
import { Sprite } from "../../svg";
import logo from "../../image/logo.png";
import { MassiveLink } from "../../ts";
import "./index.scss";

export const Header: React.FC = () => {
  const link: MassiveLink[] = [
    { id: 1, text: "Главная" },
    { id: 2, text: "Новости" },
    { id: 3, text: "Размещение и тарифы" },
    { id: 4, text: "Объявления на карте" },
    { id: 5, text: "Контакты" },
  ];
  const underList: MassiveLink[] = [
    { id: 6, text: "Квартиры на сутки" },
    { id: 7, text: "Коттеджи и усадьбы" },
    { id: 8, text: "Бани и Сауны" },
    { id: 9, text: "Авто напрокат" },
  ];
  const [activeId, setActiveId] = useState<number | string>(0);

  return (
    <>
      <div className="navbar">
        <nav className="navbar__menu">
          <ul className="navbar__list">
            {link.map((el, index) => {
              return (
                <li
                  className="navbar__item"
                  onClick={() => setActiveId(el.id)}
                  key={index}>
                  {index === 3 ? (
                    <div className="navbar__block--padding">
                      <span className="navbar__text--margin-sign">
                        <Sprite
                          id="sign"
                          colour={activeId === el.id ? "black" : "#8291a3"}
                        />
                      </span>
                      <a
                        className={
                          activeId === el.id
                            ? "navbar__text navbar__text--active"
                            : "navbar__text"
                        }
                        href="/">
                        {el.text}
                      </a>
                    </div>
                  ) : (
                    <a
                      className={
                        activeId === el.id
                          ? "navbar__text navbar__text--active"
                          : "navbar__text"
                      }
                      href="/">
                      {el.text}
                    </a>
                  )}

                  <span
                    className={
                      activeId === el.id
                        ? "navbar__focus--active"
                        : "navbar__focus"
                    }></span>
                </li>
              );
            })}
          </ul>

          <ul className="navbar__list navbar__list--size">
            <li className="navbar__item">
              <div>
                <a className="navbar__text navbar__text--font" href="/">
                  Закладки
                </a>
                <span className="navbar__text--margin-heart">
                  <Sprite id="heart" />
                </span>
              </div>
            </li>
            <li className="navbar__item">
              <a
                className="navbar__text navbar__text--font navbar__text--violet"
                href="/">
                Вход и регистрация
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navigation">
        <div className="navigation__wrapper">
          <a href="/" className="navigation__logo">
            <img src={logo} alt="logo" />
          </a>

          <nav className="navigation__menu">
            <ul className="navigation__list">
              {underList.map((el, index) => {
                return (
                  <li
                    className="navigation__item"
                    key={index}
                    onClick={() => setActiveId(el.id)}>
                    {index === 0 ? (
                      <div className="navigation__block--padding">
                        <a className="navigation__link" href="/">
                          {el.text}
                        </a>
                        <span className="navigation__sign--margin">
                          <Sprite
                            id="sign"
                            colour="#FFD54F"
                            width="12"
                            height="15"
                          />
                        </span>
                      </div>
                    ) : (
                      <a className="navigation__link" href="/">{el.text}</a>
                    )}

                    <span
                      className={
                        activeId === el.id
                          ? "navigation__focus navigation__focus--active"
                          : "navigation__focus"
                      }></span>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button className="navigation__button">
            + Разместить объявление
          </button>
        </div>
      </div>
    </>
  );
};
