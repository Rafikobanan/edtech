import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
// @ts-ignore
import sprite from 'svg-sprite-loader/runtime/sprite.build';

interface MyDocumentProps {
  spriteContent: string;
}

export default class MyDocument extends Document<MyDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const spriteContent = sprite.stringify();

    return {
      spriteContent,
      ...initialProps
    };
  }

  render() {
    const { spriteContent } = this.props;

    return (
      <Html lang="en">
        <Head />
        <body>
          <div dangerouslySetInnerHTML={{ __html: spriteContent }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
