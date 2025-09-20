"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Header() {
  const slides = [
    {
      image: "/images/home/header/header-img-1.png",
      title: "DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    },
    {
      image: "/images/home/header/header-img-2.png",
      title: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    },
    {
      image: "/images/home/header/header-img-1.png",
      title: "DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    },
    {
      image: "/images/home/header/header-img-2.png",
      title: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    },
    {
      image: "/images/home/header/header-img-1.png",
      title: "DÜNYA RAP TRENDLERİNİ KONUŞUYORUZ ",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    },
    {
      image: "/images/home/header/header-img-2.png",
      title: "TÜRKÇE RAP VE DÜNYA MÜZİK HABERLERİNİ TAKİP ET",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ",
    },
  ];

  return (
    <>
      <header className="hidden md:block w-full relative overflow-hidden h-[45vw] max-h-[810px] min-h-[320px] mt-[-77px] opacity-100">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          loop
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          className="w-full h-full"
        >
          {slides.map((slide, index) => {
            const isHeaderImg2 = slide.image.includes("header-img-2");
            const textColor = isHeaderImg2 ? "text-white" : "text-black";

            return (
              <SwiperSlide key={index}>
                {isHeaderImg2 ? (
                  <Image
                    src={slide.image}
                    alt={`Header görseli ${index + 1}`}
                    width={1146}
                    height={703}
                    style={{ objectFit: "cover" }}
                    priority
                  />
                ) : (
                  <Image
                    src={slide.image}
                    alt={`Header görseli ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    priority
                  />
                )}

                <div className="absolute top-1/2 right-18 lg:right-30 z-30 -translate-y-1/2 flex flex-col w-[300px] lg:w-[450px] max-w-full bg-transparent">
                  <h1
                    className={`font-bold text-[25px]  lg:text-[43.1px] leading-[1.1] tracking-[-0.02em] mb-4 ${textColor}`}
                  >
                    {slide.title}
                  </h1>
                  <p
                    className={`font-normal text-[12px] lg:text-[16px] leading-[1.2] tracking-[0.015em] mb-6 ${textColor}`}
                  >
                    {slide.description}
                  </p>
                  <div className="relative w-full flex justify-start">
                    <Image
                      src="/images/home/header/header-button.png"
                      alt="Button Background"
                      width={136}
                      height={38}
                      className=" cursor-pointer w-[110px] h-[30px] lg:w-[136px] lg:h-[38px]"
                      priority
                    />
                    <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-[12px] lg:text-[14px] leading-none tracking-normal text-center pointer-events-none pb-2 w-[110px] lg:w-[136px]">
                      Devamını Oku
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="custom-prev absolute left-8 lg:left-13 top-1/2 z-40 -translate-y-1/2 cursor-pointer">
          <Image
            src="/icons/home/header/slider-left-btn.png"
            alt="Before"
            width={24}
            height={24}
          />
        </div>
        <div className="custom-next absolute right-8 lg:right-13 top-1/2 z-40 -translate-y-1/2 cursor-pointer">
          <Image
            src="/icons/home/header/slider-right-btn.png"
            alt="After"
            width={24}
            height={24}
          />
        </div>

        <Image
          src="/vectors/home/header/metal-texture-with-dust-scratches-cracks-textured-backgrounds.png"
          alt="Metal texture boya efekti"
          fill
          style={{
            objectFit: "cover",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 20,
            pointerEvents: "none",
            mixBlendMode: "multiply",
          }}
          priority
        />

        <Image
          src="/vectors/home/header/dark-vector.png"
          alt="Dalga vektörü"
          width={1920}
          height={543}
          style={{
            position: "absolute",
            left: 0,
            bottom: -20,
            width: "100%",
            height: "auto",
            zIndex: 10,
            pointerEvents: "none",
          }}
          priority
        />
      </header>

      {/* Mobil Hero */}
      <div className="block md:hidden w-full bg-black text-white">
        <div className="max-w-md mx-auto px-6 pt-6  flex flex-col items-center text-center">
          <h1 className="font-bold text-[25px] leading-tight tracking-tight uppercase">
            TÜRKÇE RAP VE
            <br />
            DÜNYA MÜZİK
            <br />
            HABERLERİNİ TAKİP ET
          </h1>

          <p className="mt-2  text-[14px] leading-tight  max-w-[287px] ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="w-full flex justify-center px-0  mt-[20px]">
          <div className="relative w-full  h-[420px] ">
            <div className="relative w-full flex justify-center z-5">
              <Image
                src="/images/home/header/header-button.png"
                alt="Button Background"
                width={136}
                height={38}
                className=" cursor-pointer"
                priority
              />
              <span className="absolute inset-0 flex items-center justify-center text-black font-bold text-[14px] leading-none tracking-normal text-center pointer-events-none pb-2 ">
                Devamını Oku
              </span>
            </div>
            <Image
              src="/images/home/header/header-img-2.png"
              alt="Header Mobil Görsel"
              fill
              style={{ objectFit: "cover", objectPosition: "23% center" }}
              priority
            />

            <Image
              src="/vectors/home/header/metal-texture-with-dust-scratches-cracks-textured-backgrounds.png"
              alt="metal texture"
              fill
              style={{
                objectFit: "cover",
                zIndex: 30,
                pointerEvents: "none",
                mixBlendMode: "multiply",
              }}
              priority
            />

            <Image
              src="/vectors/home/header/dark-vector.png"
              alt="dark vector"
              width={1920}
              height={543}
              style={{
                position: "absolute",
                left: 0,
                bottom: -8,
                width: "100%",
                height: "auto",
                zIndex: 10,
                pointerEvents: "none",
              }}
              className="min-h-25 object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </>
  );
}
