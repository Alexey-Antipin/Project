import { Sprite } from "../../svg";
import logo from "../../image/logo.png";
import {
  belcard,
  byvisa,
  master_card,
  mastercard,
  webpay,
  visa,
} from "../../image/card";
import "./index.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__info">
        <a href="/">
          <img src={logo} alt="logo" />
        </a>
        <h4 className="footer__title">СДАЁМ БАЙ</h4>
        <address className="footer__address">
          ИП Шушкевич Андрей Викторович
          <br /> УНП 192602485 Минским горисполкомом
          <br />
          <time>10.02.2016</time>
          <br /> 220068, РБ, г. Минск, ул. Осипенко, 21, кв.23
          <br />
          <a className="footer__send" href="tel:+375296214833">
            +375 29 621 48 33
          </a>
          ,
          <a className="footer__send" href="mailto:sdaem@sdaem.by">
            sdaem@sdaem.by
          </a>
          <br /> Режим работы: <time>08:00-22:00</time>
        </address>
      </div>

      <div className="footer__wrapper">
        <nav className="footer__navigation">
          <ul className="footer__list">
            <li className="footer__item footer__item--black">
              Коттеджи и усадьбы
            </li>
            <li className="footer__item footer__item--black footer__item--padding">
              Бани и сауны
            </li>
            <li className="footer__item footer__item--black">
              Авто на прокат
            </li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item footer__item--black">Квартиры</li>
            <li className="footer__item">Квартиры в Минске</li>
            <li className="footer__item">Квартиры в Гомеле</li>
            <li className="footer__item">Квартиры в Бресте</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Квартиры в Витебске</li>
            <li className="footer__item">Квартиры в Гродно</li>
            <li className="footer__item">Квартиры в Могилеве</li>
          </ul>
          <ul className="footer__list">
            <li className="footer__item">Новости</li>
            <li className="footer__item">Размещение и тарифы </li>
            <li className="footer__item">Объявления на карте</li>
            <li className="footer__item">Контакты</li>
          </ul>
        </nav>

        <div className="footer__block">
          <ul className="footer__net">
            <h3>Мы в соцсетях</h3>
            <li>
              <a href="/">
                <Sprite id="instagram" />
              </a>
            </li>
            <li>
              <a href="/">
                <Sprite id="vk" />
              </a>
            </li>
            <li>
              <a href="/">
                <Sprite id="facebook" />
              </a>
            </li>
          </ul>
          <ul className="footer__cart">
            <li>
              <img src={visa} alt="visa" />
            </li>
            <li>
              <img src={webpay} alt="webpay" />
            </li>
            <li>
              <img src={byvisa} alt="byvisa" />
            </li>
            <li>
              <img src={master_card} alt="master_card" />
            </li>
            <li>
              <img src={mastercard} alt="mastercard" />
            </li>
            <li>
              <img src={belcard} alt="belcard" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
