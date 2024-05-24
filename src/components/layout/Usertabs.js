'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserTabs({ isAdmin }) {
    const path = usePathname();
    return (
        <div className="flex mx-auto gap-10 py-8 tabs justify-center flex-wrap">
            <Link
                className={path === '/profile' ? 'active' : ''}
                href={'/profile'}
            >
                Profile
            </Link>
            {isAdmin && (
                <>
                    <Link
                        href={'/categories'}
                        className={path === '/categories' ? 'active' : ''}
                    >
                        Categories
                    </Link>
                    <Link
                        href={'/menu-items'}
                        className={path.includes('menu-items') ? 'active' : ''}
                    >
                        Menu Items
                    </Link>
                    <Link
                        href={'/users'}
                        className={path.includes('/users') ? 'active' : ''}
                       
                    >
                        Users
                    </Link>
                </>
            )}
            <Link
                className={path === '/orders' ? 'active' : ''}
                href={'/orders'}
            >
                Orders
            </Link>
        </div>
    );
}