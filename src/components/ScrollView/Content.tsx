import React, { HTMLAttributes, FC } from "react";
import { VideoData } from "../../constants/data";
import styles from "./styles.module.scss";

interface Props extends HTMLAttributes<HTMLDivElement> {
  list: VideoData[];
}

export default function Content({ list }: Props) {
  return (
    <ul className={styles.scrollView}>
      {list.map((item) => (
        <li key={item.id}>
          <video key={item.id} loop muted src={item.src} />
        </li>
      ))}
    </ul>
  );
}
// export default Content;
