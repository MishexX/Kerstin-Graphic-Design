'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const Page = () => {

     const router =  useRouter()
  return (
    <div
    className="relative min-h-screen bg-cover bg-center text-white p-6"
    style={{ backgroundImage: "url('/Background.png')" }} // Replace with your image
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto">
      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="flex items-center text-white mb-4"
      >
      
        Back
      </button>

      {/* Header */}
      <h1 className="text-3xl font-bold border p-1 border-red-500 pb-1 inline-block">
        IMPRESSUM
      </h1>

      {/* Description */}
      <p className="mt-4 text-lg">
      Informationen und Offenlegung gemäß §5 (1) ECG, § 25 MedienG, § 63 GewO und § 14 UGB.
      </p>

      {/* User Details */}
      <div className="mt-6 space-y-4">
        <div>
          <h2 className="text-2xl font-semibold">Kerstin Morokutti</h2>
          <div className=' mt-2 flex flex-col gap-2'>

         
          <p className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white">
  <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clip-rule="evenodd" />
</svg>

            
            
            <span>Carminweg 6/2/6 , 1210 Wien</span>
          </p>
          <p className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6 text-white  ">
  <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
</svg>

            
            
             <span>Lorem ipsum</span>
          </p>

          </div>


        </div>

        <div className=' border-b-2  pb-4 w-full  border-red-500'>
          <h2 className="text-2xl font-bold">UID-Nr:</h2>
          <p className="text-gray-300">Gewerbeaufsichtbehörde: Magistrat der Stadt Wien</p>
          <p className="text-grey-300">Mitgliedschaften:Mitglied der WKO</p>
        </div>
      </div>

      {/* Additional Description */}
      <p className="mt-6 italic text-gray-300">
        <p className="mt-6 italic text-gray-300">
        Kontaktdaten:</p>
      </p>
      <p className="mt-6 italic text-gray-300">
      Telefon: +43 6604837403<br></br>
Email: morokutti.design@gmail.com<br></br>
Fax: 
      </p>
      <p className="mt-6 italic text-gray-300">
        Lorem ipsum dolor sit amet consectetur. Enim condimentum elementum
        imperdiet felis nam purus cras mattis odio. Purus lorem semper in ut
        arcu ultricies. Velit amet eget cras vitae sed orci in nisl.
      </p>
      {/* Grid Content */}
      <div className="mt-6  text-lg">
        <div className=' flex items-center gap-10'>
        <p className="font-bold">Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </div>

        <div className=' flex items-center gap-10'>
        <p className="font-bold">Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </div>

        <div className=' flex items-center gap-10'>
        <p className="font-bold">Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </div>

        <div className=' flex items-center gap-10'>
        <p className="font-bold">Lorem ipsum</p>
        <p>Lorem ipsum</p>
        </div>

   
     
      </div>

      {/* Footer */}
      <p className="mt-6 text-lg">
        Lorem ipsum dolor sit <span className="font-semibold">amet consectetur</span>
      </p>
    </div>
  </div>
  )
}

export default Page