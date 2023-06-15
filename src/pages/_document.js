import { Html, Head, Main, NextScript } from 'next/document';
 
export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}}>
      <Head lang='pt-BR' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"/>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}