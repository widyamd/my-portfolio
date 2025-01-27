import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsBootstrapFill } from "react-icons/bs";

function Skills() {
    const settings = {
        arrows : false,
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: 6,
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
      <h2 className="text-2xl font-bold text-gray-600 text-center mb-6">Tools which i use on daily basis</h2>
      <div className="slider-container">
        <Slider {...settings}>
          {/* Skill 1 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-auto bg-white rounded-[30px] shadow-xl">
              <FaHtml5 className="text-5xl text-red-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">HTML5</p>
          </div>

          {/* Skill 2 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-auto bg-white rounded-[30px] shadow-xl">
              <FaCss3Alt className="text-5xl text-blue-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">CSS3</p>
          </div>

          {/* Skill 3 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-auto bg-white  rounded-[30px] shadow-xl">
              <FaJs className="text-5xl text-yellow-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">JavaScript</p>
          </div>

          {/* Skill 4 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-auto bg-white  rounded-[30px] shadow-xl">
              <FaReact className="text-5xl text-blue-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">React Js</p>
          </div>

          {/* Skill 5 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-auto bg-white  rounded-[30px] shadow-xl">
              <FaNodeJs className="text-5xl text-green-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">Node.js</p>
          </div>

          {/* Skill 6 */}
          <div className="text-center">
            <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-auto bg-white  rounded-[30px] shadow-xl">
              <BsBootstrapFill className="text-5xl text-purple-500" />
            </div>
            <p className="mt-4 font-medium text-gray-700">Bootstrap</p>
          </div>

           {/* Skill 7 */}
           <div className="text-center">
            <div className="flex items-center justify-center w-[5rem] h-[5rem] mx-auto bg-white  rounded-[30px] shadow-xl">
              <RiTailwindCssFill  className="text-5xl text-cyan-400" />
            </div>
            <p className="mt-4 font-medium text-gray-700">Tailwind</p>
          </div>

          
        </Slider>
      </div>
    </div>
  );
}

export default Skills;
