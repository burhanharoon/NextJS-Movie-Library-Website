import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div className='flex h-screen items-center justify-center'>
        <Link href="/movies">
          <button className='btn btn-outline btn-xs md:btn-sm lg:btn-md xl:btn-lg'>Goto Movies</button>
        </Link>
      </div>

    </>
  )
}
