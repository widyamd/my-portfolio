import React from 'react';
import myprofilpic from '../../assets/profilepic.jpeg';
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

function Profile() {
    return (
        <div className="container md:mx-auto pt-20 max-w-screen-xl bg-primary-background">

            <div role="status" className="space-y-8 md:space-y-0 md:space-x-24 rtl:space-x-reverse md:flex md:items-center">
                <div className="flex items-center justify-center w-full  rounded sm:w-80 dark:bg-gray-700">
                    <div className="max-w-sm p-4 bg-white shadow-xl">
                        <a href="#">
                            <img className="" src={myprofilpic} alt="Profile Picture" />
                        </a>
                        <div className="pt-2">
                            <div className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4'>
                                <div className='flex'>
                                    <h5 className="mb-2 text-md font-bold text-start tracking-tight text-gray-900 dark:text-white">Widya Mustika Dewi</h5>
                                </div>
                                <div className='flex-1'>
                                    <small className='text-gray-400'>
                                        she/her
                                    </small>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <div className="flex text-sm text-gray-500 items-center"><MdLocationOn /> </div>
                                <div className="flex-1 text-gray-500 text-sm text-start">Indonesia</div>

                            </div>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <div className="flex text-sm text-gray-500 items-center"><FaGithub />
                                </div>
                                <div className="flex-1 text-gray-500 text-sm text-start">
                                    <a href="https://github.com/widyamd" target='_blank'>
                                        GitHub
                                    </a>
                                </div>

                            </div>
                            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                                <div className="flex text-sm text-gray-500 items-center">
                                    <MdEmail />
                                </div>
                                <div className="flex-1 text-gray-500 text-sm text-start">
                                    widyamustikad@gmail.com
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-full">
                    <h1 className='text-header text-gray-700 text-start mb-5'>
                        Hallo..
                    </h1>
                    <p className='text-start text-gray-500'>
                        I am a Front-End Developer with three years of experience in a startup environment. Starting in graphic design, I built a foundation in
                        visual creativity before moving to web design, focusing on user-friendly interfaces.
                        <br /><br />

                        In my last role, I combined design and technical skills to create responsive web applications. After
                        a two-year break, I enhanced my JavaScript expertise through Udemy courses and am now seeking opportunities to grow further in front-end development.
                    </p>
                </div>

                <span className="sr-only">Loading...</span>
            </div>

        </div>
    )
}

export default Profile;
