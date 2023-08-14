import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        {/* <link rel="shortcut icon" href="/Logo.png" /> */}
        <link rel="stylesheet" type="text/css" href="../styles/nprogress.css" />
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="notifications"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;
