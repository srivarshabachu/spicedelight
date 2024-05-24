'use client';
import UserTabs from "../../../components/layout/Usertabs";
import Link from "next/link";
import { useState } from "react";
import { useProfile } from "../../../components/UseProfile";
import Image from "next/image";
import toast from "react-hot-toast";
import { redirect } from "next/navigation";
import MenuItemForm from "../../../components/layout/MenuItemForm";
export default function NewMenuItemPage() {
    let { loading, data } = useProfile();
    const [redirectToItems, setRedirectToItems] = useState(false);
    async function handleformsubmit(ev , data) {
        ev.preventDefault();
        
        console.log(data)
        const savingPromise = new Promise(async (resolve, reject) => {
            const response = await fetch('/api/menu-items', {
                method: 'POST',
                body: JSON.stringify(data),
                headers: { 'Content-Type': 'application/json' },
            });
           
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
        setRedirectToItems(true);
    }
    if (redirectToItems) {
        return redirect('/menu-items');
    }
    if (loading) {
        return 'Loading user info...';
    }

    if (!data.admin) {
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
           <MenuItemForm onSubmit={handleformsubmit}/>

        </section>
    );
}