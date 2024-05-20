'use client'
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function ProfilePage() {
    const session = useSession();
    console.log(session); 
    const { status } = session;
    if (status === 'loading') {
        return 'Loading...';
    }
    if (status === 'unauthenticated') {
        return redirect('/login');
    }
    return (
        <h1 className="text-center text-primary text-4xl mb-4" style={{ fontFamily: 'Gill Sans' }}>
            Profile......
        </h1>
    )
 }