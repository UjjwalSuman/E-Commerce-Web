import React from 'react'
import FoundingStoryPic from "../assets/Images/FoundingStoryPic.png"

export const About = () => {
  return (
    <div className='flex flex-col gap-10'>
      <div className='flex flex-col py-10 px-2 max-w-6xl mx-auto gap-2 '>
        <div className='flex my-5'>
          <h1 className='text-4xl font-bold mb-4 text-slate-800'> About {' '}
            <span className='text-slate-500'>Apna</span>
            <span className='text-slate-700'>asiyana</span>
            <span className='text-red-600'>.com</span>
          </h1>
        </div>
        <div className='text-base font-medium text-richblack-300'>
          <p className='mb-4 '>For years, millions of home shoppers have turned to Apnaasiyana.com® to find their dream home. Operated by Move, Inc., Apnaasiyana.com® offers a comprehensive list of for-sale properties, as well as the information and tools to make informed real estate decisions. Today, more than ever, Apnaasiyana.com® is The Home of Home Search℠.</p>
          <p className='mb-4'>Apnaasiyana.com® also offers homeowners a bevy of useful tools and resources through the My Home℠ dashboard. My Home℠ dashboard allows property owners to manage their home like the important investment it is by tracking their home’s value over time, researching and managing home improvements, and scouting other similar properties in the neighborhood.</p>
        </div>
      </div>

      <section>
        <div className="py-20 px-4 max-w-6xl mx-auto text-richblack-500">
          <div className="flex flex-col items-center gap-10 lg:flex-row justify-between">
            <div className="my-0 flex lg:w-[50%] flex-col gap-10">
              <h1 className="bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045] bg-clip-text text-4xl font-semibold text-transparent ">
                Our Founding Story
              </h1>
              <p className="text-base font-medium text-richblack-300 ">
                As a bachelor navigating the tumultuous seas of Indian real estate, 
                I found myself constantly at odds with brokers and their exorbitant fees. 
                Determined to break free from this cycle, I embarked on a journey of innovation. 
                Drawing upon my roots and fueled by the spirit of change, I immersed myself in 
                the world of technology.
              </p>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Through countless nights of coding and design, I birthed a solution: a real 
                estate website tailored to the needs of bachelors across India. With a click 
                of a button, I ushered in a new era of independence, empowering my fellow 
                bachelors to find their ideal homes without the burden of brokers.
              </p>
            </div>

            <div>
              <img
                src={FoundingStoryPic}
                alt=""
                className="shadow-[0_0_20px_0] shadow-[#FC6767]"
              />
            </div>
          </div>
          <div className="flex flex-col items-center lg:gap-10 lg:flex-row justify-between">
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#FF512F] to-[#F09819] bg-clip-text text-4xl font-semibold text-transparent lg:w-[70%] ">
                Our Vision
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our vision is to revolutionize the Indian real estate landscape by providing 
                bachelors with a seamless, transparent, and broker-free platform to find their 
                perfect homes. We aim to empower individuals with independence and choice, 
                redefining the way they search for and secure accommodation across the nation.
              </p>
            </div>
            <div className="my-24 flex lg:w-[40%] flex-col gap-10">
              <h1 className="bg-gradient-to-b from-[#1FA2FF] via-[#12D8FA] to-[#A6FFCB] text-transparent bg-clip-text text-4xl font-semibold lg:w-[70%] ">
              Our Mission
              </h1>
              <p className="text-base font-medium text-richblack-300 lg:w-[95%]">
                Our mission is to simplify the apartment hunting experience for bachelors in India 
                by eliminating the reliance on brokers. Through our user-friendly platform, 
                we strive to connect individuals directly with landlords, offering transparency, 
                affordability, and convenience. We're committed to reshaping the rental market, 
                one bachelor at a time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
