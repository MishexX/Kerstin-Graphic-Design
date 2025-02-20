'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const Page = () => {
    const router = useRouter();
    
    return (
        <div
            className="relative min-h-screen bg-cover bg-center text-white p-6"
            style={{ backgroundImage: "url('/Background.png')" }}
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
                        <h2 className="text-2xl font-semibold">Webseitenbetreiber</h2>
                        <div className='mt-2 flex flex-col gap-2'>
                            <p className="flex items-center space-x-2">
                                <span>Kerstin Morokutti</span>
                            </p>
                            <p className="flex items-center space-x-2">
                                <span>Anschrift: Carminweg 6/2/6 , 1210 Wien</span>
                            </p>
                        </div>
                    </div>

                    <div className='border-b-2 pb-4 w-full border-red-500'>
                        <h2 className="text-2xl font-bold">UID-Nr:</h2>
                        <p className="text-gray-300">Gewerbeaufsichtbehörde: Magistrat der Stadt Wien</p>
                        <p className="text-gray-300">Mitgliedschaften: Mitglied der WKO</p>
                    </div>
                </div>

                <p className="mt-6 italic text-gray-300">Kontaktdaten:</p>
                <p className="mt-6 italic text-gray-300">
                    Telefon: +43 6604837403<br />
                    Email: morokutti.design@gmail.com<br />
                    Fax:
                </p>

                <p className="mt-6 italic text-gray-300">
                    Anwendbare Rechtsvorschrift: www.ris.bka.gv.at<br />
                    Berufsbezeichnung: Werbegrafikdesigner
                </p>

                <div className="mt-6 text-lg">
                    <div className='flex items-center gap-10'>
                        <div>
                            <p className="font-bold">Online Streitbeilegung:</p>
                            <p>
                                Verbraucher, welche in Österreich oder in einem sonstigen Vertragsstaat der ODR-VO niedergelassen sind, haben die Möglichkeit, Probleme bezüglich des entgeltlichen Kaufs von Waren oder Dienstleistungen im Rahmen einer Online-Streitbeilegung (nach OS, AStG) zu lösen. 
                                Die Europäische Kommission stellt eine Plattform hierfür bereit: 
                                <a 
                                    href="https://ec.europa.eu/consumers/odr" 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="text-blue-600 underline hover:text-blue-800"
                                >
                                    https://ec.europa.eu/consumers/odr
                                </a>.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 
<p className="mt-6 text-lg">
    User Details
    <span className="font-semibold">amet consectetur</span>
</p> 
*/}
            </div>
        </div>
    );
};

export default Page;
