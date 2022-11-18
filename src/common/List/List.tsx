import React from "react";
import { Sprite } from "../../svg";
import { MassiveOfListProps } from "../../ts";
import { clsx } from "clsx";
import styles from "./List.module.scss";

export const List: React.FC<MassiveOfListProps> = ({
  massive,
  classes,
  hook,
}) => {
  return (
    <ul className={classes?.classUl || styles.list}>
      {massive.map((elem, index) => (
        <li
          className={classes?.classList || styles.item}
          key={index}
          onClick={() => hook?.setActiveId(elem.id)}>
          <a
            className={clsx(
              (elem.colour, classes?.classParagraph) || styles.text,
              styles.text &&
                hook?.activeId === elem.id &&
                styles["text--active"]
            )}
            href="/">
              
            {elem.sprite && (
              <span className={classes?.classSprite}>
                <Sprite
                  id={elem.sprite}
                  height={elem.characterSprite?.height}
                  width={elem.characterSprite?.height}
                  colour={
                    elem.characterSprite?.colour ||
                    (hook?.activeId === elem.id ? "black" : "#8291a3")
                  }
                />
              </span>
            )}

            {elem.text}
          </a>

          <div
            className={clsx(
              styles.focus,
              hook?.activeId === elem.id && styles["focus--active"]
            )}></div>
        </li>
      ))}
    </ul>
  );
};
