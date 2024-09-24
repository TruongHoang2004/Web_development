// pages/index.tsx
//import { Button } from "@/components/ui/button"
import Header from '../components/ui/Header';
import Image from 'next/image';
import { Input } from "@/components/ui/input"




export default function Home() {
  return (
    <div>
      <Header />
      
      <div className={'relative w-full h-96'}>

        <Image src="/img/home_page_img_3.png" alt="Image 3" width={180} height={400} className='absolute top-20 left-0'/>
        <Image src="/img/home_page_img_4.png" alt="Image 4" width={400} height={100} className='absolute top-0 right-0'/>
        <h2 className='text-green-900 text-5xl w-6/12 text-center absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold'>Schedule reliable assistance for household chores</h2>
        <div className='absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-16'>
          <form action="">
            <Input type="text" placeholder="What do you need help with?" className='border-green-700 p-8 border-2'/>
          </form>
        </div>

      </div>
      
    </div>
  );
}

