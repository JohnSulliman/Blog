import { GetStaticProps } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import Layout, { tituloDoSite } from '../componentes/layout';
import Data from '../componentes/data';
import { pegarPostsPorData } from '../lib/posts';
import styles from '../styles/index.module.scss';

export default function Home({
  dadosDosPosts
} : {
  dadosDosPosts: {
    date: string
    title: string
    id: string
  }[]
})

{
  return (
    <Layout home>
      <Head>
        <title>{tituloDoSite}</title>
      </Head>
      <section className={styles.header}>
        <p>Olá, tudo bem?</p>
        <p>
          Me chamo Jonathan e tenho 25 anos. Aqui vocês poderão ter algumas informações sobre o universo da Marvel
          que, particulamente, eu gosto bastante. Tambem se precisarem, estarei disposto a ajudar em projetos
          voluntários, dicas e o que estiver ao meu alcance.
        </p>
        < br/>
        <p>Para mais informações acesse o meu <a href="https://www.linkedin.com/in/jonathan-feliciano-1b7b46134/" target='_blank'>LinkedIn</a>.</p>
      </section>

      <section className={styles.blog}>
        <h2>Blog</h2>
        <ul>
          {
            dadosDosPosts.map(({ date, title, id }) => (
              <li key={id}>
                <Link href={`/posts/${id}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Data dataString={date}/>
                </small>
              </li>
            ))
          }
        </ul>
      </section>
      
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async() => {
  const dadosDosPosts = pegarPostsPorData();

  return {
    props: {
      dadosDosPosts
    }
  };
};
