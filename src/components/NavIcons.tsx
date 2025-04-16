"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const router = useRouter();

    const isLoggedIn = false;
    const handleProfile = () => {
        if(!isLoggedIn){
            router.push("/login");
        }
        setIsProfileOpen((prev) => !prev);
    }

  return (
    <div className="flex gap-4 items-center relative xl:gap-6">
        <Image src="/profile.png" alt="" width={22} height={22} className="cursor-pointer" onClick={handleProfile} />
        {isProfileOpen && (
            <div className="p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] text-sm absolute left-0 top-12 z-20">
                <Link href="/">Profile</Link>
                <div className="cursor-pointer mt-2">Logout</div>
            </div>
        )}
        <Image src="/notification.png" alt="" width={22} height={22} className="cursor-pointer" />
        <div className="cursor-pointer relative">
            <Image src="/cart.png" alt="" width={22} height={22} className="cursor-pointer" onClick={() => setIsCartOpen((prev) => !prev)} />
            <div className="flex bg-[#F35C7A] h-6 justify-center rounded-full text-sm text-white w-6 -right-4 -top-4 absolute items-center">2</div>
        </div>
        {isCartOpen && (
            <CartModal />
        )}
    </div>
  )
}

export default NavIcons