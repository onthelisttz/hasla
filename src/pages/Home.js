import { useEffect, useState } from "react";
import '../../src/app/globals.css'
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
     </div>
      
    )
}