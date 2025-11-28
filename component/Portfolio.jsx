'use client'
import { Carousel } from "antd"
import Tabs from "./Tabs"

const Portfolio = () => {

    return (
        <div className="text-white py-16 text-center" id="portfolio">
            <h2 className="font-medium text-[#13C6FD] text-2xl gill-sans tracking-widest">Latest Portfolio</h2>
            <h1 className="text-white font-semibold text-4xl md:text-5xl gill-sans my-6 tracking-wider">Transforming Ideas into Exceptional</h1>
            <p className="text-[#BABDC0] md:text-2xl text-xl gill-sans font-medium">
                Business consulting consultants provide expert advice and guida businesses to help<br className="lg:blcok hidden" /> them improve their performance, efficiency, and organizational
            </p>

            <Tabs />

            <div className="w-full rounded-xl bg-[#07151F] py-16">
                <div className="lg:w-11/12 md:w-11/12 w-full mx-auto flex flex-col gap-8">
                    <div className="grid grid-cols-12 px-6 py-8">
                        <div className="lg:col-span-7 md:col-span-8 col-span-12 text-left">
                            <h2 className="text-lg monospace font-medium text-[#14A2FD]">MY EXPERTIES</h2>
                            <h1 className="text-bold lg:text-5xl md:text-5xl text-4xl text-white gill-sans lg:my-0 my-6">
                                Elevated Designs Personalized
                                the best Experiences
                            </h1>
                        </div>
                        <div className="lg:col-span-5 md:col-span-4 col-span-12">
                            <h2 className="lg:text-2xl md:text-xl text-lg font-medium gill-sans text-gray-400 text-left">
                                Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
                            </h2>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 rounded-xl bg-transparent shadow-lg border border-[#072234] space-y-6 px-16 py-8 items-center hoverable-cont mx-6">
                        <div className="flex flex-col lg:items-start md:items-start items-center gap-6">
                            <button className="w-[90px] h-[90px] bg-[#139BFD] text-base border border-indigo-600 shadow-lg rounded-full cursor-pointer transition-all duration-300 ease-in-out">
                                <i className="ri-bank-fill text-4xl text-white"></i>
                            </button>
                            <h1 className="text-start text-white font-bold lg:text-4xl md:text-3xl text-2xl gill-sans">UI/UX Design</h1>
                        </div>
                        <div className="flex lg:justify-start md:justify-end justify-center">
                            <div className="w-[100px] h-[100px] rounded-full border border-gray-100 p-1">
                                <div className="w-full h-full rounded-full cont-border flex justify-center items-center">
                                    <h1 className="text-white font-semibold text-2xl">90%</h1>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <h2 className="w-full text-lg gill-sans text-gray-200 lg:text-start md:text-start text-center">A personal portfolio is a curated collection of an individual's professional work, showcasing their skills</h2>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 rounded-xl bg-transparent shadow-lg border border-[#072234] space-y-6 px-16 py-8 items-center hoverable-cont mx-6">
                        <div className="flex flex-col lg:items-start md:items-start items-center gap-6">
                            <button className="w-[90px] h-[90px] bg-[#139BFD] text-base border border-indigo-600 shadow-lg rounded-full cursor-pointer transition-all duration-300 ease-in-out">
                                <i className="ri-global-line text-4xl text-white"></i>
                            </button>
                            <h1 className="text-start text-white font-bold lg:text-4xl md:text-3xl text-2xl gill-sans">Web Development</h1>
                        </div>
                        <div className="flex lg:justify-start md:justify-end justify-center">
                            <div className="w-[100px] h-[100px] rounded-full border border-gray-100 p-1">
                                <div className="w-full h-full rounded-full cont-border flex justify-center items-center">
                                    <h1 className="text-white font-semibold text-2xl">75%</h1>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <h2 className="w-full text-lg gill-sans text-gray-200 lg:text-start md:text-start text-center">I specialize in creating solutions that are not only visually engaging but also align with business goals</h2>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 rounded-xl bg-transparent shadow-lg border border-[#072234] space-y-6 px-16 py-8 items-center hoverable-cont mx-6">
                        <div className="flex flex-col lg:items-start md:items-start items-center gap-6">
                            <button className="w-[90px] h-[90px] bg-[#139BFD] text-base border border-indigo-600 shadow-lg rounded-full cursor-pointer transition-all duration-300 ease-in-out">
                                <i className="ri-quill-pen-ai-line text-4xl text-white"></i>
                            </button>
                            <h1 className="text-start text-white font-bold lg:text-4xl md:text-3xl text-2xl gill-sans">Business Solutions</h1>
                        </div>
                        <div className="flex lg:justify-start md:justify-end justify-center">
                            <div className="w-[100px] h-[100px] rounded-full border border-gray-100 p-1">
                                <div className="w-full h-full rounded-full cont-border flex justify-center items-center">
                                    <h1 className="text-white font-semibold text-2xl">80%</h1>
                                </div>
                            </div>
                        </div>

                        <div className="w-full">
                            <h2 className="w-full text-lg gill-sans text-gray-200 lg:text-start md:text-start text-center">Each one showcases my approach and dedication to detail, creativity, and results-driven outcomes.</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full text-center py-16">
                <h2 className="text-[#13C6FD] text-xl md:text-2xl  monospace">Clients Testimonial</h2>
                <h1 className="text-white font-semibold text-4xl md:text-5xl gill-sans my-2 tracking-wider">Bringing Dreams to Life through</h1>
                <p className="text-[#BABDC0] text-lg gill-sans font-medium">
                    Business consulting consultants provide expert advice and guida businesses to help <br className="lg:block md:block hidden" />them improve their performance, efficiency, and organizational
                </p>
            </div>

            <div className="w-full">
                <Carousel
                    autoplay={{ dotDuration: false }}
                    autoplaySpeed={3000}
                    slidesToShow={3}
                    slidesToScroll={1}
                    infinite={true}
                    responsive={[
                        {
                            breakpoint: 1024, // Tablet
                            settings: {
                                slidesToShow: 2,
                            },
                        },
                        {
                            breakpoint: 640, // Mobile
                            settings: {
                                slidesToShow: 1,
                            },
                        },
                    ]}
                >
                    <div className="w-full px-2">
                        <div className="border border-[#042338] py-16 px-6 shadow-lg rounded-xl">
                            <div className="flex justify-between mb-2">
                                <div className="flex items-center">
                                    <div className="w-[80px] h-[80px] rounded-full shadow-lg border border-[#042338] mr-3">
                                        <img src="/images/jack.webp" alt="jack" className="h-full w-full object-contain rounded-full" />
                                    </div>
                                    <span className="lg:text-2xl md:text-xl text-lg font-bold text-white gill-sans">Jack Nelson</span>
                                </div>
                                <span className="text-lg mr-2">
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                </span>
                            </div>
                            <p className="text-start text-gray-300 lg:text-lg md:text-base text-sm gill-sans font-medium">
                                Their expertise is apparent in every step of the project. I'm thrilled with the outcome and would definitely work with them again! definitely work with them again. Their expertise is apparent in every step of the project. I'm thrilled with the outcome and would definitely work with them again! definitely work with them again.
                            </p>
                        </div>
                    </div>

                    <div className="w-full px-2">
                        <div className="border border-[#042338] py-16 px-6 shadow-lg rounded-xl">
                            <div className="flex justify-between mb-2">
                                <div className="flex items-center">
                                    <div className="w-[80px] h-[80px] rounded-full shadow-lg border border-[#042338] mr-3">
                                        <img src="/images/sophia.webp" alt="shophia" className="h-full w-full object-contain rounded-full" />
                                    </div>
                                    <span className="lg:text-2xl md:text-xl text-lg font-bold text-white gill-sans">Sophia Lee</span>
                                </div>
                                <span className="text-lg mr-2">
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                </span>
                            </div>
                            <p className="text-start text-gray-300 lg:text-lg md:text-base text-sm gill-sans font-medium">
                                Creative, fast, and responsible. The final product looks incredible and meets all of our goals! Would absolutely choose them again. Creative, fast, and responsible. The final product looks incredible and meets all of our goals! Would absolutely choose them again.
                            </p>
                        </div>
                    </div>

                    <div className="w-full px-2">
                        <div className="border border-[#042338] py-16 px-6 shadow-lg rounded-xl">
                            <div className="flex justify-between mb-2">
                                <div className="flex items-center">
                                    <div className="w-[80px] h-[80px] rounded-full shadow-lg border border-[#042338] mr-3">
                                        <img src="/images/michael.webp" alt="michael" className="h-full w-full object-contain rounded-full" />
                                    </div>
                                    <span className="lg:text-2xl md:text-xl text-lg font-bold text-white gill-sans">Michael Smith</span>
                                </div>
                                <span className="text-lg mr-2">
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                </span>
                            </div>
                            <p className="text-start text-gray-300 lg:text-lg md:text-base text-sm gill-sans font-medium">
                                Amazing collaboration experience. Communication was smooth and results exceeded expectations at every stage! Highly recommend their services. Amazing collaboration experience. Communication was smooth and results exceeded expectations at every stage! Highly recommend their services.
                            </p>
                        </div>
                    </div>

                    <div className="w-full px-2">
                        <div className="border border-[#042338] py-16 px-6 shadow-lg rounded-xl">
                            <div className="flex justify-between mb-2">
                                <div className="flex items-center">
                                    <div className="w-[80px] h-[80px] rounded-full shadow-lg border border-[#042338] mr-3">
                                        <img src="/images/roberts.webp" alt="roberts" className="h-full w-full object-contain rounded-full" />
                                    </div>
                                    <span className="lg:text-2xl md:text-xl text-lg font-bold text-white gill-sans">Anna Roberts</span>
                                </div>
                                <span className="text-lg mr-2">
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                    <i className="ri-star-fill text-[#139BFD]"></i>
                                </span>
                            </div>
                            <p className="text-start text-gray-300 lg:text-lg md:text-base text-sm gill-sans font-medium">
                                The level of professionalism is beyond impressive. Every detail was handled perfectly from start to finish! I truly appreciate the dedication and effort. The level of professionalism is beyond impressive. Every detail was handled perfectly from start to finish! I truly appreciate the dedication and effort.
                            </p>
                        </div>
                    </div>
                </Carousel>
            </div>

            <div className="w-full py-16">
                <div className="lg:w-10/12 w-11/12 skill-section mx-auto border px-6 py-16 rounded-xl border border-[#042338]">
                    <div className="flex lg:flex-row flex-col lg:justify-between md:justify-between justify-center py-16 px-4 gap-8">
                        <div className="text-start w-full mt-32">
                            <h4 className="text-xl md:text-2xl monospace text-[#139BFD]">MY SKILLS</h4>
                            <h1 className="text-white font-bold lg:text-5xl text-4xl gill-sans my-4">
                                My Experts Areas Where I Gained Skill
                            </h1>
                            <p className="text-gray-200 font-medium text-lg gill-sans">
                                Business consulting consultants provide expert advice and guida busi nesses to help them improve their performance, efficiency, and organ izational Business consulting consultants provide
                            </p>
                        </div>

                        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                            <div className="py-6 px-4 border border-[#042338] border-box rounded-lg">
                                <div className="w-[80px] h-[80px] rounded-full shadow-lg neon-shadow p-4">
                                    <img src="/images/framer-logo.webp" alt="framer" className="h-full w-full object-contain rounded-full" />
                                </div>
                                <h1 className="text-2xl font-bold text-white my-4 text-start gill-sans">Framer</h1>
                                <p className="text-xl gill-sans font-medium text-gray-300 text-start">
                                    The personal portfol category includes websites or physic Your Journey Your Story
                                </p>
                            </div>

                            <div className="py-6 px-4 border border-[#042338] border-box rounded-lg">
                                <div className="w-[80px] h-[80px] rounded-full shadow-lg neon-shadow p-4">
                                    <img src="/images/webflow.jpg" alt="webflow" className="h-full w-full object-contain rounded-full" />
                                </div>
                                <h1 className="text-2xl font-bold text-white my-4 text-start gill-sans">Webflow</h1>
                                <p className="text-lg gill-sans font-medium text-gray-300 text-start">
                                    Webflow is a powerful web design and development platform that allows.
                                </p>
                            </div>

                            <div className="py-6 px-4 border border-[#042338] border-box rounded-lg">
                                <div className="w-[80px] h-[80px] rounded-full shadow-lg neon-shadow p-4">
                                    <img src="/images/figma-logo.webp" alt="figma" className="h-full w-full object-contain rounded-full" />
                                </div>
                                <h1 className="text-2xl font-bold text-white my-4 text-start gill-sans">Figma</h1>
                                <p className="text-lg gill-sans font-medium text-gray-300 text-start">
                                    Figma's standout feature is its ability to enable multiple users to work.
                                </p>
                            </div>

                            <div className="py-6 px-4 border border-[#042338] border-box rounded-lg">
                                <div className="w-[80px] h-[80px] rounded-full shadow-lg neon-shadow p-4">
                                    <img src="/images/wordpress-logo.webp" alt="wordpress" className="h-full w-full object-contain rounded-full" />
                                </div>
                                <h1 className="text-2xl font-bold text-white my-4 text-start gill-sans">WordPress</h1>
                                <p className="text-lg gill-sans font-medium text-gray-300 text-start">
                                    A WordPress website is a website built using WordPress content management system
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio