import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const brands = [
  { name: 'Apple', logo: 'https://purepng.com/public/uploads/large/purepng.com-apple-logologobrand-logoiconslogos-251519938788qhgdl.png' },
  { name: 'MSI', logo: 'https://logowik.com/content/uploads/images/msi-new-20223710.jpg' },
  { name: 'ASUS', logo: 'https://static.cdnlogo.com/logos/a/92/asus.png' },
  { name: 'Dell', logo: 'https://www.pngall.com/wp-content/uploads/13/Dell-Logo.png' },
  { name: 'HP', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqJUAqZX7gBRJsMprvMyUBfjD6jaL34zasEA&s' },
  { name: 'Lenovo', logo: 'https://static.vecteezy.com/system/resources/previews/020/927/282/non_2x/lenovo-logo-brand-phone-symbol-name-black-design-china-mobile-illustration-free-vector.jpg' },
  { name: 'Acer', logo: 'https://static.vecteezy.com/system/resources/thumbnails/019/766/419/small/acer-logo-acer-icon-transparent-free-png.png' },
  { name: 'Fantech', logo: 'https://www.fantech.com.np/wp-content/uploads/2024/10/Untitled-2.png' },
];

const Scroller = () => {
  const settings = {
    infinite: true,
    speed: 5000,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    arrows: false,
    pauseOnHover: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 6 } },
      { breakpoint: 768, settings: { slidesToShow: 4 } },
      { breakpoint: 480, settings: { slidesToShow: 3 } }
    ]
  };

  return (
    <div className="w-full py-6">
      <Slider {...settings} className="flex items-center">
        {brands.map((brand, index) => (
          <div key={index} className="flex justify-center">
            <img src={brand.logo} alt={brand.name} className="h-16 w-full object-contain md:h-24 grayscale hover:grayscale-0 transition duration-300" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Scroller;
