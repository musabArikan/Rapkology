"use client";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full text-white flex flex-col items-start pt-3 pb-12 md:py-12 space-y-8">
      <h2 className="font-bold text-[25px] md:text-3xl leading-tight">
        GELİŞMELERDEN İLK SEN HABERDAR OL!
      </h2>

      <div className="flex w-full items-center border-b border-[#3B3B3B] pb-3">
        <span className="text-white font-bold text-sm ">Email</span>
        <input
          type="email"
          placeholder=""
          className="flex-1 bg-transparent outline-none px-3 text-white placeholder-transparent"
        />
        <button className=" text-sm flex items-center gap-2 font-bold  text-[#F0E74D] px-4 py-1">
          GÖNDER
          <span>→</span>
        </button>
      </div>

      <div className="flex gap-5 items-center">
        <a href="#">
          <Image
            src="/icons/footer/facebook-icon.png"
            alt="Facebook"
            width={24}
            height={24}
            className="object-none"
          />
        </a>
        <a href="#">
          <Image
            src="/icons/footer/twitter-icon.png"
            alt="Twitter"
            width={24}
            height={24}
          />
        </a>
        <a href="#">
          <Image
            src="/icons/footer/discord-icon.png"
            alt="Discord"
            width={24}
            height={24}
          />
        </a>
        <a href="#">
          <Image
            src="/icons/footer/spotify-icon.png"
            alt="Spotify"
            width={24}
            height={24}
          />
        </a>
        <a href="#">
          <Image
            src="/icons/footer/youtube-icon.png"
            alt="YouTube"
            width={24}
            height={24}
          />
        </a>
      </div>

      <div className="flex flex-wrap gap-6 text-[14px] opacity-90">
        <a href="#">HABERLER</a>
        <a href="#">ETKİNLİKLER</a>

        <a href="#">MÜZİKLER</a>
        <a href="#">VİDEOLAR</a>
        <a href="#">İLETİŞİM</a>
      </div>

      <p className="text-[#5C5C5C] text-sm">
        © RAPKOLOGY All Rights Are Reserved 2022.
      </p>
    </footer>
  );
};

export default Footer;
