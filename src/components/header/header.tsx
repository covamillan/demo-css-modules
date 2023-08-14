import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      {/* Con corchetes si no queremos usar camel case */}
      <header className={styles["main-header"]}>
        {/*Con template strings si queréis poner dos clases  */}
        <h1 className={`${styles.headerH1} ${styles.headerH1}`}>
          Hola soy un header moderno que usa CSS modules
        </h1>
        {/* Con camel case si no queréis usar corchetes */}
        <h2 className={styles.headerH2}>
          Yo soy el h2 del header y estoy aquí para que veáis que no me afecta
          lo que se le diga al otro h2 del footer en el index.scss, porque como
          uso CSS modulado, lo que ponga ahí para el h2 no me afecta ¯\_(ツ)_/¯
        </h2>
      </header>
    </>
  );
}
