import React from "react";
import Head from "next/head";
import Script from "next/script";
import Loading from "dizeto/components/Loading";
import Navbar from "dizeto/components/dashboard/navbar/Navbar";
import Jumbotron from "dizeto/components/dashboard/Jumbotron";
import About from "dizeto/components/dashboard/about/About";
import Portfolio from "dizeto/components/dashboard/portfolio/Portfolio";
import Pricing from "dizeto/components/dashboard/pricing/Pricing";
import Testimony from "dizeto/components/dashboard/testimony/Testimony";
import TrackRecord from "dizeto/components/dashboard/clients/TrackRecord";
import ClientsImages from "dizeto/components/dashboard/clients/ClientsImages";
import Contact from "dizeto/components/dashboard/Contact";
import Footer from "dizeto/components/Footer";

export default function Dashboard() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
        <meta httpEquiv="Cache-Control" content="max-age=2629440, public" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>DIZETO | PROFESSIONAL SERVICES</title>
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Gede Dewo Wahyu M.W" />
        <meta name="description" content="Dizeto is a vendor that offers photography, videography, talent, and music services." />
        <meta
          name="keywords"
          content="dizeto, bandung, indonesia, vendor, jasa foto, jasa video, jasa fotografer, jasa videografer, pre-wedding, wedding, dokumentasi, foto produk, fotografi, videografi"
        />
        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DIZETO | PROFESSIONAL SERVICES" />
        <meta property="og:description" content="Dizeto is a vendor that offers photography, videography, talent, and music services." />
        <meta property="og:url" content="https://dizeto.vercel.app" />
        <meta property="og:image" content="https://dizeto.vercel.app/favicon.ico" />
        {/* <!-- End of Open Graph --> */}
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=G-FWHL4HM4JB" strategy="afterInteractive" />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-FWHL4HM4JB');
        `}
      </Script>
      {/* <!-- Google tag (gtag.js) --> */}
      <Loading />
      <Navbar />
      <Jumbotron />
      <About />
      <Portfolio />
      <Pricing />
      <section
        id="clients"
        className="container mx-auto my-10 rounded-lg border border-gray-200 bg-white shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30"
      >
        <div className="h-auto bg-cover bg-scroll bg-center bg-repeat" style={{ backgroundImage: "url(/assets/images/background/background.png)" }}>
          <Testimony />
          <TrackRecord />
          <ClientsImages />
        </div>
      </section>
      <section
        id="contact"
        className="container mx-auto my-10 rounded-lg border border-gray-200 bg-white shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30"
      >
        <Contact />
        <Footer />
      </section>
      <Script src="/lightbox-plus-jquery.min.js" strategy="afterInteractive"></Script>
    </>
  );
}
