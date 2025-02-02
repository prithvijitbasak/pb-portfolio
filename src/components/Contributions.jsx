import "../assets/styles/Contributions.css";
import zangSmp from "../../images/zang-smp.png";
import starseedBakery from "../../images/starseed-bakery.webp";
import spazeFurniture from "../../images/Spaze-Furniture.png";
import scalpEvolution from "../../images/scalp-evolution.jpeg";
import petEvolution from "../../images/pet evolution.jpeg";
import blueCoast from "../../images/blue-coast-management.png";
import rtf from "../../images/road-to-fertility.png";
import bombayHair from "../../images/bombay-hair.png";
import mrwinstons from "../../images/mrwinstons.png";
import belleandjune from "../../images/belle-and-june.svg";
import palmbeach from "../../images/palm-beach-logo.jpg";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Autoplay, Pagination } from "swiper/modules";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Contributions = () => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <section className="pb-contributions-section-wrapper">
        <div className="pb-container">
          <div className="pb-contributions-contents">
            <h2 className="h2-text">Contributions</h2>
            <div className="contributions-slider-wrapper">
              <Slider {...settings}>
                <a
                  className="contributions-slider-card"
                  href="https://zangsmp.com/"
                  target="_blank"
                >
                  <img
                    src={zangSmp}
                    alt="Zang SMP"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://starseedbakery.com/"
                  target="_blank"
                >
                  <img
                    src={starseedBakery}
                    alt="Starseed Bakery"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://spaze.com/"
                  target="_blank"
                >
                  <img
                    src={spazeFurniture}
                    alt="Spaze Furniture"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://bombayhair.com/"
                  target="_blank"
                >
                  <img
                    src={bombayHair}
                    alt="Bombay Hair"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://www.scalpevolution.com/"
                  target="_blank"
                >
                  <img
                    src={scalpEvolution}
                    alt="Scalp Evolution"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://www.petevolution.com/"
                  target="_blank"
                >
                  <img
                    src={petEvolution}
                    alt="Pet Evolution"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://bluecoastmanage.com/"
                  target="_blank"
                >
                  <img
                    src={blueCoast}
                    alt="Blue Coast Property Management"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://roadtofertility.com/"
                  target="_blank"
                >
                  <img
                    src={rtf}
                    alt="Road to fertility"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://www.mrwinstons.com/"
                  target="_blank"
                >
                  <img
                    src={mrwinstons}
                    alt="Mr. Winstons"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://www.belleandjune.com/"
                  target="_blank"
                >
                  <img
                    src={belleandjune}
                    alt="Belle and June"
                    className="organisation-img"
                  />
                </a>

                <a
                  className="contributions-slider-card"
                  href="https://palmbeachhealthworks.com/"
                  target="_blank"
                >
                  <img
                    src={palmbeach}
                    alt="Palm Beach Health Works"
                    className="organisation-img"
                  />
                </a>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contributions;
