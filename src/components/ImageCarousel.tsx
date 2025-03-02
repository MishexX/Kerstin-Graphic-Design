"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react';
import { useState } from "react";
import Image from "next/image";



const images = [
  "/projekt/1.jpg",
  "/projekt/2.jpg",
  "/projekt/3.jpg",
  "/projekt/4.jpg",
  "/projekt/5.jpg",
  "/projekt/6.jpg",
  "/projekt/7.jpg",
  "/projekt/8.jpg",

];

export default function ImageCarousel() {

         const [selectedProduct, setSelectedProduct] = useState<any>(null);
          const { isOpen, onOpen, onOpenChange , onClose } = useDisclosure();
    
  return (
    <>
    <div className="relative w-full flex items-center p-4 gap-5  max-w-7xl  2xl:max-w-[80%] mx-auto">
      {/* Swiper Container */}

      {/* <button className="prev-btn h-fit  transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-10">
         prev
      </button> */}


 

<div className=" w-15 h-15 rounded-full flex justify-center items-center"> 

     


<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="prev-btn select-none  cursor-pointer  bg-gray-800 text-white  rounded-full p-1  size-10 z-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
</svg>


</div>



      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1} // Default for small screens
        breakpoints={{
          640: { slidesPerView: 2 }, // Medium screens
          1024: { slidesPerView: 4 }, // Large screens
        }}
        navigation={{
          nextEl: ".next-btn",
          prevEl: ".prev-btn",
        }}
        loop={true} // Infinite scrolling
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <Image onClick={() =>  { setSelectedProduct(src)  ; onOpen();   } } width={2000} height={2000} src={src} alt={`Slide ${index + 1}`} className="w-full h-48 cursor-pointer object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>

      
   
        <div>

        </div>

        <div className=" w-10 h-10 rounded-full flex justify-center items-center"> 

     
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className=" next-btn select-none cursor-pointer   bg-gray-800 text-white  rounded-full p-1  size-10 z-10 ">
  <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
</svg>

</div>


      {/* Navigation Buttons */}
   
    </div>




    <Modal
placement="center"
        hideCloseButton={true}
       motionProps={{
        variants: {
          enter: {
            y: 0,
            opacity: 1,
            transition: {
              duration: 0.3,
              ease: "easeOut",
            },
          },
          exit: {
            y: -20,
            opacity: 0,
            transition: {
              duration: 0.2,
              ease: "easeIn",
            },
          },
        },
      }}
      
      size="xl" isOpen={isOpen} onOpenChange={onOpenChange} backdrop="blur">
        <ModalContent>
          {() => (
            <>
              {/* <ModalHeader className="text-lg font-bold">{selectedProduct?.title}</ModalHeader> */}
              <ModalBody className=" p-0">

              <button 
              onClick={() => onClose()}
              className="absolute top-4 z-50 right-4 bg-gray-800 hover:bg-gray-900 text-white w-8 h-8 flex items-center justify-center rounded-full s"
            >
            X
            </button>
            
          
              <Image  
            width={500}
            height={500}
            src={selectedProduct}
            alt=""
            className="w-full  h-full object-cover rounded-t-xl"
          />
                  
                
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

    </>
  );
}
