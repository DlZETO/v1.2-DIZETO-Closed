import { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import Loading from "dizeto/components/Loading";
import PaginationMinW1024px from "dizeto/components/PaginationMinW1024px";
import PaginationWBelow1024px from "dizeto/components/PaginationWBelow1024px";
import Footer from "dizeto/components/Footer";
import { FaShareSquare } from "react-icons/fa";
import { setTimeout } from "timers";

export default function ListPortfolio() {
  const myData = [
    {
      id: 1,
      image: "ginzas-birthday/thumbnail/thumbnail.webp",
      title: "GINZA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "ginzasbirthday",
    },
    {
      id: 2,
      image: "halim-prewedding/thumbnail/thumbnail.webp",
      title: "HALIM",
      category: "(PRE-WEDDING)",
      link: "halimprewedding",
    },
    {
      id: 3,
      image: "ichas-birthday/thumbnail/thumbnail.webp",
      title: "ICHA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "ichasbirthday",
    },
    {
      id: 4,
      image: "lentera-coffee/thumbnail/thumbnail.webp",
      title: "LENTERA COFFEE",
      category: "(PRODUCT)",
      link: "lenteracoffee",
    },
    {
      id: 5,
      image: "macaire/thumbnail/thumbnail.webp",
      title: "MACAIRE",
      category: "(PRODUCT)",
      link: "macaire",
    },
    {
      id: 6,
      image: "mitas-birthday/thumbnail/thumbnail.webp",
      title: "MITA'S BIRTHDAY",
      category: "(DOCUMENTATION)",
      link: "mitasbirthday",
    },
    {
      id: 7,
      image: "nazla-clothes/thumbnail/thumbnail.webp",
      title: "NAZLA CLOTHES",
      category: "(PHOTO SHOOT)",
      link: "nazlaclothes",
    },
    {
      id: 8,
      image: "faizal-graduation/thumbnail/thumbnail.webp",
      title: "FAIZAL GRADUATION",
      category: "(DOCUMENTATION)",
      link: "faizalgraduation",
    },
    {
      id: 9,
      image: "reni-prewedding/thumbnail/thumbnail.webp",
      title: "RENI",
      category: "(PRE-WEDDING)",
      link: "reniprewedding",
    },
    {
      id: 10,
      image: "rosita-prewedding/thumbnail/thumbnail.webp",
      title: "ROSITA",
      category: "(PRE-WEDDING)",
      link: "rositaprewedding",
    },
    {
      id: 11,
      image: "sely-hunting/thumbnail/thumbnail.webp",
      title: "SELY",
      category: "(HUNTING)",
      link: "selyhunting",
    },
    {
      id: 12,
      image: "tenang-coffee/thumbnail/thumbnail.webp",
      title: "TENANG COFFEE",
      category: "(PRODUCT)",
      link: "tenangcoffee",
    },
    {
      id: 13,
      image: "irma-jabar/thumbnail/thumbnail.webp",
      title: "IRMA JABAR",
      category: "(DOCUMENTATION)",
      link: "irmajabar",
    },
    {
      id: 14,
      image: "muhibah-angklung/thumbnail/thumbnail.webp",
      title: "MUHIBAH ANGKLUNG",
      category: "(DOCUMENTATION)",
      link: "muhibahangklung",
    },
    {
      id: 15,
      image: "aya-music-cover/thumbnail/thumbnail.webp",
      title: "AYA",
      category: "(MUSIC COVER)",
      link: "ayamusiccover",
    },
    {
      id: 16,
      image: "hkbp-bandung/thumbnail/thumbnail.webp",
      title: "HKBP BANDUNG",
      category: "(DOCUMENTATION)",
      link: "hkbpbandung",
    },
    {
      id: 17,
      image: "safiy-kitchen/thumbnail/thumbnail.webp",
      title: "SAFIY KITCHEN",
      category: "(CONTENT)",
      link: "safiykitchen",
    },
    {
      id: 18,
      image: "rumah-batik-wijaya/thumbnail/thumbnail.webp",
      title: "RUMAH BATIK WIJAYA",
      category: "(PRODUCT)",
      link: "rumahbatikwijaya",
    },
    {
      id: 19,
      image: "eid-photo/thumbnail/thumbnail.webp",
      title: "EID PHOTO",
      category: "(PHOTO SHOOT)",
      link: "eidphoto",
    },
  ];

  const sortedData = myData.sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    return 0;
  });

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 20;
  const totalPages = Math.ceil(myData.length / perPage);

  const [activeId, setActiveId] = useState(null);
  const [opacity, setOpacity] = useState(false);
  function clipBoard() {
    setOpacity(true);
    setTimeout(() => {
      setOpacity(false);
    }, 1500);
  }

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=0.5" />
        <meta httpEquiv="Cache-Control" content="max-age=2629440, public" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <title>DIZETO | LIST PORTFOLIO</title>
        <meta name="robots" content="index,follow" />
        <meta name="author" content="DIZETO" />
        <meta name="description" content="See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity." />
        <meta name="keywords" content="dizeto , portofolio dizeto, portfolio dizeto" />
        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="DIZETO | LIST PORTFOLIO" />
        <meta property="og:description" content="See our portfolio for examples of our work. We believe that our portfolio demonstrates our abilities and creativity." />
        <meta property="og:url" content="https://www.dizeto.com/listportfolio" />
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
      <section className="container mx-auto my-10 rounded-lg border border-gray-200 bg-white shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30">
        <div className="min-h-screen px-16 pb-14">
          <div className="flex items-center pt-10 lg:py-10">
            <div className="flex min-w-max items-center">
              {/* ----------------------------------- */}
              <div className="mr-5 lg:mr-20">
                <h1 className="text-4xl font-semibold">
                  PORTFOL<span className="text-red-600">IO</span>
                </h1>
                <p className="text-right text-base font-semibold tracking-widest">- DIZETO -</p>
              </div>
              {/* ----------------------------------- */}
              <PaginationMinW1024px
                back="/"
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
            back="/"
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
          <div>
            <ul className="grid grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
              {sortedData.map((item) => (
                <li className="rounded-md hover:shadow-md hover:shadow-black/30 dark:hover:shadow-md dark:hover:shadow-white/30" key={item.id}>
                  <Link href={`/listportfolio/section/${item.link}`}>
                    <div className="rounded-md border-2 border-gray-300 bg-white hover:border-red-600 dark:border-gray-700 dark:bg-dark dark:hover:border-red-600">
                      <div className="m-2">
                        <Image className="rounded-md" placeholder="blur" src={require(`dizeto/assets/uploads/${item.image}`)} alt={item.title} width={300} height={300} />
                      </div>
                      <div className="red-line-h">
                        {activeId === item.id && (
                          <div
                            className={`absolute ml-[-45px] mt-[-60px] rounded-full border border-gray-300 bg-white ${
                              opacity ? "opacity-100" : "opacity-0"
                            } shadow-md shadow-black/30 dark:border-gray-700 dark:bg-dark dark:shadow-md dark:shadow-white/30`}
                          >
                            <p className="px-4 py-2 font-semibold text-gray-500 dark:text-gray-400">Copied to Clipboard</p>
                          </div>
                        )}
                      </div>
                      <div className="mx-3 my-2 flex items-center">
                        <div>
                          <h3 className="text-lg font-semibold text-red-600 sm:text-base lg:text-lg">{item.title}</h3>
                          <h4 className="text-sm font-semibold text-gray-500 dark:text-gray-400 sm:text-xs lg:text-sm">{item.category}</h4>
                        </div>
                        <div
                          className="ml-auto flex items-center justify-center p-2 text-gray-500/80 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-600"
                          onClick={(e) => {
                            e.preventDefault();
                            navigator.clipboard.writeText(`https://www.dizeto.com/listportfolio/section/${item.link}`);
                            setActiveId(item.id);
                            clipBoard();
                          }}
                        >
                          <FaShareSquare size={20} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {/* ----------------------------------- */}
        <Footer />
      </section>
    </>
  );
}
