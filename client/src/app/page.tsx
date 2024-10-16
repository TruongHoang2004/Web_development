// pages/index.tsx
'use client'
import styles from '../styles/home_page.module.css';
import Header from '../components/ui/Header';
import Footer from '../components/ui/Footer'
import Image from 'next/image';
import { Input } from "@/components/ui/input"
import { Button } from '@/components/ui/button';
import { PiBroomDuotone } from "react-icons/pi";
import { PiTruckDuotone } from "react-icons/pi";
import { PiWrenchDuotone } from "react-icons/pi";
import { PiTreeDuotone } from "react-icons/pi";
import { PiPaintRollerDuotone } from "react-icons/pi";
import { PiFireDuotone } from "react-icons/pi";
import { useState } from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { BiSolidCheckCircle } from "react-icons/bi";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { AiOutlinePlus } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { BiSolidLeftArrow } from "react-icons/bi";
import { BiSolidRightArrow } from "react-icons/bi";

export default function Home() {
  const [activeOption, setActiveOption] = useState(1);
  const handleClickOptions = (divid: number) => {
    setActiveOption(divid);
  };

  const options_details = [
    {
      title: 'Cleaning',
      description1: 'Comprehensive cleaning services to keep your home spotless and fresh.',
      description2: 'Popular tasks: Mopping floors, cleaning windows, vacuuming carpets.',
      bg_img_src: 'img/home_img/cleaning.jpg',
      bg_color: 'bg-cyan-100',
    },
    {
      title: 'Moving',
      description1: 'Reliable moving assistance to make your relocation stress-free and seamless.',
      description2: 'Popular tasks: Packing household items, carrying boxes, moving furniture.',
      bg_img_src: 'img/home_img/moving.jpg',
      bg_color: 'bg-green-200',
    },
    {
      title: 'Home Repairs',
      description1: 'Fix anything from broken furniture to malfunctioning appliances.',
      description2: 'Popular tasks: Fixing a broken cabinet, replacing a light bulb, repairing a TV or table.',
      bg_img_src: 'img/home_img/home_repair2.jpg',
      bg_color: 'bg-yellow-100',
    },
    {
      title: 'Outdoor Help',
      description1: 'Get assistance with outdoor chores to maintain a beautiful yard and garden.',
      description2: 'Popular tasks: Lawn mowing, garden cleanup, trimming hedges.',
      bg_img_src: 'img/home_img/outdoor.jpg',
      bg_color: 'bg-purple-100',
    },
    {
      title: 'Painting',
      description1: 'We handle wall painting, touch-ups, and complete color makeovers.',
      description2: 'Popular tasks: Painting fences, repainting doors, exterior house painting.',
      bg_img_src: 'img/home_img/painting.jpg',
      bg_color: 'bg-sky-200',
    },
    {
      title: 'Other Tasks',
      description1: "Discover more tasks in other fields based on customers needs.",
      description2: 'Explore these tasks and feel free to choose the most suitable one.',
      bg_img_src: 'img/home_img/other_task.jpg',
      bg_color: 'bg-red-100',
    },
  ];

  return (
    <div>
      <Header />
      
      <div className={'relative w-full h-96'}>
        <Image src="/img/home_img/home_page_img_3.png" alt="Image 3" width={150} height={400} className='absolute top-20 left-0'/>
        <Image src="/img/home_img/home_page_img_4.png" alt="Image 4" width={400} height={100} className='absolute top-0 right-0'/>
        <h2 className='text-green-900 text-5xl w-6/12 text-center absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-extrabold'>Schedule reliable assistance for household chores</h2>
        <div className='absolute top-full left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-16'>
          <form action="" className='flex align-center'>
              <Input type="text" placeholder="What kind of task do you need help with?" className='focus:outline-none text-base font-semibold rounded-r-none inline w-4/5 border-green-900 border-2 py-6 px-4'/>
              <Button type='submit' className='text-base py-6 px-6 rounded-l-none border-green-900 border-2 border-l-0 bg-lime-600 w-1/5 text-lg font-bold'>Create Task</Button>
          </form>
        </div>
      </div>

      <div className=' w-8/12 m-auto mt-20 flex align-center justify-between border-b-2 border-zinc-200'>
        <div className= {`relative w-16 pb-4 border-cyan-400 cursor-pointer ${activeOption === 1 ? 'border-b-2' : 'border-0'}`} 
          onClick={() => handleClickOptions(1)} >
          <Image src="/img/home_img/bg1.png" alt='bg' width = {1100} height={1100} className={`${activeOption === 1 ? 'block' : 'hidden'}`}/>
          <PiBroomDuotone className='w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fuchsia-950'/>    
        </div>

        <div className= {`relative w-16 pb-4 border-green-400 cursor-pointer ${activeOption === 2 ? 'border-b-2' : 'border-0'}`} 
          onClick={() => handleClickOptions(2)}>
          <Image src="/img/home_img/bg2.png" alt='bg' width = {1100} height={1100} className={`${activeOption === 2 ? 'block' : 'hidden'}`}/>
          <PiTruckDuotone className='w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fuchsia-950'/>
        </div>

        <div className= {`relative w-16 pb-4 border-yellow-300 cursor-pointer ${activeOption === 3 ? 'border-b-2' : 'border-0'}`} 
          onClick={() => handleClickOptions(3)}>
          <Image src="/img/home_img/bg3.png" alt='bg' width = {1100} height={1100} className={`${activeOption === 3 ? 'block' : 'hidden'}`}/>
          <PiWrenchDuotone className='w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fuchsia-950'/>
        </div>

        <div className= {`relative w-16 pb-4 border-purple-500 cursor-pointer ${activeOption === 4 ? 'border-b-2' : 'border-0'}`} 
          onClick={() => handleClickOptions(4)}>
          <Image src="/img/home_img/bg4.png" alt='bg' width = {1100} height={1100} className={`${activeOption === 4 ? 'block' : 'hidden'}`}/>
          <PiTreeDuotone className='w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fuchsia-950'/>
        </div>

        <div className= {`relative w-16 pb-4 border-blue-700 cursor-pointer ${activeOption === 5 ? 'border-b-2' : 'border-0'}`} 
          onClick={() => handleClickOptions(5)}>
          <Image src="/img/home_img/bg5.png" alt='bg' width = {1100} height={1100} className={`${activeOption === 5 ? 'block' : 'hidden'}`}/>
          <PiPaintRollerDuotone className='w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fuchsia-950'/>
        </div>

        <div className= {`relative w-16 pb-4 border-red-400 cursor-pointer ${activeOption === 6 ? 'border-b-2' : 'border-0'}`} 
          onClick={() => handleClickOptions(6)}>
          <Image src="/img/home_img/bg6.png" alt='bg' width = {1100} height={1100} className={`${activeOption === 6 ? 'block' : 'hidden'}`}/>
          <PiFireDuotone className='w-8 h-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-fuchsia-950'/>
        </div>
      </div>
      
      <div className='w-full relative'>
        <Image src="/img/home_img/home_page_img_8.png" alt="Image 4" width={120} height={200} className='absolute top-0 right-0'/>
        <div className= {`w-8/12 m-auto mt-8 ${options_details[activeOption - 1].bg_color} rounded-2xl p-8 pl-20 pr-4`}>
          <div className='w-11/12 m-auto relative'>
            <img src={options_details[activeOption -  1].bg_img_src} alt="" className={`w-full object-cover rounded-xl ${styles.options_details_h}`}/>
            <div className='rounded-xl absolute bg-slate-100 w-80 h-72 top-1/2 left-24 transform -translate-x-1/2 -translate-y-1/2'>
              <div className='ml-8 mt-8 mr-4'>
                <p className='text-3xl font-bold mb-6'>{options_details[activeOption - 1].title}</p>
                <div className='flex items-start mb-6'>
                  <IoMdCheckmark size={50} className='mr-4 pb-6'/>
                  <p className='font-medium'>{options_details[activeOption - 1].description1}</p>
                </div>
                <div className='flex items-start'>
                  <IoMdCheckmark size={50} className='mr-4 pb-6'/>
                  <p className='font-medium'>{options_details[activeOption - 1].description2}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-8/12 m-auto mt-24 flex justify-center'>
        <p className='text-4xl font-bold border-b-2 border-zinc-200 pb-2 px-10'>GET STARTED NOW</p>
      </div>
      <div className='w-full relative'>
        <Image src="/img/home_img/home_page_img_1.png" alt="Image 3" width={100} height={200} className='absolute bottom-0 left-0'/>
        <Image src="/img/home_img/home_page_img_6.png" alt="Image 4" width={120} height={200} className='absolute top-0 right-0'/>
        <div className='w-8/12 m-auto mt-10 text-zinc-800 flex flex-col justify-center gap-y-16'>
          <div className='flex flex-wrap gap-x-16 justify-center gap-y-8 '>
            <div className='w-96 h-80'>
              <img src="/img/home_img/booking.jpg" alt='bg' className='w-full h-full object-cover rounded-xl'/>
            </div>
            <div className='w-96'>
              <p className='font-bold text-4xl mb-4'>Book trusted help for home task</p>
              <p className='font-bold text-gray-400 text-lg mb-4'>Get matched with top-rated professionals for all your needs</p>
              <Button className='mr-4 font-bold'>Book now</Button>
              <Button className='font-extrabold bg-gray-300 text-black'>Learn more</Button>
            </div>
          </div>
          <div className='flex flex-wrap gap-x-16 justify-center gap-y-8'>
            <div className='w-96'>
              <p className='font-bold text-4xl mb-4'>Become a versatile Home Task Experts</p>
              <p className='font-bold text-gray-400 text-lg mb-4'>Bring expertise, tools, and a can-do attitude to make sure customer's project is completed efficiently.</p>
              <Button className='mr-4 font-bold'>Start working now</Button>
              <Button className='font-extrabold bg-gray-300 text-black'>Learn more</Button>
            </div>
            <div className='w-96 h-80'>
              <img src="/img/home_img/working.jpg" alt='bg' className='w-full h-full object-cover rounded-xl object-right'/>
            </div>
          </div>
        </div>
      </div>

      <div className='bg-gradient-to-b from-emerald-800 via-emerald-900 to-zinc-950 text-white w-full mt-24 py-12'>
        <div className='w-8/12 m-auto flex justify-center mb-16'>
          <p className='text-4xl font-bold border-b-2 border-zinc-600 pb-2 px-10'>PRICING and POLICIES</p>
        </div>
        <div className='w-10/12 m-auto flex flex-wrap gap-x-10 justify-center gap-y-10'>
            <div className='rounded-xl bg-slate-50 text-slate-900 p-10 w-80 hover:bg-gray-300'>
              <p className='text-xl font-bold text-gray-500 mb-4'>Personal</p>
              <p className='text-6xl font-bold mb-10'>$5 <span className='text-lg text-gray-500'>p/transaction</span></p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'> <BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <Button className='mt-10 bg-zinc-800 font-bold text-lg'>Get started</Button>
            </div>
            <div className='rounded-xl bg-slate-50 text-slate-900 p-10 w-80 hover:bg-gray-300'>
              <p className='text-xl font-bold text-gray-500 mb-4'>Personal</p>
              <p className='text-6xl font-bold mb-10'>$5 <span className='text-lg text-gray-500'>p/transaction</span></p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'> <BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <Button className='mt-10 bg-zinc-800 font-bold text-lg'>Get started</Button>
            </div>
            <div className='rounded-xl bg-slate-50 text-slate-900 p-10 w-80 hover:bg-gray-300'>
              <p className='text-xl font-bold text-gray-500 mb-4'>Personal</p>
              <p className='text-6xl font-bold mb-10'>$5 <span className='text-lg text-gray-500'>p/transaction</span></p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <p className='text-base mb-2 font-semibold'><BiSolidCheckCircle size={22} className='inline mr-4'/>Guanrantee completion</p>
              <Button className='mt-10 bg-zinc-800 font-bold text-lg'>Get started</Button>
            </div>
        </div>
        
        <div className='w-8/12 m-auto flex justify-center mb-8 mt-20'>
          <p className='text-4xl font-bold border-b-2 border-zinc-600 pb-2 px-10'>REVIEWS</p>
        </div>
        <div className='w-8/12 m-auto flex flex-col justify-center gap-y-6 bg-white text-black py-6 rounded-3xl px-8'>
          <p className='text-gray-700 font-medium text-lg text-center'>
            “Thank you for building such an empowering tool, especially for designers! 
            My job was finished in less than a day. Great!
            Thank you for building such an empowering tool, especially for designers! 
            My job was finished in less than a day. Great!”
          </p>
          <div className='flex justify-center'> 
            <FaStar className='w-14 h-14 text-yellow-300 mr-2'/>
            <FaStar className='w-14 h-14 text-yellow-300 mr-2'/>
            <FaStar className='w-14 h-14 text-yellow-300 mr-2'/>
            <FaStar className='w-14 h-14 text-yellow-300 mr-2 '/>
            <FaStar className='w-14 h-14 text-yellow-300 mr-2'/>
          </div>
          <div className='flex justify-between items-center'>
            <BiSolidLeftArrow className='w-16 h-16'/>
            <div className='flex items-center justify-center gap-x-3'>
              <img src="/img/home_img/profile.png" alt="" className='w-20 h-20'/>
              <div>
                <p className= {`text-xl font-semibold ${styles.mb_2}`}>Karla Ray</p>
                <p className='text-sm font-semibold text-gray-500'>@kayray</p>
              </div>
            </div>
            <BiSolidRightArrow className='w-16 h-16'/>
          </div>
        </div>

        <div className='w-8/12 m-auto flex justify-center mb-8 mt-20'>
          <p className='text-4xl font-bold border-b-2 border-zinc-600 pb-2 px-10'>FAQ</p>
        </div>
        <div className='w-8/12 m-auto p-8 rounded-xl bg-white text-gray-500 pb-12'>
          <Accordion type="single" collapsible className=''>
            <AccordionItem value="item-1">
            <AccordionTrigger className='text-xl font-semibold text-left'>
              <div className='flex'><AiOutlinePlus className='inline-block mt-1 mr-2'/> Is it accessible?</div>
            </AccordionTrigger>
            <AccordionContent className='text-lg font-bold text-zinc-800'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-2">
            <AccordionTrigger className='text-xl font-semibold'>
              <div className='flex'><AiOutlinePlus className='inline-block mt-1 mr-2'/> Is it accessible?</div>
            </AccordionTrigger>
            <AccordionContent className='text-lg font-bold text-zinc-800'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-3">
            <AccordionTrigger className='text-xl font-semibold'>
              <div className='flex'><AiOutlinePlus className='inline-block mt-1 mr-2'/> Is it accessible?</div>
            </AccordionTrigger>
            <AccordionContent className='text-lg font-bold text-zinc-800'>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
       
      </div>
      <Footer/>
    </div>
  );
}

