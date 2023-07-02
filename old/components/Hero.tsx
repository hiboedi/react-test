"use client";

import Image from "next/image";
import CustomeButton from "./CustomeButton";

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Booking & sewa mobil dengan mudah & cepat!
        </h1>

        <p className="hero__subtitle">
          Nikmati pengalaman terbaik dengan menyewa mobil pilihan kami.
        </p>

        <CustomeButton
          title="Explore Car"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
