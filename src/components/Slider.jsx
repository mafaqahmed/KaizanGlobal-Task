import React from "react";
import SwiperCore, {
  Navigation,
  Pagination,
  EffectFade,
  Autoplay,
} from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import RoadmapSlide from "./RoadmapSlide";

export default function Slider() {
  SwiperCore.use([Autoplay, Navigation, Pagination]);
  const roadmapData = [
    {
      phase: "1st",
      title: "RISE OF THE META TIGERS",
      desc: "Demonstrate the value of our cause and stability of our project to investors, as well as continue building our strong and inspiringawesome and strong community. Will you be joining us?",
      bullets: [
        "5,555 Meta Tiger NFTs hand-drawn by our high-end artists",
        "200+ unique traits",
        "ERC721A token channeling the latest technology",
      ],
    },
    {
      phase: "2nd",
      title: "NFT COLLECTION RELEASE",
      desc: "Demonstrate the value of our cause and stability of our project to investors, as well as continue building our strong and inspiringawesome and strong community. Will you be joining us?",
      bullets: [
        "5,555 Meta Tiger NFTs hand-drawn by our high-end artists",
        "200+ unique traits",
        "ERC721A token channeling the latest technology",
      ],
    },
    {
      phase: "3rd",
      title: "GIVING BACK TO NATURE",
      desc: "Demonstrate the value of our cause and stability of our project to investors, as well as continue building our strong and inspiringawesome and strong community. Will you be joining us?",
      bullets: [
        "5,555 Meta Tiger NFTs hand-drawn by our high-end artists",
        "200+ unique traits",
        "ERC721A token channeling the latest technology",
      ],
    },
    {
      phase: "4th",
      title: "LEGENDARY REVEAL",
      desc: "Demonstrate the value of our cause and stability of our project to investors, as well as continue building our strong and inspiringawesome and strong community. Will you be joining us?",
      bullets: [
        "5,555 Meta Tiger NFTs hand-drawn by our high-end artists",
        "200+ unique traits",
        "ERC721A token channeling the latest technology",
      ],
    },
    {
      phase: "5th",
      title: "UNLEASH THE MAGIC BERRY SYRUP",
      desc: "Demonstrate the value of our cause and stability of our project to investors, as well as continue building our strong and inspiringawesome and strong community. Will you be joining us?",
      bullets: [
        "5,555 Meta Tiger NFTs hand-drawn by our high-end artists",
        "200+ unique traits",
        "ERC721A token channeling the latest technology",
      ],
    },
    {
      phase: "6th",
      title: "METALAND MADNESS",
      desc: "Demonstrate the value of our cause and stability of our project to investors, as well as continue building our strong and inspiringawesome and strong community. Will you be joining us?",
      bullets: [
        "5,555 Meta Tiger NFTs hand-drawn by our high-end artists",
        "200+ unique traits",
        "ERC721A token channeling the latest technology",
      ],
    },
  ];

  return (
    <>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        breakpoints={{
            640: {
              width: 640,
              slidesPerView: 1,
            },
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 3,
            },
        }}
        slidesPerView={3}
        centeredSlides= {true}
        navigation
        autoplay={{ delay: 3000 }}
      >
        {roadmapData.map((item) => (
          <SwiperSlide className="w-full h-full">
            <RoadmapSlide phase={item.phase} title={item.title} desc={item.desc} bullets={item.bullets}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
