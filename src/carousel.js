import React, { useEffect, useState } from "react";
import "./styles/carousel.css";

const Carousel = ({ items, groupBy, showDots, effect }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [carouselitems, setCarouselitems] = useState(null);
  const [width, setWidth] = useState(null);
  const [className] = useState(random(8));
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateDimensions, { passive: true });

    // returned function will be called on component unmount
    return () => {
      window.removeEventListener("resize", updateDimensions);
    };
  }, []);

  useEffect(() => {
    setSlideIndex(1);
  }, []);

  useEffect(() => {
    if (screenWidth > 992 && groupBy && groupBy > 1) {
      setCarouselitems(items.chunk(groupBy));
      setWidth(100 / groupBy);
    } else {
      setCarouselitems(items);
    }
  }, [groupBy, screenWidth]);

  useEffect(() => {
    if (slideIndex) {
      showSlides(slideIndex);
    }
  }, [slideIndex]);

  const updateDimensions = () => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
  };

  const plusSlides = n => {
    setSlideIndex(slideIndex + n);
  };

  const currentSlide = n => {
    setSlideIndex(n);
  };

  const showSlides = n => {
    console.log(n);
    var i;
    var slides = document.getElementsByClassName(className);
    var dots = document.getElementsByClassName(className + "dot");

    if (n > slides.length) {
      setSlideIndex(1);
      return;
    }
    if (n < 1) {
      setSlideIndex(slides.length);
      return;
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    if (showDots) {
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }

      dots[slideIndex - 1].className += " active";
    }

    slides[slideIndex - 1].style.display = "block";
  };

  return (
    <>
      <div className="slideshowContainer">
        {carouselitems &&
          carouselitems.map((item, i) => {
            return (
              <div
                key={i}
                className={`${className} ${effect}`}
                style={{ display: "none" }}
              >
                {Array.isArray(item) ? (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between"
                    }}
                  >
                    {item.map(i => {
                      return (
                        <img
                          src={i.src || i.image || i.img}
                          style={{ width: width + "%" }}
                        />
                      );
                    })}
                  </div>
                ) : (
                  <img
                    src={item.src || item.image || item.img}
                    style={{ width: "100%" }}
                  />
                )}
              </div>
            );
          })}
        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>

      {showDots && (
        <div style={{ textAlign: "center" }}>
          {items.map((item, i) => {
            return (
              <span
                key={i}
                className={className + "dot"}
                onClick={() => currentSlide(i)}
              ></span>
            );
          })}
        </div>
      )}
    </>
  );
};

function random(L) {
  var s = "";
  var randomchar = function() {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  };
  while (s.length < L) s += randomchar();
  return s;
}

Array.prototype.chunk = function(n) {
  if (!this.length) {
    return [];
  }
  return [this.slice(0, n)].concat(this.slice(n).chunk(n));
};

export default Carousel;
