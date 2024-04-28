import React from 'react'
import Image from 'next/image'
import styles from '../layout/layoutstyles.css'
export default function MenuItem() {
    return (
        <div>
            <div className="items rounded-lg py-5 hover:bg-white hover:shadow-md hover:shadow-black/50" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                <Image className='menuimg' src={'/biryani.png'} width={"250"} height={"200"} style={{}} />
                <h4 className='py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi.ligula hendrerit mattis.</h4>
                <button className="menuimg bg-primary text-white rounded-full px-6 py-2.5">Add to Cart</button>
            </div>
        </div>
    );
}

