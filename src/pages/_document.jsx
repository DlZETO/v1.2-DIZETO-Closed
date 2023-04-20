import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" className="">
      <Head />
      <body className="bg-white bg-cover bg-center bg-no-repeat dark:bg-dark" style={{ backgroundImage: "url(/assets/images/background/background.png)" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
