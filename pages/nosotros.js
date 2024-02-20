import Image from 'next/image';
import styles from '../styles/nosotros.module.css'
import Layout from "../components/layout";

export default function Nosotros() {
  return (
    <Layout
      title={"Nosotros"}
      description={"Sobre nosotros, guitarLA, tienda de música"}
    >
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>

        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' width={1000} height={800} alt='Imagen sobre nosotros'/>

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
              dapibus nibh, sit amet aliquam sem. Nulla felis risus, maximus id
              turpis eu, pharetra condimentum velit. Sed diam sapien, commodo
              lobortis justo ac, vehicula scelerisque nibh. Nam id dolor turpis.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Fusce iaculis nisl non mauris molestie, at
              cursus nisi suscipit.
            </p>
            <p>
              Vivamus sit amet massa vitae nisl sodales aliquam. Morbi dui
              risus, maximus ut feugiat ut, cursus eget risus. Quisque volutpat
              molestie lorem id tempus. Aenean tincidunt et tellus ut aliquet.
              Fusce quis ullamcorper leo. Morbi aliquam risus risus, quis
              fermentum purus sollicitudin nec.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
