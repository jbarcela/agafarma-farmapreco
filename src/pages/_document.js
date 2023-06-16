import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang='pt-BR' style={{scrollBehavior:'smooth'}}>
        <Head>
        <title>Agafarma</title>
        <meta name="description" content="Agafarma - Sua farmácia de confiança para atender às suas necessidades de saúde e bem-estar. Oferecemos uma ampla variedade de medicamentos, produtos de cuidados pessoais e serviços farmacêuticos de qualidade. Nossa equipe dedicada de profissionais farmacêuticos está pronta para fornecer orientação especializada e atendimento personalizado. Conte com a Agafarma para encontrar tudo o que você precisa para cuidar da sua saúde e da sua família. Visite-nos hoje mesmo e experimente o atendimento excepcional que nos tornou uma referência na comunidade." />
        <meta name="keywords" content="farmácia, agafarma, remedios, medicamentos, genéricos, antibióticos, anti-alérgico, xarope, anticoncepcional,fraldas, manipulados, popular, promoção, comprimido, contato, capsula"></meta>
        <meta name="author" content="Agafarma"/>
        <meta name="robots" content="index,follow"></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}