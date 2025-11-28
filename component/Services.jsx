'use client'
import { Flex, Progress } from "antd"
import { useEffect, useRef, useState } from "react";

const Services = () => {
    const ref = useRef(null);
    const [animated, setAnimated] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setAnimated(true);
                }
            },
            { threshold: 0.4 } // 40% visible hone par animate
        );

        if (ref.current) observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-11/12 mx-auto grid grid-cols-12 pb-16 text-white" id="services">
            <div className="lg:col-span-6 md:col-span-6 col-span-12 order-2 lg:order-1 lg:px-6 md:px-2 px-0 mb-16">
                <h1 className="lg:text-5xl text-4xl text-white gill-sans"><i className="ri-award-fill text-[#052740]"></i> My Experience</h1>

                <div className="flex flex-col gap-6 my-8">
                    <div className="bg-[#06131B] shadow-xl rounded-xl p-6 w-full container-gradient">
                        <h1 className="text-2xl font-semibold text-[#13A2FD] gill-sans"><i className="ri-record-circle-fill text-lg mr-3"></i> 2025 - Present</h1>
                        <h1 className="text-semibold lg:text-4xl text-2xl text-white gill-sans ml-8 my-4">SENIOR DEVELOPER</h1>
                        <p className="text-semibold text-xl text-[#8F9DA8] ml-8">CodeGenius (USA)</p>
                    </div>

                    <div className="bg-[#06131B] shadow-xl rounded-xl p-6 w-full container-gradient">
                        <h1 className="text-2xl font-semibold text-[#13A2FD] gill-sans"><i className="ri-record-circle-fill text-lg mr-3"></i> 2021 - 2022</h1>
                        <h1 className="text-semibold lg:text-4xl text-2xl text-white gill-sans ml-8 my-4">WEB DEVLOPER</h1>
                        <p className="text-semibold text-xl text-[#8F9DA8] ml-8">Modarni Tomoli</p>
                    </div>

                    <div className="bg-[#06131B] shadow-xl rounded-xl p-6 w-full container-gradient">
                        <h1 className="text-2xl font-semibold text-[#13A2FD] gill-sans"><i className="ri-record-circle-fill text-lg mr-3"></i> 2020 - 2022</h1>
                        <h1 className="text-semibold lg:text-4xl text-2xl text-white gill-sans ml-8 my-4">UI DESIGNER</h1>
                        <p className="text-semibold text-xl text-[#8F9DA8] ml-8">Tech Design Company</p>
                    </div>

                    <div className="bg-[#06131B] shadow-xl rounded-xl p-6 w-full container-gradient">
                        <h1 className="text-2xl font-semibold text-[#13A2FD] gill-sans"><i className="ri-record-circle-fill text-lg mr-3"></i> 2018 - 2020</h1>
                        <h1 className="text-semibold lg:text-4xl text-2xl text-white gill-sans ml-8 my-4">INTERN UI/UX DESIGNER</h1>
                        <p className="text-semibold text-xl text-[#8F9DA8] ml-8">USA Web Company</p>
                    </div>
                </div>

                <div className="mt-32">
                    <h1 className="mb-8 text-white gill-sans lg:text-4xl text-3xl font-semibold">Desing Skills</h1>
                    <Flex gap={30} ref={ref} vertical>
                        <div>
                            <h1 className="flex justify-between gill-sans"><span>PHOTOSHOP</span> <span className="mr-8">100%</span></h1>
                            <Progress percent={animated ? 99 : 0} strokeColor="#13C6FD" trailColor="#0E4464" className="slow-progress" />
                        </div>
                        <div>
                            <h1 className="flex justify-between gill-sans"><span>FIGMA</span> <span className="mr-8">95%</span></h1>
                            <Progress percent={animated ? 95 : 0} strokeColor="#13C6FD" trailColor="#0E4464" className="slow-progress" />
                        </div>
                        <div>
                            <h1 className="flex justify-between gill-sans"><span>ADOBE XD</span> <span className="mr-8">60%</span></h1>
                            <Progress percent={animated ? 60 : 0} strokeColor="#13C6FD" trailColor="#0E4464" className="slow-progress" />
                        </div>
                        <div>
                            <h1 className="flex justify-between gill-sans"><span>ADOBE ILLUSTRATOR</span> <span className="mr-8">70%</span></h1>
                            <Progress percent={animated ? 70 : 0} strokeColor="#13C6FD" trailColor="#0E4464" className="slow-progress" />
                        </div>
                    </Flex>
                </div>
            </div>

            <div className="lg:col-span-6 md:col-span-6 col-span-12 order-1 lg:order-2 lg:px-6 md:px-2 px-0 mb-16">
                <h1 className="lg:text-5xl text-4xl text-white gill-sans"><i className="ri-graduation-cap-fill text-[#052740]"></i> My Education</h1>

                <div className="flex flex-col gap-6 my-8">
                    <div className="bg-[#06131B] shadow-xl rounded-xl p-6 w-full container-gradient">
                        <h1 className="text-2xl font-semibold text-[#13A2FD] gill-sans"><i className="ri-record-circle-fill text-lg mr-3"></i> 2022 - 2023</h1>
                        <h1 className="text-semibold lg:text-4xl text-2xl text-white gill-sans ml-8 my-4">PROGRAMING COURSE</h1>
                        <p className="text-semibold text-xl text-[#8F9DA8] ml-8">Harverd University</p>
                    </div>

                    <div className="bg-[#06131B] shadow-xl rounded-xl p-6 w-full container-gradient">
                        <h1 className="text-2xl font-semibold text-[#13A2FD] gill-sans"><i className="ri-record-circle-fill text-lg mr-3"></i> 2016 - 2020</h1>
                        <h1 className="text-semibold lg:text-4xl text-2xl text-white gill-sans ml-8 my-4">GRAPHIC DESING COURSE</h1>
                        <p className="text-semibold text-xl text-[#8F9DA8] ml-8">Uraniversity of Denmark</p>
                    </div>

                    <div className="bg-[#06131B] shadow-xl rounded-xl p-6 w-full container-gradient">
                        <h1 className="text-2xl font-semibold text-[#13A2FD] gill-sans"><i className="ri-record-circle-fill text-lg mr-3"></i> 2012 - 2015</h1>
                        <h1 className="text-semibold lg:text-4xl text-2xl text-white gill-sans ml-8 my-4">WEB DESING COURSE</h1>
                        <p className="text-semibold text-xl text-[#8F9DA8] ml-8">University of California</p>
                    </div>

                    <div className="bg-[#06131B] shadow-xl rounded-xl p-6 w-full container-gradient">
                        <h1 className="text-2xl font-semibold text-[#13A2FD] gill-sans"><i className="ri-record-circle-fill text-lg mr-3"></i> 2024 - 2025</h1>
                        <h1 className="text-semibold lg:text-4xl text-2xl text-white gill-sans ml-8 my-4">DESIGN & TECHNOLOGY</h1>
                        <p className="text-semibold text-xl text-[#8F9DA8] ml-8">Parsons, The New School</p>
                    </div>
                </div>

                <div className="mt-32">
                    <h1 className="mb-8 text-white gill-sans lg:text-4xl text-3xl font-semibold">Development Skills</h1>
                    <Flex gap={30} ref={ref} vertical>
                        <div>
                            <h1 className="flex justify-between gill-sans"><span>HTML, CSS</span> <span className="mr-8">98%</span></h1>
                            <Progress percent={animated ? 98 : 0} strokeColor="#13C6FD" trailColor="#0E4464" className="slow-progress" />
                        </div>
                        <div>
                            <h1 className="flex justify-between gill-sans"><span>JAVASCRIPT</span> <span className="mr-8">90%</span></h1>
                            <Progress percent={animated ? 90 : 0} strokeColor="#13C6FD" trailColor="#0E4464" className="slow-progress" />
                        </div>
                        <div>
                            <h1 className="flex justify-between gill-sans"><span>NODE</span> <span className="mr-8">80%</span></h1>
                            <Progress percent={animated ? 80 : 0} strokeColor="#13C6FD" trailColor="#0E4464" className="slow-progress" />
                        </div>
                        <div>
                            <h1 className="flex justify-between gill-sans"><span>REACT, NEXT</span> <span className="mr-8">85%</span></h1>
                            <Progress percent={animated ? 70 : 0} strokeColor="#13C6FD" trailColor="#0E4464" className="slow-progress" />
                        </div>
                    </Flex>
                </div>
            </div>
        </div>
    )
}

export default Services