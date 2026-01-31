'use client';
//import ContactForm from '@/components/ContactForm';
import ImageCarousel from '@/components/ImageCarousel';
import Marquees from '@/components/Marquee';
//import Works from '@/components/Works';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect, useRef, useState } from 'react';
import { db, collection, addDoc } from '@/utils/firebase'; // Adjust path if needed

const Page = () => {
//  const router = useRouter();

  const services = [
    {
      title: 'Branding & Corporate Design',
      description:
        'Von Logo-Design bis zur visuellen Identität – ich kreiere einen Look, der bleibt.',
      imgSrc: '/branding.jpg', 
    },
    {
      title: 'Printdesign',
      description:
        'Flyer, Broschüren, Visitenkarten & Co. – hochwertig gestaltet, um Eindruck zu hinterlassen.',
      imgSrc: '/Printdesign.jpg', 
    },
    {
      title: 'Social Media Design',
      description:
        'Designs, die deine Online-Präsenz pushen und echte Aufmerksamkeit erzeugen.',
      imgSrc: '/Social Media.jpg', 
    },
  ];
  const [openModal, setopenModal] = useState(false);

  const [clickedTab, setclickedTab] = useState('about');

  // const [openModal, setopenModal] = useState(false);

  const absoluteElementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
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

    document.addEventListener('click', handleClickOutside);
    // window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      // window.removeEventListener("scroll", handleScroll);
    };
  }, [openModal]);

  //   scroll to section

  //const scrollSectionRef = useRef<HTMLDivElement>(null);

  const aboutMe = useRef<HTMLDivElement>(null);
  const leistungen = useRef<HTMLDivElement>(null);
  const project = useRef<HTMLDivElement>(null);
  const contactForm = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: any) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  //   scroll to section

  const [showProject, setshowProject] = useState(false);

  useEffect(() => {
    setshowProject(true);
  }, []);

  // reviews
  const testimonials = [
    {
      title: 'Kreativ & Professionell',
      text: 'Ihre Logos bringen Marken zum Strahlen! Empfehle ich wärmstens für jedes Designbedürfnis.',
      name: 'Jürgen Giwiser',
      role: 'Gründer Care:IT',
      image: '/quote.png',
    },
    {
      title: 'Exceptional Design',
      text: 'Morokutti Design delivered exactly what I wanted—with great attention to detail, quality, and professionalism. Absolutely recommendable! Im starting my rebranding and needed someone with style and a strong sense of design. I believe I have found the right person!',
      name: 'Nikola Vodicka ',
      role: '',
      image: '/quote.png',
    },
    {
      title: 'Hervorragende Arbeit',
      text: 'Hervorragende Arbeit, die genau unseren Vorstellungen entsprach. Die Zusammenarbeit war professionell, kommunikativ und detailorientiert. Anpassungswünsche wurden mit Expertise umgesetzt. Wir empfehlen MorokuttiDesign gerne weiter und werden in Zukunft wieder auf sie zukommen.',
      name: 'Michael Fischer',
      role: '',
      image: '/quote.png',
    },
  ];

  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  // reviews

  // FORM SUBMISSION
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<any>(null);

  // Handle Input Change
  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Form Submission
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, 'contacts'), formData);

      // Show success message
      setMessage({ type: 'success', text: 'Form successfully submitted!' });

      // Reset Form
      setFormData({ firstName: '', lastName: '', email: '', message: '' });

      // Remove success message after 4 seconds
      setTimeout(() => setMessage(null), 4000);
    } catch (error) {
      setMessage({ type: 'error', text: 'Submission failed! Try again.' });

      // Remove error message after 4 seconds
      setTimeout(() => setMessage(null), 4000);
    }

    setLoading(false);
  };

  // Check if all fields are filled
  const isFormValid =
    formData.firstName.trim() !== '' &&
    formData.lastName.trim() !== '' &&
    formData.email.trim() !== '' &&
    formData.message.trim() !== '';
  // FORM SUBMISSION

  return (
    <div className="relative overflow-hidden  flex flex-col">
      <div className=" relative">
        <Image
          src={'/Background.jpg'}
          alt=""
          width={5000}
          height={5000}
          className=" w-full   h-screen    object-cover object-right"
        />

        <div className=" bg-black top-0  opacity-50     absolute w-full h-full">
          {' '}
        </div>
      </div>

      {/* lg:flex hidden */}
      <div className="  p-6 z-50 absolute top-0  flex   w-full justify-between  flex-wrap items-center">
        <div className="max-w-7xl  mx-auto w-full">
          <div className="  w-full   lg:hidden  flex justify-end items-center">
            {/* <Image src={logoText} alt="" width={500} height={500}  className=" w-36 h-fit object-cover" /> */}
            {/* <Image src="/logobritish.png" alt="" width={1000} height={1000} className=" w-16    h-fit object-cover" />  */}
            {/* <Image src="/logoN.png" alt="" width={2000} height={2000} className=" w-24    h-fit object-cover" />  */}
            {/* <Image src="/logocorrect.PNG"  alt="" width={2000} height={2000} className=" w-24    h-fit object-cover" />  */}

            <svg
              onClick={() => setopenModal(true)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>

          {/* the hamburger sheet  */}

          <div
            ref={absoluteElementRef}
            className={` lg:hidden fixed transition-all  overflow-y-auto  z-50   ease-in-out   duration-500 top-0  bg-[#f2f2f2] ${
              openModal ? 'right-0 w-[70%]' : ' -right-full w-0'
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
                  strokeWidth="1.9"
                  stroke="currentColor"
                  className="w-6 h-6 text-red-400 bg-white rounded-full p-[2px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </div>

              {/* dropdowns  */}

              <div className=" w-full       overflow-y-auto     ">
                {/* showDivider={false} */}

                <div className=" mt-3 flex flex-col gap-3">
                  {/* <h1
                    onClick={() => {
                      setclickedTab('home');
                    }}
                    className={` text-center ${
                      clickedTab === 'home' ? 'bg-[#FF385C]' : 'bg-[#2B2F39]'
                    } font-poppinsreg py-2 rounded-md border  text-white`}
                  >
                    {' '}
                    Home{' '}
                  </h1> */}
                  <h1
                    onClick={() => {
                      setclickedTab('aboutme');
                      scrollToSection(aboutMe);
                    }}
                    className={` text-center ${
                      clickedTab === 'aboutme' ? 'bg-[#2B2F39]' : 'bg-[#303030]'
                    } font-poppinsreg py-2 rounded-md border  text-white`}
                  >
                    {' '}
                    ÜBER MICH{' '}
                  </h1>
                  <h1
                    onClick={() => {
                      setclickedTab('LEISTUNGEN{');
                      scrollToSection(leistungen);
                    }}
                    className={` text-center ${
                      clickedTab === 'LEISTUNGEN{'
                        ? 'bg-[#2B2F39]'
                        : 'bg-[#303030]'
                    } font-poppinsreg py-2 rounded-md border  text-white`}
                  >
                    {' '}
                    LEISTUNGEN{' '}
                  </h1>

                  <h1
                    onClick={() => {
                      setclickedTab('PROJEKTE');
                      scrollToSection(project);
                    }}
                    className={` text-center ${
                      clickedTab === 'PROJEKTE'
                        ? 'bg-[#2B2F39]'
                        : 'bg-[#303030]'
                    } font-poppinsreg py-2 rounded-md border  text-white`}
                  >
                    {' '}
                    PROJEKTE{' '}
                  </h1>
                  <h1
                    onClick={() => {
                      setclickedTab('JETZT');
                      scrollToSection(contactForm);
                    }}
                    className={` text-center ${
                      clickedTab === 'JETZT' ? 'bg-[#2B2F39]' : 'bg-[#303030]'
                    } font-poppinsreg py-2 rounded-md border  text-white`}
                  >
                    {' '}
                    JETZT ANFRAGEN{' '}
                  </h1>
                </div>
              </div>

              {/* dropdowns  */}
            </div>
          </div>
          {/* the hamburger sheet  */}

          <div className=" w-[50%]   2xl:-ml-10   lg:pt-2   ">
            {/* lg:flex hidden */}
            <div className="    font-poppins text-xl        font-normal gap-10 lg:flex hidden   items-center">
              <Image
                src="/textLogo.png"
                alt=""
                className=" w-56 h-fit object-cover"
                width={1200}
                height={1200}
              />

              <h1
                onClick={() => scrollToSection(aboutMe)}
                className=" cursor-pointer text-white   flex-shrink-0  "
              >
                ÜBER MICH{' '}
              </h1>
              <h1
                onClick={() => scrollToSection(leistungen)}
                className=" cursor-pointer text-white   flex-shrink-0  "
              >
                LEISTUNGEN{' '}
              </h1>
              <h1
                onClick={() => scrollToSection(project)}
                className="  cursor-pointer text-white  flex-shrink-0   "
              >
                PROJEKTE{' '}
              </h1>
              <h1
                onClick={() => scrollToSection(contactForm)}
                className="  cursor-pointer border rounded-full   flex-shrink-0 px-2 py-1 text-white  "
              >
                JETZT ANFRAGEN{' '}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar - Hidden on md and below */}

      {/* Content */}
      <div className=" absolute overflow-hidden top-0 flex justify-center items-center h-screen w-full">
        <div className="max-w-7xl 2xl:max-w-full  gap-5   lg:mt-0 mt-0 md:mt-10 z-40 w-full flex flex-col  lg:grid lg:grid-cols-2 md:grid-cols-2  items-center px-6 2xl:px-0 md:px-12">
          {/* Left Section */}
          <div className="flex flex-col space-y-4 text-white w-full ">
            {/* Logos */}
            <div className="flex items-center  mx-auto  gap-3  ">
              <Image
                className=" w-[80%] mx-auto object-cover"
                src="/sitelogo.png"
                width={500}
                height={500}
                alt="Logo 1"
              />
              {/* <Image className=' w-24 lg:w-64 object-cover' src="/company1.jfif" width={500} height={500} alt="Logo 2" /> */}
            </div>

            <p className="text-2xl max-w-md text-center mx-auto font-light">
              Durchdachtes Design, klare Botschaften – damit Deine Ideen
              sichtbar werden.
            </p>

            <div className=" flex justify-center">
              <button
                onClick={() => scrollToSection(contactForm)}
                className="border  border-white px-6 py-2 text-white rounded-full"
              >
                JETZT ANFRAGEN
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex justify-center space-x-5">
              {/* <a href="#">
                <img src="/whtsapp.png" alt="LinkedIn" className="w-fit" />
              </a>
              <a href="#">
                <img src="/insta.png" alt="Facebook" className="w-fit" />
              </a>
              <a href="#">
                <img src="/linkedin.png" alt="Instagram" className="w-fit" />
              </a> */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/whtsapp.png" alt="WhatsApp" className="w-11 h-11 transform translate-y-12" />
              </a>
              <a
                href="https://www.instagram.com/morokutti.design?igsh=MWV5ZWxjNXh3Mnk2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/insta.png" alt="Instagram" className="w-11 h-11 transform translate-y-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/kerstin-morokutti-10b713263/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-11 h-11 transform translate-y-12" />
              </a>
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

      <div
        ref={leistungen}
        className="w-full relative bg-cover  "
        style={{ backgroundImage: "url('/f2f2f2.jpg')" }}
      >
        {/* Content Section */}
        <div className="flex flex-col justify-center items-center w-full relative z-10 py-16">
          <h1 className="text-5xl text-center rounded-full px-4 font-fontFair font-medium py-2 border-2 border-black b">
            LEISTUNGEN
          </h1>

          {/* Grid Items */}
          <div className="grid px- 50 mt-20 max-w-4xl  lg:px-0 px-4 mx-auto grid-cols-1 md:grid-cols-3 gap-8 place-items-center">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg h-full rounded-2xl pb-5 overflow-hidden text-center"
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
                <h3 className="text-lg max-w-33 text-center mx-auto font-semibold mt-5">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2 px-1">{service.description}</p>
              </div>
            ))}
          </div>
          {/* Grid Items End */}
        </div>
      </div>

      {/* THE SECTION THAT DOESNT TOUCH THE IMAGE BACKGROUND  */}

      <div className=" bg-[#303030]  sm:py-0 py-4">
        <Marquees />
      </div>

      {/* MY WORKS  */}

      <div
        ref={project}
        className=" bg-[#f2f2f2]  border-black/10  border-b-2 w-full  py-20"
      >
        <div className="flex justify-center">
          <h1 className="text-5xl text-center font-fontFair font-medium  w-fit rounded-full px-5 py-2 border-2 border-black b">
            PROJEKTE
          </h1>
        </div>

        {/* <div className=' mt-5'>

 
    <Works />

    </div> */}

        {showProject && (
          <main className="flex justify-center items-center  mt-10 bg-gray-100">
            <ImageCarousel />
          </main>
        )}
      </div>
      {/* MY WORKS  */}

      {/* ABOUT ME  */}
      <div ref={aboutMe} className="  py-10 bg-[#d7e3db]   ">
        <div className="  max-w-6xl mx-auto w-full">
          <div className=" grid lg:grid-cols-2 gap-6 lg:gap-6 px-4 items-center justify-center grid-cols-1">
            <Image
              src={'/aboutmereal.png'}
              alt=""
              width={2000}
              height={2000}
              className=" lg:w-[90%] w-full   rounded-md sm:w-[60%] mx-auto object-cover h-full"
            />

            <div className=" flex flex-col gap-5">
              <div className=" w-fit mx-auto ">
                <h1 className="text-6xl text-center font-fontFair font-medium rounded-full px-4 py-2 border-2 border-black b">
                  ÜBER MICH
                </h1>
              </div>

              <div className=" flex justify-center items-center gap-2">
                <div className=" w-2    h-2    bg-[#959e9d] rounded-full">
                  {' '}
                </div>

                <h1 className=" font-poppins text-lg font-medium text-[#959e9d] text-center">
                  {' '}
                  Kreativität trifft Strategie
                </h1>

                <div className=" w-2   h-2   bg-[#959e9d] rounded-full"> </div>
              </div>

              <div className=" flex flex-col gap-5">
                <p className="   font-medium font-fontSanz  text-center  lg:max-w-sm  max-w-xl mx-auto  text-lg  text-black}">
                  {`Hey, ich bin `}{' '}
                  <span className="relative ">
                    {' '}
                    Kerstin Morokutti{' '}
                    <span>
                      {/*
    <Image
      src="/line1.png" 
      alt="" 
      width={1000} 
      height={1000} 
      className="absolute top-3 scale-150 right-0 z-10 w-full h-full object-cover"
    />
  */}
                      
                    </span>{' '}
                  </span>{' '}
                  {`– Grafikdesignerin aus Wien. Ich entwickle`}
                  <span className="relative  w-full  ">
                    {' '}
                    Designs,
                    {/* <Image src="/rnd.png" alt='' width={1000} height={1000} className='w-48  right-10 absolute top-0  h-fit ' /> */}
                  </span>
                  {`die nicht nur gut aussehen, sondern Deine Marke spürbar nach vorne bringen.`}
                </p>

                {/* <p className="  relative bg-red-200  font-medium font-fontSanz   text-center  lg:max-w-sm  max-w-xl mx-auto  text-lg  text-black">
             {`Egal ob Branding, Print oder Digital – ich mache deine Vision sichtbar, einprägsam und wirkungsvoll.`}
              
              <span className=' absolute flex   right-0 top-0 w-full' >
                <Image alt='' src="/showbelow.png" className=' w-40 h-fit' width={1000} height={1000} />
              </span>

               </p> */}

                <p className="relative  font-medium font-fontSanz text-center lg:max-w-sm max-w-xl mx-auto text-lg text-black">
                  {`Egal ob Branding, Print oder Digital – ich mache deine Vision sichtbar, einprägsam und wirkungsvoll.`}

                  {/* <span className="absolute md:-top-2   top-6 lg:top-6     -right-20 md:-right-14 lg:-right-20">
    <Image
      alt=""
      src="/showbelow.png"
      className="w-48 h-fit"
      width={1000}
      height={1000}
    />
  </span> */}
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

      {/* kreative professioanl  */}
      <div className=" w-full bg-[#f2f2f2]">
        <div className="max-w-7xl  overflow-hidden mx-auto w-full   bg-[#f2f2f2] items-center grid lg:mt-0 mt-10  grid-cols-1 lg:gap-0 gap-10 lg:grid-cols-2  ">
          {/* Left side (Quote Card) */}
          <div>
            {/* title: "Einzigartiges Design",
        text: "Ich war beeindruckt von der Detailgenauigkeit und Qualität. Absolut empfehlenswert!sdasdaadsasdasddasadsdasdasasdadsdasadsasdadsadsasdasdadsasdadsasdasdasdasdasddsad",
        name: "Anna Müller",
        role: "CEO CreativeStudio",
        image: "/quote.png", */}

            <div className="flex items-center justify-center   w-full  px-6 py-12">
              <div className="relative bg-[#d7e3db] p-8  max-w-md w-full rounded-lg shadow-lg  text-center">
                {/* Large Quote Icon */}
                {/* <span className="absolute top-[-20px] left-[-20px] text-6xl text-gray-700">
            &ldquo;
          </span> */}

                <h2 className="text-4xl mt-5 max-w-48  font-fontFair font-semibold  mx-auto text-gray-900">
                  {/* Kreativ & Professionell */}
                  {testimonials[index].title}
                </h2>
                <p className="text-gray-700 text-xl mx-auto  max-w-xs mt-4">
                  {/* Ihre Logos bringen Marken zum Strahlen! Empfehle ich wärmstens für
            jedes Designbedürfnis. */}

                  {testimonials[index].text}
                </p>
                <div className="mt-6">
                  {/* <p className="font-bold text-gray-900 text-lg">Jürgen Giwiser</p> */}
                  <p className="font-bold text-gray-900 text-lg">
                    {testimonials[index].name}
                  </p>
                  {/* <p className="text-gray-600 text-lg">Gründer Care:IT</p> */}
                  <p className="text-gray-600 text-lg">
                    {testimonials[index].role}
                  </p>
                </div>

                {/* Button with arrow */}

                <Image
                  // src="/quote.png"
                  src={testimonials[index].image}
                  alt=""
                  width={100}
                  height={100}
                  className=" absolute  left-4 -top-16 w-32 h-fit object-cover"
                />
              </div>
            </div>

            <div
              onClick={nextTestimonial}
              className=" bg-[#2E2E2E] cursor-pointer select-none  w-12 mx-auto h-12 rounded-full flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.9"
                stroke="currentColor"
                className="size-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
          {/* Right side (Image) */}
          <div className="relative w-full flex overflow-hidden h-[90vh] lg:h-[80vh]">
            <Image
              src="/phoneImage.jpg" // Change this to your actual image path
              alt="Quote Section Image"
              layout="fill"
              objectFit="cover"
              className=" w-full lg:px-0 px-2 h-full"
            />
          </div>
        </div>
      </div>
      {/* kreative professioanl  */}

      {/* KERSTIN MOROKUTTI  */}
      <div
        ref={contactForm}
        className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 md:px-10 lg:px-20"
        style={{ backgroundImage: "url('/bgreal.png')" }} // Replace with your actual image URL
      >
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white bg-opacity-10 p-10 rounded-xl">
          {/* Left Side - Name and Social Icons */}
          <div className=" flex flex-col">
            <div className="  w-fit">
              <h1 className="text-7xl  max-w-sm font-fontFair  font-bold  text-black">
                Kerstin Morokutti
              </h1>
              <p className="text-lg text-black mt-2">Graphic Designer</p>
            </div>

            {/* Social Icons */}

            <div className="flex grow items-end gap-4 mt-6">
              {/* <a href="#">
                <img src="/whtsapp.png" alt="LinkedIn" className="w-fit" />
              </a>
              <a href="#">
                <img src="/insta.png" alt="Facebook" className="w-fit" />
              </a>
              <a href="#">
                <img src="/linkedin.png" alt="Instagram" className="w-fit" />
              </a> */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/blackwhtsapp.png" alt="WhatsApp" className="w-11 h-11 transform translate-y- -2" />
              </a>
              <a
                href="https://www.instagram.com/morokutti.design?igsh=MWV5ZWxjNXh3Mnk2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/balckinsta.png" alt="Instagram" className="w-11 h-11 transform translate-y- -2" />
              </a>
              <a
                href="https://www.linkedin.com/in/kerstin-morokutti-10b713263/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/blacklinkedin.png" alt="LinkedIn" className="w-11 h-11 transform translate-y- -2" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-6 max-w-sm mx-auto"
            >
              <div className=" border-t border-black pt-3">
                <label className="block text-black text-lg">Vorname</label>
                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent p-2 outline-none text-black"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  // placeholder="Dein Vorname"
                />
              </div>
              <div>
                <label className="block text-black text-lg">Nachname</label>
                <input
                  type="text"
                  className="w-full border-b border-black bg-transparent p-2 outline-none text-black"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  // placeholder="Dein Nachname"
                />
              </div>
              <div>
                <label className="block text-black text-lg">E-Mail</label>
                <input
                  type="email"
                  className="w-full border-b border-black bg-transparent p-2 outline-none text-black"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  // placeholder="Deine E-Mail"
                />
              </div>
              <div>
                <label className="block text-black text-lg">Nachricht</label>
                <textarea
                  className="w-full border-b border-black bg-transparent p-2 outline-none text-black"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  // placeholder="Deine Nachricht"
                  rows={3}
                ></textarea>
              </div>

              {/* Submit Button */}
              {/* <button className="bg-black text-white px-6 py-3 rounded-full text-lg">
              Jetzt Anfragen!
            </button> */}
            <div className=' '>

           
              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`px-6  py-3 rounded-full text-lg ${
                  isFormValid
                    ? 'bg-black text-white'
                    : 'bg-[#303030] text-gray-300 cursor-not-allowed'
                }`}
              >
                {loading ? 'Sending...' : 'JETZT ANFRAGEN!'}
              </button>
              </div>
            </form>

            {message && (
              <div
                className={`mt-6 p-3 rounded-lg text-center text-lg ${
                  message.type === 'success'
                    ? 'bg-green-700 text-white'
                    : 'bg-red-500 text-white'
                }`}
              >
                {message.text}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* KERSTIN MOROKUTTI  */}

      {/* FOOTER FOOTER  */}
      <div className="bg-[#141414] mtt-20 pt-16 pb-8 flex  flex-col justify-center items-center w-full ">
        <div className=" max-w-7xl   flex lg:flex-row  lg:gap-0 gap-8 flex-col lg:justify-between  lg:px-10 px-2 lg:p-2 h-full w-full">
          <div className=" flex  justify-center  flex-col gap-1">
            <Image
              alt=""
              src={'/textLogo.png'}
              className=" w-[40%] h-fit object-cover"
              width={1000}
              height={1000}
            />
          </div>

          <div className=" flex flex-col gap-2">
            <h1 className={` font-poppinsreg5 text-xl text-gray-200  `}>
              {' '}
              Follow Us
            </h1>
            <div
              className={`  font-poppinsreg mt-1 lg:text-base text-sm flex flex-col gap-1  text-white `}
            >
              {/* <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/whtsapp.png" alt="WhatsApp" className="w-fit" />
              </a>
              <a
                href="https://www.instagram.com/instaHandle"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/insta.png" alt="Instagram" className="w-fit" />
              </a>
              <a
                href="https://www.linkedin.com/in/linkedInProfile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/linkedin.png" alt="LinkedIn" className="w-fit" />
              </a> */}

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer"
                
              >
                {' '}
                Whatsapp{' '}
              </a>
              <a
                href="https://www.instagram.com/morokutti.design?igsh=MWV5ZWxjNXh3Mnk2YQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                <h1 className=" cursor-pointer"> Instagram</h1>{' '}
              </a>
              {/* <h1 className=""> Twitter </h1> */}
              <a
                href="https://www.linkedin.com/in/kerstin-morokutti-10b713263/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className=" cursor-pointer"
              >
                {' '}
                <h1 className=""> LinkedIn </h1>{' '}
              </a>
              {/* <h1> FAQs </h1> */}
            </div>
          </div>

          <div className=" flex flex-col gap-2">
            <Link href="/impressum">
              {' '}
              <h1 className={`  font-poppinsreg5 text-xl text-gray-200  `}>
                {' '}
                Impressum
              </h1>
            </Link>
            <div
              className={` font-poppinsreg max-w-xs mt-1  lg:text-base text-sm flex flex-col gap-5 text-white `}
            >
              {/* onClick={() => setAboutUsCRT(true) } */}

              {/* <h1> Explore Countries </h1>
            <h1> Our Role </h1>
            <h1> Partner Program </h1> */}
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
          {' '}
        </div>

        <div className=" max-w-7xl text-white px-2 lg:px-10 gap-6 mt-2 flex md:flex-row flex-col w-full  justify-center">
          {/* <div
          className={`  font-poppinsreg lg:text-base text-sm  flex    gap-2 `}
        >
          <h1> Privacy Policy </h1>
          <h1> Term & Condition </h1>
        </div> */}
          <h1 className={` font-poppinsreg mt-3 lg:text-base text-sm`}>
            {' '}
            &copy; 2025 New website. All Rights Reserved.{' '}
          </h1>
        </div>
      </div>
      {/* FOOTER FOOTER  */}
    </div>
  );
};

export default Page;
