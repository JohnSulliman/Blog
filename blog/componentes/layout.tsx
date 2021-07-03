import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const meuNome = 'Jonathan Sulliman';
export const tituloDoSite = 'Jonathan Sulliman - Desenvolvedor';

export default function Layout(
    { children, home }: {children: React.ReactNode, home:boolean}
) {
    return(
        <div>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta 
                    name="Jonathan Sulliman"
                    content="Uma página pessoal com informações básicas e blog integrado."
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        tituloDoSite
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={tituloDoSite} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>

            <header>
                {home ? (
                    <>
                        <Image 
                            priority
                            src="/img/Howl.jpg"
                            height={144}
                            width={144}
                            alt={meuNome}
                        />

                        <p>{meuNome}</p>
                    </>
                ): (
                    <>
                    </>
                )}
            </header>

            <main>{children}</main>

            {!home && (
                <div>
                    <Link href='/'>
                        <a>← Retornar para o Início</a>
                    </Link>
                </div>
            )}
        </div>
    );

};