import Image from "next/image";
import Link from "next/link";
import { BsSearch } from "react-icons/bs";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { MdNightlight } from "react-icons/md";

import { NavbarItem } from "@/constants/NavbarItem";

const Header = () => {
    return (
        <header className="bg-white dark:bg-secondary-900 p-2">
            <nav className="m-auto max-w-screen-xl">
                <div className="flex items-center justify-between border border-secondary-100 rounded-full dark:bg-secondary-950 px-6 mt-4">
                    <div className="flex items-center">
                        <Link href={`/`}>
                            <Image 
                                src={`/image/LogoCompany.png`} 
                                width={100} 
                                height={100} 
                                alt="پرند مدیا"
                                priority={true}/>
                        </Link>
                        <ul className="flex items-center gap-x-6">
                            {NavbarItem.map(item => (
                                <li key={item.id}>
                                    <Link 
                                        href={item.href} 
                                        className="text-secondary-50 transition-all duration-150 
                                        ease-in-out hover:text-primary-900">
                                            {item.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="flex items-center gap-x-6">
                        <div className="flex items-center gap-x-2">
                            <HiOutlineBellAlert className="text-white" size={35}/>
                            <div>
                                <p className="dark:text-gray-300 text-sm">اطلاعیه سایت</p>
                                <p className="dark:text-gray-300 text-sm">نمونه کار 3</p>
                            </div>
                        </div>
                        <div>
                            <BsSearch className="dark:text-white cursor-pointer" size={25}/>
                        </div>
                        <div>
                            <MdNightlight className="dark:text-white cursor-pointer" size={25}/>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;