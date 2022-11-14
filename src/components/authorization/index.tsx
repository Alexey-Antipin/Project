import "./index.scss";
import { useFormik } from "formik";

export const Authorization = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="authorization">
      <h1 className="authorization__title">Авторизация</h1>

      <p className="authorization__paragraph">
        Авторизируйтесь, чтобы начать публиковать свои объявления
      </p>

      <form onSubmit={formik.handleSubmit}>
        <input
          className="authorization__login"
          id="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />

        <input
          className="authorization__password"
          id="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        <div className="authorization__control">
          <button
            className="authorization__switch"
            id="switch"
            type="button">
            <div className="authorization__round"></div>
          </button>

          <label className="authorization__remember" htmlFor="switch">
            Запомнить меня
          </label>

          <a className="authorization__forgot" href="/">
            Забыли пароль?
          </a>
        </div>

        <button className="authorization__entrance" type="submit">
          Войти
        </button>

        <p className="authorization__account">
          Еще нет аккаунта?
          <a className="authorization__create-account" href="/">
            Создайте акканут
          </a>
        </p>
      </form>
    </div>
  );
};
