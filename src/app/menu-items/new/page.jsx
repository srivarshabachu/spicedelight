'use client';
import UserTabs from "../../../components/layout/Usertabs";
import Link from "next/link";
import { useState } from "react";
import { useProfile } from "../../../components/UseProfile";
import Image from "next/image";
export default function NewMenuItemPage() {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [basePrice, setBasePrice] = useState('');
    let { loading, data } = useProfile();
   
    async function handleformsubmit(ev) {
        ev.preventDefault();
        data = { name, description, basePrice };
        console.log(data)
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/menu-items', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
            setBasePrice('')
            setDescription('')
            setName('')
            if (response.ok)
                resolve();
            else
                reject();
        });

        await toast.promise(savingPromise, {
            loading: 'Saving this tasty item',
            success: 'Saved',
            error: 'Error',
        });
        return redirect('/menu-items')
    }

    if (loading) {
        return 'Loading user info...';
    }

    if (!data._doc.admin) {
        return 'Not an admin.';
    }
    return (
        <section className="mt-8" style={{ fontFamily: 'Gill Sans' }}>
            <UserTabs isAdmin={true} />
            <Link
                className="button border   max-w-2xl mx-auto rounded-xl p-2 flex justify-center gap-4"
                href={'/menu-items'}>
                <span>Show all menu items  </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </Link>
            <form className="max-w-md mx-auto" onSubmit={handleformsubmit}>
                <div className="flex gap-4 items-center">
                    <div>
                        <div className="p-10 rounded-lgtext-black">
                            <label>
                                <input type="file" className="hidden" />
                                <span className="center p-2 border rounded-lg cursor-pointer">Edit</span>
                            </label>
                        </div>
                    </div>

                    <div className="grow" >
                        <input type="text" placeholder="Item Name" value={name}
                            onChange={ev => setName(ev.target.value)} />
                        <input type="text" placeholder="Description" value={description} onChange={ev => setDescription(ev.target.value)} />

                        <input type="text" placeholder="Price" value={basePrice}
                            onChange={ev => setBasePrice(ev.target.value)} />
                        <button type='submit'>Save</button>
                    </div>
                </div>
            </form>

        </section>
    );
}