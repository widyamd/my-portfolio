import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";

function Skills() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 5,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 1024, // Tablet
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 600, // Mobile
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480, // Small Mobile
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
      

  return (
    <div className="md:container md:mx-auto py-10 px-4">
      <h2 className="text-2xl font-bold text-center mb-6">tools which i use on daily basis</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {/* Skill 1 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-red-100 rounded-full shadow-lg">
              <FaHtml5 className="text-6xl text-red-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">HTML5</p>
          </div>

          {/* Skill 2 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-blue-100 rounded-full shadow-lg">
              <FaCss3Alt className="text-6xl text-blue-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">CSS3</p>
          </div>

          {/* Skill 3 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-yellow-100 rounded-full shadow-lg">
              <FaJs className="text-6xl text-yellow-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">JavaScript</p>
          </div>

          {/* Skill 4 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-blue-100 rounded-full shadow-lg">
              <FaReact className="text-6xl text-blue-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">React</p>
          </div>

          {/* Skill 5 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-green-100 rounded-full shadow-lg">
              <FaNodeJs className="text-6xl text-green-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">Node.js</p>
          </div>

          {/* Skill 6 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-24 h-24 mx-auto bg-purple-100 rounded-full shadow-lg">
              <BsBootstrapFill className="text-6xl text-purple-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">Bootstrap</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
