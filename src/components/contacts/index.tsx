import { useState } from "react";
import { Sprite } from "../../svg";
import { Head } from "../../ts";
import "./index.scss";

export const Contacts: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [textarea, setTextArea] = useState<string>("");

  const [open, setOpen] = useState<boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);

  const head: Head[] = [
    {
      id: 1,
      hook: name,
      state: setName,
      title: "Ваше имя",
      placeholder: "Введите имя",
      sprite: "user",
      class: "contacts__input ",
      normal: "contacts__input--normal",
      error: "contacts__input--error",
    },
    {
      id: 2,
      hook: email,
      state: setEmail,
      title: "Ваша электронная почта",
      placeholder: "Введите",
      sprite: "email",
      class: "contacts__input ",
      normal: "contacts__input--normal",
      error: "contacts__input--error",
    },
  ];

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let data = [name, email, textarea];
    for (let i = 0; i < data.length; i++) {
      if (!data[i]) {
        setEmpty(true);
        return;
      }
    }
    setName("");
    setEmail("");
    setTextArea("");
    setEmpty(false);
    setOpen(true);
  };

  return (
    <form className="contacts" onSubmit={onSubmit}>
      <div className="call">
        <h1 className="call__title">Контакты</h1>

        <p className="call__paragraph">
          Если у Вас есть пожелания, предложения или претензии по
          организации работы сайта мы всегда рады услышать Ваше мнение.
        </p>

        <div className="call__block">
          <div className="call__block-icons">
            <div className="call__icons">
              <Sprite id="sign" colour="#FFFFFF" width="12" height="15" />
            </div>
            <div className="call__icons">
              <Sprite id="mobile" />
            </div>
            <div className="call__icons">
              <Sprite id="email" colour="#FFFFFF" />
            </div>
            <div className="call__icons">
              <Sprite id="clock" />
            </div>
          </div>

          <address className="call__address">
            <p>220068, РБ, г. Минск, ул. Осипенко, 21, кв.23</p>

            <div className="call__tel-block">
              <a className="call__tel" href="tel:+375296214833">
                +375 29 621-48-33
              </a>

              <div className="call__icons">
                <Sprite id="viber" colour="#FFFFFF" />
              </div>

              <div className="call__icons">
                <Sprite id="telegram" colour="#FFFFFF" />
              </div>

              <div className="call__icons">
                <Sprite id="whatsapp" colour="#FFFFFF" />
              </div>
            </div>

            <a className="call__mail" href="mailto:sdaem@sdaem.by">
              sdaem@sdaem.by
            </a>

            <time dateTime="08:00-22:00">
              <span className="call__time">Режим работы:</span> 08:00-22:00
            </time>
          </address>
        </div>

        <p className="call__info">
          ИП Шушкевич Андрей Викторович <br /> УНП 192602485 Минским
          горисполкомом 10.02.2016
        </p>

        <div className="warning">
          <Sprite id="warning" />
          <p className="warning__text">
            Администрация сайта не владеет информацией о наличии свободных
            квартир
          </p>
        </div>
      </div>

      <div className="contacts__block-right">
        <div className="contacts__container">
          <ul className="contacts__flex">
            {head.map((el, index) => {
              return (
                <li className="contacts__item" key={index}>
                  <label htmlFor={`label_${index}`}>
                    <h3 className="contacts__title">{el.title}</h3>

                    <div className="contacts__block">
                      <input
                        id={`label_${index}`}
                        value={el.hook}
                        onChange={(event) => el.state(event.target.value)}
                        className={
                          el.class +
                          (empty && !el.hook ? el.error : el.normal)
                        }
                        placeholder={
                          empty && !el.hook
                            ? "Пустое поле!"
                            : el.placeholder
                        }
                      />
                      <div className="contacts__sprite">
                        <Sprite
                          id={el.sprite}
                          colour={empty && !el.hook ? "lightcoral" : "#bdb9b9"}
                        />
                      </div>
                    </div>
                  </label>
                </li>
              );
            })}
          </ul>

          <h3 className="contacts__under-title">Ваше сообщение</h3>
          <textarea
            className={
              "contacts__text " +
              (empty && !textarea
                ? "contacts__text--error"
                : "contacts__text--normal")
            }
            placeholder={empty && !textarea ? "Пустое поле!" : "Сообщение"}
            onChange={(event) => setTextArea(event.target.value)}
            value={textarea}
          />
          <button className="contacts__send">Отправить</button>
        </div>

        {open && (
          <div className="modal">
            <h2 className="modal__title">Ваше письмо отправлено!</h2>

            <p className="modal__text">
              Какое-то сообщение о том, что письмо отправлено, какое-то
              сообщение, что письмо отправлено.
            </p>

            <button
              className="modal__button"
              onClick={() => setOpen(false)}>
              Закрыть окно
            </button>
          </div>
        )}
      </div>

      <div className="combine">
        <div className="combine__icons">
          <Sprite id="instagram" colour="#FFFFFF" />
        </div>
        <div className="combine__icons">
          <Sprite id="vk" colour="#FFFFFF" />
        </div>
        <div className="combine__icons">
          <Sprite id="facebook" colour="#FFFFFF" />
        </div>
      </div>
    </form>
  );
};
