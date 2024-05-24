'use client'
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useEffect } from "react";
import UserTabs from "../../components/layout/Usertabs"
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
export default function ProfilePage() {
    const [userName, setUserName] = useState('');
    const [phone, setPhone] = useState('');
    const [Address, setAddress] = useState('');
    const [Postalcode, setPostalcode] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const [profilefetched, setProfilefetched] = useState(false);
    const session = useSession();
    const { status } = session;
    const userImage = session.data?.user?.Image
   
    useEffect(() => {
        setUserName(session.data?.user?.name);
        if (status === 'authenticated') {
            fetch('/api/profile').then(response => {
                response.json().then(data => {
                    setUserName(data._doc.name)
                    setPhone(data._doc.phone)
                    setAddress(data._doc.Address)
                    setPostalcode(data._doc.Postalcode)
                    setCity(data._doc.city)
                    setCountry(data._doc.country)
                    setIsAdmin(data._doc.admin);
                    setProfilefetched(true)
                })
            }); 
        }
    }, [session, status]);
    if (status === 'loading' || !profilefetched) {
        return 'Loading...';
    }
    if (status === 'unauthenticated') {
        return redirect('/login');
    }
    // async function handleImageupload(ev){
    //     const files = ev.target.files;
    //     if (files?.length === 1) {
    //         const data = new FormData;
    //         data.set('file', files[0]);
    //         await fetch('/api/upload', {
    //             method: 'POST',
    //             body: data,
    //             headers: { 'Content-Type': 'multipart/form-data' }
    //         });
    //     }
    // }
    async function handleProfileInfoUpdate(ev) {
        ev.preventDefault();
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userName,
                    phone,
                    Address,
                    city,
                    Postalcode,
                    country
                }),
            });
            if (response.ok)
                resolve()
            else
                reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving...',
            success: 'Profile saved!',
            error: 'Error',
        });

    }
    return (
        <section style={{ fontFamily: 'Gill Sans' }}>
           
            <UserTabs isAdmin={isAdmin} />
            <form className="max-w-md mx-auto" onSubmit={handleProfileInfoUpdate}>
                <div className="flex gap-4 items-center">
                    <div>
                        <div className="p-10 rounded-lgtext-black">
                            <Image src={userImage} width={50} height={50} />
                            <label>
                                <input type="file"  className="hidden" />
                                <span className="center p-2 border rounded-lg cursor-pointer">Edit</span>
                            </label>
                        </div>
                    </div>
 
                    <div className="grow" >
                    <input type="text" placeholder="First and last name" value={userName}  onChange={ev => setUserName(ev.target.value)} />
                        <input type="email" disabled={true} placeholder={session.data.user?.email} />
                        <input type="tel" placeholder="Phone number" value={phone} onChange={ev => setPhone(ev.target.value)} />
                        <input type="text" placeholder="Street address" value={Address} onChange={ev => setAddress(ev.target.value)} />
                        <div className="flex gap-2">
                            <input type="text" placeholder="City" value={city} onChange={ev => setCity(ev.target.value)} />
                            <input type="text" placeholder="Postal code" value={Postalcode} onChange={ev => setPostalcode(ev.target.value)} />
                        </div>
                        
                        <input type="text" placeholder="Country" value={country} onChange={ev => setCountry(ev.target.value)} />
                    <button type='submit'>Save</button>
                </div>
            </div>
            </form>
        </section>
    )
 }