'use client'
import Link from "next/link"
import Navbar from "./Nav"
import About from "./About"
import Services from "./Services"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
import Footer from "./Footer"
import { useEffect, useState } from "react"

const Homepage = () => {
    const [toggle, setToggle] = useState(false)

    const messages = [
        "Web Designer",
        "Web Developer",
        "UX/UI Designer",
        "Content Writer",
        "Stylish Model"
    ];

    const [text, setText] = useState("");
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentMessage = messages[index];

        if (charIndex < currentMessage.length) {
            const timeout = setTimeout(() => {
                setText((prev) => prev + currentMessage[charIndex]);
                setCharIndex(charIndex + 1);  
            }, 210);

            return () => clearTimeout(timeout);
        }

        const pause = setTimeout(() => {
            setText("");
            setCharIndex(0);
            setIndex((prev) => (prev + 1) % messages.length); // loop
        }, 800);

        return () => clearTimeout(pause);
    }, [charIndex, index]);

    const playSound = () => {
        const audioTag = document.createElement('audio')
        audioTag.src = '/audio/click-sound.wav'
        audioTag.play();
    }

    return (
        <div className="w-full bg-[#00060A] min-h-full relative">
            <Navbar />
            <div className="w-full gradient-bg py-16">
                <div className="w-11/12 mx-auto grid grid-cols-12 text-white mt-16">
                    <div className="lg:col-span-6 col-span-12 px-2 order-2 lg:order-1">
                        <p className="text-[#13A2FD] font-semibold text-xl gill-sans pt-16">I AM</p>

                        <h1 className="my-6 font-bold lg:text-5xl md:text-6xl text-4xl">Ralph Edwards, a Full Stuck</h1>

                        <h1 className="lg:text-6xl md:text-6xl text-4xl font-bold mb-6 text-[#13A2FD] gill-sans animate_animated animate__fadeIn">{text}</h1>

                        <p className="lg:text-2xl md:text-2xl text-xl  gill-sans font-medium text-gray-300">A personal <span className="text-[#13A2FD]">portfolio</span> is a collection of your work, that is achievements, and skills that highlights in your abilities and professional <span className="text-[#13A2FD]">web design</span> growth. It serves as</p>

                        <button className="bg-transparent px-4 py-3 text-base border border-gray-200 shadow-lg my-8 rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                            More About Us <i className="ri-arrow-right-long-line"></i>
                        </button>

                        <h1 className="text-xl gill-sans">Find me one</h1>
                        <div className="flex gap-4 my-3 mb-6 ml-2">
                            <Link href='/' className="w-[40px] h-[40px] rounded-full border border-gray-400 flex justify-center items-center shadow-lg text-white font-semibold hover:bg-[#13D0FD] transition-all duration-300 ease-in-out">
                                <i className="ri-linkedin-fill"></i>
                            </Link>
                            <Link href='/' className="w-[40px] h-[40px] rounded-full border border-gray-400 flex justify-center items-center shadow-lg text-white font-semibold hover:bg-[#13D0FD] transition-all duration-300 ease-in-out">
                                <i className="ri-threads-fill"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="lg:col-span-6 col-span-12 order-1 lg:order-2 px-2 relative">
                        <div className="absolute z-[1] lg:bottom-[140px] md:bottom-[160px] bottom-[120px] lg:text-8xl md:text-8xl text-6xl font-bold gill-sans">
                            <div className="float-down lg:block hidden">
                                <h1>UX</h1>
                                <h1 className="text-[#13A2FD]">D</h1>
                            </div>
                            <div className="float-up-down">
                                <h1 className="">UI</h1>
                                <h className="text-[#13A2FD]">Designer</h>
                            </div>
                        </div>
                        <div className="relative mb-6">
                            <img src="/images/myPic4.png" alt="myPic3" className="w-full" />
                            <div>

                                <img src="/images/logo-under-image.webp" alt="logo-under-image" className="lg:w-[110px] md:w-[150px] w-[80px] absolute z-[1] lg:-left-[0px] -left-[10px] bottom-0 rotate-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <About />

            <Services />

            <Portfolio />

            <Contact />

            <Footer />

            <div className="fixed bottom-4 left-4">
                <div className="w-[50px] h-[50px] fixed bottom-4 left-4 z-[1] bg-[#139BFD] shadow-lg p-4 rounded-full flex justify-center items-center cursor-pointer animate__animated animate__fadeInUp" onClick={() => setToggle(!toggle)}>
                    {
                        !toggle ? <i className="ri-messenger-line text-white text-xl"></i> : <i class="ri-close-large-line text-white text-xl"></i>
                    }
                </div>

                {
                    toggle &&
                    <div className="lg:w-[380px] md:w-[320px] w-[280px] bg-[#06131B] absolute left-12 -bottom-4 animate__animated animate__fadeInUp rounded-xl">
                        <h1 className="bg-[#139BFD] gill-sans text-white font-medium text-center w-full p-3 lg:text-2xl text-xl rounded-tl-lg rounded-tr-lg">Get in touch with me</h1>

                        <p className="text-gray-300 lg:text-xl md:text-lg text-base gill-sans text-center px-8 my-4">
                            Please fill out the form below to start chatting with me directly.
                        </p>
                        <div className="w-full px-4 mb-6">
                            <form className="border border-[#042338] px-4 flex flex-col rounded-xl space-y-2 py-6">
                                <input type="text" name="fullname" placeholder="Your name" className="p-3 border border-[#042338] rounded-xl outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 input-placeholder" required />

                                <input type="email" name="email" placeholder="Your email" className="p-3 border border-[#042338] rounded-xl outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 input-placeholder" requird />

                                <textarea rows={2} name="message" placeholder="Your Message" className="p-3 border border-[#042338] rounded-xl outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 input-placeholder" requird></textarea>

                                <button type="submit" className="gill-sans text-xl font-medium text-white text-center bg-transparent px-4 py-3 text-base border border-gray-200 shadow-lg rounded-xl cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                }
            </div>

            <Link href="https://wa.me/+918104301385?text=hi" target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] fixed bottom-4 right-4 z-[1] bg-[#29AF3E] shadow-lg p-4 rounded-full flex justify-center items-center cursor-pointer animate__animated animate__fadeInUp hover:bg-white" onClick={playSound}>
                <i className="ri-whatsapp-line text-white text-2xl font-medium hover:text-[#29AF3E]"></i>
            </Link>
        </div>
    )
}

export default Homepage