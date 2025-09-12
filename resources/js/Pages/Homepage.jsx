import React, { useEffect, useState } from 'react';
import { Head, Link } from '@inertiajs/react';
import ScrollReveal from 'scrollreveal';
// Components
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'

export default function Homepage(props) {

    useEffect(() => {
        ScrollReveal().reveal(".reveal", {
            duration: 750,
            origin: "bottom",
            distance: "50px",
            reset: false
        });
        ScrollReveal().reveal(".reveal-late-1", {
            duration: 750,
            origin: "bottom",
            distance: "50px",
            reset: false,
            delay: 100
        });
        ScrollReveal().reveal(".reveal-late-2", {
            duration: 750,
            origin: "bottom",
            distance: "50px",
            reset: false,
            delay: 200
        });
    })

    console.log('data = ', props.news)
    return (
        <div className='flex-col justify-center items-center text-2xl'>
            <Head judul={props.judul} />
            <Navbar />

            <div style={{
                backgroundImage: 'radial-gradient(circle, rgba(74, 85, 104, 0.3) 1px, transparent 2px)',
                backgroundSize: '30px 30px',
                backgroundPosition: '0 0, 15px 15px',
                backgroundColor: '#f7fafc',
            }} className="hero pt-32 max-h-screen overflow-y-hidden">

                <div className="grid place-items-center gap-8">
                    <div className='reveal logo'>
                        <img className="w-[400px]" src="./images/logo.png" alt="Logo" />
                    </div>

                    <p className='reveal-late-1 font-semibold tracking-wider w-[45%] text-4xl line-height text-center'>Redefining digital journalism
                        with top-tier news, blogs, and strories from every corner of the globe</p>

                    <div className='reveal-late-2'>
                        <img className="w-[550px]" src="./images/touru.png" alt="Logo" />
                    </div>
                </div>
            </div>

            <div className='container mx-auto mt-32 px-12'>
                <div className="grid place-items-center px-2">
                    <h2 className='text-6xl font-bold tracking-wide'>In the Spotlight</h2>
                    <p className='mt-2 text-xl font-base text-gray-600 tracking-wide'>Dive in, explore, and see what everyone's talking about</p>
                </div>
                <div className="mt-8 grid grid-cols-4 grid-rows-2 gap-4 h-[750px]">
                    <div className="col-span-2 row-span-2 relative">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="./images/ananta.jpeg"
                            alt="Ananta"
                        />

                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
                            <div className="absolute bottom-3 left-3 text-white">
                                {/* Category */}
                                <div className="bg-[#E6C558] text-white text-xs px-2 py-1 rounded shadow inline-block mb-2">
                                    Announcement
                                </div>

                                {/* Title + Time */}
                                <h3 className="text-2xl font-semibold drop-shadow-md">ANANTA Tokyo Game Show 2025 Announcement</h3>
                                <p className="text-sm text-gray-300 drop-shadow-md">5 min read</p>
                            </div>
                        </div>
                    </div>

                    {/* Normal grid items */}
                    <div className="col-span-1 relative">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="./images/genshin.avif"
                        />
                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
                            <div className="absolute bottom-3 left-3 text-white">
                                {/* Category */}
                                <div className="bg-[#E6C558] text-white text-xs px-2 py-1 rounded shadow inline-block mb-2">
                                    Release
                                </div>

                                {/* Title + Time */}
                                <h3 className="text-2xl font-semibold drop-shadow-md">Genshin Impact: Luna 1 – Nod Krai Goes Live</h3>
                                <p className="text-sm text-gray-300 drop-shadow-md">15 min read</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-1 relative">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="./images/hsr-livestream.jpeg"
                        />

                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
                            <div className="absolute bottom-3 left-3 text-white">
                                {/* Category */}
                                <div className="bg-[#E6C558] text-white text-xs px-2 py-1 rounded shadow inline-block mb-2">
                                    Announcement
                                </div>

                                {/* Title + Time */}
                                <h3 className="text-2xl font-semibold drop-shadow-md">Honkai: Star Rail Version 3.6 Livestream</h3>
                                <p className="text-sm text-gray-300 drop-shadow-md">10 min read</p>
                            </div>
                        </div>

                    </div>
                    <div className="col-span-2 relative">
                        <img
                            className="w-full h-full object-cover rounded-lg"
                            src="./images/wuwa.jpeg"
                        />

                        {/* Overlay */}
                        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black/90 to-transparent rounded-b-lg">
                            <div className="absolute bottom-3 left-3 text-white">
                                {/* Category */}
                                <div className="bg-[#E6C558] text-white text-xs px-2 py-1 rounded shadow inline-block mb-2">
                                    Collab
                                </div>

                                {/* Title + Time */}
                                <h3 className="text-2xl font-semibold drop-shadow-md">Wuthering Waves x DAO XIANG CUN Collab</h3>
                                <p className="text-sm text-gray-300 drop-shadow-md">7 min read</p>
                            </div>
                        </div>

                    </div>

                </div>


            </div>

            <div className="container mx-auto my-32 px-12">
                <div className="border-b-2 border-[#E6C558] w-fit pb-1 px-2">
                    <h2 className='text-2xl italic font-bold tracking-wide'>Latest</h2>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                    {props.news && props.news.length > 0 ? props.news.map((data, i) => {
                        return (
                            <div key={i} className="bg-white text-black shadow-lg border rounded-lg overflow-hidden">
                                {/* Image */}
                                <img
                                    className="w-full h-[250px] object-cover"
                                    src={`/storage/${data.image}`}
                                    alt={data.judul}
                                />

                                {/* Content */}
                                <div className="p-4">
                                    {/* Category and Date */}
                                    <div className="flex justify-between items-center mb-3">
                                        <span className="bg-[#E6C558] text-white px-3 py-1 rounded-full text-sm font-medium">
                                            {data.kategori}
                                        </span>
                                        <span className="text-gray-400 text-sm">
                                            {Date(data.created_at).toString().substring(0, 15)}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-xl font-bold mb-3 leading-tight">
                                        {data.judul}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm mb-3 text-gray-600">
                                        {data.deskripsi}
                                    </p>
                                </div>
                            </div>
                        )
                    }) : (<p> Saat ini belum ada berita</p>)}
                </div>
            </div>

            <Footer />

            {/* <p>{props.deskripsi}</p>
            {props.news && props.news.length > 0 ? props.news.map((data, i) => {
                return(
                    <div key={i} className="p-4 m-2 bg-white text-black shadow-md border">
                        <p className='text-2xl'>{data.judul}</p>
                        <p className='text-sm'>{data.deskripsi}</p>
                        <p>{data.kategori}</p>
                        <p>{data.author}</p>
                    </div>
                )
            }) : (<p> Saat ini belum ada berita</p>) }
            <Footer /> */}
        </div>
    )
}