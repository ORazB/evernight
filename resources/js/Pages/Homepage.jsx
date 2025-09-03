import React from 'react';
import { Head, Link } from '@inertiajs/react';
// Components
import Navbar from '@/Components/Navbar'
import HomeContent from '@/Components/HomeContent'
import Footer from '@/Components/Footer'

export default function Homepage(props) {
    console.log('data = ', props.news)
    return(
        <div className='flex-col justify-center items-center min-h-screen text-white text-2xl'>
            <Head judul={props.judul} />
            <Navbar />
            <HomeContent />
            <p>{props.deskripsi}</p>
            {props.news ? props.news.map((data, i) => {
                return(
                    <div key={i} className="p-4 m-2 bg-white text-black shadow-md border">
                        <p className='text-2xl'>{data.judul}</p>
                        <p className='text-sm'>{data.deskripsi}</p>
                        <p>{data.kategori}</p>
                        <p>{data.author}</p>
                    </div>
                )
            }) :<p> Saat ini belum ada berita</p> }
            <Footer />
        </div>
    )
}