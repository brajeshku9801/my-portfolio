const About = () => {
    return (
        <div className="w-11/12 grid grid-cols-12 py-16 mx-auto text-white" id="about">
            <div className="lg:col-span-6 col-span-12 lg:px-6 md:px-8 px-0 lg:mb-0 mb-16">
                <div className="skill-section px-4 py-16 shadow-lg rounded-xl border border-cyan-500 flex flex-col justify-center items-center gap-6 box-bg-gradient container-gradient mb-8">
                    <h1 className="lg:text-8xl md:text-8xl text-6xl font-semibold">02 +</h1>
                    <h2 className="lg:text-8xl md:text-8xl text-4xl font-semibold text-center gill-sans">Years Of Experience</h2>
                </div>
                <div className="p-6 shadow-lg rounded-lg flex box-bg-gradient effect-section">
                    <div className="w-[100px] h-[100px] border border-[#139CFD] flex justify-center items-center rounded-full mr-6">
                        <i className="ri-lock-line text-4xl text-[#139CFD]"></i>
                    </div>
                    <div className="flex flex-col justify-center gill-sans font-semibold">
                        <h1 className="text-2xl">UI/UX Design</h1>
                        <h3 className="text-xl">241 Projects</h3>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-6 col-span-12 lg:px-6 md:px-6 px-0">
                <p className="text-[#13A2FD] font-medium text-xl gill-sans">ABOUT ME</p>
                <h1 className="text-white font-bold lg:text-5xl md:text-5xl text-4xl my-6 gill-sans">
                    Boost Business Strategic Solutions with Us
                </h1>
                <p className="text-gray-300 lg:text-xl md:text-xl text-lg gill-sans font-medium text-justify">
                    Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
                </p>
                <div className="flex lg:flex-row md:flex-row flex-col my-8 gap-6">
                    <div className="border border-[#13CFFD] px-4 py-6 shadow-lg box-bg-gradient container-gradient rounded-lg">
                        <div className="flex">
                            <div className="w-[80px] h-[80px] border border-[#139CFD] flex justify-center items-center rounded-full mr-4 bg-[#13C1FD] shadow-lg">
                                <i className="ri-links-line text-4xl text-white"></i>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-4xl font-semibold gill-sans">Business</h1>
                            </div>
                        </div>
                        <p className="mt-6 text-gray-300 text-xl gill-sans">
                            Each one showcases my approach
                        </p>
                    </div>
                    <div className="border border-[#13CFFD] px-4 py-6 shadow-lg box-bg-gradient container-gradient rounded-lg">
                        <div className="flex">
                            <div className="w-[80px] h-[80px] border border-[#139CFD] flex justify-center items-center rounded-full mr-4 bg-[#13C1FD] shadow-lg">
                                <i className="ri-megaphone-line text-4xl text-white"></i>
                            </div>
                            <div className="flex items-center">
                                <h1 className="text-4xl font-semibold gill-sans">Partners</h1>
                            </div>
                        </div>
                        <p className="mt-6 text-gray-300 text-xl gill-sans">
                            Business consulting consul us to a provide
                        </p>
                    </div>
                </div>
                <button className="bg-transparent px-4 py-3 text-base border border-gray-200 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#13A2FD] transition-all duration-300 ease-in-out container-gradient">
                    Read More About Me <i className="ri-arrow-right-long-line"></i>
                </button>
            </div>
        </div>
    )
}

export default About