"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const SearchBar = () => {
    const router = useRouter();
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const name = formData.get("name") as string;

        if(name){
            router.push(`/list?name=${name}`);
        }
    }
  return (
    <form className="flex flex-1 bg-gray-100 justify-between p-2 rounded-md gap-4 ic" onSubmit={handleSearch}>
        <input type="text" name="name" placeholder="Search" className="flex-1 bg-transparent outline-none"/>
        <button type="submit" className="cursor-pointer">
            <Image src="/search.png" alt="search" width={16} height={16}/>
        </button>
    </form>
  )
}

export default SearchBar