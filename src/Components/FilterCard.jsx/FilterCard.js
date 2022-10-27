import React, { useEffect, useState } from 'react'
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import hotelCards from './filter.json'
import { AiOutlineCloseCircle, AiOutlineDown } from 'react-icons/ai'
import FeatureCard from '../FeatureCard';
const FilterCard = () => {
    const [active, setActive] = useState(hotelCards[0]);
    const [toggle, setToggle] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [open, setOpen] = useState(false);
    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <div className=''>
            <div className={scrollPosition >= 800 ? 'px-2 fixed w-full contianer lg:top-[80px] md:top-[80px] sm:top-[80px] top-[124px] py-5 block sm:justify-between sm:items-center sm:flex ' : 'block sm:justify-between sm:items-center sm:flex w-full'} style={{ zIndex: '1', backgroundColor: '#22132E' }}>
                <div className='flex w-[390px]'>
                    {
                        hotelCards.map((link) => (
                            <a key={link.name} onClick={() => setActive(link)} style={{ cursor: 'pointer', background: active === link ? 'rgba(79,70,229)' : 'none' }} className="w-full mr-1 inline-flex items-center py-3 px-7 text-sm font-medium text-center text-white bg-blue-700 rounded-3xl hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                {link.name}
                            </a>

                        ))
                    }
                </div>
                <div className='flex items-center pr-5 px-3 pt-3 '>
                    <div className="relative mr-2">
                        <input style={{ background: 'transparent' }} type="search" id="default-search" className="block p-3 pl-10 w-full text-sm text-gray-900  rounded-3xl border border-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-white" placeholder="Search Raffle..." required />
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                    </div>
                    <button onClick={() => setToggle(!toggle)} type="button" className={toggle ? "lg:block md:block hidden text-white bg-[#8b5cf6] rounded-3xl text-sm px-5 py-3 mr-2 dark:bg-[translate]" : "lg:block md:block hidden text-white hover:text-[#8b5cf6] bg-[transparent] border border-white hover:border-[#8b5cf6] rounded-3xl text-sm px-5 py-3 mr-2 mb-2 dark:bg-[translate]"}>Filter/Short</button>
                    <button onClick={() => setOpen(!open)} type="button" className={open ? "lg:hidden md:hidden block text-white bg-[#8b5cf6] rounded-3xl text-sm px-5 py-3 mr-2 dark:bg-[translate]" : "lg:hidden md:hidden block text-white hover:text-[#8b5cf6] bg-[transparent] border border-white hover:border-[#8b5cf6] rounded-3xl text-sm px-5 py-3 mr-2 mb-2 dark:bg-[translate]"}>Filter/Short</button>
                </div>
            </div>
            <div className='flex justify-between mt-5' >
                <div className={toggle ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' : 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'} style={{ placeItems: 'center' }}>
                    {active?.items?.map((item) => (
                        <FeatureCard key={item._id} card={item} />
                    ))}
                </div>
                {
                    toggle && (
                        <div style={{ maxWidth: '300px', background: 'rgb(40, 30, 53)' }} className={scrollPosition >= 800 ? 'p-10 hidden lg:inline md:inline fixed z-1 top-[150px]  right-[0]' : 'p-10 hidden lg:inline md:inline z-1 h-[100vh] top-[83px]  right-[0] '}>
                            <div className='flex items-center justify-between' >
                                <h1 style={{ color: '#42296A' }} className="text-3xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl">
                                    <span className="block  xl:inline">SORT</span>
                                </h1>
                                <h1 onClick={() => setToggle(!toggle)} style={{ cursor: 'pointer', color: '#42296A' }} className="text-3xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl">
                                    <span className="block  xl:inline"><AiOutlineCloseCircle /></span>
                                </h1>
                            </div>
                            <div>
                                {
                                    hotelCards.map((link) => (
                                        <h1 key={link.subname} onClick={() => setActive(link)} style={{ cursor: 'pointer' }} className="text-xl dark:text-white hover:dark:text-[#42296A] font-bold tracking-tight pb-2  sm:text-5xl md:text-2xl">
                                            <span className="block  xl:inline">{link?.subname}</span>
                                        </h1>
                                    ))
                                }
                            </div>
                            <div style={{ minWidth: '200px' }}>
                                <h1 style={{ color: '#42296A' }} className="text-3xl font-bold tracking-tight  sm:text-5xl md:text-5xl">
                                    <span className="block  xl:inline">Filter</span>
                                </h1><br />
                                <h1 onClick={() => setToggle(!toggle)} style={{ cursor: 'pointer' }} className="text-3xl dark:text-white  font-bold tracking-tight pb-4  sm:text-5xl md:text-2xl">
                                    <span className="block text-xl  xl:inline">Token</span>
                                </h1>
                                <div className='relative'>
                                    <span className='absolute right-2 top-4'><AiOutlineDown className='text-[#42296A] font-[600] text-[20px]' /></span>
                                    <input style={{ borderColor: '#42296A', backgroundColor: 'transparent', color: '#42296A' }} type="search" id="default-search" className="block px-4 py-2 pl-10 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Token" required />
                                </div>
                                <h1 onClick={() => setToggle(!toggle)} style={{ cursor: 'pointer' }} className="text-3xl dark:text-white  font-bold tracking-tight pb-4  sm:text-5xl md:text-2xl">
                                    <span className="block text-xl  xl:inline">Collection</span>
                                </h1>
                                <div className='relative'>
                                    <span className='absolute right-2 top-4'><AiOutlineDown className='text-[#42296A] font-[600] text-[20px]' /></span>
                                    <input style={{ borderColor: '#42296A', backgroundColor: 'transparent', color: '#42296A' }} type="search" id="default-search" className="block px-4 py-2 pl-10 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Collection" required />
                                </div>

                            </div>

                        </div>

                    )
                }

                <Transition.Root show={open} as={Fragment}>
                    <Dialog as="div" className="relative z-10" onClose={setOpen}>
                        <div className="fixed lg:hidden md:hidden block">
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="fixed inset-y-0 right-0 flex max-w-full pl-10">
                                    <Transition.Child
                                        as={Fragment}
                                        enter="transform transition ease-in-out duration-500 sm:duration-700"
                                        enterFrom="translate-x-full"
                                        enterTo="translate-x-0"
                                        leave="transform transition ease-in-out duration-500 sm:duration-700"
                                        leaveFrom="translate-x-0"
                                        leaveTo="translate-x-full"
                                    >
                                        <Dialog.Panel className="pointer-events-auto max-w-md">
                                            <div className="flex h-full flex-col  bg-[#22132E] shadow-xl">
                                                <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                                                    <div className='flex items-center justify-between' >
                                                        <h1 style={{ color: '#42296A' }} className="text-3xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl">
                                                            <span className="block  xl:inline">SORT</span>
                                                        </h1>
                                                        <h1 onClick={() => setOpen(false)} style={{ cursor: 'pointer', color: '#42296A' }} className="text-3xl font-bold tracking-tight pb-3  sm:text-5xl md:text-5xl">
                                                            <span className="block  xl:inline"><AiOutlineCloseCircle /></span>
                                                        </h1>
                                                    </div>
                                                    <div>
                                                        {
                                                            hotelCards.map((link) => (
                                                                <h1 key={link.subname} onClick={() => setActive(link)} style={{ cursor: 'pointer' }} className="text-xl dark:text-white hover:dark:text-[#42296A] font-bold tracking-tight pb-2  sm:text-5xl md:text-2xl">
                                                                    <span className="block  xl:inline text-xl">{link?.subname}</span>
                                                                </h1>
                                                            ))
                                                        }
                                                    </div>
                                                    <div style={{ minWidth: '200px' }}>
                                                        <h1 style={{ color: '#42296A' }} className="text-3xl font-bold tracking-tight  sm:text-5xl md:text-5xl">
                                                            <span className="block  xl:inline">Filter</span>
                                                        </h1><br />
                                                        <h1 onClick={() => setToggle(!toggle)} style={{ cursor: 'pointer' }} className="text-3xl dark:text-white  font-bold tracking-tight pb-4  sm:text-5xl md:text-2xl">
                                                            <span className="block text-xl  xl:inline">Token</span>
                                                        </h1>
                                                        <div className='relative'>
                                                            <span className='absolute right-2 top-4'><AiOutlineDown className='text-[#42296A] font-[600] text-[20px]' /></span>
                                                            <input style={{ borderColor: '#42296A', backgroundColor: 'transparent', color: '#42296A' }} type="search" id="default-search" className="block px-4 py-2 pl-10 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Token" required />
                                                        </div>
                                                        <h1 onClick={() => setToggle(!toggle)} style={{ cursor: 'pointer' }} className="text-3xl dark:text-white  font-bold tracking-tight pb-4  sm:text-5xl md:text-2xl">
                                                            <span className="block text-xl  xl:inline">Collection</span>
                                                        </h1>
                                                        <div className='relative'>
                                                            <span className='absolute right-2 top-4'><AiOutlineDown className='text-[#42296A] font-[600] text-[20px]' /></span>
                                                            <input style={{ borderColor: '#42296A', backgroundColor: 'transparent', color: '#42296A' }} type="search" id="default-search" className="block px-4 py-2 pl-10 w-full text-xl text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Collection" required />
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                        </Dialog.Panel>
                                    </Transition.Child>
                                </div>
                            </div>
                        </div>
                    </Dialog>
                </Transition.Root>
            </div>

        </div>
    )
}

export default FilterCard