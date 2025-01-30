'use client'
import Image from 'next/image';
import React, { useMemo } from 'react'
import Marquee from 'react-fast-marquee'

const Marquees = () => {
 

    const loopimages = [
        { image: "/loop/1.avif", name: "Amazon" },
        { image: "/loop/2.avif", name: "Raj Shamani" },
        { image: "/loop/3.avif", name: "Sharan" },
        { image: "/loop/4.avif", name: "Acer" },
        { image: "/loop/5.avif", name: "Mamaearth" },
        { image: "/loop/6.avif", name: "Social Beat" },
        { image: "/loop/7.avif", name: "Vavo Media" },
        { image: "/loop/8.avif", name: "Plix" },
        { image: "/loop/9.avif", name: "Vaibhav Sisinty" },
        { image: "/loop/10.avif", name: "HrOne" },
        { image: "/loop/1.avif", name: "Amazon" },
        { image: "/loop/2.avif", name: "Raj Shamani" },
        { image: "/loop/3.avif", name: "Sharan" },
        { image: "/loop/4.avif", name: "Acer" },
        { image: "/loop/5.avif", name: "Mamaearth" },
        { image: "/loop/6.avif", name: "Social Beat" },
        { image: "/loop/7.avif", name: "Vavo Media" },
        { image: "/loop/8.avif", name: "Plix" },
        { image: "/loop/9.avif", name: "Vaibhav Sisinty" },
        { image: "/loop/10.avif", name: "HrOne" },
        { image: "/loop/1.avif", name: "Amazon" },
        { image: "/loop/2.avif", name: "Raj Shamani" },
        { image: "/loop/3.avif", name: "Sharan" },
        { image: "/loop/4.avif", name: "Acer" },
        { image: "/loop/5.avif", name: "Mamaearth" },
        { image: "/loop/6.avif", name: "Social Beat" },
        { image: "/loop/7.avif", name: "Vavo Media" },
        { image: "/loop/8.avif", name: "Plix" },
        { image: "/loop/9.avif", name: "Vaibhav Sisinty" },
        { image: "/loop/10.avif", name: "HrOne" },
        { image: "/loop/1.avif", name: "Amazon" },
        { image: "/loop/2.avif", name: "Raj Shamani" },
        { image: "/loop/3.avif", name: "Sharan" },
        { image: "/loop/4.avif", name: "Acer" },
        { image: "/loop/5.avif", name: "Mamaearth" },
        { image: "/loop/6.avif", name: "Social Beat" },
        { image: "/loop/7.avif", name: "Vavo Media" },
        { image: "/loop/8.avif", name: "Plix" },
        { image: "/loop/9.avif", name: "Vaibhav Sisinty" },
        { image: "/loop/10.avif", name: "HrOne" },
        { image: "/loop/1.avif", name: "Amazon" },
        { image: "/loop/2.avif", name: "Raj Shamani" },
        { image: "/loop/3.avif", name: "Sharan" },
        { image: "/loop/4.avif", name: "Acer" },
        { image: "/loop/5.avif", name: "Mamaearth" },
        { image: "/loop/6.avif", name: "Social Beat" },
        { image: "/loop/7.avif", name: "Vavo Media" },
        { image: "/loop/8.avif", name: "Plix" },
        { image: "/loop/9.avif", name: "Vaibhav Sisinty" },
        { image: "/loop/10.avif", name: "HrOne" },
        { image: "/loop/1.avif", name: "Amazon" },
        { image: "/loop/2.avif", name: "Raj Shamani" },
        { image: "/loop/3.avif", name: "Sharan" },
        { image: "/loop/4.avif", name: "Acer" },
        { image: "/loop/5.avif", name: "Mamaearth" },
        { image: "/loop/6.avif", name: "Social Beat" },
        { image: "/loop/7.avif", name: "Vavo Media" },
        { image: "/loop/8.avif", name: "Plix" },
        { image: "/loop/9.avif", name: "Vaibhav Sisinty" },
        { image: "/loop/10.avif", name: "HrOne" },
        { image: "/loop/1.avif", name: "Amazon" },
        { image: "/loop/2.avif", name: "Raj Shamani" },
        { image: "/loop/3.avif", name: "Sharan" },
        { image: "/loop/4.avif", name: "Acer" },
        { image: "/loop/5.avif", name: "Mamaearth" },
        { image: "/loop/6.avif", name: "Social Beat" },
        { image: "/loop/7.avif", name: "Vavo Media" },
        { image: "/loop/8.avif", name: "Plix" },
        { image: "/loop/9.avif", name: "Vaibhav Sisinty" },
        { image: "/loop/10.avif", name: "HrOne" },
        { image: "/loop/1.avif", name: "Amazon" },
        { image: "/loop/2.avif", name: "Raj Shamani" },
        { image: "/loop/3.avif", name: "Sharan" },
        { image: "/loop/4.avif", name: "Acer" },
        { image: "/loop/5.avif", name: "Mamaearth" },
        { image: "/loop/6.avif", name: "Social Beat" },
        { image: "/loop/7.avif", name: "Vavo Media" },
        { image: "/loop/8.avif", name: "Plix" },
        { image: "/loop/9.avif", name: "Vaibhav Sisinty" },
        { image: "/loop/10.avif", name: "HrOne" },
        
      ];


      const marqueeContent = useMemo(() => (
        loopimages.map((i: any, ind: number) => (
          <div key={ind} className="flex flex-col mx-6 py-10 flex-shrink-0 gap-4">
            <Image src={i.image} alt="" width={250} height={250} className="w-28  hover:scale-110 cursor-pointer h-28 rounded-full object-cover" />
            {/* <h1 className="text-center">{i.name}</h1> */}
          </div>
        ))
      ), [loopimages]); // Only re-calculate when loopimages changes


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

<Marquee autoFill loop={0} speed={100} pauseOnHover>
{marqueeContent}
</Marquee>

     




      
      
    
     


  )
}

export default Marquees