
import React from 'react';

import Image from 'next/image'
// import Drawer from 'react-modern-drawer'
// import {  useRouter } from 'next/router';


function Header() {
    // const [isOpen, setIsOpen] = React.useState(false);
    // const router= useRouter();
    // const { currentUser, logout} = useAuth();
  //   const toggleDrawer = () => {
  //     setIsOpen((prevState) => !prevState)
  // }
  // const dashboardPage=()=>{
  //   // routdr.push(' List/Advitise')
  //   router.push({
  //     fallback: false,
  //     pathname: "/Dashboard",
    
      
  //   })
  // }
  
  return (
    <header className='sticky top-0 z-50 h-20 grid grid-cols-2 bg-gray-50 shadow-md py-3 md:px-5'>
    <div className=' flex items-center h-10 space-x-4  my-auto'>
    {/* <h3>Dom</h3> */}
    <div  className='hidden md:inline relative cursor-pointer  h-[80px] w-[150px]'>
    <Image src="/domh.png"  alt=" Logo" layout='fill' objectFit='cover' />
    
    </div>
    {/* <p className='text-semibold'>Dom Properties</p> */}
    </div>
    <div className='flex   justify-end '>
<div className='flex mt-3   gap-4'>
<span className="cursor-pointer">Home</span>
 <span className="cursor-pointer">About</span>
 <span className="cursor-pointer">Join</span>
</div>
 
    {/* <div className='px-5'>
    
      <div className="">{currentUser.displayName}</div>
       <span className="text-xs ">admin</span>
     </div> */}
    
  
    </div>
  
   
  
    </header>
  )
}

export default Header


