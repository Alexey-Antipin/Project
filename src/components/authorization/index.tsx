import { useState } from "react";
import { useFormik } from "formik";
import { Sprite } from "../../svg";
import { AuthorizationOfFormik } from "../../ts";
import * as Yup from "yup";
import "./index.scss";

export const Authorization: React.FC = () => {
  const [remember, setRemember] = useState<boolean>(false);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required(),
      email: Yup.string().email().required(),
    }),
    onSubmit: (values: AuthorizationOfFormik) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="wrapper">
      <div className="authorization">
        <h1 className="authorization__title">Авторизация</h1>

        <p className="authorization__paragraph">
          Авторизируйтесь, чтобы начать публиковать свои объявления
        </p>

        <form
          className="authorization__form"
          onSubmit={formik.handleSubmit}>
          <label htmlFor="email">
            <input
              className={
                formik.touched.email && formik.errors.email
                  ? "formik-focus"
                  : "authorization__login"
              }
              id="email"
              type="email"
              placeholder="Логин"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            <span className="authorization__icons-login">
              <Sprite id="user" colour="#686868" />
            </span>
          </label>

          <label htmlFor="password">
            <input
              className={
                formik.touched.password && formik.errors.password
                  ? "formik-focus"
                  : "authorization__password"
              }
              id="password"
              type="password"
              placeholder="Пароль"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            <span className="authorization__icons-password">
              <Sprite id="lock" colour="#686868" />
            </span>
          </label>

          <div className="authorization__control">
            <button
              className={
                "authorization__switch " +
                (remember
                  ? "authorization__switch-on"
                  : "authorization__switch-off")
              }
              id="switch"
              type="button"
              onClick={() => setRemember(!remember)}>
              <div
                className={
                  "authorization__round " +
                  (remember && "authorization__round-on")
                }></div>
            </button>

            <label className="authorization__remember" htmlFor="switch">
              Запомнить меня
            </label>

            <a className="authorization__forgot" href="/">
              Забыли пароль?
            </a>
          </div>

          {(formik.touched.email && formik.errors.email) ||
          (formik.touched.password && formik.errors.password) ? (
            <button className="formik-button">Ошибка ввода</button>
          ) : (
            ""
          )}

          <button className="authorization__entrance" type="submit">
            Войти
          </button>
        </form>

        <p className="authorization__account">
          Еще нет аккаунта?
          <a className="authorization__create-account" href="/">
            Создайте акканут
          </a>
        </p>
      </div>
    </div>
  );
};
