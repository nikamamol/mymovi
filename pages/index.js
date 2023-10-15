import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import axios from 'axios'
import { server } from '@/config'
import PopularMovi from './components/PopularMovi'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ movies }) {
  console.log(movies.results)
  return (
    <div>
      <Navbar />
      <h1 className="text-2xl text-center font-bold"></h1>
      <Hero />
      <PopularMovi movies={movies.results} />
      <Footer />
    </div>
  )
}

export async function getStaticProps() {
  const res = await axios(`${server}/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`);
  const movies = res.data;
  return {
    props: {
      movies
    }
  }
}
