"use client";
import { Card } from "antd";
import { useState } from "react";
const { Meta } = Card;

const Tabs = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    return (
        <div className="w-full my-8">
            <div className="flex flex-wrap justify-center gap-3 border-gray-300 pb-2">
                <button
                    onClick={() => setActiveTab("tab1")}
                    className={`cursor-pointer shadow-lg px-6 py-3 text-base font-medium rounded-lg 
            ${activeTab === "tab1" ? "bg-[#07375A] text-[#13C6FD]" : "bg-[#06141C] text-white"}`}
                >
                    All
                </button>

                <button
                    onClick={() => setActiveTab("tab2")}
                    className={`cursor-pointer shadow-lg px-6 py-3 text-base font-medium rounded-lg 
            ${activeTab === "tab2" ? "bg-[#07375A] text-[#13C6FD]" : "bg-[#06141C] text-white"}`}
                >
                    Adobe
                </button>

                <button
                    onClick={() => setActiveTab("tab3")}
                    className={`cursor-pointer shadow-lg px-6 py-3 text-base font-medium rounded-lg 
            ${activeTab === "tab3" ? "bg-[#07375A] text-[#13C6FD]" : "bg-[#06141C] text-white"}`}
                >
                    Ai
                </button>

                <button
                    onClick={() => setActiveTab("tab4")}
                    className={`cursor-pointer shadow-lg px-6 py-3 text-base font-medium rounded-lg 
            ${activeTab === "tab4" ? "bg-[#07375A] text-[#13C6FD]" : "bg-[#06141C] text-white"}`}
                >
                    Webflow
                </button>

                <button
                    onClick={() => setActiveTab("tab5")}
                    className={`cursor-pointer shadow-lg px-6 py-3 text-base font-medium rounded-lg 
            ${activeTab === "tab5" ? "bg-[#07375A] text-[#13C6FD]" : "bg-[#06141C] text-white"}`}
                >
                    Javascript
                </button>

                <button
                    onClick={() => setActiveTab("tab6")}
                    className={`cursor-pointer shadow-lg px-6 py-3 text-base font-medium rounded-lg 
            ${activeTab === "tab6" ? "bg-[#07375A] text-[#13C6FD]" : "bg-[#06141C] text-white"}`}
                >
                    Figma
                </button>
            </div>

            {/* TAB CONTENT */}
            <div className="lg:w-11/12 w-full mx-auto mt-5 p-4 shadow-lg">

                {activeTab === "tab1" && (
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 lg:px-4 px-0 animate__animated animate__zoomIn">
                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/saas-img.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Saas Website Design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Ai
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>

                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/workout.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Workout App Design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Javascript
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>

                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/business.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Business Analytics</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Figma
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Javascript
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>

                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/dashboard.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Deshboard design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Webflow
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>
                    </div>
                )}

                {activeTab === "tab2" && (
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 lg:px-4 px-0 animate__animated animate__zoomIn">
                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/saas-img.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Saas Website Design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Ai
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>

                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/workout.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Workout App Design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Javascript
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>

                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/dashboard.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Deshboard design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Webflow
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>
                    </div>
                )}

                {activeTab === "tab3" && (
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 lg:px-4 px-0 animate__animated animate__zoomIn">
                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/saas-img.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Saas Website Design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Ai
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>
                    </div>
                )}

                {activeTab === "tab4" && (
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 lg:px-4 px-0 animate__animated animate__zoomIn">
                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/saas-img.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Saas Website Design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Ai
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>

                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/dashboard.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Deshboard design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Webflow
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>
                    </div>
                )}

                {activeTab === "tab5" && (
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 lg:px-4 px-0 animate__animated animate__zoomIn">
                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/workout.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Workout App Design</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Adobe
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Javascript
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>

                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/business.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Business Analytics</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Figma
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Javascript
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>
                    </div>
                )}

                {activeTab === "tab6" && (
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-8 lg:px-4 px-0 animate__animated animate__zoomIn">
                        <Card
                            hoverable
                            style={{ width: '100%', padding: '10px', background: '#06131B', border: '1px solid #042338' }}
                            cover={
                                <img
                                    draggable={false}
                                    alt="saas"
                                    src="/images/business.webp"
                                />
                            }
                        >
                            <Meta title=<h1 className='text-left text-white text-3xl font-semibol mt-4 gill-sans'>Business Analytics</h1> />

                            <div className="flex gap-x-4">
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Figma
                                </button>
                                <button className="bg-transparent text-white px-3 py-1 text-base border border-gray-100 shadow-lg my-8 rounded-full cursor-pointer hover:bg-[#139BFD] transition-all duration-300 ease-in-out">
                                    Javascript
                                </button>
                            </div>

                            <button className="flex items-start bg-transparent px-4 text-white py-3 text-base border border-gray-200 shadow-lg rounded-full cursor-pointer container-gradient transition-all duration-300 ease-in-out">
                                View Details <i className="ri-arrow-right-long-line"></i>
                            </button>
                        </Card>
                    </div>
                )}

            </div>
        </div>
    );
}

export default Tabs
