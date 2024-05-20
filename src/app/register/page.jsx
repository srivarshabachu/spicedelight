'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';
import { signIn } from "next-auth/react";
const Registerpage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [creatingUser, setCreatingUser] = useState(false);
  const [userCreated, setUserCreated] = useState(false);
  const [error, setError] = useState(false);
  async function handleFormSubmit(ev) {
    ev.preventDefault();
    setCreatingUser(true);
    setError(false);
    setUserCreated(false);
    const response = await fetch('api/register',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      }
    );
    console.log({ email, password })
    if (response.ok) {
      setUserCreated(true);
      setEmail('');
      setPassword('');
    }
    else {
      setError(true);
    }
    setCreatingUser(false);
  }
  return (
    <section className='mt-9' style={{ fontFamily: 'Gill Sans' }}>
      <h1 className='text-primary text-4xl text-center'>
        Register ........
      </h1>
      {userCreated && (
        <div className="my-4 text-center">
          User created.<br />
          Now you can{' '}
          <Link className="underline" href={'/login'}>Login &raquo;</Link>
        </div>
      )}
      {error && (
        <div className="my-4 text-center">
          An error has occurred.<br />
          Please try again later
        </div>
      )}
      <form className='' onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" value={email} disabled={creatingUser} onChange={ev => setEmail(ev.target.value)} />
        <input type="password" placeholder="password" value={password} disabled={creatingUser} onChange={ev => setPassword(ev.target.value)} />
        <button type='submit' disabled={creatingUser}>Register</button>
        <div>
          <p className='text-center py-4'>&lt; or &gt;</p>
          <button onClick={() => signIn('google', { callbackUrl: '/' })} className='flex gap-4 justify-center bg-white text-primary border'>
            <Image src={'/googlelogo.png'} width={"25"} height={"20"} alt={{}} />
            Login with google</button>
        </div>
        <div className="text-center my-4 text-gray-500 border-t pt-4">
          Existing account?{' '}
          <Link className="underline" href={'/login'}>Login here &raquo;</Link>
        </div>
      </form>
    </section>
  )
}

export default Registerpage
