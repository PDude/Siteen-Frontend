import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <title>Siteen | Digital Agency</title>
          <link rel='icon' href='/favicon.ico' />
          <link rel='preconnect' href='https://fonts.gstatic.com' />
          {/* <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          /> */}
          <link
            href='https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100;200;300;400;500;600;700&display=swap'
            rel='stylesheet'
          />
          <meta name='description' content='Solutions for Digital Business.' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta
            name='keywords'
            content='Web-Application, CRM-System, iOS/Android App, Motion Design, Graphics, siteen, develop web-site, develop mobile app'
          />
          <meta name='og:site_name' content='Siteen | Digital Agency' />
          <meta property='og:title' content='Siteen | Digital Agency' />
          <meta property='og:type' content='article' />
          <meta property='og:url' content='https://siteen.co/' />
          <meta property='og:image' content='https://siteen.co/logo.svg' />
          <meta
            property='og:description'
            content='⚡SITEEN | Digital Agency⚡ ➤ Automation your business ➤ Create Web-Application ➤ CRM-System ➤ iOS/Android App 📥 siteen.co@gmail.com'
          />
          <meta name='author' content='Siteen' />
          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
          <script
            async
            src='https://www.googletagmanager.com/gtag/js?id=G-VWFTD9KMMY'></script>
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
