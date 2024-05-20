'use client';
import { signIn } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(ev) {
        ev.preventDefault();
        setLoginInProgress(true);
        await signIn('credentials', { email, password, callbackUrl: '/' });
        setLoginInProgress(false);
    };
    
    return (
        <section className="mt-9" style={{ fontFamily: 'Gill Sans' }}>
            <h1 className="text-center text-primary text-4xl mb-4">
                Login......
            </h1>
            <form onSubmit={handleFormSubmit}>
                <input type="email" placeholder="email" value={email} disabled={loginInProgress} onChange={ev => setEmail(ev.target.value)} />
                <input type="password" placeholder="password" value={password} disabled={loginInProgress} onChange={ev => setPassword(ev.target.value)} />
                <button type='submit' disabled={loginInProgress}>Login</button>
                <div>
                    <p className='text-center py-4'>&lt; or &gt;</p>
                    <button onClick={() => signIn('google', { callbackUrl: '/' })} className='flex gap-4 justify-center bg-white text-primary border'>
                        <Image src={'/googlelogo.png'} width={"25"} height={"20"} alt={{}} />
                        Login with google</button>
                </div>
            </form>
        </section>
    );
}