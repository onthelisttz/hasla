'use client'
import Image from 'next/image'
import '../../src/app/globals.css'
import { useEffect,useRef, useState } from "react";
import styles from './page.module.css'
// import CustomCursor from 'custom-cursor-react';
import { useInView } from "react-intersection-observer";
// import 'custom-cursor-react/dist/index.css';
import { useRouter } from "next/navigation";
import Countdown from 'react-countdown';
import Header from '../components/Header'
import { motion, useScroll, 
  
  useSpring,
  useTransform, } from "framer-motion"

import { Accordion, Navbar } from "flowbite-react";

import { MdBrightnessAuto, MdDiscFull, MdDoDisturb, MdEmojiNature, MdKeyboardArrowUp, MdMenu, MdModelTraining, MdOutlineDashboard, MdOutlineDataExploration, MdOutlineRealEstateAgent, MdPlayCircleOutline, MdSettings, MdVpnLock } from "react-icons/md";
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
const hour = 4.6e6; // 1 Hour in milliseconds
const numHours = 4; // Number of hours in the future
const [deadline] = useState(new Date(Date.now() + numHours * hour));
const time = useCountdown(deadline);

  return (
    <div className="bg-neutral-900 text-white">

   


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
       {/* <div>
       <p className='font-bold text-3xl'>HASLA</p>
        </div> */}
       <div  className=' hidden md:inline relative cursor-pointer  h-[50px] w-[80px]'>
<Image src="/hasla5.png"  alt=" Logo" layout='fill' objectFit='cover' />

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
            <a href="#campus" className="cursor-pointer text-lg hope  px-2 mr-3 rounded-md">
    <span className="relative group ">
<span className="">Campus</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[3.7em]"></span>
</span>

    </a>
            </li>
            <li>
            <a href="#Students" className="cursor-pointer hope text-lg  px-2 mr-3 rounded-md">
    <span className=" relative group ">
<span className=""> Students</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[4em]"></span>
</span>

    </a>
            </li>
            <li>
            <a href="#Pricing"  className="cursor-pointer hope text-lg  px-2 mr-3 rounded-md">
    <span className=" relative group ">
<span className="">Pricing</span>

  <span className="absolute -bottom-1 left-0 w-0 h-[0.2em] bg-[#339966] transition-all group-hover:w-[3em]"></span>
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
{/* git commit -m "27/02/2023 4" */}
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
    <div>
    <div  className=' relative m-2  h-[30em] w-full'>
    <Image className="rounded-lg hover:scale-105 transform transtion duration-700" src="/hom2.jpg"  alt=" Logo" layout='fill' objectFit='cover' />
    
    </div>
    <div className="max-w-3xl mx-auto text-center md:pb-20 mt-4 text-white">
            <h2 className="h2 mb-4 font-serif text-5xl">Price Increase Soon...</h2>
            <p className="text-2xl text-gray-500">join today!</p>
            <p className="text-xl text-gray-400">TSH 35,000 monthly (Limited time offer – Usually 75,000) 
</p>
         
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
         
         <button onClick={()=>router.push("/Membership")}
          className="bg-green-700 animate-pulse rounded-xl mt-5 py-2 px-4 hover:animate-none text-3xl font-serif ">
           JOIN HASLA COMMUNITY TODAY</button>
          </div>
    </div>



    <div className="w-full md:w-10/12 px-4 mr-4 ml-4">
      
      
        <p className="   font-serif text-xl  leading-relaxed mt-4 mb-4 text-white">
        Welcome to the Hasla Community! Online Money-Focused Community.
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
       

Are you tired of working long hours at a job that barely pays the bills? Do you dream of being your own boss and earning a six-figure income from the comfort of your own home? If so, you're in the right place.



  
       
        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
        Our online courses are designed to help you learn the skills you need to start your own profitable online business. Whether you're a complete beginner or an experienced entrepreneur, we have something for everyone.


        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
        Our courses cover everything from freelancing and digital marketing to e-commerce and affiliate marketing. You'll learn how to build a website, drive traffic to your site, and convert visitors into paying customers. You'll also learn how to create a brand, build an email list, and use social media to grow your business.


        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
        Our team of expert instructors has years of experience in the online business world, and they're here to guide you every step of the way. You'll have access to one-on-one coaching, live webinars, and a supportive community of like-minded individuals who are all working towards the same goal: financial freedom.

        </p>
        <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
      
So what are you waiting for? Sign up for our online courses today and start your journey to financial independence. With our step-by-step guidance and proven strategies, you'll be well on your way to building the online business of your dreams.
     
        </p>
       
      </div>
      </div>

      <div className="max-w-6xl mx-auto px-4  md:pt-9 sm:px-6">
      <div className="max-w-3xl mx-auto text-center md:pb-20">
            <h2 className="h2 mb-4 font-serif text-4xl">LIMITED SPOTS AVAILABLE FOR HASLAZ!</h2>
            <p className="text-xl text-gray-400">
            Hurry and be one of the first to join us! Lock in your membership fee at just TSH 35,000 per month before the limited spots are gone and the price increases. 
            
            Don't miss out on the chance to enroll in Hasla Community and experience the future of learning. Secure your spot today at the discounted rate of TSH 35,000 per month, before it increases to TSH 75,000 per month.
         
            </p>
            <button onClick={()=>router.push("/Membership")}
          className="bg-green-400  rounded-md mt-5 py-3 px-5  text-2xl font-serif ">
          JOIN THE RANKS OF SUCCESSFUL HASLAZ</button>

         
        
        
          </div>
      </div>





  
{/* <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 sm:px-6">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-serif text-4xl">Make your choice today</h2>
            <p className="text-xl text-gray-400">Vitae aliquet nec ullamcorper sit ad jyju in herewre yonue aniouni amet risus nullam eget felis semper quis lectus nulla at volutpat diam ut venenatis tellus—in ornare.</p>
          </div>
      </div> */}


      <section id ="campus">
      <div className="max-w-6xl mx-auto px-4 pb-7 pt-12 md:pt-20 sm:px-6">
<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-serif text-4xl">CAMPUS</h2>
            <p className="text-xl text-gray-400">
            THE HASLA COMMUNITY CAMPUSES
              </p>
          </div>

          <div className="max-w-sm mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 items-start md:max-w-none">

{/* 1st testimonial */}
<div className="flex flex-col h-[15em] justify-center p-6 bg-gray-800 rounded-md hover:scale-105 transform transtion duration-700" data-aos="fade-up">
<div className="flex flex-col justify-center">
  
  <div className="flex  justify-center">
  <MdOutlineDataExploration size={60} className="text-green-500"/>
  </div>
  
<div className="flex  justify-center">
<p className="font-serif">cryptocurrency </p>
</div>
</div>
  </div>

  <div className="flex flex-col h-[15em] justify-center p-6 bg-gray-800 rounded-md  hover:scale-105 transform transtion duration-700" data-aos="fade-up">
<div className="flex flex-col justify-center">
  
  <div className="flex  justify-center">
  <MdBrightnessAuto size={60} className="text-green-500"/>
  </div>
  
<div className="flex  justify-center">
<p className="font-serif">Affiliate Marketing </p>
</div>
</div>
  </div>

  <div className="flex flex-col h-[15em] justify-center p-6 bg-gray-800 rounded-md hover:scale-105 transform transtion duration-700" data-aos="fade-up">
<div className="flex flex-col justify-center">
  
  <div className="flex  justify-center">
  <MdVpnLock size={60} className="text-green-500"/>
  </div>
  
<div className="flex  justify-center">
<p className="font-serif">Freelancing </p>
</div>
</div>
  </div>
  <div className="flex flex-col h-[15em] justify-center p-6 bg-gray-800 rounded-md hover:scale-105 transform transtion duration-700" data-aos="fade-up">
<div className="flex flex-col justify-center">
  
  <div className="flex  justify-center">
  <MdOutlineDashboard size={60} className="text-green-500"/>
  </div>
  
<div className="flex  justify-center">
<p className="font-serif">E-commerce </p>
</div>
</div>
  </div>

  <div className="flex flex-col h-[15em] justify-center p-6 bg-gray-800 rounded-md hover:scale-105 transform transtion duration-700" data-aos="fade-up">
<div className="flex flex-col justify-center">
  
  <div className="flex  justify-center">
  <MdOutlineRealEstateAgent size={60} className="text-green-500"/>
  </div>
  
<div className="flex  justify-center">
<p className="font-serif">Real estate</p>
</div>
</div>
  </div>

  <div className="flex flex-col h-[15em] justify-center p-6 bg-gray-800 rounded-md hover:scale-105 transform transtion duration-700" data-aos="fade-up">
<div className="flex flex-col justify-center">
  
  <div className="flex  justify-center">
  <MdPlayCircleOutline size={60} className="text-green-500"/>
  </div>
  
<div className="flex  justify-center">
<p className="font-serif">Youtube & Blogging</p>
</div>
</div>
  </div>
    </div>

</div>
      </section>
    
      <div className="max-w-6xl mx-auto px-4 flex justify-center sm:px-6">
<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
<div className="flex flex-col h-[20em] w-[22em] justify-center p-6 bg-gray-800 rounded-md hover:scale-105 transform transtion duration-700" data-aos="fade-up">
<div className="flex flex-col justify-center">
  
  <div className="flex  justify-center">
  {/* <MdOutlineDataExploration size={60} className="text-green-500"/> */}
  <svg
      viewBox="0 0 24 24"
      fill="#00e676"
      // className="text-green-500"
      height="5em"
      width="5em"
   
    >
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M8 5h3v9H8v3H6v-3H3V5h3V2h2v3zM5 7v5h4V7H5zm13 3h3v9h-3v3h-2v-3h-3v-9h3V7h2v3zm-3 2v5h4v-5h-4z" />
    </svg>
  </div>
  
<div className="flex  justify-center">
<p className="font-serif">STOCKS & BONDS </p>
</div>
</div>
  </div>
          </div>

</div>
    

<motion.div
          animate={View ? "visible" : "hidden"}
          variants={variantss}
          exit="visible"
          transition={{ duration: 2, ease: "easeOut" }}
          className=""
          ref={refs}
        >
      
     
<section id ="Students">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 font-serif text-xl tracking-widest text-green-500 ">MEET THE STUDENTS</h2>
            <p className="text-4xl font-serif ">
            NO HYPE, NO FLUFF, JUST REAL TANGIBLE RESULTS</p>
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

        <section id ="Pricing">
        <div className="max-w-6xl mx-auto px-4  md:pt-9 sm:px-6">
      <div className="max-w-5xl mx-auto text-center md:pb-20">
        <p className="mb-4 font-serif text-xl tracking-widest text-green-500">Pricing</p>
            <h2 className="h2 mb-4 font-serif text-4xl">TSH 65,000 ENTRY FEE , THEN </h2>
            <h2 className="h2 mb-8 pb-4 font-serif text-4xl">TSH 35,000 MONTHLY!</h2>
           

            <h2 className="h2  font-serif text-4xl mt-8">NO MORE EXCUSES , WE DID THE HARD PART</h2>
            <h2 className="h2 mb-2 font-serif text-4xl">ITS TIME TO GET RICH</h2>
            <button onClick={()=>router.push("/Membership")}
          className="bg-green-400  rounded-md mt-5 py-3 px-5  text-2xl font-serif ">
          Limited Spots Available. Join Today!</button>
          <p className='mt-2 pt-6'>
          Join Today. Price Increasing from TSH 35,000 to TSH 75,000 next week.
          </p>

         
        
        
          </div>
      </div>
        </section>
      


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
      
    What is Hasla community? 
  
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Hasla is a members only community with experts helping you make money online. You can access our community from anywhere in the world with internet
      </p>
      <p className="text-gray-500 dark:text-gray-400">
        Check out this guide to learn how to{' '}
   
        {' '}and start developing websites even faster with components on top.
      </p>
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel  className="border border-sm">
    <Accordion.Title className="hover:bg-gray-800 focus:text-green-500 border border-gray-800 focus:border-lg bg-gray-900 text-white">
     
    Who are the professors?
    </Accordion.Title>
    <Accordion.Content>
      <p className="mb-2 text-gray-500 dark:text-gray-400">
      Expert sovereign individuals hand-picked. Each Professor is making anywhere from 500$ to 10,000$ a month in their select field. They are here to help share their expertise to take you from zero to regular cash. You have direct access to their guidance.
      </p>
     
    </Accordion.Content>
  </Accordion.Panel>
  <Accordion.Panel>
  <Accordion.Title className="hover:bg-gray-800 focus:text-green-500 border border-gray-800 focus:border-lg bg-gray-900 text-white">
  What are your fees?
    </Accordion.Title>
    <Accordion.Content>
    <p className="mb-2 text-gray-500 dark:text-gray-400">
    We charge a monthly fee of TZS 35,000 after paying One time Entry fee of TZS 65,000/= . Once we reach 1,000 members this will likely rise to TZS 75,000/=. You are locked-in at the rate you join. The earlier you join the more you save. There are already over 100 members so make your move.
      </p>
    
    </Accordion.Content>
  </Accordion.Panel>





   <Accordion.Panel>
  <Accordion.Title className="hover:bg-gray-800 focus:text-green-500 border border-gray-800 focus:border-lg bg-gray-900 text-white">
  Where are your students from?
    </Accordion.Title>
    <Accordion.Content>
    <p className="mb-2 text-gray-500 dark:text-gray-400">
    People join Hustler’s community from all around the world. We have students of all ages and experiences. Everyone is encouraged to contribute.
      </p>
    
    </Accordion.Content>
  </Accordion.Panel>



  <Accordion.Panel>
  <Accordion.Title className="hover:bg-gray-800 focus:text-green-500 border border-gray-800 focus:border-lg bg-gray-900 text-white">
  Is this a good fit for me?
    </Accordion.Title>
    <Accordion.Content>
    <p className="mb-2 text-gray-500 dark:text-gray-400">
    Hasla community was founded to make it easy for students to get started. If you are motivated and trying to improve your station in life you will meet literally hundreds and hundreds of like-minded students here. The Professors are here to help every step of the way. 
     
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
        <div onClick={scrollToTop} className="sticky bottom-12 z-50  h-10  mt-4">
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
