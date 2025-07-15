import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Slider() {
  const images = [
    "https://www.fiestroevents.com/uploads/24/08/66b21e981eced0608241722949272.png",
    "https://www.mrsfields.com/cdn/shop/articles/shutterstock_2408066691_1.jpg?v=1725556532",
    "https://floweraura-blog-img.s3.ap-south-1.amazonaws.com/Celebrate+Anniversary+travel/cvr.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzZg9yKSUy0oKJsxJZblexdfoMYhwUAtY2yA&s",
    "https://5.imimg.com/data5/SELLER/Default/2022/8/QF/JF/PJ/2713142/retirement-party-decoration-service.JPG",
    "https://www.parents.com/thmb/JlKRSVpphFei1B17UE35pVnV5Fg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/shutterstock_762391612-41aca833e9184016833a754be5e7d5c3.jpg",
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="rounded-xl overflow-hidden shadow-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Event ${index}`}
              className="w-full h-[500px] object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
