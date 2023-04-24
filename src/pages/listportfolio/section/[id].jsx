import { useState } from "react";
import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { useRouter } from "next/router";
import { Link as Scroll } from "react-scroll";
import Loading from "dizeto/components/Loading";
import PaginationMinW1024px from "dizeto/components/PaginationMinW1024px";
import PaginationWBelow1024px from "dizeto/components/PaginationWBelow1024px";
import Footer from "dizeto/components/Footer";

export default function Portfolio() {
  const pathIndex = {
    loading: 0,
    ginzasbirthday: 1,
    halimprewedding: 2,
    ichasbirthday: 3,
    lenteracoffee: 4,
    macaire: 5,
    mitasbirthday: 6,
    nazlaclothes: 7,
    faizalgraduation: 8,
    reniprewedding: 9,
    rositaprewedding: 10,
    selyhunting: 11,
    tenangcoffee: 12,
    irmajabar: 13,
    muhibahangklung: 14,
    ayamusiccover: 15,
    hkbpbandung: 16,
    safiykitchen: 17,
    rumahbatikwijaya: 18,
    eidphoto: 19,
  };

  const source = [
    {
      id: 0,
      tdat: 1,
      tit1: "DIZETO | PORTFOLIO",
      tit2: "DIZETO PORTFOL",
      tit3: "IO",
      dt: "XXX XXX, XXX",
      fldr: "loading",
      alt: "Dizeto Portfolio",
      cc: "© Copyright XXXX - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 1,
      tdat: 82,
      tit1: "GINZA'S BIRTHDAY",
      tit2: "GINZA'S BIRTHD",
      tit3: "AY",
      dt: "11TH DECEMBER, 2021",
      fldr: "ginzas-birthday",
      alt: "Ginza's Birthday",
      cc: "© Copyright 2021 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 2,
      tdat: 20,
      tit1: "HALIM PRE-WEDDING",
      tit2: "HALIM PRE-WEDDI",
      tit3: "NG",
      dt: "19TH FEBRUARY, 2022",
      fldr: "halim-prewedding",
      alt: "Halim Pre-Wedding",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 3,
      tdat: 202,
      tit1: "ICHA'S BIRTHDAY",
      tit2: "ICHA'S BIRTHD",
      tit3: "AY",
      dt: "12TH JUNE, 2022",
      fldr: "ichas-birthday",
      alt: "Icha's Birthday",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 4,
      tdat: 16,
      tit1: "LENTERA COFFEE",
      tit2: "LENTERA COFF",
      tit3: "EE",
      dt: "13TH JUNE, 2022",
      fldr: "lentera-coffee",
      alt: "Lentera Coffee",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 5,
      tdat: 20,
      tit1: "MACAIRE",
      tit2: "MACAI",
      tit3: "RE",
      dt: "26TH JULY, 2020",
      fldr: "macaire",
      alt: "Macaire",
      cc: "© Copyright 2020 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 6,
      tdat: 95,
      tit1: "MITA'S BIRTHDAY",
      tit2: "MITA'S BIRTHD",
      tit3: "AY",
      dt: "26TH FEBRUARY, 2022",
      fldr: "mitas-birthday",
      alt: "Mita's Birthday",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 7,
      tdat: 62,
      tit1: "NAZLA CLOTHES",
      tit2: "NAZLA CLOTH",
      tit3: "ES",
      dt: "24TH DECEMBER, 2022",
      fldr: "nazla-clothes",
      alt: "Nazla Clothes",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 8,
      tdat: 102,
      tit1: "FAIZAL GRADUATION",
      tit2: "FAIZAL GRADUATI",
      tit3: "ON",
      dt: "28TH MAY, 2022",
      fldr: "faizal-graduation",
      alt: "Faizal Graduation",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 9,
      tdat: 98,
      tit1: "RENI PRE-WEDDING",
      tit2: "RENI PRE-WEDDI",
      tit3: "NG",
      dt: "27TH MAY, 2022",
      fldr: "reni-prewedding",
      alt: "Reni Pre-Wedding",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 10,
      tdat: 150,
      tit1: "ROSITA PRE-WEDDING",
      tit2: "ROSITA PRE-WEDDI",
      tit3: "NG",
      dt: "29TH MARCH, 2022",
      fldr: "rosita-prewedding",
      alt: "Rosita Pre-Wedding",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 11,
      tdat: 69,
      tit1: "SELY HUNTING",
      tit2: "SELY HUNTI",
      tit3: "NG",
      dt: "24TH APRIL, 2022",
      fldr: "sely-hunting",
      alt: "Sely Hunting",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 12,
      tdat: 30,
      tit1: "TENANG COFFEE",
      tit2: "TENANG COFF",
      tit3: "EE",
      dt: "10TH APRIL, 2022",
      fldr: "tenang-coffee",
      alt: "Tenang Coffee",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 13,
      tdat: 221,
      tit1: "IRMA JABAR",
      tit2: "IRMA JAB",
      tit3: "AR",
      dt: "18TH DECEMBER, 2021",
      fldr: "irma-jabar",
      alt: "IRMA JABAR",
      cc: "© Copyright 2021 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 14,
      tdat: 215,
      tit1: "MUHIBAH ANGKLUNG",
      tit2: "MUHIBAH ANGKLU",
      tit3: "NG",
      dt: "3RD JUNE, 2022",
      fldr: "muhibah-angklung",
      alt: "Muhibah Angklung",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 15,
      tdat: 0,
      tit1: "AYA MUSIC COVER",
      tit2: "AYA MUSIC COV",
      tit3: "ER",
      dt: "22ND MAY, 2022",
      fldr: "aya-music-cover",
      alt: "Aya Music Cover",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 16,
      tdat: 110,
      tit1: "HKBP BANDUNG",
      tit2: "HKBP BANDU",
      tit3: "NG",
      dt: "2ND MAY, 2021",
      fldr: "hkbp-bandung",
      alt: "HKBP Bandung",
      cc: "© Copyright 2021 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 17,
      tdat: 34,
      tit1: "SAFIY KITCHEN",
      tit2: "SAFIY KITCH",
      tit3: "EN",
      dt: "23RD JANUARY, 2022",
      fldr: "safiy-kitchen",
      alt: "Safiy Kitchen",
      cc: "© Copyright 2022 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 18,
      tdat: 54,
      tit1: "RUMAH BATIK WIJAYA",
      tit2: "RUMAH BATIK WIJA",
      tit3: "YA",
      dt: "04TH FEBRUARY, 2023",
      fldr: "rumah-batik-wijaya",
      alt: "Rumah Batik Wijaya",
      cc: "© Copyright 2023 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
    {
      id: 19,
      tdat: 180,
      tit1: "EID PHOTO",
      tit2: "EID PHO",
      tit3: "TO",
      dt: "06TH APRIL, 2023",
      fldr: "eid-photo",
      alt: "Eid Photo",
      cc: "© Copyright 2023 - DIZETO",
      cls: "columns-3 lg:columns-4",
    },
  ];

  const router = useRouter();
  let { id } = router.query;
  const index = pathIndex[id] || pathIndex.loading;

  const myData = [];
  for (let i = 1; i <= source[index].tdat; i++) {
    myData.push(`DZT_CC${i}.webp`);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 50;
  const totalPages = Math.ceil(myData.length / perPage);
  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const currentData = myData.slice(startIndex, endIndex);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
        <meta httpEquiv="Cache-Control" content="max-age=2629440, public" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>{source[index].tit1}</title>
        <meta name="author" content="DIZETO" />
        <meta name="description" content="Please take a look around and get in touch if you have any questions or want to discuss any projects." />
        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DIZETO | PORTFOLIO" />
        <meta property="og:description" content="Please take a look around and get in touch if you have any questions or want to discuss any projects." />
        <meta property="og:image" content="https://www.dizeto.com/favicon.ico" />
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
      <section id="top" className="container mx-auto my-10 rounded-lg border border-gray-200 bg-white shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30">
        <div className="min-h-screen px-16 pb-14">
          <div className="flex items-center pt-10 lg:py-10">
            <div className="flex min-w-max items-center">
              {/* ----------------------------------- */}
              <div className="mr-5 lg:mr-20">
                <h1 className="text-4xl font-semibold dark:text-white">
                  {source[index].tit2}
                  <span className="text-red-600">{source[index].tit3}</span>
                </h1>
                <p className="text-right text-base font-semibold tracking-widest dark:text-white">{source[index].dt}</p>
              </div>
              {/* ----------------------------------- */}
              <PaginationMinW1024px
                back="/listportfolio"
                value={Array.from({ length: totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  if (pageNumber === currentPage) {
                    return (
                      <button key={pageNumber} className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 bg-red-600 font-semibold text-white">
                        {pageNumber}
                      </button>
                    );
                  } else {
                    return (
                      <button
                        key={pageNumber}
                        className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                        onClick={() => setCurrentPage(pageNumber)}
                      >
                        {pageNumber}
                      </button>
                    );
                  }
                })}
              />
            </div>
            <div className="red-line-h-portfolio"></div>
          </div>
          {/* ----------------------------------- */}
          <PaginationWBelow1024px
            back="/listportfolio"
            value={Array.from({ length: totalPages }).map((_, index) => {
              const pageNumber = index + 1;
              if (pageNumber === currentPage) {
                return (
                  <button key={pageNumber} className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 bg-red-600 font-semibold text-white">
                    {pageNumber}
                  </button>
                );
              } else {
                return (
                  <button
                    key={pageNumber}
                    className="flex h-[35px] w-[35px] items-center justify-center border-2 border-red-600 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
                    onClick={() => setCurrentPage(pageNumber)}
                  >
                    {pageNumber}
                  </button>
                );
              }
            })}
          />
          {/* ----------------------------------- */}
          <ul className={`${source[index].cls} gap-x-4`}>
            {currentData.map((data) => (
              <li key={data} className="mb-4 hover:shadow-md hover:shadow-black/30 dark:hover:shadow-md dark:hover:shadow-white/30">
                <div className="flex items-center justify-center border-2 border-gray-200 bg-white hover:border-red-600 dark:border-gray-700 dark:bg-gray-700 dark:hover:border-red-600 ">
                  <div className="p-0.5">
                    <a href={`https://images.dizeto.com/assets/uploads/${source[index].fldr}/${data}`} data-lightbox={source[index].alt} data-title={source[index].cc}>
                      <Image className="h-auto" src={require(`dizeto/assets/uploads/${source[index].fldr}/thumbnail/${data}`)} placeholder="blur" alt={source[index].alt} width={360} height={0} />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {/* ----------------------------------- */}
          <div className="flex justify-center">
            <Scroll
              className="my-6 cursor-pointer border-2 border-red-600 px-10 py-2 font-semibold text-red-600 hover:bg-red-600 hover:text-white"
              to="top"
              spy={true}
              smooth={true}
              offset={-40}
              duration={500}
            >
              BACK TO TOP
            </Scroll>
          </div>
        </div>
        {/* ----------------------------------- */}
        <Footer />
      </section>
      <Script src="/lightbox-plus-jquery.min.js" strategy="afterInteractive"></Script>
    </>
  );
}
