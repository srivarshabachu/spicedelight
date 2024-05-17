'use client'
import './layoutstyles.css'
import Image from 'next/image'
import { useState } from 'react';
export default function Hero() {
    return (
        <section className='hero'>
            <div className='Hero'>
                <h1 className="text-6xl font-semibold">
                    <span className='text-biryani'>Biryani </span>
                    makes everything better.</h1>
                <p className="text-1xl my-6">In a world full of options, choose biryani.</p>
                <div className="flex gap-5 py-4">
                    <button className="menuimg bg-primary text-white rounded-full px-6 py-2.5 ">Order Now</button>
                    <button className="menuimg flex-gap-2">Learn more</button>
                </div>
            </div>
            <div className='biryani'>
                <Image src={'/biryani.png'} layout={'fill'} alt={'biryani'} objectFit='contain' />
            </div>
        </section>
    )
}

