import { Sprite } from "../../svg";
import { RegistrationOfFormik } from "../../ts";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import "./index.scss";

export const Registration: React.FC = () => {
  const type: Array<string> = ["text", "email", "password", "password"];
  const sprite: Array<string> = ["user", "email", "lock", "lock"];
  const denotation: Array<string> = [
    "Логин",
    "Электронная почта",
    "Пароль",
    "Повторите пароль",
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

  const errorsField = (errors: any, touched: any, index: number) => {
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
    <div className="wrapper-registration">
      <div className="registration">
        <Formik
          initialValues={initialValues}
          validationSchema={validationField}
          onSubmit={onSubmit}>
          {({ errors, values, touched }) => (
            <Form className="registration-inputs">
              <h1 className="registration__title">Регистрация</h1>

              {Object.keys(values).map((item, index) => (
                <label
                  className="registration__block"
                  htmlFor={item}
                  key={index}>
                  <Field
                    className={
                      errorsField(errors, touched, index)
                        ? "registration__input-errors"
                        : "registration__input"
                    }
                    placeholder={denotation[index]}
                    type={type[index]}
                    name={item}
                    id={item}
                  />

                  <ErrorMessage
                    className="registration__errors"
                    component="div"
                    name={item}
                  />

                  <div className="registration__icon">
                    <Sprite id={sprite[index]} colour={"#686868"} />
                  </div>
                </label>
              ))}

              <button className="registration__send" type="submit">
                Зарегистрироваться
              </button>
            </Form>
          )}
        </Formik>

        <div className="registration-text">
          <p className="registration-text__title">
            Пользователь обязуется:
          </p>
          <ul className="registration-text__list">
            <li className="registration-text__paragraph">
              <span className="registration-text__round" />
              предоставлять достоверную и актуальную информацию при
              регистрации и добавлении объекта;
            </li>

            <li className="registration-text__paragraph">
              <span className="registration-text__round" />
              добавлять фотографии объектов соответствующие
              действительности. Администрация сайта sdaem.by оставляет за
              собой право удалять любую информацию, размещенную
              пользователем, если сочтет, что информация не соответствует
              действительности, носит оскорбительный характер, нарушает
              права и законные интересы других граждан либо действующее
              законодательство Республики Беларусь.
            </li>
          </ul>
          <p className="registration-text__account">
            Уже есть аккаунт?
            <span className="registration-text__entrance">Войдите</span>
          </p>
        </div>
      </div>
    </div>
  );
};
