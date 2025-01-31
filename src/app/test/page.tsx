'use client'
import ContactForm from '@/components/ContactForm'
import Marquees from '@/components/Marquee'
import Works from '@/components/Works'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'

const Page = () => {

     const router = useRouter()
     

     const services = [
        {
          title: "Branding & Corporate Design",
          description:
            "Von Logo-Design bis zur visuellen Identität – ich kreiere einen Look, der bleibt.",
          imgSrc: "/car.avif", // Replace with actual image path
        },
        {
          title: "Printdesign",
          description:
            "Flyer, Broschüren, Visitenkarten & Co. – hochwertig gestaltet, um Eindruck zu hinterlassen.",
            imgSrc: "/car.avif" // Replace with actual image path
        },
        {
          title: "Social Media Design",
          description:
            "Designs, die deine Online-Präsenz pushen und echte Aufmerksamkeit erzeugen.",
            imgSrc: "/car.avif" // Replace with actual image path
        },
      ];
  const [openModal, setopenModal] = useState(false);


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


    //   scroll to section 
    
  const scrollSectionRef = useRef<HTMLDivElement>(null);

 

  const aboutMe = useRef<HTMLDivElement>(null);
  const leistungen = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const contactForm = useRef<HTMLDivElement>(null);


  const scrollToSection = (ref:any) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };




    //   scroll to section 
    

  return (
    <div className="relative overflow-hidden  flex flex-col"
     >

   
                  <div className=' relative'> 
            
            <Image src={'/Background.jpg'} alt='' width={5000} height={5000} className=' w-full   h-screen    object-cover object-right' />
                     
                     <div className=' bg-black top-0  opacity-50     absolute w-full h-full'>   </div>
            </div>
      
            {/* lg:flex hidden */}
            <div className="  p-6 z-50 absolute top-0  flex   w-full justify-between  flex-wrap items-center">
              

                    <div className='max-w-7xl  mx-auto w-full'> 

                               <div className="  w-full   lg:hidden  flex justify-end items-center">
                              
                              {/* <Image src={logoText} alt="" width={500} height={500}  className=" w-36 h-fit object-cover" /> */}
                              {/* <Image src="/logobritish.png" alt="" width={1000} height={1000} className=" w-16    h-fit object-cover" />  */}
                              {/* <Image src="/logoN.png" alt="" width={2000} height={2000} className=" w-24    h-fit object-cover" />  */}
                         {/* <Image src="/logocorrect.PNG"  alt="" width={2000} height={2000} className=" w-24    h-fit object-cover" />  */}
                        
                                <svg onClick={ () => setopenModal(true)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 text-white">
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
        <h1 onClick={() =>  { setclickedTab("home") }   }  className={` text-center ${clickedTab === "home" ? "bg-[#FF385C]" :"bg-[#2B2F39]"} font-poppinsreg py-2 rounded-md border  text-white`}> Home </h1>
        <h1 onClick={() =>  {  setclickedTab("courses") }  } className={` text-center ${clickedTab === "courses" ? "bg-[#FF385C]" :"bg-[#2B2F39]"} font-poppinsreg py-2 rounded-md border  text-white`}> About Me </h1>
        <h1 onClick={() =>  { setclickedTab("about") }  } className={` text-center ${clickedTab === "about" ? "bg-[#FF385C]" :"bg-[#2B2F39]"} font-poppinsreg py-2 rounded-md border  text-white`}> Gallery </h1>
   
    
    

     
     
     </div>

    
  

    
    
    </div>

    {/* dropdowns  */}
  </div>
</div>
{/* the hamburger sheet  */}


                   
              <div className=' w-[50%]  '>

            
                  
              {/* lg:flex hidden */}
                  <div className="    font-poppins text-xl        font-normal gap-10 lg:flex hidden   items-center"> 
                         
                         <Image src="/textLogo.png" alt='' className=' w-36 h-fit object-cover' width={500} height={500} />
                
                    <h1 onClick={() => scrollToSection(aboutMe)}   className=" cursor-pointer text-white   flex-shrink-0  "  >ÜBER MICH </h1>
                    <h1 onClick={() => scrollToSection(leistungen)}  className=" cursor-pointer text-white   flex-shrink-0  "  >LEISTUNGEN </h1>
                    <h1    className="  cursor-pointer text-white  flex-shrink-0   "  >PROJECTE </h1>
                    <h1    className="  cursor-pointer border rounded-full   flex-shrink-0 px-2 py-1 text-white  "  >JETZT ANFRAGEN </h1>
      
                    
                  </div>
      

              </div>
                
              </div>
      
              
      
                </div>

   
      {/* Navbar - Hidden on md and below */}
 

      {/* Content */}
      <div className=' absolute overflow-hidden top-0 flex justify-center items-center h-screen w-full'>
      <div className="max-w-7xl  gap-5   lg:mt-0 mt-0 md:mt-10 z-40 w-full flex flex-col  lg:grid lg:grid-cols-2 md:grid-cols-2  items-center px-6 md:px-12">
        
        {/* Left Section */}
        <div className="flex flex-col space-y-4 text-white w-full ">
          {/* Logos */}
          <div className="flex items-center  mx-auto  gap-3  ">
            <Image className=' w-[80%] mx-auto object-cover' src="/sitelogo.png" width={500} height={500} alt="Logo 1" />
            {/* <Image className=' w-24 lg:w-64 object-cover' src="/company1.jfif" width={500} height={500} alt="Logo 2" /> */}
          </div>
          
          <p className="text-2xl max-w-md text-center mx-auto font-light">
            Durchdachtes Design, klare Botschaften – damit Deine Ideen sichtbar werden.
          </p>
          
          <div className=' flex justify-center'>

       
          <button className="border  border-white px-6 py-2 text-white rounded-full">
            Jetzt anfragen
          </button>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
          <a href="#"><img src="/whtsapp.png" alt="LinkedIn" className="w-fit" /></a>
          <a href="#"><img src="/insta.png" alt="Facebook" className="w-fit" /></a>
            <a href="#"><img src="/linkedin.png" alt="Instagram" className="w-fit" /></a>
          
   
          </div>
        </div>

        {/* Right Section (Image Covering Full Height) */}
        {/* <div className="flex w-full ">
          <Image src="/person.avif" width={600} height={500} alt="Right Section Image" className="h-full w-48  md:w-[40%]  lg:mx-0 mx-auto  lg:w-full object-cover" />
        </div> */}

        
      </div>


      </div>

        


        {/* THE SECTION THAT DOESNT TOUCH THE IMAGE BACKGROUND  */}

      

      {/* <div className=' w-full relative'>
        
                     

            <Image  width={1000} height={1000}  src={'/secondbg.png'} alt='' className=' w-full     object-cover' />

       


       
        <div className=' flex absolute top-20   w-full '>
        
        <div className=' flex flex-col justify-center items-center w-full'>
        <h1 className=' text-5xl text-center  rounded-full px-4 py-2 border-2 border-black'> LEISTUNGEN</h1>
        


        <div className="grid px-4  mt-10 max-w-4xl mx-auto grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg h-full rounded-2xl pb-5 overflow-hidden text-center "
          >
            <div className="w-full h-48">
              <Image
                src={service.imgSrc}
                alt={service.title}
                width={500}
                height={300}
                className="w-full h-full object-cover rounded-t-xl"
              />
            </div>
            <h3 className="text-lg  max-w-36 text-center  mx-auto font-semibold mt-4">{service.title}</h3>
            <p className="text-gray-600 mt-2 px-1">{service.description}</p>
          </div>
        ))}
      </div>
     
       
       
        </div>
     
        </div>

       




      </div> */}

<div    ref={leistungen}    className="w-full relative bg-cover bg-center " style={{ backgroundImage: "url('/secondbg.png')" }}>
  
  {/* Content Section */}
  <div className="flex flex-col justify-center items-center w-full relative z-10 py-16">
    <h1 className="text-5xl text-center rounded-full px-4 py-2 border-2 border-black b">
      LEISTUNGEN
    </h1>

    {/* Grid Items */}
    <div className="grid px-4 mt-10 max-w-4xl mx-auto grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
      {services.map((service, index) => (
        <div key={index} className="bg-white shadow-lg h-full rounded-2xl pb-5 overflow-hidden text-center">
          <div className="w-full h-48">
            <Image
              src={service.imgSrc}
              alt={service.title}
              width={500}
              height={300}
              className="w-full h-full object-cover rounded-t-xl"
            />
          </div>
          <h3 className="text-lg max-w-36 text-center mx-auto font-semibold mt-4">{service.title}</h3>
          <p className="text-gray-600 mt-2 px-1">{service.description}</p>
        </div>
      ))}
    </div>
    {/* Grid Items End */}
  </div>
  
</div>


        {/* THE SECTION THAT DOESNT TOUCH THE IMAGE BACKGROUND  */}


   

  <div> 


   <Marquees />
   </div>




   {/* MY WORKS  */}

   <div className=' bg-[#F1F1F1] border-black/10  border-b-2 w-full  py-20'>
    <div className='flex justify-center'> 

   <h1 className="text-5xl text-center w-fit rounded-full px-4 py-2 border-2 border-black b">
     PROJECTE
    </h1>


          
    </div>

  <div className=' mt-5'>

 
    <Works />

    </div>
   </div>
   {/* MY WORKS  */}



   {/* ABOUT ME  */}
    <div  ref={aboutMe} className="  py-10 bg-[#F2F2F2]  ">
   
         <div className="  max-w-6xl mx-auto w-full">

            
   
         <div className=" grid lg:grid-cols-2 gap-6 lg:gap-6 px-4 items-center justify-center grid-cols-1">
           
   
           <Image src={'/aboutmereal.png'} alt="" width={2000} height={2000} className=" lg:w-[90%] w-full   rounded-md sm:w-[60%] mx-auto object-cover h-full" />
   
   
           <div className=" flex flex-col gap-5">
           
           <div className=' w-fit mx-auto '>

      
           <h1 className="text-6xl text-center rounded-full px-4 py-2 border-2 border-black b">
           ÜBER MICH
    </h1>
    </div>

    <div className=' flex justify-center items-center gap-2'>
     
     <div className=' w-2    h-2    bg-[#959e9d] rounded-full'>   </div>

      <h1 className=' font-poppins text-lg font-medium text-[#959e9d] text-center'>  Kreativität trifft Strategie</h1>

      <div className=' w-2   h-2   bg-[#959e9d] rounded-full'>   </div>
      </div>      

              <div className=' flex flex-col gap-5'> 

              <p className="   font-medium font-fontSanz  text-center  lg:max-w-sm  max-w-xl mx-auto  text-lg  text-black}">
             {`Hey, ich bin `} <span className="relative " > Kerstin Morokutti  <span> 
              
              
              <Image src="/line1.png" alt='' width={1000} height={1000} className=' absolute    top-3 scale-150 right-0 z-10 w-full h-full object-cover' />
              
                </span>  </span>    {`– Grafikdesignerin aus Wien. Ich entwickle`}
                
                
                  <span className="relative   " > Designs,
                     
                  <span> 
              
              
              <Image src="/rnd.png" alt='' width={1000} height={1000} className=' absolute    top-0  left-0 z-20 w-24 h-24 object-cover' />
              
                </span> 

                    
                    </span>  
                  
                  
                  
                  {`die nicht nur gut aussehen, sondern Deine Marke spürbar nach vorne bringen.`}
               </p>

         

            



             <p className="   font-medium font-fontSanz   text-center  lg:max-w-sm  max-w-xl mx-auto  text-lg  text-black">
             {`Egal ob Branding, Print oder Digital – ich mache deine Vision sichtbar, einprägsam und wirkungsvoll.`}
               </p>

              


             <p className="   font-medium  font-fontSanz  text-center  lg:max-w-sm  max-w-xl mx-auto  text-lg  text-black">
             {`Lass uns gemeinsam etwas schaffen, das Eindruck hinterlässt!`}
               </p>

              


      

             
   

   

               </div>
            

             {/* <Image alt='' width={10000} height={10000} src="/tee.png" className=' w-full h-full object-contain'  /> */}
   
           </div>
   
   
         </div>
   
         </div>
   
      
   
        </div>
        {/* ABOUT ME  */}
   {/* ABOUT ME  */}






   {/* CONTACT US FORM   */}


   <ContactForm />
   
   {/* CONTACT US FORM   */}












   {/* FOOTER FOOTER  */}
 <div className="bg-[#141414] mtt-20 pt-16 pb-8 flex  flex-col justify-center items-center w-full ">
      <div className=" max-w-7xl   flex lg:flex-row  lg:gap-0 gap-8 flex-col lg:justify-between  lg:px-10 px-2 lg:p-2 h-full w-full">
        <div className=" flex  justify-center  flex-col gap-1">
        
          <Image alt='' src={'/logomain.png'} className=' w-[30%] h-fit object-cover' width={1000} height={1000} />
        </div>


        <div className=" flex flex-col gap-2">
          <h1 className={` font-poppinsreg5 text-xl text-gray-200  `}>
            {" "}
            Follow Us
          </h1>
          <div
            className={`  font-poppinsreg mt-1 lg:text-base text-sm flex flex-col gap-1  text-white `}
          >
            <a  className=" cursor-pointer"> Facebook </a>
             <a  > <h1 className=" cursor-pointer"> Instagram </h1> </a> 
            {/* <h1 className=""> Twitter </h1> */}
            <a  className=" cursor-pointer">  <h1 className=""> TikTok </h1>  </a>
            {/* <h1> FAQs </h1> */}
          </div>
        </div>

        <div className=" flex flex-col gap-2">
          <h1 className={`  font-poppinsreg5 text-xl text-gray-200  `}>
            {" "}
       Impressum
          </h1>
          <div
            className={` font-poppinsreg max-w-xs mt-1  lg:text-base text-sm flex flex-col gap-5 text-white `}
          >
            {/* onClick={() => setAboutUsCRT(true) } */}

            {/* <h1> Explore Countries </h1>
            <h1> Our Role </h1>
            <h1> Partner Program </h1> */}

 <h1 className=' underline cursor-pointer'> View Impressum </h1>
            
          </div>
        </div>
        {/* <div className=" flex flex-col gap-2">
          <h1 className={`  font-poppinsreg5 text-xl text-gray-200  `}>
            {" "}
            Get in touch
          </h1>
          <div
            className={`  font-poppinsreg lg:text-base text-sm flex flex-col gap-1  text-white `}
          >
            <h1> Contact </h1>
            <h1> Press </h1>
            <h1> Knowledge Center </h1>
            <h1> Guidelines </h1>
          
          </div>
        </div> */}
  
      </div>

      <div className=" border-b w-full border-white border-opacity-10 mt-4 ">
        {" "}
      </div>

      <div className=" max-w-7xl text-white px-2 lg:px-10 gap-6 mt-2 flex md:flex-row flex-col w-full  justify-center">
        {/* <div
          className={`  font-poppinsreg lg:text-base text-sm  flex    gap-2 `}
        >
          <h1> Privacy Policy </h1>
          <h1> Term & Condition </h1>
        </div> */}
        <h1 className={` font-poppinsreg mt-3 lg:text-base text-sm`}>
          {" "}
          &copy; 2025 New website. All Rights Reserved.{" "}
        </h1>
      </div>
    </div>
 {/* FOOTER FOOTER  */}





    </div>
  )
}

export default Page