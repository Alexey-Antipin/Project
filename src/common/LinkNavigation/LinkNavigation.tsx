import clsx from "clsx";
import React from "react";
import { Sprite } from "../../svg";
import { LinkProps } from "../../ts";
import styles from "./LinkNavigation.module.scss";

export const LinkNavigation: React.FC<LinkProps> = ({
  link,
  deeperLink,
}) => {
  return (
    <div className={styles.link}>
      <span className={styles.home}>
        <Sprite id="home" colour={deeperLink && "#4E64F9"} />

        {!deeperLink && <div className={styles.round}></div>}

        <span
          className={clsx(styles.text, deeperLink && styles["text-blue"])}>
          {link}
        </span>

        {deeperLink && (
          <>
            <div className={styles.round}></div>
            <span className={styles.text}>{deeperLink}</span>
          </>
        )}
        <h1 className={styles.title}>{deeperLink || link}</h1>
      </span>
    </div>
  );
};
