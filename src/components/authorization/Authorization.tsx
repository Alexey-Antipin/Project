import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styles from "./Authorization.module.scss";
import { AuthorizationOfFormik } from "../../ts";
import { Sprite } from "../../svg";
import * as Yup from "yup";
import clsx from "clsx";

export const Authorization: React.FC = () => {
  const [remember, setRemember] = useState<boolean>(false);

  const initialValues: AuthorizationOfFormik = { email: "", password: "" };

  const validationField = Yup.object({
    password: Yup.string().required("Поле обязательно!"),
    email: Yup.string()
      .email("Невалидная почта!")
      .required("Поле обязательно!"),
  });

  const onSubmit = (values: AuthorizationOfFormik) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.authorization}>
          <h1 className={styles.title}>Авторизация</h1>

          <p className={styles.paragraph}>
            Авторизируйтесь, чтобы начать публиковать свои объявления
          </p>

          <Formik
            initialValues={initialValues}
            validationSchema={validationField}
            onSubmit={onSubmit}>
            {({ errors, touched }) => (
              <Form>
                <label htmlFor="email" className={styles.position}>
                  <Field
                    className={clsx(
                      errors.email &&
                        touched.email &&
                        styles["formik-error-block"],
                      styles.input
                    )}
                    placeholder="Логин"
                    name="email"
                    type="email"
                    id="email"
                  />
                  <span
                    className={
                      errors.email ? styles["error-icons"] : styles.icons
                    }>
                    <Sprite id="user" colour="#686868" />
                  </span>
                </label>
                <ErrorMessage
                  className={styles["formik-error"]}
                  component="div"
                  name="email"
                />

                <label htmlFor="password" className={styles.position}>
                  <Field
                    className={clsx(
                      errors.password &&
                        touched.password &&
                        styles["formik-error-block"],
                      styles.input
                    )}
                    placeholder="Пароль"
                    name="password"
                    type="password"
                    id="password"
                  />
                  <span
                    className={
                      errors.password
                        ? styles["error-icons"]
                        : styles.icons
                    }>
                    <Sprite id="lock" colour="#686868" />
                  </span>
                </label>
                <ErrorMessage
                  className={styles["formik-error"]}
                  component="div"
                  name="password"
                />

                <div className={styles.control}>
                  <label
                    className={styles["label-block"]}
                    htmlFor="switch">
                    <button
                      className={clsx(
                        styles.switch,
                        remember && styles["switch-on"]
                      )}
                      onClick={() => setRemember(!remember)}
                      type="button"
                      id="switch">
                      <div
                        className={clsx(
                          styles.round,
                          remember && styles["round-on"]
                        )}></div>
                    </button>
                    <div className={styles.remember}> Запомнить меня</div>
                  </label>

                  <a className={styles.forgot} href="/">
                    Забыли пароль?
                  </a>
                </div>

                <button className={styles.entrance} type="submit">
                  Войти
                </button>
              </Form>
            )}
          </Formik>

          <p className={styles.account}>
            Еще нет аккаунта?
            <a className={styles["account-create"]} href="/">
              Создайте акканут
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
