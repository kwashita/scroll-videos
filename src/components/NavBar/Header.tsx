import React from "react";
import styles from "./styles.module.scss";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.title}>首页</div>
      <div className={styles.nav}>
        <span>大会员</span>
        <span>消息</span>
        <span>动态</span>
      </div>
    </div>
  );
}
