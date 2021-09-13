import Head from 'next/head'
import { Header } from "./Components/Header";
import Link from 'next/link'
import Products from "./products/index";

export default function Home() {
  return (
    <>
      <Header />

      <Link href="/products">
        <button className='btn btn-success'>Goto Products</button>
      </Link>

    </>
  )
}
