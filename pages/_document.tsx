import React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

/**
 * A document class
 */
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          <link
            href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-VWFTD9KMMY'
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VWFTD9KMMY', {
              page_path: window.location.pathname,
            });
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
