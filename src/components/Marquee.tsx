'use client';
import Image from 'next/image';
import React, { useMemo } from 'react';
import Marquee from 'react-fast-marquee';

const Marquees = () => {
  const loopimages = [
    { image: '/Kundenlogos/808avenue.png', name: 'Amazon' },
    { image: '/Kundenlogos/BBE_Club.png', name: 'Raj Shamani' },
    { image: '/Kundenlogos/BerlinerBabo.png', name: 'Sharan' },
    { image: '/Kundenlogos/care_IT.png', name: 'Acer' },
    { image: '/Kundenlogos/Corleone.png', name: 'Mamaearth' },
    { image: '/Kundenlogos/dasMateo.png', name: 'Social Beat' },
    { image: '/Kundenlogos/distribute_IT.png', name: 'Vavo Media' },
    { image: '/Kundenlogos/FamousBabo.png', name: 'Plix' },
    { image: '/Kundenlogos/FischerConsulting.png', name: 'Vaibhav Sisinty' },
    { image: '/Kundenlogos/Koi.png', name: 'HrOne' },

    { image: '/Kundenlogos/Mederi.png', name: 'HrOne' },

    { image: '/Kundenlogos/NikolaVodicka.png', name: 'HrOne' },
    { image: '/Kundenlogos/Slavie.png', name: 'HrOne' },
    { image: '/Kundenlogos/Sreja.png', name: 'HrOne' },
    { image: '/Kundenlogos/SteakDöner.png', name: 'HrOne' },
    { image: '/Kundenlogos/Türkis.png', name: 'HrOne' },
  ];

  const marqueeContent = useMemo(
    () =>
      loopimages.map((i: any, ind: number) => (
        <div key={ind} className="flex flex-col mx-4 py-3 flex-shrink-0 gap-4">
          <Image
            src={i.image}
            alt=""
            width={230}
            height={230}
            className="w-fit  hover:scale-110 cursor-pointer h-28 rounded-full object-cover"
          />
          {/* <h1 className="text-center">{i.name}</h1> */}
        </div>
      )),
    [loopimages],
  ); // Only re-calculate when loopimages changes

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
  );
};

export default Marquees;
