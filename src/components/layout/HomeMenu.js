'use client'
import './layoutstyles.css'
import Image from 'next/image'
import MenuItem from '../menu/MenuItem'
import { useState } from 'react';
export default function HomeMenu() {
    return (
        <section className='HomeMenu'>
            <div className='absolute justify-start'>
                <div className="staranise absolute -left-12">
                    <Image src={'/staranise.png'} layout={'fill'} alt={'staranise'} objectFit={'contain'} />
                </div>
            </div>
            <div className="px-20 py-20 text-center">
                <h3 className="leading-10">Check  Out Our  </h3>
                <h2 className="uppercase font-bold text-4xl italic text-biryani">Menu</h2>
            </div>
            <div className="grid grid-cols-3 gap-4 p-4 text-black text-2xl  py-5">
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
                <MenuItem />
            </div>
        </section>
    )
}