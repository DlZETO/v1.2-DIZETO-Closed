import React from "react";
import Image from "next/image";

export default function ClientsImages() {
  const cls = "h-auto max-h-[112px] opacity-70 hover:opacity-100";
  return (
    <section className="bg-white pb-24 pt-20 dark:bg-dark">
      <div className="mx-auto px-5">
        <h3 className="text-center text-4xl font-semibold">
          CLIEN<span className="text-red-600">TS</span>
        </h3>
        <div className="red-line-h"></div>
        <div className="flex items-center justify-center gap-x-10 py-5">
          <a href="http://www.angklungmuhibah.id" target="_blank" rel="noopener noreferrer">
            <Image className={`${cls} dark:hidden`} width={165} height={0} src={require("dizeto/assets/images/client/ma-gray.svg")} alt="Muhibah Angklung" />
            <Image className={`${cls} hidden dark:block`} width={165} height={0} src={require("dizeto/assets/images/client/ma-white.svg")} alt="Muhibah Angklung" />
          </a>
          <a href="https://www.instagram.com/rumahbatikwijaya/?hl=id" target="_blank" rel="noopener noreferrer">
            <Image className={`${cls} dark:hidden`} width={387.64} height={0} src={require("dizeto/assets/images/client/rbw-gray.svg")} alt="Rumah Batik Wijaya" />
            <Image className={`${cls} hidden dark:block`} width={387.64} height={0} src={require("dizeto/assets/images/client/rbw-white.svg")} alt="Rumah Batik Wijaya" />
          </a>
          <a href="https://irmajabar.com/" target="_blank" rel="noopener noreferrer">
            <Image className={cls} width={123} height={0} src={require("dizeto/assets/images/client/irma.png")} alt="Ikatan Remaja Masjid Jawa Barat" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-x-10 pt-5">
          <a href="https://shopee.co.id/topnapurnama?categoryId=100629&entryPoint=ShopByPDP&itemId=15208206609" target="_blank" rel="noopener noreferrer">
            <Image className={cls} width={299} height={0} src={require("dizeto/assets/images/client/kp.png")} alt="Kopi Purnama" />
          </a>
          <a href="https://gofood.link/a/DVoCLZN" target="_blank" rel="noopener noreferrer">
            <Image className={`${cls} dark:hidden`} width={61.27} height={0} src={require("dizeto/assets/images/client/lc-gray.svg")} alt="Lentera Coffee" />
            <Image className={`${cls} hidden dark:block`} width={61.27} height={0} src={require("dizeto/assets/images/client/lc-white.svg")} alt="Lentera Coffee" />
          </a>
          <a href="https://www.youtube.com/@vittosafiy748" target="_blank" rel="noopener noreferrer">
            <Image className={cls} width={124.33} height={0} src={require("dizeto/assets/images/client/sk.png")} alt="Safiy Kitchen" />
          </a>
          <a href="https://pesantrentahfidzashrmadani.wordpress.com/" target="_blank" rel="noopener noreferrer">
            <Image className={cls} width={112} height={0} src={require("dizeto/assets/images/client/aa.png")} alt="Al-'Ashr Al-Madani" />
          </a>
        </div>
      </div>
    </section>
  );
}
