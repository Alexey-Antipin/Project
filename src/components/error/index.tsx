import "./index.scss";
import points from "../../image/points.png";
import white_points from "../../image/white-points.png";
import { Sprite } from "../../svg";
export const Error: React.FC = () => {
  return (
    <div className="error">
      <div className="error__wrapper">
          <img className="error__picture" src={points} alt="points" />
        <div className="notification">
          <h2 className="notification__title">Ошибка 404</h2>
          <p className="notification__text">
            Возможно, у вас опечатка в адресе страницы, или её просто не
            существует
          </p>
          <a className="notification__button" href="/">
            <Sprite id="home" colour="#1E2123" />
            <span className="notification__button-text">
              Вернуться на главную
            </span>
          </a>
        </div>
          <img className="error__picture-white" src={white_points} alt="points" />
        <Sprite id="error" />
      </div>
    </div>
  );
};
