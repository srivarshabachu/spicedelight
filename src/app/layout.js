'use client'
import { Lemon } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast';
import { AppProvider } from '../components/AppContext';
import { useState } from 'react';
import Header from '/src/components/layout/header'
const roboto = Lemon({ subsets: ['latin'], weight: ['400'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-7xl mx-auto p-10">
          <AppProvider>
            <Toaster/>
            <Header/>
              {children}
              <footer className="border-t p-8 text-center text-gray-500 mt-16" style={{fontFamily: 'Gill Sans'}}>
            &copy; 2024 All rights reserved
              </footer>
            </AppProvider>
        </main>
      </body>
    </html>
  )
}
