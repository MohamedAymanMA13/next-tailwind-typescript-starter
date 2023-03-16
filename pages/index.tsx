import Link from 'next/link'
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | Applatin " content='Home Page'>
    {/* <h1>Hello Next.js 👋</h1>
    <p className='text-red-500'>
      <Link href="/about">About</Link>
    </p> */}

    <div className="bg-[url('../assets/bg.png')] h-screen bg-cover bg-center  flex items-center    justify-center   bg-fixed   ">
    <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/30 z-[2]' />
      <div className='p-5 text-white z-[2] mx-auto pb-[20rem]'>
        <h2 className='text-4xl font-bold'>Hello</h2>
        <p className='py-2 text-xl'>testin</p>
        <h2 className='text-4xl font-bold'>19555</h2>
      </div>
      <div className=" container mx-auto z-[2] px-4">
        <div className=" max-w-[450px] text-white z-[2] flex flex-col gap-[40px]">
          <div>
            <h1>Hello</h1>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
