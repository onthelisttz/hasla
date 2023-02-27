import React, { useState } from "react";
import '../../src/app/globals.css'
import { useForm } from 'react-hook-form';
function Membership() {


  const { register, handleSubmit, formState: { errors }, } = useForm();
  const [name, setName] = useState("")


  const handleClick = () => {
    console.info('You clicked the Chip.');
  };

  const handleDelete = () => {
    console.info('You clicked the delete icon.');
  };

  const onSubmit = async (data, e) => {
    e.preventDefault()
    console.log('YYYYYYYYYYYYYYYYYYYYYYYYYYYYYY')
alert('succesfull submitted')
    // console.log(data.location);
    // console.log(data.rent);
    // console.log(data.descrption);
  
    // try{
  

    // }
    // catch{
    //   alert('Something Wrong')
    // }
    // setLoading(false);  
    
   
  };
  return (
//     <div className="flex justify-center items-center">
//     <div className="py-16 px-4 md:px-6 2xl:px-0 flex justify-center items-center 2xl:mx-auto 2xl:container">
//         <div className="flex flex-col justify-start items-start w-full space-y-9">
           

//             <div className="flex flex-col xl:flex-row justify-center xl:justify-between space-y-6 xl:space-y-0 xl:space-x-6 w-full">
           

//                 <div className="p-8 bg-gray-100 flex flex-col lg:w-full xl:w-3/5">
//                     <button className="border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-gray-900 text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-4 rounded w-full">
//                         <div>
//                             <svg className="fill-current" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path
//                                     d="M10.9099 4.27692C9.6499 4.27692 9.1174 4.87817 8.2399 4.87817C7.34021 4.87817 6.65396 4.28129 5.56208 4.28129C4.49333 4.28129 3.35365 4.93379 2.6299 6.04535C1.61365 7.61285 1.78615 10.565 3.43208 13.08C4.02083 13.9804 4.80708 14.99 5.83833 15.001H5.85708C6.75333 15.001 7.01958 14.4141 8.25302 14.4072H8.27177C9.48677 14.4072 9.73052 14.9975 10.623 14.9975H10.6418C11.673 14.9866 12.5015 13.8679 13.0902 12.971C13.514 12.326 13.6715 12.0022 13.9965 11.2725C11.6155 10.3688 11.233 6.99348 13.5877 5.69942C12.869 4.79942 11.859 4.27817 10.9068 4.27817L10.9099 4.27692Z"
//                                     fill="currentColor"
//                                 />
//                                 <path d="M10.6338 1C9.88379 1.05094 9.00879 1.52844 8.49629 2.15188C8.03129 2.71688 7.64879 3.555 7.79879 4.36781H7.85879C8.65754 4.36781 9.47504 3.88688 9.95254 3.27063C10.4125 2.68406 10.7613 1.85281 10.6338 1V1Z" fill="currentColor" />
//                             </svg>
//                         </div>
//                         <div>
//                             <p className="text-base leading-4">Pay</p>
//                         </div>
//                     </button>

//                     <div className="flex flex-row justify-center items-center mt-6">
//                         <hr className="border w-full" />
//                         <p className="flex flex-shrink-0 px-4 text-base leading-4 text-gray-600">or pay with card</p>
//                         <hr className="border w-full" />
//                     </div>

//                     <div className="mt-8">
//                         <input className="border border-gray-300 p-4 rounded w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Email" />
//                     </div>

//                     <label className="mt-8 text-base leading-4 text-gray-800">Card details</label>
//                     <div className="mt-2 flex-col">
//                         <div>
//                             <input className="border rounded-tl rounded-tr border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="0000 1234 6549 15151" />
//                         </div>
//                         <div className="flex-row flex">
//                             <input className="border rounded-bl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="MM/YY" />
//                             <input className="border rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="CVC" />
//                         </div>
//                     </div>

//                     <label className="mt-8 text-base leading-4 text-gray-800">Name on card</label>
//                     <div className="mt-2 flex-col">
//                         <div>
//                             <input className="border rounded border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="email" placeholder="Name on card" />
//                         </div>
//                     </div>

//                     <label className="mt-8 text-base leading-4 text-gray-800">Country or region</label>
//                     <div className="mt-2 flex-col">
//                         <div className="relative">
//                             <button className="text-left border rounded-tr rounded-tl border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600 bg-gray-900" type="email">
//                                 {country}
//                             </button>
//                             <svg onClick={() => setMenu(!menu)} className={"transform  cursor-pointer absolute top-4 right-4 " + (menu ? "rotate-180" : "")} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                 <path d="M3.5 5.75L8 10.25L12.5 5.75" stroke="#27272A" strokeLinecap="round" strokeLinejoin="round" />
//                             </svg>
//                             <div className={"mt-1 absolute z-10 w-full flex bg-gray-50 justify-start flex-col text-gray-600 " + (menu ? "block" : "hidden")}>
//                                 {countries.map((country) => (
//                                     <div key={country} className="cursor-pointer hover:bg-gray-800 hover:text-white px-4 py-2" onClick={changeText}>
//                                         {country}
//                                     </div>
//                                 ))}
//                             </div>
//                         </div>
//                         <input className="border rounded-bl rounded-br border-gray-300 p-4 w-full text-base leading-4 placeholder-gray-600 text-gray-600" type="text" placeholder="ZIP" />
//                     </div>

//                     <button className="mt-8 border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-gray-900 text-white hover:text-gray-900 flex justify-center items-center py-4 rounded w-full">
//                         <div>
//                             <p className="text-base leading-4">Pay $54652</p>
//                         </div>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     </div>
// </div>
<div className="bg-neutral-900">
  
<section class="max-w-4xl p-6 mx-auto rounded-md shadow-md dark:bg-gray-800 mt-20">
    <h1 class="text-xl font-serif  capitalize dark:">Checkouts</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
        <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
                <label class=" dark:text-gray-200" for="firstName">First Name</label>
                <input {...register('firstName', { required: true,  })} id="firstName" type="text" 
                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-900 border 
                border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 
                dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                {errors.firstName && <p className='text-xs text-red-500'>first Name is required.</p>}
            </div>
            <div>
                <label class=" dark:text-gray-200" for="lastName">Last Name</label>
                <input {...register('lastName', { required: true,  })} id="lastName" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                {errors.lastName && <p className='text-xs text-red-500'>last Name is required.</p>}
            </div>
            <div>
                <label class=" dark:text-gray-200" for="emailAddress">Email Address</label>
                <input {...register('emailAddress', { required: true,  })} id="emailAddress" type="email" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                {errors.emailAddress && <p className='text-xs text-red-500'>emailAddress is required.</p>}
            </div>

            <div>
                <label class=" dark:text-gray-200" for="phone">phone number</label>
                <input {...register('phone', { required: true,  })} id="phone" type="phone" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                {errors.phone && <p className='text-xs text-red-500'>phone is required.</p>}
            </div>
            <div>
                <label class=" dark:text-gray-200" for="cardnumber">card number</label>
                <input {...register('cardnumber', { required: true,  })} id="cardnumber" type="card" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                {errors.cardnumber && <p className='text-xs text-red-500'>card number is required.</p>}
            </div>
            <div>
                <label class=" dark:text-gray-200" for="date">Expiration date</label>
                <input {...register('date', { required: true,  })} id="date" type="date" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                {errors.date && <p className='text-xs text-red-500'>date is required.</p>}
            </div>
            <div>
                <label class=" dark:text-gray-200" for="CVC">CVC</label>
                <input {...register('CVC', { required: true,  })} id="CVC" type="CVC" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                {errors.CVC && <p className='text-xs text-red-500'>CVC is required.</p>}
            </div>
          
            <div>
                <label className="text-white-700 dark:text-gray-200" for="location"> Billing Address</label>
                <input {...register('location', { required: true,  })} id="location" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-gray-900 border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"/>
                {errors.location && <p className='text-xs text-red-500'>location is required.</p>}
            </div>
           

         
          
        </div>

        <div class="flex justify-end mt-6">
            {/* <input type="submit" class="px-6 py-2 leading-5  transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</input> */}
            {/* <input type="submit" className="bg-orange-600 hover:bg-orange-600 flex justify-center items-center  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" /> */}
            <button
            className="bg-orange-600 hover:bg-orange-600 flex justify-center items-center  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="submit"
   
  >
   Pay $30.99

  </button>
        </div>
    </form>
</section> 
</div>
  )
}

export default Membership