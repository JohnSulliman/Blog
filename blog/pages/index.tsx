import Layout, { tituloDoSite } from '../componentes/layout';
import Head from 'next/head';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{tituloDoSite}</title>
      </Head>
      <section>
        <p>Olá, tudo bem? :)</p>
        <p>
          Estou a disposição para ajudar as pessoas com projetos voluntários, dicas e o que estiver ao meu alcance. 
          Se estiver apenas querendo uma conexão, conversar, trocar ideias, segue alguns assuntos que podemos ter 
          em comum:
        </p>
        <p>✔️ Séries, filmes e músicas</p>
        <p>✔️ Jogos e consoles</p>
        <p>✔️ Gatos, cachorros e todo tipo de pet</p>
        <p>✔️ Animes</p>
        <p>Para mais informações acesse o meu <a href="https://www.linkedin.com/in/jonathan-feliciano-1b7b46134/" target='_blank'>LinkedIn</a>.</p>
      </section>
    </Layout>
  )
}
