import Document, { Html, Head, Main, NextScript } from "next/document";
import React from "react";

/**
 * Document
 */
class MyDocument extends Document {
  /**
   * Renders the document
   * @return {React.ReactNode} The node
   */
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
