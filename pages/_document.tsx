import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Yasya Indra Blog",
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
