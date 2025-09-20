"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

export default function App() {
  React.useEffect(() => {
    const updateProgressBar = (progress) => {
      const fill = document.querySelector(
        ".custom-swiper .swiper-pagination-progressbar-fill"
      );
      if (fill) {
        const min = 0.1;
        const value = Math.max(progress, min);
        fill.style.transform = `scaleX(${value})`;
        fill.style.transformOrigin = "left";
      }
    };

    const observer = new MutationObserver(() => {
      const swiperEl = document.querySelector(".custom-swiper .swiper");
      if (swiperEl && swiperEl.swiper) {
        swiperEl.swiper.on("progress", updateProgressBar);

        updateProgressBar(swiperEl.swiper.progress);
        observer.disconnect();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex mt-4 flex-col md:flex-row  ">
      <div className="flex w-full md:min-w-[40%] flex-col gap-9 h-full ">
        <div className="relative">
          <Image
            src="/vectors/home/monthlyFavorites/platform.png"
            alt="Platform"
            width={400}
            height={100}
            className="!w-[90%] "
          />
          <div className="absolute -top-1 left-15  h-full flex items-center justify-center gap-6">
            <Image
              src="/vectors/home/monthlyFavorites/youtubeLogo.png"
              alt="YouTube Logo"
              width={100}
              height={80}
            />
            <Image
              src="/vectors/home/monthlyFavorites/spotifyLogo.png"
              alt="Spotify Logo"
              width={100}
              height={80}
            />
          </div>
        </div>
        <h2 className="text-4xl text-center md:text-left mt-6 md:ml-12 font-bold ">
          AYIN <br /> FAVORİLERİ
        </h2>
      </div>
      <div className="w-full md:max-w-[60%] ps-10 md:ps-0 py-5 md:py-10 md:pt-18 trends-parent ">
        <Swiper
          slidesPerView={2.5}
          spaceBetween={40}
          pagination={{ type: "progressbar" }}
          modules={[Pagination]}
          className="custom-swiper"
        >
          <SwiperSlide>
            <div className="bg-[#222] flex-col md:flex-row text-white flex w-[270px] h-[380px] md:w-[274px] md:h-[264px] relative gap-8 md:gap-0 mt-5 md:mt-0">
              <div className="relative justify-center items-center md:justify-normal md:items-baseline flex flex-col mt-8 md:mt-6 min-w-[160px]   md:min-w-[100px] h-full">
                <Image
                  src="/images/home/monthlyFavorites/fav-1/half-cover-picture.png"
                  alt="half-cover-picture"
                  width={92}
                  height={184}
                  className=" object-cover rounded-[8px] absolute left-0 top-0 z-10 hidden md:block"
                />

                <Image
                  src="/vectors/home/monthlyFavorites/half-play-btn.png"
                  alt="play-btn"
                  width={48}
                  height={48}
                  className="absolute left-[-18px] top-[80px] z-20 object-contain h-14 hidden md:block"
                />
                <Image
                  src="/images/home/monthlyFavorites/fav-1/cover-picture.png"
                  alt="cover-picture"
                  width={160}
                  height={160}
                  style={{
                    transform: "rotate(-9.48deg)",
                  }}
                  className="md:hidden object-cover rounded-lg"
                />

                <Image
                  src="/vectors/home/monthlyFavorites/play-btn.png"
                  alt="play-btn"
                  width={49}
                  height={49}
                  className="absolute top-[55px] z-20 object-contain h-14 md:hidden "
                />
              </div>

              <div className=" flex flex-col justify-start md:justify-center items-center h-full">
                <span className="bg-[#323232] px-3 rounded-full  inline-flex items-center mb-2 text-[16px]">
                  <span className=" mr-1">Top 10</span>
                  <span className="font-bold ">(2.Sıra)</span>
                </span>
                <div
                  className="mt-2 flex flex-row md:flex-col text-[20px]
"
                >
                  <span className=" md:leading-[0.9]">50 CENT</span>
                  <span className="md:hidden mx-1">-</span>
                  <div className=" text-center font-bold  md:leading-[0.9]">
                    CURTIS
                  </div>
                </div>
              </div>
              <Image
                src="/vectors/home/monthlyFavorites/fav-1/yellow-vector.png"
                alt="yellow-vector"
                width={274}
                height={47}
                className="absolute left-0 bottom-[-22px] z-30"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#222] flex-col md:flex-row text-white flex w-[270px] h-[380px] md:w-[274px] md:h-[264px] relative gap-8 md:gap-0 mt-5 md:mt-0">
              <div className="relative justify-center items-center md:justify-normal md:items-baseline flex flex-col mt-8 md:mt-6 min-w-[160px]   md:min-w-[100px] h-full">
                <Image
                  src="/images/home/monthlyFavorites/fav-2/half-cover-picture.png"
                  alt="half-cover-picture"
                  width={92}
                  height={184}
                  className="object-cover rounded-lg absolute left-0 top-0 z-10 hidden md:block"
                />

                <Image
                  src="/vectors/home/monthlyFavorites/half-play-btn.png"
                  alt="play-btn"
                  width={48}
                  height={48}
                  className="absolute left-[-18px] top-[80px] z-20 object-contain h-14 hidden md:block"
                />
                <Image
                  src="/images/home/monthlyFavorites/fav-2/cover-picture.png"
                  alt="cover-picture"
                  width={160}
                  height={160}
                  style={{
                    transform: "rotate(-9.48deg)",
                  }}
                  className="md:hidden object-cover rounded-lg"
                />

                <Image
                  src="/vectors/home/monthlyFavorites/play-btn.png"
                  alt="play-btn"
                  width={49}
                  height={49}
                  className="absolute top-[55px] z-20 object-contain h-14 md:hidden "
                />
              </div>

              <div className=" flex flex-col justify-start md:justify-center items-center h-full">
                <span className="bg-[#323232] px-3 rounded-full  inline-flex items-center mb-2 text-[16px]">
                  <span className=" mr-1">Top 10</span>
                  <span className="font-bold ">(3.Sıra)</span>
                </span>
                <div className="mt-2 flex flex-row md:flex-col text-[20px]">
                  <span className=" md:leading-[0.9]">SNOPP DOGG </span>
                  <span className="md:hidden mx-1">-</span>
                  <div className=" text-center font-bold  md:leading-[0.9]">
                    ALGORITHM
                  </div>
                </div>
              </div>
              <Image
                src="/vectors/home/monthlyFavorites/fav-2/yellow-vector.png"
                alt="yellow-vector"
                width={274}
                height={47}
                className="absolute left-0 bottom-[-22px] z-30"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#222] flex-col md:flex-row text-white flex w-[270px] h-[380px] md:w-[274px] md:h-[264px] relative gap-8 md:gap-0 mt-5 md:mt-0">
              <div className="relative justify-center items-center md:justify-normal md:items-baseline flex flex-col mt-8 md:mt-6 min-w-[160px]   md:min-w-[100px] h-full">
                <Image
                  src="/images/home/monthlyFavorites/fav-3/half-cover-picture.png"
                  alt="half-cover-picture"
                  width={92}
                  height={184}
                  className="object-cover rounded-lg absolute left-0 top-0 z-10 hidden md:block"
                />

                <Image
                  src="/vectors/home/monthlyFavorites/half-play-btn.png"
                  alt="play-btn"
                  width={48}
                  height={48}
                  className="absolute left-[-18px] top-[80px] z-20 object-contain h-14 hidden md:block"
                />
                <Image
                  src="/images/home/monthlyFavorites/fav-3/cover-picture.png"
                  alt="cover-picture"
                  width={160}
                  height={160}
                  style={{
                    transform: "rotate(-9.48deg)",
                  }}
                  className="object-cover rounded-lg md:hidden"
                />

                <Image
                  src="/vectors/home/monthlyFavorites/play-btn.png"
                  alt="play-btn"
                  width={49}
                  height={49}
                  className="object-contain h-14 md:hidden absolute top-[55px] z-20 "
                />
              </div>

              <div className=" flex flex-col justify-start md:justify-center items-center h-full">
                <span className="bg-[#323232] px-3 rounded-full  inline-flex items-center mb-2 text-[16px]">
                  <span className=" mr-1">Top 10</span>
                  <span className="font-bold ">(1.Sıra)</span>
                </span>
                <div
                  className="mt-2 flex flex-row md:flex-col text-[20px]
"
                >
                  <span className=" md:leading-[0.9]">CEZA</span>
                  <span className="md:hidden mx-1">-</span>
                  <div className=" text-center font-bold  md:leading-[0.9]">
                    RÜZGAR
                  </div>
                </div>
              </div>
              <Image
                src="/vectors/home/monthlyFavorites/fav-3/yellow-vector.png"
                alt="yellow-vector"
                width={274}
                height={47}
                className="absolute left-0 bottom-[-22px] z-30"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
