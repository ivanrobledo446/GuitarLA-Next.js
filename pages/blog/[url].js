import Layout from "../../components/layout";
import Image from "next/image";
import styles from "../../styles/blog.module.css";
import { formatearFecha } from "../../utils/helper";

export default function Post({ post }) {
  const { titulo, contenido, imagen, publishedAt } = post[0].attributes;

  return (
    <Layout title={titulo}>
      <article className={`${styles.post} ${styles["mt-3"]}`}>
        <Image
          src={imagen.data.attributes.url}
          width={1000}
          height={600}
          alt={`Imagen blog ${titulo}`}
        />

        <div className={styles.contenido}>
          <h3>{titulo}</h3>
          <p className={styles.fecha}>{formatearFecha(publishedAt)}</p>
          <p className={styles.texto}>{contenido[0].children[0].text}</p>
        </div>
      </article>
    </Layout>
  );
}

export async function getServerSideProps({ params: { url } }) {
  const respuesta = await fetch(
    `${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`,
  );
  const { data: post } = await respuesta.json();

  return {
    props: {
      post,
    },
  };
}
