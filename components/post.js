import Image from "next/image";
import Link from "next/link";
import { formatearFecha } from "../utils/helper";
import styles from "../styles/blog.module.css";

export default function Post({ post }) {
  const { contenido, imagen, titulo, url, publishedAt } = post;

  return (
    <article>
      <Image
        src={imagen.data.attributes.formats.medium.url}
        width={600}
        height={400}
        alt={`Imagen blog ${titulo}`}
      />

      <div className={styles.contenido}>
        <h3>{titulo}</h3>
        <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
        <p className={styles.resumen}>{contenido[0].children[0].text}</p>
        <Link href={`/blog/${url}`} className={styles.enlace}>
          Leer Post
        </Link>
      </div>
    </article>
  );
}