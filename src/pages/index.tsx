import Image from 'next/image'

export default function Index() {
  return (
    <div className="fixed top-1/2 left-0 right-0 -translate-y-1/2 flex justify-center items-center">
      <div className="relative w-[300px] h-[200px]">
        <div className="absolute top-0 w-[300px] h-[197px] z-20">
          <Image
            src="/ssr.png"
            width={300}
            height={179}
            alt="Profile"
          />
        </div>
        <div className="absolute top-10 w-[300px] h-[197px] z-10">
          <Image
            src="/sr.png"
            width={300}
            height={179}
            alt="Profile"
          />
        </div>
        <div className="absolute top-20 w-[300px] h-[197px] z-0">
          <Image
            src="/r.png"
            width={300}
            height={179}
            alt="Profile"
          />
        </div>
      </div>

      <div className='ml-12 font-bold text-7xl text-white text-center tracking-tighter'>
        <p>Little Mami Ecosystem</p>
        <p className='mt-8'>NFT Market</p>
      </div>
    </div>
  )
}
