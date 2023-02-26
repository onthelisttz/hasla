'use client'
import Image from 'next/image'
import '../../src/app/globals.css'
import { useEffect,useRef, useState } from "react";
import styles from './page.module.css'
import CustomCursor from 'custom-cursor-react';
import { useInView } from "react-intersection-observer";
import 'custom-cursor-react/dist/index.css';
import { useRouter } from "next/navigation";
import Countdown from 'react-countdown';
import Header from '../components/Header'
import { motion, useScroll, 
  
  useSpring,
  useTransform, } from "framer-motion"

import { Accordion, Navbar } from "flowbite-react";

import { MdDiscFull, MdDoDisturb, MdEmojiNature, MdKeyboardArrowUp, MdMenu } from "react-icons/md";
const useCountdown = (deadline) => {
  // Time is in seconds
  const [time, setTime] = useState(
    Math.max(0, Math.floor((deadline.getTime() - Date.now()) / 1000))
  );

  const decrement = () =>
    setTime((prevTime) => {
      return prevTime === 0 ? 0 : prevTime - 1;
    });

  useEffect(() => {
    const id = setInterval(decrement, 1000);
    return () => clearInterval(id);
  }, []);

  const format = (num) => {
    return num < 10 ? '0' + num : num.toString();
  };

  return {
    days: format(Math.floor(time / (3600 * 24))),
    hours: format(Math.floor((time / 3600) % 24)),
    minutes: format(Math.floor((time / 60) % 60)),
    seconds: format(time % 60),
  };
};
export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const ref = useRef(null);
  const router= useRouter();
// const search=()=>{
//   routdr.push({
//     pathname: "/Membership",
  
//   })
// }
  const { scrollXProgress } = useScroll({ container: ref });
  const [ref1, inView] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const [refs, View] = useInView({
      threshold: 0.5,
      triggerOnce: true,
    });
    // opacity: 1, x: 0 
  const variants = {
    visible: { opacity: 1,  x:  0,  y: 0 },
    hidden: {
      opacity: 0,
      x: -100,
      y: 40,
      x: 0 
    }
  };
  const [refs3, inView3] = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

const variants3 = {
  visible: { opacity: 1, x: 0 },
  hidden: {
    opacity: 0,
    // scale: 0.65,
  
  }
};




  const variantss = {
      visible: { opacity: 1, scale: 1, y: 0 },
      hidden: {
        opacity: 0,
        scale: 0.65,
        y: 50
      }
    };
  

    const [currentPrecent, setCurrentPercent] = useState(null)
    const [currentProgressColor, setCurrentProgressColor] = useState(null)
    const { scrollYProgress } = useScroll();
    const yRange = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const pathLength = useSpring(scrollYProgress, { stiffness: 400, damping: 90 });

    useEffect(
        () =>
            yRange.onChange((v) => {
                setCurrentPercent(Math.trunc(yRange.current))
            }),
        [yRange]
    );

    useEffect(() => {
        setCurrentProgressColor(
            currentPrecent >= 90 ? "#339966" :
                currentPrecent >= 45 ? "#31A9D5" :
                    currentPrecent >= 20 ? "#F2BD1D" :
                        "#FF3B77"
        )
    }, [currentPrecent])

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);



  // This function will scroll the window to the top 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // for smoothly scrolling
    });
  };


  const Completionist = () => <span>You are good to go!</span>;

// Renderer callback with condition
const renderer = ({days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return <span>{days}-{hours}-{minutes}-{seconds}</span>;
  }
};
const hour = 12.6e6; // 1 Hour in milliseconds
const numHours = 200; // Number of hours in the future
const [deadline] = useState(new Date(Date.now() + numHours * hour));
const time = useCountdown(deadline);

  return (
    <div className="cursor-nones">
       {/* <CustomCursor
      targets={['.link', '.your-css-selector', '.hope', ]}
      customclassName='cursor-none'
      dimensions={35}
      opacity={0.5}
      scale={2}
      
      fill='#339966'
      strokeColor='#8cd9b3'
      strokeWidth={13}
      smoothness={{
        movement: 0.2,
        scale: 0.1,
        opacity: 0.2,
      }}
      targetOpacity={0.5}
    /> */}
   


   <header class="sticky top-0 z-50 h-20  bg-gray-900 shadow-md py-3 ">
    <nav >
    <div
        class="
          flex flex-wrap
          
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-white
          bg-gray-900
        "
      >
       <div>
       <p className='font-bold text-3xl'>HASLA</p>
        </div>
       
       <div className=" md:hidden">
       <MdMenu size={45}/>
       </div>
      
       
       <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
          <ul
            class="
              pt-4

              text-base 
              md:flex
              md:justify-between 
              md:pt-4"
          >
            <li>
            <a href="#aboutus" className="cursor-pointer text-lg hope   px-2 mr-3 rounded-md">
    <span className=" relative group ">
<span className="">Our story</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[4em]"></span>
</span>

    </a>
            </li>
            <li>
            <a href="#servise" className="cursor-pointer text-lg hope  px-2 mr-3 rounded-md">
    <span className=" relative group ">
<span className="">Lessons</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[3.7em]"></span>
</span>

    </a>
            </li>
            <li>
            <a href="#testmony" className="cursor-pointer hope text-lg  px-2 mr-3 rounded-md">
    <span className=" relative group ">
<span className="">Our imapact</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[5.5em]"></span>
</span>

    </a>
            </li>
            <li>
            <a onClick={()=>router.push("/Membership")} className="cursor-pointer hope text-lg  px-2 mr-3 rounded-md">
    <span className=" relative group ">
<span className="">Real hustles</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[5.4em]"></span>
</span>

    </a>
            </li>
            <li>
            <a onClick={()=>router.push("/Membership")} className="cursor-pointer hope text-lg  px-2 mr-3 rounded-md">
    <span className=" relative group ">
<span className="">Join now</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[4em]"></span>
</span>

    </a>
            </li>
            <li>
            <a href="#faq" className="cursor-pointer hope text-lg  px-2 mr-3 rounded-md">
    <span className=" relative group ">
<span className="">FAQ's</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[2.7em]"></span>
</span>

    </a>
            </li>
          </ul>
        </div>
    </div>
    </nav>
  </header>
  
 
    <div id ="aboutus" className="grid grid-cols-1  md:grid-cols-2 ml-6 mt-2 w-full mb-20 ">
    <div  className=' relative m-2  h-[38em] w-full'>
    <Image className="rounded-lg hover:scale-105 transform transtion duration-700" src="/hom2.jpg"  alt=" Logo" layout='fill' objectFit='cover' />
    
    </div>



    <div className="w-full md:w-10/12 px-4 mr-4 ml-4">
        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-900">
          <i className=" text-xl text-[#339966]">
            <MdEmojiNature  size={30}/>
          </i>
        </div>
        <h3 className="text-3xl mb-2 font-semibold leading-normal">
        Our story
        </h3>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
          The kit comes with three pre-built pages to help you get started
          faster. You can change the text and images and you're good to
          go. Just make sure you enable them first via JavaScript.
        </p>
        <a href="../index.html" className="font-bold text-blueGray-700 mt-8">Awareness!</a>
        <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
          Don't let your uses guess by attaching tooltips and popoves to
          any element. Just make sure you enable them first via
          JavaScript.
        </p>
      </div>
      </div>






  
<div className="max-w-6xl mx-auto px-4 py-12 md:py-20 sm:px-6">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-serif text-4xl">Make your choice today</h2>
            <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit ad jyju in herewre yonue aniouni amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>
      </div>
      <section id ="servise">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">start living your own life</div>
            <h1 className="h1 text-4xl font-serif mb-4 ">LIVE UNSCRIPTED FROM TODAY</h1>
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
       <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
         Don't let your uses guess by attaching tooltips and popoves to
         any element. Just make sure you enable them first via
         JavaScript.
       </p>
       <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
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


<motion.div
          animate={View ? "visible" : "hidden"}
          variants={variantss}
          exit="visible"
          transition={{ duration: 2, ease: "easeOut" }}
          className=""
          ref={refs}
        >
      
     
<section id ="testmony">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-serif text-4xl">Proven results from our students</h2>
            <p className="text-xl text-gray-400">
              Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-start md:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800 rounded-md" data-aos="fade-up">
              <div>
              <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-green-500 bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                </div>
                <div className="relative inline-flex flex-col mb-4">
                
                    <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-[#339966]" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                    </svg>
                        </div>
                </div>
                <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
                <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                  <cite className="text-gray-200 not-italic">Isaya Msigwa</cite> - <a className="text-[#339966] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">CEO at Dom</a>
                </div>
              </div>

              {/* 2nd testimonial */}
              <div className="flex flex-col h-full p-6 bg-gray-800 rounded-md" data-aos="fade-up" data-aos-delay="200">
                <div>
                <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-green-500 bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
                  <div className="relative inline-flex flex-col mb-4">
                    
                      <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-[#339966]" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                      </svg>
                        </div>
                  </div>
                  <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
                  <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                    <cite className="text-gray-200 not-italic">Musa</cite> - <a className="text-[#339966] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">founder of dukani</a>
                  </div>
                </div>

                {/* 3rd testimonial */}
                <div className="flex flex-col h-full p-6 bg-gray-800 rounded-md" data-aos="fade-up" data-aos-delay="400">
                  <div>
                  <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-green-500 bg-neutral-800 dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
                    <div className="relative inline-flex flex-col mb-4">
                    
                        <svg className="absolute top-0 right-0 -mr-3 w-6 h-5 fill-current text-[#339966]" viewBox="0 0 24 20" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 13.517c0-2.346.611-4.774 1.833-7.283C3.056 3.726 4.733 1.648 6.865 0L11 2.696C9.726 4.393 8.777 6.109 8.152 7.844c-.624 1.735-.936 3.589-.936 5.56v4.644H0v-4.531zm13 0c0-2.346.611-4.774 1.833-7.283 1.223-2.508 2.9-4.586 5.032-6.234L24 2.696c-1.274 1.697-2.223 3.413-2.848 5.148-.624 1.735-.936 3.589-.936 5.56v4.644H13v-4.531z" />
                        </svg>
                        </div>
                    </div>
                    <blockquote className="text-lg text-gray-400 grow">— Open PRO lets me quickly get the insights I care about so that I can focus on my productive work. I've had Open PRO for about 24 hours now and I honestly don't know how I functioned without it before.</blockquote>
                    <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                      <cite className="text-gray-200 not-italic">juma doe</cite> - <a className="text-[#339966] hover:text-gray-200 transition duration-150 ease-in-out" href="#0">CEO at Roty</a>
                    </div>
                  </div>

                </div>

              </div>
            </div>
</section>
        </motion.div>

        <div className="max-w-6xl mx-auto px-4  md:pt-9 sm:px-6">
      <div className="max-w-3xl mx-auto text-center md:pb-20">
            <h2 className="h2 mb-4 font-serif text-4xl">LIMITED SPOTS AVAILABLE</h2>
            <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit ad jyju in herewre yonue aniouni amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
         
         <div className="flex justify-center font-mono mt-6 gap-x-6 text-center">
          <div>
            <span>Days</span><br/>
         
            <span className="text-7xl">{time.days}</span>
            
          </div>

          <div>
            <span>Hours</span><br/>
            <span className="text-7xl">{time.hours}</span>
          </div>
          <div>
            <span>Minutes</span><br/>
            <span className="text-7xl">{time.minutes}</span>
          </div>

          <div>
            <span>Seconds</span><br/>
            <span className="text-7xl">{time.seconds}</span>
          </div>

         </div>
         
         <button onClick={()=>router.push("/Membership")} className="bg-green-700 animate-pulse rounded-xl mt-5 py-2 px-4 hover:animate-none text-3xl font-serif ">Book your sit</button>
          </div>
      </div>

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


{/*     
<section className="text-neutral-700 mt-20  dark:text-neutral-300 m">
  <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
    <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
    <p className="mb-6 pb-2 md:mb-12 md:pb-0">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
      error amet numquam iure provident voluptate esse quasi, veritatis
      totam voluptas nostrum quisquam eum porro a pariatur veniam.
    </p>
  </div>

  <div   className="grid gap-6 text-center max-w-7xl md:grid-cols-3  mx-auto m-4">
    <div>
      <div 
        className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-gray-100"></div>
        <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-green-500 bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">Maria Smantha</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Lorem ipsum dolor sit amet eos adipisci, consectetur
            adipisicing elit.
          </p>
        </div>
      </div>
    </div>
    <div>
      <div
        className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-gray-100"></div>
        <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-green-500 bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">Lisa Cudrow</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Neque cupiditate assumenda in maiores repudi mollitia
            architecto.
          </p>
        </div>
      </div>
    </div>
    
    <div >
      <div
        className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
        <div className="h-28 overflow-hidden rounded-t-lg bg-gray-100"></div>
        <div
          className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-green-500 bg-white dark:border-neutral-800 dark:bg-neutral-800">
          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
        </div>
        <div className="p-6">
          <h4 className="mb-4 text-2xl font-semibold">John Smith</h4>
          <hr />
          <p className="mt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className="inline-block h-7 w-7 pr-2"
              viewBox="0 0 24 24">
              <path
                d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
            </svg>
            Delectus impedit saepe officiis ab aliquam repellat rem unde
            ducimus.
          </p>
        </div>
      </div>
    </div>
  </div>
</section> */}


     

  
    
      


   

    {/* <motion.button
    whileHover={{
        scale: 1.2,
        transition: { yoyo: Infinity },
    }}
>
    My Button
</motion.button>
    <motion.button
    animate={{ scale: 1.2 }}
    transition={{ delay: 1, yoyo: Infinity }}
>
    My Button
</motion.button>
    <motion.div
    initial={{ opacity: 0, x: '-100vh' }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
>

    <h1>Hi</h1>
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        perspiciatis voluptates nihil dolores eum architecto eligendi
    </p>
</motion.div>
    <motion.div animate={{x: -10, y: 10}}>
    <p> An animated text </p>
</motion.div>
    <div data-aos="flip-right" className="flex items-center justify-center mt-12">

    <motion.h1
                animate={{ x: [50, 150, 50], opacity: 1, scale: 1 }}
                transition={{
                    duration: 5,
                    delay: 0.3,
                    ease: [0.5, 0.71, 1, 1.5],
                }}
                initial={{ opacity: 0, scale: 0.5 }}
                
            >
                Animation made easy with Framer Motion
            </motion.h1>
    <motion.div
                          
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 2 }}
                          transition={{ duration: 3 }}
                      >
                          <img
            src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
                      </motion.div>
    </div>
    


    <motion.div
    initial={{ x: 300, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    exit={{ x: 300, opacity: 0 }}

    transition={{
      duration: 3,
      type: "spring",
      stiffness: 260,
      damping: 20,
    }}

  >
    <div data-aos="flip-right" className="flex items-center justify-center mt-12">
                <a className="relative block w-1/4 bg-gray-900 group" 
                    href="##">
                    <img className="absolute inset-0 object-cover 
                                w-full h-full group-hover:opacity-50"
                        src=
"https://media.geeksforgeeks.org/wp-content/uploads/20220221132017/download.png" />
                    <div className="relative p-5">
                        <div className="mt-40">
                            <div className="transition-all transform 
                                translate-y-8 opacity-0 
                                group-hover:opacity-100 
                                group-hover:translate-y-0">
                                <div className="p-2">
                                    <p className="text-lg text-white">
                                        Welcome to GeeksforGeeks.
                                    </p>
                                    <button className="px-4 py-2 text-sm 
                                            text-white bg-green-600">
                                        Visit site
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
            </motion.div> */}
    

<div id ="faq" className="max-w-7xl mx-auto px-4 my-20 sm:px-6 ">
<h1 className="text-2xl font-serif  text-white " >Frequent asked questions</h1>
<Accordion className="mt-4 border border-gray-800 border-3xl">
  <Accordion.Panel  className="border border-sm">
    <Accordion.Title className="hover:bg-gray-800 focus:text-green-500 border border-gray-800 focus:border-lg bg-gray-900 text-white">
      
   Why should i have to join Hasla?
  
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{' '}
   
        {' '}and start developing websites even faster with components on top.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel  className="border border-sm">
    <Accordion.Title className="hover:bg-gray-800 focus:text-green-500 border border-gray-800 focus:border-lg bg-gray-900 text-white">
     
    What is the membership fee?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
  <Accordion.Title className="hover:bg-gray-800 focus:text-green-500 border border-gray-800 focus:border-lg bg-gray-900 text-white">
      Can i cancel my membership?
    </Accordion.Title>
    <Accordion.Content>
    <p className="mb-2 text-gray-500 dark:text-gray-400">
     yes you Vitae aliquet nec ullamcorper sit amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.
      </p>
    
    </Accordion.Content>
  </Accordion.Panel>
</Accordion>

</div>

<footer>
<div className="max-w-6xl mx-auto px-4 sm:px-6">



{/* Bottom area */}
<div className="md:flex md:items-center md:justify-between border-t border-gray-800 pt-8">

  {/* Social links */}
  <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
    <li>
      <p to="#" className="flex justify-center items-center text-[#339966] bg-gray-800 hover:text-gray-100 hover:bg-[#339966] rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
        </svg>
      </p>
    </li>
  
    <li className="ml-4">
      <p to="#" className="flex justify-center items-center text-[#339966] bg-gray-800 hover:text-gray-100 hover:bg-[#339966] rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
        </svg>
      </p>
    </li>
    <li className="ml-4">
      <p to="#" className="flex justify-center items-center text-[#339966] bg-gray-800 hover:text-gray-100 hover:bg-[#339966] rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20.145" cy="11.892" r="1" />
          <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
          <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
        </svg>
      </p>
    </li>
    <li className="ml-4">
      <p to="#" className="flex justify-center items-center text-[#339966] bg-gray-800 hover:text-gray-100 hover:bg-[#339966] rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
        </svg>
      </p>
    </li>
  </ul>

  {/* Copyrights note */}
  <div className="text-gray-400 text-sm mr-4">&copy; Hasla.com. 2023 All rights reserved.</div>

</div>

</div>
    </footer>


{showButton && (
        <div onClick={scrollToTop} className="sticky bottom-12 z-50  h-10  m-4">
          <div className="flex   justify-end  bg-transparent ">

<div className="h-16 w-16 animate-bounces rounded-full text-center pl-4 pt-4">
{/* <MdKeyboardArrowUp size={30} className="text-[#339966]"/> animate-ping*/}
<svg className="progress-icon " viewBox="0 0 60 60">
                    <motion.path
                        fill={ "none"}
                        strokeWidth="2"
                        stroke={currentProgressColor}
                        strokeDasharray="0 1"
                        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
                        style={{
                            pathLength,
                            rotate: 90,
                            translateX: 5,
                            translateY: 5,
                            opacity: pathLength,
                            scaleX: -1
                        }}
                   / >
                     

<MdKeyboardArrowUp size={50} className="text-[#339966] mt-10"/>

                </svg>
</div>

          </div>


  

        </div>
       
      )}
    </div>
  )
}
