import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/css/slider.css"; // your updated drip styles

function SliderComponent() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const slides = [
    {
      title: "The best cleaning company in the country",
      subtitle: "We provide best solutions for a Clean Environment. If you need any help in cleaning or maintenance.",
      btnText: "Request A Quote",
      plan: "Basic",
      bgClass: "slide-bg-1",
    },
    {
      title: "Professional Cleaning Services Provider",
      subtitle: "We provide best solutions for a Clean Environment. If you need any help in cleaning or maintenance.",
      btnText: "Request A Quote",
      plan: "Standard",
      bgClass: "slide-bg-2",
    },
    {
      title: "Quality Presentation & Customer Service are our true values",
      subtitle: "We provide best solutions for a Clean Environment. If you need any help in cleaning or maintenance.",
      btnText: "Request A Quote",
      plan: "Premium",
      bgClass: "slide-bg-3",
    },
  ];

  // ✅ Scroll to contact section with optional plan
  const goToContact = (plan = "") => {
    if (plan) localStorage.setItem("selectedPlan", plan);
    const contactSection = document.getElementById("contact-section");
    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="slider-area">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <div key={idx}>
            <div className={`single-slider-item ${slide.bgClass}`}>
              <div className="slider-content">
                <h1 className="slider-title">{slide.title}</h1>
                <p className="slider-subtitle">{slide.subtitle}</p>
                <button
                  className="cleaning-btn slide-btn"
                  onClick={() => goToContact(slide.plan)}
                >
                  {slide.btnText}
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

// Custom Arrows
function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-next`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-prev`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

export default SliderComponent;
