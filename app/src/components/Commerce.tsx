"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const logos = [
  { name: "WooCommerce", src: "/woocommerce.png" },
  { name: "Shopify", src: "/shopify.png" },
  { name: "Magento", src: "/magento.png" },
  { name: "PrestaShop", src: "/prestashop.png" },
  { name: "Wix", src: "/wix.png" },
  { name: "BigCommerce", src: "/bigcommerce.png" },
];

export default function EcommerceLogosCarousel() {
  return (
<div
  className="w-full py-8 bg-gradient-to-r from-gray-800 hover:brightness-110 transition duration-300"
  style={{ "--tw-gradient-to": "lab(83 -0.18 -7.2)" } as React.CSSProperties}
>
      <Swiper
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={1000}
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
        className="ecommerce-logos-carousel px-4"
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={60}
                className="object-contain filter grayscale brightness-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition duration-300"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
