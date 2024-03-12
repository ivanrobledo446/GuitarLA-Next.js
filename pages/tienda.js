import Guitarra from "../components/guitarra";
import Layout from "../components/layout";
import styles from "../styles/grid.module.css";

export default function Tienda({ guitarras }) {
  return (
    <Layout
      title={"Tienda Virtual"}
      description={"Tienda Virtual, venta de guitarras, instrumentos, guitarLA"}
    >
      <main className="contenedor">
        <h2 className="heading">Nuestra Colección</h2>

        <div className={styles.grid}>
          {guitarras?.map((guitarra) => (
            <Guitarra key={guitarra.id} guitarra={guitarra.attributes} />
          ))}
        </div>
      </main>
    </Layout>
  );
}

// MANERA SSR
export async function getServerSideProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`,
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}

/* MANERA SSG
export async function getStaticProps() {
  const respuesta = await fetch(
    `${process.env.API_URL}/guitarras?populate=imagen`
  );
  const { data: guitarras } = await respuesta.json();

  return {
    props: {
      guitarras,
    },
  };
}
*/
