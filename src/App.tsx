import React from "react";
import { dataSource } from "./constants/data";
import { useRef, useState, useEffect } from "react";
import Header from "./components/NavBar/Header";
import Content from "./components/ScrollView/Content";
import styles from "./styles.module.scss";
import banner from "./assets/banner.png";
// interface DataLists {

// dataLists:   [key: string]: object;
// }

function App() {
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [hidden, setHidden] = useState<boolean>(false);
  const oldY = useRef<number>(0);
  const scrollViewRef = useRef<HTMLDivElement>(null);
  console.log("rendering");

  const onScroll = () => {
    if (scrollViewRef.current) {
      const { top: newY } = scrollViewRef.current.getBoundingClientRect();

      const delta = newY - oldY.current;
      oldY.current = newY;
      setHidden(delta < 0);
      // if (delta < 0) {
      //   setHidden(true);
      // } else {
      //   setHidden(false);
      // }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={styles.App}>
      <header className={hidden ? styles.hidden : ""}>
        <Header />
      </header>
      <section className="content">
        <img src={banner} alt="banner" />
        <p className="ine"></p>
        <div className={styles["scroll-container"]} ref={scrollViewRef}>
          <h2>{dataSource.hot.title}</h2>
          <Content list={dataSource.hot.list} />

          <h2>{dataSource.recommend.title}</h2>
          <Content list={dataSource.recommend.list} />

          <h2>{dataSource.live.title}</h2>
          <Content list={dataSource.live.list} />
        </div>
      </section>
    </div>
  );
}

export default App;
