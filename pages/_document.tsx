import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <title>Siteen | Digital Agency</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        {/* <meta name="description" content="Solutions for Digital Business." />
        <meta name="keywords" content="HTML, CSS, JavaScript, NodeJS, React" />
        <meta name="author" content="siteen.co@gmail.com" /> */}

        <meta
          name="description"
          content="✅Заказать разработку веб-дизайн и seo-продвижение ⚡️SITEEN⚡️➤Корпоративный сайт ➤Интернет-магазин ➤Лендинг ➤Сайт-визитка. Львов, ☎️ +380 97 163 02 02"
        />
        <meta name="author" content="Siteen" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Keywords"
          content="корпоративний сайт, cfqnby, розробка сайта, siteen, веб дизайн, сайтин, замовити сайт Львів, разработка сайта, разработка web сайта, seo просування, motion design, smm, seo"
        />
        <meta name="og:site_name" content="Siteen | Digital Agency" />
        <meta property="og:title" content="Siteen | Digital Agency" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://siteen.co/about/" />
        <meta
          property="og:image"
          content="https://siteen.co/wp-content/uploads/2020/08/LogoSiteen.jpg"
        />
        <meta
          property="og:description"
          content="✅Заказать разработку web-дизайна и seo-продвижение ⚡️SITEEN⚡️➤Корпоративный сайт ➤Интернет-магазин ➤Лендинг ➤Сайт-визитка. Львов, Киев ☎️ +380 97 163 02 02"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        {/* Global Site Tag (gtag.js) - Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-VWFTD9KMMY"
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
          `,
          }}
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
