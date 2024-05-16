'use client'
import { useState } from "react"
import React from 'react'

const SectionHeaders = ({ subHeader, mainHeader }) => {
    return (
        <div className='HomeMenu' style={{
            display: 'flex', flexDirection: 'column', display: 'flex',
            justifyContent: 'center', alignItems: 'center',}}>
            <h3 className="leading-10">{subHeader} </h3>
            <h2 className="uppercase font-bold text-4xl italic text-biryani">{mainHeader}</h2>
        </div>
    )
}

export default SectionHeaders
