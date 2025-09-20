"use client";
import React from "react";
import Image from "next/image";
import { FaRegHeart, FaRegStar, FaCaretDown } from "react-icons/fa6";

const TwitchHero = () => {
  return (
    <section className="relative w-full h-[600px] overflow-hidden">
      <div className="absolute inset-0 z-0 flex justify-center items-end md:items-baseline pt-20">
        <Image
          src="/images/home/twitch-hero/crowd-bg.png"
          alt="Concert Background"
          width={1000}
          height={400}
          className="!h-[400px]  object-cover  opacity-50 xl:relative xl:top[135px]"
          priority
        />
      </div>

      <div
        className="relative z-10 flex flex-col items-center justify-center text-center py-16 md:py-20 gap-6"
        style={{ transform: "rotate(-3.7deg)" }}
      >
        <div className="flex justify-center md:justify-normal flex-row items-center gap-3 w-full md:w-auto ">
          <Image
            src="/images/home/twitch-hero/twitch-logo.png"
            alt="Twitch Logo"
            width={100}
            height={60}
            className="rotate-[3deg] md:w-[158px] md:h-[98px] object-cover"
          />
          <div className="border-l border-[#3B3B3B] pl-4">
            <h2 className="text-2xl md:text-5xl font-light leading-[1] text-white text-start">
              HER HAFTA <br />
              <span className="font-bold text-[#F0E74D]">CANLIDAYIZ!</span>
            </h2>
            <p className="text-sm font-bold mt-2 w-full text-start ps-2">
              Bizi Takip Edin!
            </p>
          </div>
        </div>

        <div className="flex gap-3 mt-4">
          <button className="flex items-center gap-2 bg-[#864CF6] px-3 md:px-5 md:py-2 rounded-md text-sm md:text-base text-white font-medium hover:bg-[#6d36d9] transition">
            <FaRegHeart /> Takip Et
          </button>
          <button className="flex items-center gap-2 bg-[#222123] px-3 md:px-5 py-2 rounded-md text-sm md:text-base text-white font-medium hover:bg-[#333234] transition">
            <FaRegStar /> Abone Ol <FaCaretDown className="ml-1" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 -left-18 md:left-0 z-20">
        <Image
          src="/images/home/twitch-hero/male.png"
          alt="Male Artist"
          width={419}
          height={437}
          className="object-scale-down lg:object-contain w-[281px] h-[293px] md:w-[419px] md:h-[437px]"
        />
      </div>

      <div className="absolute bottom-0 -right-18 md:right-0 z-20">
        <Image
          src="/images/home/twitch-hero/female.png"
          alt="Female Artist"
          width={303}
          height={530}
          className="object-scale-down lg:object-contain w-[281px] h-[293px] md:w-[419px] md:h-[437px]"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-30">
        <Image
          src="/vectors/home/twitch-hero/dark-vector.png"
          width={1920}
          height={300}
          className="w-full"
          alt="Dark Vector"
        />
      </div>
    </section>
  );
};

export default TwitchHero;
