import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiHomeModern } from 'react-icons/hi2'
import { IoMdPerson } from "react-icons/io";
import { FaSquareTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <h1 className='font-bold text-xl sm:text-2xl flex flex-wrap'>
                <span className='flex m-1 text-blue-400 items-center'><HiHomeModern /></span>
                <span className='text-slate-500'>Apna</span>
                <span className='text-slate-700'>asiyana</span>
                <span className='text-red-600'>.com</span>
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Resources</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                        <a className="hover:underline">Apnaasiyana</a>
                      </li>
                      <li>
                          <a href="https://ujjwal-suman-portfolio.vercel.app/" target="_blank" className="hover:underline">Portfolio</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Follow us</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="https://github.com/UjjwalSuman" target="_blank" className="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://www.linkedin.com/in/ujjwalsuman/" target="_blank" className="hover:underline">linkedin</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                  <ul className="text-gray-500 dark:text-gray-400 font-medium">
                      <li className="mb-4">
                          <a href="#" className="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-lg text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Apnaasiyana</a>. All Rights Reserved.
          </span>
          <div className="flex gap-2 mt-4 sm:justify-center sm:mt-0 text-xl">
            <a 
                href="https://ujjwal-suman-portfolio.vercel.app/" 
                target='_blank'
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white" 
                >
                <IoMdPerson />
            </a>
                        <a 
                href="https://www.linkedin.com/in/ujjwalsuman/" target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                <FaLinkedin />
            </a>
            <a 
                href="https://github.com/UjjwalSuman" target="_blank"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                <FaGithub />
            </a>
            <a 
                href="https://twitter.com/home" 
                target='_blank' 
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
                >
                <FaSquareTwitter />
            </a>
          </div>
      </div>
    </div>
    </footer>
  )
}
