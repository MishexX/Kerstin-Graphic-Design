'use client'
import Marq from "@/components/Marq";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Home() {
 


  const [openModal, setopenModal] = useState(false);
  
    const router = useRouter()
  
    // const { data: session, status } = useSession();
    // mobile ui functionality 
  
  
  
    const [clickedTab, setclickedTab] = useState("about") 
  
  
    // const [openModal, setopenModal] = useState(false);
  
      const absoluteElementRef = useRef<HTMLDivElement>(null);
  
  
    useEffect(() => {
      const handleClickOutside = (event:MouseEvent) => {
        if (
          absoluteElementRef.current &&
          !absoluteElementRef.current?.contains(event.target as Node) &&
          openModal
        ) {
          setopenModal(false); // Call your function to close the modal or trigger any other action
        }
      };
  
      // const handleScroll = () => {
      //   if (openModal) {
      //     setopenModal(false); // Call your function to close the modal or trigger any other action
      //   }
      // };
  
      document.addEventListener("click", handleClickOutside);
      // window.addEventListener("scroll", handleScroll);
  
      return () => {
        document.removeEventListener("click", handleClickOutside);
        // window.removeEventListener("scroll", handleScroll);
      };
    }, [openModal]);
  


  return (
    <div className="   w-full    overflow-hidden   mx-auto">


     {/* test case  */}

     <div className=" w-full  2xl:h-fit  h-full flex flex-col">
          

          {/* HEADER  */}

          <div className=" max-w-7xl p-4  lg:flex hidden  mx-auto w-full justify-between  flex-wrap items-center">

            {/* <Image src="/logotext.png" alt="" width={1000} height={1000} className=" w-36 flex    h-fit object-cover" />  */}
            {/* <Image src="/logobritish.png" alt="" width={1000} height={1000} className=" w-16 lg:flex hidden   h-fit object-cover" />  */}
            {/* <Image src="/logoN.png" alt="" width={2000} height={2000} className=" w16 w-36 lg:flex hidden   h-fit object-cover" />  */}
                 <Image src="/logocorrect.PNG" alt="" width={2000} height={2000} className=" w16 w-36 lg:flex hidden   h-fit object-cover" /> 
            {/* <Image src="/logomainblack.png" alt="" width={1000} height={1000} className=" w-28  flex lg:hidden   h-fit object-cover" />  */}

            <div className="    font-poppins  font-medium gap-10 lg:flex hidden items-center"> 
            {/* onClick={() => scrollToSection(servicesWeOfferSection)}  */}
            {/* decoration-[#4482FF] */}
          
              <h1  onClick={() => router.push('/')}  className=" cursor-pointer text-black  "  >Home </h1>
              <h1  onClick={() => router.push('/courses')}  className=" cursor-pointer text-black  "  >About Me </h1>
              <h1  onClick={() => router.push('/about')}  className=" underline decoraton-2 underline-offset-4 decoration-white cursor-pointer text-black  "  >Gallery </h1>

              
            </div>


            {/* <div> 
           
              <a href="https://wa.me/+94706548855" > 
              <Button className=" rounded-md  lg:flex hidden  font-poppinsreg5 px-4 font-medium py-4 text-white  bg-[#4482FF]  transition-colors  delay-75 duration-75 ease-in">Chat on WhatsApp </Button>
              </a>
            </div> */}

          </div>


          {/* border line  */}
          <div className="border-b pt-2 lg:flex hidden w-full ">


          </div>
          {/* border line  */}


          <div className="  w-full   lg:hidden p-2 flex justify-between items-center">
      
      {/* <Image src={logoText} alt="" width={500} height={500}  className=" w-36 h-fit object-cover" /> */}
      {/* <Image src="/logobritish.png" alt="" width={1000} height={1000} className=" w-16    h-fit object-cover" />  */}
      {/* <Image src="/logoN.png" alt="" width={2000} height={2000} className=" w-24    h-fit object-cover" />  */}
 <Image src="/logocorrect.PNG"  alt="" width={2000} height={2000} className=" w-24    h-fit object-cover" /> 

        <svg onClick={ () => setopenModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-black">
<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>

        
      </div>


      {/* the hamburger sheet  */}

<div
  ref={absoluteElementRef}
  className={` lg:hidden fixed transition-all  overflow-y-auto  z-50   ease-in-out   duration-500 top-0  bg-[#141823] ${
    openModal ? "right-0 w-[70%]" : " -right-full w-0"
  }  h-full `}
>
  <div className=" px-3 py-5">
    <div className=" w-full flex border-b pb-3 border-white justify-end">
      {/* <h1 className=" text-2xl"> FILTER </h1> */}

      <svg
        onClick={() => setopenModal(false)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.9"
        stroke="currentColor"
        className="w-6 h-6 text-red-400 bg-white rounded-full p-[2px]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </div>

    {/* dropdowns  */}

    <div className=" w-full       overflow-y-auto     ">
      {/* showDivider={false} */}

    

        <div className=" mt-3 flex flex-col gap-3"> 
        <h1 onClick={() =>  { router.push('/') ; setclickedTab("home") }   }  className={` text-center ${clickedTab === "home" ? "bg-[#FF385C]" :"bg-[#2B2F39]"} font-poppinsreg py-2 rounded-md border  text-white`}> Home </h1>
        <h1 onClick={() =>  { router.push('/courses') ; setclickedTab("courses") }  } className={` text-center ${clickedTab === "courses" ? "bg-[#FF385C]" :"bg-[#2B2F39]"} font-poppinsreg py-2 rounded-md border  text-white`}> About Me </h1>
        <h1 onClick={() =>  { router.push('/about') ; setclickedTab("about") }  } className={` text-center ${clickedTab === "about" ? "bg-[#FF385C]" :"bg-[#2B2F39]"} font-poppinsreg py-2 rounded-md border  text-white`}> Gallery </h1>
   
    
    

     
     
     </div>

    
  

    
    
    </div>

    {/* dropdowns  */}
  </div>
</div>
{/* the hamburger sheet  */}


       


          {/* HEADER  */}

           

          

          
           </div> 

     {/* test case  */}





     {/* ABOUT ME  */}

     <div className=" bg-[#1A1819] py-10  ">

      <div className="  max-w-6xl mx-auto w-full">

      <div className=" grid   lg:grid-cols-2 gap-6 lg:gap-10 px-4 items-center justify-center grid-cols-1">
        

        <Image src={'/cloth.jpg'} alt="" width={2000} height={2000} className=" lg:w-full w-full  rounded-md sm:w-[60%] mx-auto object-cover h-full" />


        <div className=" flex flex-col gap-5">

          <h1 className="  font-medium text-4xl    lg:text-left text-center font-mono text-[#DFD9C1]">Cut your social</h1>
          <p className=" font-poppins font-medium   lg:text-left text-center text-3xl  lg:max-w-full max-w-xl mx-auto  lg:text-5xl  text-[#DFD9C1]">
          {`To Empower Creative Entreprenueurs To Build A Business Without The Overwhelm Of Social Media`}
            </p>

            <div className=" flex  lg:justify-normal justify-center">
              <button className=" px-6 py-2 rounded-md bg-[#DFD9C1] text-center text-black font-semibold"> Buy Now </button>
            </div>

        </div>


      </div>

      </div>

   

     </div>
     {/* ABOUT ME  */}


     <div className=" py-10  bg-[#E3DBC4]">

<Marq />

</div>


     {/* PHOTO GALLERY  */}
     <div className="  bg-[#EEF0F4] py-10 w-full ">
      

      <div className=" max-w-6xl  px-4 mx-auto w-full">

        <div className=" flex  w-full  justify-between  items-center">
          <h1 className=" font-poppins font-semibold text-xl md:text-4xl">  Photo Gallery </h1>
          <h1 className=" font-poppins font-normal underline  md:text-base text-sm  cursor-pointer">  View all images </h1>
        </div>


        <div className=" grid  mt-5 lg:mt-8 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-5">
          {


[1,2,3,4,5,6,7,8].map( (e,i) => (

  <Image width={500} height={500} alt="" className=" w-fit h-fit cursor-pointer hover:scale-105 transition-transform   duration-200  ease-in rounded-md" src={'/car.avif'} />

) ) 

          }

         

        </div>

      </div>
       
      
     </div>
     {/* PHOTO GALLERY  */}

      

     


    
    </div>
  );
}
