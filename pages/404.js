import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function NotFound() {
    const router = useRouter()
    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/")
        }, 5000)
        return () => clearTimeout(timer)
    }, [])
    return (
        <div className='flex flex-col items-center justify-center mt-60'>
            <hh1 className='font-bold text-blue-600 text-9xl'>404</hh1>
            <h6 className='text-5xl font-bold text-gray-600'>
                <span className='text-red-500'>Opps !</span> Page Not Found
            </h6>
            <p className='texdt-gray-500 mt-3'>{"The page you're looking for does not exist"}</p>

            <Link href="/" legacyBehavior>
                <a className='bg-blue-100 text-blue-800 mt-5 font-semibold px-6 py-2 text-sm'>Go To Home Page</a>
            </Link>

        </div>
    )
}

export default NotFound
