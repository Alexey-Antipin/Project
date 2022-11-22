import points from "../../image/points.png";
import white_points from "../../image/white-points.png";
import { Sprite } from "../../svg";
import styles from "./Error.module.scss";

export const Error: React.FC = () => {
  return (
    <div className={styles.error}>
      <div className={styles.wrapper}>
        <img className={styles.picture} src={points} alt="points" />
        <>
          <h2 className={styles.title}>Ошибка 404</h2>
          <p className={styles.text}>
            Возможно, у вас опечатка в адресе страницы, или её просто не
            существует
          </p>
          <a className={styles.button} href="/">
            <Sprite id="home" colour="#1E2123" />
            <span className={styles["button-text"]}>
              Вернуться на главную
            </span>
          </a>
        </>
        <img
          className={styles["picture-white"]}
          src={white_points}
          alt="points"
        />
        <Sprite id="error" />
      </div>
    </div>
  );
};
