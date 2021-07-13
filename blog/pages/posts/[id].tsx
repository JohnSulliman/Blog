import Layout from '../../componentes/layout';
import { pegarTodosOsIds, pegarConteudoParaPost } from '../../lib/posts';
import Head from 'next/head';
import Date from '../../componentes/data';
import {  GetStaticProps, GetStaticPaths } from 'next';
import styles from '../../styles/[id].module.scss';

export default function Post({
    dadosDosPosts
} : {
    dadosDosPosts: {
        title: string
        date: string
        conteudoHTML: string
    }
})

{
    return(
        <Layout>
            <Head>
                <title>{dadosDosPosts.title}</title>
            </Head>
            <article>
                <h1>{dadosDosPosts.title}</h1>
                <small>
                    <Date dataString={dadosDosPosts.date}/>
                </small>
                <div className={styles.content} dangerouslySetInnerHTML={{ __html:dadosDosPosts.conteudoHTML }} />
            </article>
        </Layout>
    );
};

export const getStaticPaths: GetStaticPaths = async() => {
    const caminhos = pegarTodosOsIds();

    return {
        paths: caminhos,
        fallback: false
    }
};

export const getStaticProps: GetStaticProps = async({params}) => {
    const dadosDosPosts = await pegarConteudoParaPost(params.id as string)

    return {
        props: {
            dadosDosPosts
        }
    }
};