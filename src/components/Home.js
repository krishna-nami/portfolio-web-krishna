import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container for the home to dispaly information */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
        <p className="text-pink-600">Hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Krishna Banstola
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I am a Full Stack Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building (and accasionally
          designing) exceptional digital experience. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="flex border-2 group text-white py-3 my-2 px-6 items-center hover:bg-pink-600 hover:border-pink-600">
            Wiew Work{' '}
            <span className="group-hover:rotate-90">
              <HiArrowNarrowRight className="ml-4" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
