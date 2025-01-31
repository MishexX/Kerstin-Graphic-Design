'use client'
import { Modal, ModalBody, ModalContent, useDisclosure } from '@heroui/react';
import Image from 'next/image';
import React, { useMemo, useState } from 'react'
import Marquee from 'react-fast-marquee'

const Works = () => {
 

    const loopimages = [
        { image: "/car.avif" },
        { image: "/car.avif" },
        { image: "/car.avif" },
        { image: "/car.avif" },
        { image: "/car.avif" },
        { image: "/car.avif" },
        { image: "/car.avif" },
        { image: "/car.avif" },
        { image: "/car.avif" },
        { image: "/car.avif" },
      

     
        
      ];


      const marqueeContent = useMemo(() => (
        loopimages.map((i: any, ind: number) => (
          <div key={ind} className="flex flex-col mx-6 py-10 flex-shrink-0 gap-4">
            <Image onClick={() =>  { setSelectedProduct(i)  ; onOpen();   } } src={i.image} alt="" width={250} height={250} className="w-48  hover:scale-110 cursor-pointer h-fit  rounded-md object-cover" />
            {/* <h1 className="text-center">{i.name}</h1> */}
          </div>
        ))
      ), [loopimages]); // Only re-calculate when loopimages changes



      const [selectedProduct, setSelectedProduct] = useState<any>(null);
      const { isOpen, onOpen, onOpenChange , onClose } = useDisclosure();


  return (
   
    
      
        
//  <Marquee autoFill={true} loop={0} speed={100} pauseOnHover={true} className="">

//  {
 
//  loopimages.map( (i:any,ind:number) => (

//   <div   key={ind} className=" flex flex-col mx-6 flex-shrink-0 gap-4">

//   <Image src={i.image}  alt="" width={250} height={250} className=" w-28 h-28 rounded-full object-cover" />
//     <h1 className="text-center">  {i.name} </h1>
//   </div>

//  ))  
 
 
//  }
    
//         </Marquee>

<>


<Marquee autoFill loop={0} speed={100} pauseOnHover>
{marqueeContent}
</Marquee>

     



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
            src={selectedProduct.image}
            alt=""
            className="w-full h-64 object-cover rounded-t-xl"
          />
                  
                
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>

</>








      
      
    
     


  )
}

export default Works