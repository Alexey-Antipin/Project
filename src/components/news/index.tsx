import { Sprite } from "../../svg";
import logo from "../../image/logo.png";
import "./index.scss";

export const News = () => {
  return (
    <>
      <div className="navbar">
        <nav className="navbar__menu">
          <ul className="navbar__list">
            <li className="navbar__item">
              <a className="navbar__text" href="/">
                Главная
              </a>
              <span className="navbar__focus navbar__focus--hover"></span>
            </li>
            <li className="navbar__item">
              <a className="navbar__text" href="/">
                Новости
              </a>
              <span className="navbar__focus navbar__focus--hover"></span>
            </li>
            <li className="navbar__item">
              <a className="navbar__text" href="/">
                Размещение и тарифы
              </a>
              <span className="navbar__focus navbar__focus--hover"></span>
            </li>
            <li className="navbar__item">
              <div className="navbar__block--padding">
                <span className="navbar__text--margin-sign">
                  <Sprite id="sign" />
                </span>
                <a className="navbar__text navbar__text--black" href="/">
                  Объявления на карте
                </a>
              </div>
              <span className="navbar__focus navbar__focus--hover"></span>
            </li>
            <li className="navbar__item">
              <a className="navbar__text" href="/">
                Контакты
              </a>
              <span className="navbar__focus navbar__focus--hover"></span>
            </li>
          </ul>
          <ul className="navbar__list navbar__list--size">
            <li className="navbar__item">
              <div>
                <a className="navbar__text" href="/">
                  Закладки
                </a>
                <span className="navbar__text--margin-heart">
                  <Sprite id="heart" />
                </span>
              </div>
            </li>
            <li className="navbar__item">
              <a className="navbar__text navbar__text--violet" href="/">
                Вход и регистрация
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="navigation">
        <div className="navigation__wrapper">
          <a href="/" className="navigation__logo" >
            <img src={logo} alt="logo" />
          </a>

          <nav className="navigation__menu">
            <ul className="navigation__list">
              <li className="navigation__item">
                <div className="navigation__block--padding">
                  <a className="navigation__link" href="/">
                    Квартиры на сутки
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
                <span className="navigation__focus navigation__focus--hover"></span>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="/">
                  Коттеджи и усадьбы
                </a>
                <span className="navigation__focus navigation__focus--hover"></span>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="/">
                  Бани и Сауны
                </a>
                <span className="navigation__focus navigation__focus--hover"></span>
              </li>
              <li className="navigation__item">
                <a className="navigation__link" href="/">
                  Авто напрокат
                </a>
                <span className="navigation__focus navigation__focus--hover"></span>
              </li>
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
