'use client'
import { Drawer } from "antd";
import Link from "next/link"
import { useEffect, useState } from "react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`w-full py-3 fixed top-0 z-50 transition-all duration-300 ${isScroll ? 'bg-[#010C14] shadow-lg' : 'bg-[#032A42]'}`}>

            <nav className="w-11/12 flex justify-between items-center mx-auto">

                <div className="flex items-center font-bold sans-serif text-xl">
                    <img
                        src='/images/logo4.png'
                        alt="myPic"
                        className="w-[50px] h-[50px] rounded-full object-cover mr-3"
                    />
                    <h1 className="text-white mr-1">Er.</h1>
                    <h1 className="text-[#13A2FD]">Brajesh</h1>
                </div>

                <div className="lg:flex gap-2 text-white sans-serif font-semibold text-lg lg:block hidden">

                    <Link href="/" className="px-4 py-2 rounded-md cursor-pointer 
              transition-all duration-300 hover:text-[#13A2FD] hover:bg-[#042338] focus:text-[#13A2FD] focus:bg-[#042338]">Home</Link>
                    <Link href="#about" className="px-4 py-2 rounded-md cursor-pointer 
              transition-all duration-300 hover:text-[#13A2FD] hover:bg-[#042338] focus:text-[#13A2FD] focus:bg-[#042338]">About</Link>

                    <Link href="#services" className="px-4 py-2 rounded-md cursor-pointer 
              transition-all duration-300 hover:text-[#13A2FD] hover:bg-[#042338] focus:text-[#13A2FD] focus:bg-[#042338]">Services</Link>

                    <Link href="#portfolio" className="px-4 py-2 rounded-md cursor-pointer 
              transition-all duration-300 hover:text-[#13A2FD] hover:bg-[#042338] focus:text-[#13A2FD] focus:bg-[#042338]">Portfolio</Link>

                    <Link href="#contact" className="px-4 py-2 rounded-md cursor-pointer 
              transition-all duration-300 hover:text-[#13A2FD] hover:bg-[#042338] focus:text-[#13A2FD] focus:bg-[#042338]">Contact</Link>
                </div>

                <div className="flex gap-4">
                    <Link href='/' className="w-[40px] h-[40px] rounded-full border border-gray-400 flex justify-center items-center shadow-lg text-white font-semibold hover:bg-[#13D0FD] transition-all duration-300 ease-in-out">
                        <i className="ri-linkedin-fill"></i>
                    </Link>

                    <Link href='/' className="w-[40px] h-[40px] flex rounded-full border border-gray-400 justify-center items-center shadow-lg text-white font-semibold hover:bg-[#13D0FD] transition-all duration-300 ease-in-out">
                        <i className="ri-threads-fill"></i>
                    </Link>

                    <button className="w-[40px] h-[40px] rounded-full border border-gray-400 flex justify-center items-center shadow-lg text-white font-semibold hover:bg-[#13D0FD] transition-all duration-300 ease-in-out lg:hidden block cursor-pointer" onClick={() => setOpen(true)}>
                        <i className="ri-menu-3-line text-xl text-white"></i>
                    </button>

                    <Drawer
                        title={
                            <div className="flex justify-start items-center font-bold sans-serif text-xl">
                                <img
                                    src='/images/logo4.png'
                                    alt="myPic"
                                    className="w-[50px] h-[50px] rounded-full object-cover mr-3"
                                />
                                <h1 className="text-white mr-1">Er.</h1>
                                <h1 className="text-[#13A2FD]">Brajesh</h1>
                            </div>
                        }
                        width={320}
                        placement="left"
                        onClose={() => setOpen(false)}
                        open={open}
                        closeIcon={
                            null
                        }
                        styles={{
                            content: { backgroundColor: "rgb(0, 10, 16)", color: 'white' },
                            body: { backgroundColor: "rgb(0, 10, 16)", color: "white" }
                        }}
                    >
                        <div className="flex flex-col space-y-2 text-lg monospace">
                            <Link href="/" className="border border-b-[#0E4464] border-t-0 border-l-0 border-r-0 pb-2 !text-gray-200 gill-sans" onClick={() => setOpen(false)}>
                                <i className="ri-home-7-fill text-white mr-4"></i> HOME
                            </Link>
                            <Link href="#about" className="border border-b-[#0E4464] border-t-0 border-l-0 border-r-0 pb-2 !text-gray-200 gill-sans" onClick={() => setOpen(false)}>
                                <i className="ri-price-tag-3-line text-white mr-4"></i> ABOUT
                            </Link>
                            <Link href="#services" className="border border-b-[#0E4464] border-t-0 border-l-0 border-r-0 pb-2 !text-gray-200 gill-sans" onClick={() => setOpen(false)}>
                                <i className="ri-login-circle-fill text-white mr-4"></i> SERVICES
                            </Link>
                            <Link href="#portfolio" className="border border-b-[#0E4464] border-t-0 border-l-0 border-r-0 pb-2 !text-gray-200 gill-sans" onClick={() => setOpen(false)}>
                                <i className="ri-registered-fill text-white mr-4"></i> PORTFOLIO
                            </Link>
                            <Link href="#contact" className="border border-b-[#0E4464] border-t-0 border-l-0 border-r-0 pb-2 !text-gray-200 gill-sans" onClick={() => setOpen(false)}>
                                <i className="ri-phone-fill text-white mr-4"></i> CONTACT
                            </Link>
                        </div>
                    </Drawer>
                </div>
            </nav>
        </header>
    )
}

export default Navbar