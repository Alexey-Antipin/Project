import { Sprite } from "../../svg";
import { RegistrationOfFormik } from "../../ts";
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
  FormikErrors,
  FormikTouched,
} from "formik";
import * as Yup from "yup";
import styles from "./Registration.module.scss";

export const Registration: React.FC = () => {
  const field = {
    type: ["text", "email", "password", "password"],
    sprite: ["user", "email", "lock", "lock"],
    denotation: [
      "Логин",
      "Электронная почта",
      "Пароль",
      "Повторите пароль",
    ],
  };
  const text: Array<string> = [
    `предоставлять достоверную и актуальную 
      информацию при регистрации и добавлении объекта;`,
    `добавлять фотографии объектов соответствующие
    действительности. Администрация сайта sdaem.by оставляет за
    собой право удалять любую информацию, размещенную
    пользователем, если сочтет, что информация не соответствует
    действительности, носит оскорбительный характер, нарушает
    права и законные интересы других граждан либо действующее 
    законодательство Республики Беларусь.`,
  ];

  let initialValues: RegistrationOfFormik = {
    login: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const validationField = Yup.object({
    login: Yup.string()
      .matches(/^[a-zA-Z0-9]*$/, "Только латиница и цифры.")
      .min(8, "Не менее 10 знаков.")
      .max(20, "Не более 20 знаков.")
      .required("Обязательное поле!"),
    email: Yup.string()
      .email("Невалидная почта.")
      .required("Обязательное поле!"),
    password: Yup.string()
      .min(10, "Не менее 10 знаков.")
      .max(30, "Не более 30 знаков.")
      .required("Обязательное поле!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Пароли не совпадают!")
      .required("Обязательное поле!"),
  });

  const onSubmit = (values: RegistrationOfFormik) => {
    console.log({ values });
  };

  const errorsField = (
    errors: FormikErrors<RegistrationOfFormik>,
    touched: FormikTouched<RegistrationOfFormik>,
    index: number
  ) => {
    switch (index + 1) {
      case 1:
        return errors.login && touched.login;
      case 2:
        return errors.email && touched.email;
      case 3:
        return errors.password && touched.password;
      case 4:
        return errors.confirmPassword && touched.confirmPassword;
      default:
        return true;
    }
  };

  return (
    <div className={styles.background}>
      <div className={styles.registration}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationField}
          onSubmit={onSubmit}>
          {({ errors, values, touched }) => (
            <Form className={styles.form}>
              <h1 className={styles.title}>Регистрация</h1>

              {Object.keys(values).map((item, index) => (
                <label className={styles.block} htmlFor={item} key={index}>
                  <Field
                    className={
                      errorsField(errors, touched, index)
                        ? styles["input-errors"]
                        : styles.input
                    }
                    placeholder={field.denotation[index]}
                    type={field.type[index]}
                    name={item}
                    id={item}
                  />

                  <ErrorMessage
                    className={styles.errors}
                    component="div"
                    name={item}
                  />

                  <div className={styles.icon}>
                    <Sprite id={field.sprite[index]} colour={"#686868"} />
                  </div>

                  <ErrorMessage name={item}>
                    {() => (
                      <div className={styles["icon-error"]}>
                        <Sprite
                          id="warning"
                          height="20"
                          width="20"
                          colour="#EB5757"
                        />
                      </div>
                    )}
                  </ErrorMessage>
                </label>
              ))}

              {(errors.login ||
                errors.email ||
                errors.password ||
                errors.confirmPassword) && (
                <div className={styles["button-error"]}>
                  <span className={styles["button-error-text"]}>
                    Ошибка ввода
                  </span>
                  <Sprite
                    id="warning"
                    height="20"
                    width="20"
                    colour="#ffffff80"
                  />
                </div>
              )}

              <button className={styles.send} type="submit">
                Зарегистрироваться
              </button>
            </Form>
          )}
        </Formik>

        <div className={styles["block-text"]}>
          <p className={styles["text-title"]}>Пользователь обязуется:</p>

          <ul>
            {text.map((text: string, index: number) => (
              <li className={styles["text-paragraph"]} key={index}>
                <span className={styles["text-round"]} />
                {text}
              </li>
            ))}
          </ul>

          <p className={styles["text-account"]}>
            Уже есть аккаунт?
            <span className={styles["text-entrance"]}>Войдите</span>
          </p>
        </div>
      </div>
    </div>
  );
};
