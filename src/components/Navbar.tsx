import Link from "next/link";
import Menu from "./Menu";
import Image from "next/image";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
    return (
        <div className="h-20 2xl:px-64 lg:px-16 md:px-8 px-4 relative xl:px-32">
            {/* MOBILE */}
            <div className="flex h-full justify-between items-center md:hidden">
                <Link href="/"><div className="text-2xl tracking-wide">TULYA</div></Link>
                <Menu />
            </div>
            {/* BIGGER SCREENS */}
            <div className="h-full justify-between gap-8 hidden items-center md:flex">
                {/* LEFT */}
                <div className="flex w-1/3 gap-12 items-center xl:w-1/2">
                    <Link href="/" className="flex gap-3 items-center">
                        <Image src="/logo.png" alt="logo" width={24} height={24} />
                        <div className="text-2xl tracking-wide">TULYA</div>
                    </Link>
                    <div className="gap-4 hidden xl:flex">
                        <Link href="/">Home</Link>
                        <Link href="/">Shop</Link>
                        <Link href="/">Deals</Link>
                        <Link href="/">About</Link>
                        <Link href="/">Contact</Link>
                    </div>
                </div>
                {/* RIGHT */}
                <div className="flex justify-between w-2/3 gap-8 items-center xl:w-1/2">
                    <SearchBar/>
                    <NavIcons/>
                </div>
            </div>
        </div>
    )
}
export default Navbar;