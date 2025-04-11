import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
// import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const videoTestimonials = [
  {
    url: "https://www.youtube.com/embed/y1BCpXwipok",
    name: "Raymond Dailey",
    title: "CEO-Papyrus Document Design UK"
  },
  {
    url: "https://www.youtube.com/embed/sDWKZKkh-xE",
    name: "Alec Grant",
    title: "Well Being Advisor And Mentor UK"
  },
];

function testimonialSlider() {
  const sliderRef = useRef(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const handlePlay = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const handlePauseOrEnd = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows: false
  };

  return (
    <section id="about" className="about py-10 bg-gray-900 text-white">
      <div className="container px-4">
        <div className="row no-gutters items-center">
          
          {/* Video Testimonial Slider */}
          <div className="col-lg-6 mb-8 md:mb-0 px-4">
            <Slider {...sliderSettings} ref={sliderRef}>
              {videoTestimonials.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                    <ReactPlayer
                      url={item.url}
                      className="absolute top-0 left-0"
                      width="100%"
                      height="100%"
                      controls
                      onPlay={handlePlay}
                      onPause={handlePauseOrEnd}
                      onEnded={handlePauseOrEnd}
                      config={{
                        youtube: {
                          playerVars: {
                            cc_load_policy: 0 // Disable subtitles
                          }
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-center text-lg font-semibold text-green-400 mt-4">{item.name}</h3>
                  <p className="text-center text-sm text-gray-300">{item.title}</p>
                </div>
              ))}
            </Slider>
          </div>

          {/* Text Section */}
          <div className="col-lg-6 px-4 pt-12">
            <div className="section-titles mb-4 mt-10 p-3">
              <h5 className="text-green-400 text-lg font-medium">What Our Clients Say About Us</h5>
            </div>
            <div className="icon-box">
            <div className="icon-box">
              <h4 className="text-3xl font-bold leading-tight mb-4">
                The Impact of Our VAs — In Our Clients’ Words
                <span className="text-white">QUICK AS A CLICK</span>
              </h4>
</div>

              <p className="description text-gray-300 mb-6">
                At ConnectMyVA, we don’t just promise support — we deliver results that speak for themselves. From CEOs to wellness advisors, our clients trust us to provide reliable, highly-trained virtual assistants who take the pressure off their plates and help their businesses thrive. But don’t just take our word for it — hear it from them.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default testimonialSlider;
