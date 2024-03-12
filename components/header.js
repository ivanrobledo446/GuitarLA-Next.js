import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/header.module.css";

export default function Header() {
  
  const router = useRouter(); // Para poder conseguir el pathname ya que en el mismo te muestra información de la página.

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href="/">
          <Image alt="logo" src="/img/logo.svg"/>
        </Link>

        <nav className={styles.navegacion}>
          <Link
            className={router.pathname === "/" ? styles.active : ""}
            href="/"
          >
            Inicio
          </Link>

          <Link
            className={router.pathname === "/nosotros" ? styles.active : ""}
            href="/nosotros"
          >
            Nosotros
          </Link>

          <Link
            className={router.pathname === "/tienda" ? styles.active : ""}
            href="/tienda"
          >
            Tienda
          </Link>

          <Link
            className={router.pathname === "/blog" ? styles.active : ""}
            href="/blog"
          >
            Blog
          </Link>

          <Link
            className={router.pathname === "/carrito" ? styles.active : ""}
            href="/carrito"
          >
            <Image
              src="/img/carrito.png"
              width={30}
              height={25}
              alt="imagen carrito"
            />
          </Link>
        </nav>
      </div>
    </header>
  );
}