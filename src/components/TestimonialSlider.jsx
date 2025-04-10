import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
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

function testimonialSlider() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return (
    <section id="about" className="about py-10 bg-gray-900 text-white">
      <div className="container px-4">
        <div className="row no-gutters items-center">
          
          {/* Video Testimonial Slider */}
          <div className="col-lg-6 mb-8 md:mb-0 px-4">
            <Slider {...sliderSettings}>
              {videoTestimonials.map((item, index) => (
                <div key={index} className="p-4">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
                    <ReactPlayer
                      url={item.url}
                      className="absolute top-0 left-0"
                      width="100%"
                      height="100%"
                      controls
                      config={{
                        youtube: {
                          playerVars: {
                            cc_load_policy: 0 // 👈 disable subtitles
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
          <div className="col-lg-6 px-4">
            <div className="section-titles mb-4">
              <h5 className="text-green-400 text-lg font-medium">What Our Clients Say About Us</h5>
            </div>
            <div className="icon-box">
              <h4 className="text-3xl font-bold leading-tight mb-4">
                The Impact of Our VAs — In Our Clients’ Words
                <span className="text-white">QUICK AS A CLICK</span>
              </h4>
              <p className="description text-gray-300 mb-6">
                At ConnectMyVA, we don’t just promise support — we deliver results that speak for themselves. From CEOs to wellness advisors, our clients trust us to provide reliable, highly-trained virtual assistants who take the pressure off their plates and help their businesses thrive. But don’t just take our word for it — hear it from them.
              </p>
              {/* <Link to="/how" className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded transition duration-300">
                Know More
              </Link> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default testimonialSlider;
