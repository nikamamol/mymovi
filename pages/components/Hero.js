import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

function Hero() {
    return (
        <>
            <div className='text-center bg-white pb-10'>

                <div className='w-60 mx-auto'>
                    <Image src={"/movie1.png"} alt =""width={200} height={200} />
                </div>
                <h1 className='text-center text-gray-700 uppercase font-bold'>Welcome To Watch Me...</h1>
                <p className='text-gray-500'>Produce FILM feature ,TELIVISION And GAME</p>


                <button className='bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4'>
                    <Link href="/contact">CONTACT US</Link>
                </button>

            </div>
        </>
    )
}

export default Hero
