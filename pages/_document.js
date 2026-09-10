import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

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
      // Localized app pages live under /<lang>/apps/...; everything else is English.
      const m = /^\/([a-z]{2})\/apps\//.exec(ctx.asPath || ctx.pathname || "");
      const lang = m ? m[1] : "en";
      return {
        ...initialProps,
        lang,
        dir: lang === "ar" ? "rtl" : "ltr",
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
      <Html lang={this.props.lang} dir={this.props.dir}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
