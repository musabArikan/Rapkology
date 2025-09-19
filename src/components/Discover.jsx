"use client";

import Image from "next/image";
import React from "react";
import discoverDataRaw from "../data/discoverData.json";
import Footer from "./Footer";

const posts = discoverDataRaw
  .filter((item) => item.attributes && item.attributes.title)
  .map((item) => ({
    id: item._id || item.id,
    title: item.attributes.title,
    desc: item.attributes.desc,
    img: item.attributes.img,
    date: item.attributes.date || "22.09.2022",
  }));

const categories = [
  "Türk Rap",
  "Yabancı Rap",
  "Rap Haberleri",
  "Haftanın Klipleri",
  "Ayın Klipleri",
  "Rap Sohbetleri",
  "Rap Müsabakaları",
];

const Discover = () => {
  return (
    <div className="flex flex-col md:flex-row  mt-20  text-white min-h-screen gap-0 md:gap-26">
      <div className="w-full md:w-[60%] pr-0 md:pr-4 p-4 space-y-6 ps-0 flex flex-col gap-4 md:gap-14">
        <div className="flex items-center justify-between mb-6 mr-3 ">
          <h1 className="text-4xl md:text-5xl font-bold flex items-start gap-2">
            KEŞFET
            <Image
              src="/icons/discover/compass-icon.png"
              alt="Compass Icon"
              width={48}
              height={48}
              className="inline-block w-[42px] h-[42px] md:w-[48px] md:h-[48px]"
            />
          </h1>
          <div className="flex gap-3 items-center">
            <Image
              src="/icons/discover/search-icon.png"
              alt="Search Icon"
              width={23}
              height={19}
              className="w-[19px] h-[19px] md:w-[23px] md:h-[20px]"
            />
            <Image
              src="/icons/discover/3-sticks-icon.png"
              alt="3 Sticks Icon"
              width={23}
              height={19}
              className="w-[19px] h-[19px] md:w-[23px] md:h-[20px]"
            />
            <Image
              src="/icons/discover/6-sticks-icon.png"
              alt="6 Sticks Icon"
              width={23}
              height={19}
              className="w-[19px] h-[19px] md:w-[23px] md:h-[20px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:hidden overflow-x-auto no-scrollbar space-x-3 py-3">
          <h3 className="text-2xl font-bold text-nowrap mb-2">
            NE GÖRMEK İSTERSİN?
          </h3>
          <div className="flex md:hidden overflow-x-auto no-scrollbar space-x-5 py-3">
            {categories.map((cat, idx) => (
              <button
                key={cat}
                className={
                  idx === 1
                    ? "whitespace-nowrap px-4 py-1 text-[16px] font-bold bg-[#F0E74D] text-black"
                    : "whitespace-nowrap px-4 py-1 border border-white text-[16px] transition"
                }
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-12 md:gap-0 space-y-6">
          {(typeof window !== "undefined" && window.innerWidth < 768
            ? posts.slice(0, 4)
            : posts.slice(0, 5)
          ).map((post) => (
            <div
              key={post.id}
              className=" flex flex-col md:flex-row overflow-hidden "
            >
              <div className="flex flex-col gap-6 justify-center items-center md:items-start md:justify-normal ">
                <Image
                  src={post.img}
                  alt={post.title}
                  width={301}
                  height={196}
                  className=" object-cover w-full md:w-auto"
                />
                <p className="mb-3 md:mb-0   text-start w-full text-[16px] text-[#3B3B3B]">
                  {post.date}
                </p>
              </div>
              <div className="p-0 md:p-4 md:  pt-0 space-y-2 max-w-[400px]">
                <div className="flex items-center gap-2 text-[16px] font-normal">
                  <p>{post.title}</p>
                </div>
                <p className="text-[20px] md:text-[25px] font-bold mt-4 mb-6 text-white leading-[1.1]">
                  {post.desc}
                </p>
                <hr className="w-full text-[#3B3B3B]" />
                <button className="text-sm opacity-90  mt-3.5">
                  Daha Fazla Oku
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className=" flex flex-col w-full md:w-[30%] py-4  space-y-6 flex-1">
        <div className="hidden md:flex flex-wrap gap-2">
          <h3 className="text-3xl font-bold text-nowrap mb-2">
            NE GÖRMEK İSTERSİN?
          </h3>
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={
                idx === 1
                  ? "px-4 py-1  text-[16px] font-bold bg-[#F0E74D] text-black"
                  : "px-4 py-1 border border-white text-[16px] transition"
              }
            >
              {cat}
            </button>
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Discover;
