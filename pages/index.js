import Head from 'next/head'
import { Header } from "./Components/Header";
import Link from 'next/link'
import Products from "./products/index";

export default function Home() {
  return (
    <>
      <Header />
      <div className='flex h-screen items-center justify-center'>
        <Link href="/products">
          <button className='btn btn-outline btn-xs md:btn-sm lg:btn-md xl:btn-lg'>Goto Products</button>
        </Link>
      </div>

    </>
  )
}
