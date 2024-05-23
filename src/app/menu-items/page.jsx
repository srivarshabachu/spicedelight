'use client';
import { useState } from "react";
import { useProfile } from "../../components/UseProfile";
import Link from "next/link";
import Image from "next/image";
import UserTabs from '../../components/layout/Usertabs';
export default function MenuItemPage() {
   
    let { loading, data } = useProfile();
    if (loading) {
        return 'Loading user info...';
    }

    if (!data._doc.admin) {
        return 'Not an admin.';
    }
    return (
        <section className="mt-8" style={{ fontFamily: 'Gill Sans' }}>
            <UserTabs isAdmin={true} />
            <div className="mt-8">
                <Link
                    className="button border   max-w-2xl mx-auto rounded-xl p-2 flex justify-center gap-4"
                    href={'/menu-items/new'}>
                    <span>Create new menu item:  </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </Link>
            </div>
            <div>
                <h2 className="text-sm text-gray-500 mt-8">Edit menu item:</h2>
                <div className="grid grid-cols-3 gap-2">
                    
                </div>
            </div>
        </section>
    );
}