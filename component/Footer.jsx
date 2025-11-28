'use client'
import Link from "next/link"

const Footer = () => {
    return (
        <div className="w-full footer-section">
            <footer className="w-11/12 mx-auto py-16 px-8 text-white">
                <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 gap-4">
                    <div className="lg:col-span-3 space-y-8 mb-8">
                        <div className="flex items-center space-x-2">
                            <div className="w-[40px] h-[40px]">
                                <img src="/images/logo4.png" alt="my-logo" className="w-full h-full rounded-full object-cover" />
                            </div>
                            <span className="font-semibold text-2xl gill-sans">Er.<span className="text-[#1291EC] ml-1">Brajesh</span></span>
                        </div>
                        <p className="text-gray-300 font-medium gill-sans text-xl">The personal portfolio category includes websites or physical displays.</p>
                        <div className="flex space-x-4 text-xl">
                            <Link href="#" className="w-[40px] h-[40px] rounded-full border border-gray-400 flex justify-center items-center shadow-lg text-white font-semibold hover:bg-[#13D0FD] transition-all duration-300 ease-in-out">
                                <i className="ri-facebook-line font-medium"></i>
                            </Link>
                            <Link href="#" className="w-[40px] h-[40px] rounded-full border border-gray-400 flex justify-center items-center shadow-lg text-white font-semibold hover:bg-[#13D0FD] transition-all duration-300 ease-in-out">
                                <i className="ri-whatsapp-line font-medium"></i>
                            </Link>
                            <Link href="#" className="w-[40px] h-[40px] rounded-full border border-gray-400 flex justify-center items-center shadow-lg text-white font-semibold hover:bg-[#13D0FD] transition-all duration-300 ease-in-out">
                                <i className="ri-instagram-line font-medium"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-2 space-y-8 mb-8">
                        <h3 className="font-semibold text-2xl gill-sans mb-8">Quick Links</h3>
                        <ul className="space-y-3 font-medium text-gray-200 text-lg gill-sans">
                            <li>
                                <Link href="#" className="hover:text-[#139BFD]">About Me</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#139BFD]">Services</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#139BFD]">Contact Me</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#139BFD]">Blog Post</Link>
                            </li>
                            <li>
                                <Link href="#" className="hover:text-[#139BFD]">Pricing</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:col-span-3 space-y-4 mb-8">
                        <h3 className="font-semibold text-2xl gill-sans mb-8">Contact</h3>
                        <div className="flex items-center space-x-3">
                            <button className="w-[40px] h-[40px] rounded-full border border-[#042338] flex justify-center items-center shadow-lg text-white font-semibold">
                                <i className="ri-mail-fill"></i>
                            </button>
                            <span className="font-medium text-gray-200 text-lg gill-sans">erbrajeh@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="w-[40px] h-[40px] rounded-full border border-[#042338] flex justify-center items-center shadow-lg text-white font-semibold">
                                <i className="ri-map-pin-fill"></i>
                            </button>
                            <span className="font-medium text-gray-200 text-lg gill-sans">853204, Bhagalpur, Gopalpur (Bihar)</span>
                        </div>
                        <div className="flex items-center space-x-3">
                            <button className="w-[40px] h-[40px] rounded-full border border-[#042338] flex justify-center items-center shadow-lg text-white font-semibold">
                                <i className="ri-phone-fill"></i>
                            </button>
                            <span className="font-medium text-gray-200 text-lg gill-sans">+91 8104301385</span>
                        </div>
                    </div>

                    <div className="lg:col-span-4 space-y-4 px-4">
                        <div className="border border-[#042338] rounded-xl p-6 space-y-4">
                            <h3 className="font-semibold text-4xl gill-sans">NewsLetter</h3>
                            <p className="font-medium text-gray-300 text-xl gill-sans">Subscribe to our newsletter for portfolio updates and creative insights.</p>
                            <div className="flex items-center space-x-2 relative">
                                <input type="email" placeholder="Your email address" className="outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 p-4 w-full rounded-full text-black border border-[#042338] input-placeholder" />
                                <button className="h-full w-[60px] bg-[#139BFD] text-white rounded-full absolute top-0 right-2 cursor-pointer">
                                    <i className="ri-arrow-right-long-line"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="w-full mt-16 mb-8 border border-[#042338]" />
                <div className="flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-center">
                    <span className="text-sm text-gray-400 gill-sans">© 2025 Marketify Inc. All Rights Reserved.</span>
                    <div className="space-x-4 text-sm sans-serif font-medium">
                        <button className="cursor-pointer hover:text-[#139BFD]">Terms & Conditions</button>
                        <button className="cursor-pointer hover:text-[#139BFD]">Privacy Policy</button>
                        <button className="cursor-pointer hover:text-[#139BFD]">Contact Us</button>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer