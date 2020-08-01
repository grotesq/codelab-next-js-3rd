import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ko">
        <Head>
            <link
                href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
                rel="stylesheet"/>
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/antd/4.5.1/antd.min.css"
                integrity="sha512-44gZm6OL9bzBCgtnA25lOu+6RxjXRGzgRask0DjU2b7acrjJsbngLqETrA6o6A68LEF11WF4s6gT6aAvGIlK7w=="
                crossOrigin="anonymous" />
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