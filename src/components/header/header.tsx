import styles from "./header.module.scss";

export function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>Hola soy un header moderno que usa CSS modules</h1>
        <h2>
          Yo soy el h2 del header y estoy aquí para que veáis que no me afecta
          lo que se le diga al otro h2 del footer en el index.scss, porque como
          uso CSS modulado, lo que ponga ahí para el h2 no me afecta ¯\_(ツ)_/¯
        </h2>
      </header>
    </>
  );
}
