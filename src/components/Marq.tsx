'use client'
import Image from 'next/image';
import React from 'react'


const Marq = () => {

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
      
  return (

    <div className="overflow-hidden mt-5">
      <div className="flex items-center space-x-16 animate-scrollz">
         {
       
       loopimages.map( (i:any,ind:number) => (
      
        <div   key={ind} className=" flex flex-col mx-6 flex-shrink-0 gap-4">
      
        <Image src={i.image}  alt="" width={250} height={250} className=" w-24 h-24 rounded-full object-cover" />
          {/* <h1 className="text-center">  {i.name} </h1> */}
        </div>
      
       ))  
       
       
       }
      </div>
   </div>
  )
}

export default Marq