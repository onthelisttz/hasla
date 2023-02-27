import { useEffect, useState } from "react";
import '../../src/app/globals.css'
import Image from 'next/image'
import {
    motion,
    useViewportScroll,
    useSpring,
    useTransform,
} from "framer-motion";


import Header from '../components/Header'


export default function ScrollingAnimation  () {
   
    return (

     <div>
      <p className="text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
     juma</p>
     <Header/>
     <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 sm:px-6">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-serif text-4xl">7-8h working per day is not the right path</h2>
            <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit ad jyju in herewre yonue aniouni amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>
      </div>
    <motion.div
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          exit="visible"
          transition={{ 
            // duration: 2, 
            ease: "easeOut" ,
        
            duration: 2,
            delay: 0.3,
            // ease: [0.5, 0.71, 1, 1.5],
        }}
          className=""
          ref={ref1}
        >
        <div id ="aboutuss" className=" grid grid-cols-1 max-w-6xl mx-auto md:grid-cols-2 w-full mb-20 bg-gray-900 ">
   

   <div className="w-full md:w-10/12 px-4 mr-4 ml-4 py-12">
       <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-900">
         <i className="fas fa-user-friends text-xl"></i>
       </div>
       <h3 className="text-3xl mb-2 font-semibold leading-normal">
      Escape the rat race
       </h3>
       <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
         Don't let your uses guess by attaching tooltips and popoves to
         any element. Just make sure you enable them first via
         JavaScript.
       </p>
       <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
         The kit comes with three pre-built pages to help you get started
         faster. You can change the text and images and you're good to
         go. Just make sure you enable them first via JavaScript.
       </p>
       <a href="../index.html" className="font-bold text-blueGray-700 mt-8">Check Notus JS!</a>
     </div>
<div data-aos="flip-right" className="flex items-center justify-center   h-[30em] w-full">
                <a className="relative block  bg-gray-900 group" 
                    href="##">
                        <Image className= "absolute inset-0 object-cover  w-full h-full group-hover:opacity-50 rounded-lg" src="/hom2.jpg"  alt=" Logo" layout='fill' objectFit='cover' />
                    {/* <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png" /> */}
                    <div className="relative p-5">
                        <div className="mt-40">
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                <div className="p-2">
                                    <p className="text-lg text-white">
                                        Welcome to UNSCRIPTED.
                                    </p>
                                    <button className="px-4 py-2 text-md font-serif 
                                            text-white bg-green-600">
                                        Join the family
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
     {/* <div  className=' relative m-2  h-[30em] w-full'>
   <Image className="rounded-lg" src="/hom2.jpg"  alt=" Logo" layout='fill' objectFit='cover' />
   
   </div> */}
     </div>
        </motion.div>

     <section id ="servise">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">start living your own life</div>
            <h1 className="h1 text-4xl font-serif mb-4 text-white">LIVE UNSCRIPTED FROM TODAY</h1>
            <p className="text-xl text-gray-400">some of the skills your going to learn. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit laborum — semper quis lectus nulla.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center hover:bg-gray-900 p-4 rounded-lg hover:scale-105 transform transtion duration-700">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto rounded-xl" src="/hom2.jpg" width="540" height="405" alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-[#339966] mb-2">Copyrights</div>
                  <h3 className="h3 mb-3">start closing badly</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center hover:bg-gray-900 p-4 rounded-lg hover:scale-105 transform transtion duration-700">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto rounded-xl" src="/hom2.jpg" width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-[#339966] mb-2">Forex and 
                  cryptocurrency
                  </div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center hover:bg-gray-900 p-4 rounded-lg hover:scale-105 transform transtion duration-700">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto rounded-xl" src="/hom2.jpg" width="540" height="405" alt="Features 03" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <div className="font-architects-daughter text-xl text-[#339966] mb-2">Frelancers</div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center hover:bg-gray-900 p-4 rounded-lg hover:scale-105 transform transtion duration-700">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <img className="max-w-full mx-auto md:max-w-none h-auto rounded-xl" src="/hom2.jpg" width="540" height="405" alt="Features 02" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <div className="font-architects-daughter text-xl text-[#339966] mb-2"> 
                  Investments
                  </div>
                  <h3 className="h3 mb-3">Keep projects on schedule</h3>
                  <p className="text-xl text-gray-400 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <ul className="text-lg text-gray-400 -mb-2">
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Duis aute irure dolor in reprehenderit</span>
                    </li>
                    <li className="flex items-center mb-2">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Excepteur sint occaecat</span>
                    </li>
                    <li className="flex items-center">
                      <svg className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                      </svg>
                      <span>Amet consectetur adipiscing elit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

      <div id ="servisee" className='background-color:rgb(255, 255, 255) mt-12'>
<div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8" >
  <div className="max-w-lg mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-none lg:flex">
    <div className="flex-1 px-6 py-8 bg-gray-900 lg:p-12" >
      <h3 className="text-2xl font-serif text-white sm:text-3xl" >Membership Plan</h3>
      <p className="mt-6 text-base text-gray-500">Metus potenti velit sollicitudin porttitor magnis elit lacinia tempor varius, ut cras orci vitae parturient id nisi vulputate consectetur, primis venenatis cursus tristique malesuada viverra congue risus. Class dui ut ullamcorper ultrices arcu ad varius adipiscing, aliquet imperdiet hendrerit orci fusce ante felis, mi mus vel finibus viverra nibh taciti.</p>
      <div className="mt-8">
        <div className="flex items-center">
          <h4 className="flex-shrink-0 p-2 rounded-lg text-sm font-semibold tracking-wider text-white uppercase bg-gray-800">
            What's included</h4>
          <div className="flex-1 border-t-2 border-gray-800"></div>
        </div>
        <ul className="mt-8 space-y-5 lg:space-y-0 lg:grid lg:grid-cols-2 lg:gap-x-8 lg:gap-y-5">
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Private repository access</p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Extensive documentation</p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Access to new updates</p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Personal license</p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Additional SaaS resources</p>
          </li>
          <li className="flex items-start lg:col-span-1">
            <div className="flex-shrink-0">
              <svg className="w-5 h-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
            </div>
            <p className="ml-3 text-sm text-gray-700">Email support</p>
          </li>
        </ul>
      </div>
    </div>
    <div className="px-6 py-8 text-center bg-gray-800 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12" >
      <p className="mt-4 text-white text-decoration-line:line-through;text-decoration-style:solid">$150 / year</p>
      <div className="flex items-center justify-center mt-4 text-5xl font-extrabold text-gray-900">
        <span className="ml-3 text-xl  text-white">$30</span>
        <span className="ml-3 text-xl font-medium text-white">/ months</span>
      </div>
      <div className="mt-6">
        <div className="rounded-md shadow">
          <a onClick={()=>router.push("/Membership")} className="flex items-center justify-center animate-bounce w-full px-5 py-3 text-base cursor-pointer  font-medium text-white border border-sm  border-green-600 rounded-md bg-green-600" target="_blank">JOIN NOW</a>
        </div>
      </div>
     
    
    </div>
  </div>
</div>
</div>
     </div>
      
    )
}