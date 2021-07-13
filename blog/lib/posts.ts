import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';

const pastaDosPosts = path.join(process.cwd(), 'posts');

export function pegarPostsPorData() {
    const nomeDosArquivos = fs.readdirSync(pastaDosPosts);
    const dadosDosPosts = nomeDosArquivos.map(cadaArquivo => {
        const id = cadaArquivo.replace(/\.md$/, '');
        const caminhoDoArquivo = path.join(pastaDosPosts, cadaArquivo);
        const conteudoDoArquivo = fs.readFileSync(caminhoDoArquivo, 'utf-8');
        const resultadoDoMatter = matter(conteudoDoArquivo);

        return {
            id,
            ...(resultadoDoMatter.data as {date:string; title:string})
        };
    });

    return dadosDosPosts.sort((objeto1, objeto2) => {
        if(objeto1.date <objeto2.date) {
            return 1
        } else {
            return -1
        };
    });

};

export function pegarTodosOsIds() {
    const nomeDosArquivos = fs.readdirSync(pastaDosPosts)
    return nomeDosArquivos.map(cadaArquivo => {
        return {
            params: {
                id: cadaArquivo.replace(/\.md$/, '')
            }
        };
    });
};

export async function pegarConteudoParaPost(id: string) {
    const caminhoDoArquivo = path.join(pastaDosPosts, `${id}.md`);
    const conteudoDoArquivo= fs.readFileSync(caminhoDoArquivo, 'utf-8');
    const resultadoDoMatter = matter(conteudoDoArquivo);
    const conteudoProcessado = await remark()
        .use(html)
        .process(resultadoDoMatter.content)
    const conteudoHTML = conteudoProcessado.toString()

    return {
        id,
        conteudoHTML,
        ...(resultadoDoMatter.data as {data: string; title: string})
    }
};