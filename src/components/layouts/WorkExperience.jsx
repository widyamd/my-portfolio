import React from "react";
import bdt from '../../assets/bdt.jpg';
import dm from '../../assets/dm.png';
import dataquest from '../../assets/dataquest.png';
import ish from '../../assets/ish.jpg';

function WorkExperience() {
  return (
    <div className="container md:mx-auto pt-20">
      <section class="relative min-h-screen flex flex-col justify-center overflow-hidden antialiased">
        <div class="w-full max-w-6xl mx-auto px-4 md:px-6">
          <div class="flex flex-col justify-center divide-slate-200 [&>*]:py-16">
            <h2 className="text-2xl text-gray-600 text-center">
              My Work Experience
            </h2>

            <div class="w-full max-w-3xl mx-auto">
              <div class="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                <div class="relative">
                  <div class="md:flex items-center md:space-x-4 mb-3">
                    <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                        <img className="" src={bdt} alt="Profile Picture" />
                      
                      </div>
                      <time class="text-sm font-medium text-indigo-500 md:w-28">
                        September 2018 - May 2022
                      </time>
                    </div>
                    <div class="text-slate-500 ml-14">
                      <span class="text-slate-900 font-bold">
                        PT. Bandung Digital Teknologi
                      </span>{" "}
                      Frontend Developer
                    </div>
                  </div>
                  <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    In the last three years, I ve contributed to web projects
                    alongside a skilled team, gaining valuable web development
                    experience. Our recent work includes developing stock market
                    applications, promotional landing pages, and banking finance
                    solutions.
                  </div>
                </div>

                <div class="relative">
                  <div class="md:flex items-center md:space-x-4 mb-3">
                    <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                      <img className="" src={dm} alt="Profile Picture" />
                      </div>
                      <time class="text-sm font-medium text-indigo-500 md:w-28">
                        November 2017 - Juli 2018
                      </time>
                    </div>
                    <div class="text-slate-500 ml-14">
                      <span class="text-slate-900 font-bold">
                        PT. Dhamar Mulia
                      </span>{" "}
                      Graphic & Web Designer{" "}
                    </div>
                  </div>
                  <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    For one year I worked as a graphic & web designer, web
                    design projects were made for company profiles, while
                    graphic designs were made for school applications, social
                    media, motion graphics for e-learning.
                  </div>
                </div>

                <div class="relative">
                  <div class="md:flex items-center md:space-x-4 mb-3">
                    <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                      <img className="" src={dataquest} alt="Profile Picture" />

                      </div>
                      <time class="text-sm font-medium text-indigo-500 md:w-28">
                        2017
                      </time>
                    </div>
                    <div class="text-slate-500 ml-14">
                      <span class="text-slate-900 font-bold">
                        PT. Dataquest Leverage Indonesia
                      </span>{" "}
                      Graphic Designer
                    </div>
                  </div>
                  <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    I make web design assets. and graphic design needs such as
                    banners, advertisements for social media, and creating
                    certificates for seminar participants that are regularly
                    held at Dataquest.
                  </div>
                </div>

                <div class="relative">
                  <div class="md:flex items-center md:space-x-4 mb-3">
                    <div class="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                      <div class="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                      <img className="" src={ish} alt="Profile Picture" />

                      </div>
                      <time class="text-sm font-medium text-indigo-500 md:w-28">
                        2016
                      </time>
                    </div>
                    <div class="text-slate-500 ml-14">
                      <span class="text-slate-900 font-bold">
                        PT. Infomedia Solusi Humanika
                      </span>{" "}
                      Call Center
                    </div>
                  </div>
                  <div class="bg-white p-4 rounded border border-slate-200 text-slate-500 shadow ml-14 md:ml-44">
                    Working part time as a call center 108 provides information
                    on telephone numbers registered with Telkom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default WorkExperience;
