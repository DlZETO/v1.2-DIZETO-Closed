import React from "react";
import { ThemeProvider } from "next-themes";
import "dizeto/styles/tailwind.css";
import "dizeto/styles/style.css";
import "dizeto/styles/lightbox.min.css";

export default function App({ Component, pageProps }) {
  console.log("© 2021 DIZETO. All rights reserved.");
  console.log("Created by Gede Dewo Wahyu M.W with 🖤 ");
  return (
    <ThemeProvider enableSystem={false} attribute="class">
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
