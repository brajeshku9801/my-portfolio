const Contact = () => {
    return (
        <div className="text-white text-center">
            <div className="w-full pb-8">
                <div className="lg:w-10/12 w-11/12 skill-section mx-auto lg:px-6 px-3 py-16 rounded-xl border border-[#042338]">
                    <div className="flex lg:flex-row md:flex-row flex-col lg:justify-between md:justify-between justify-start py-16 px-4 gap-6">
                        <div className="lg:w-5/12 md:w-7/12 w-full text-start mb-8">
                            <h1 className="lg:text-6xl md:text-5xl text-4xl font-bold text-white gill-sans mb-8">Get Ready To Create Great</h1>

                            <div className="max-w-md text-white rounded-lg">
                                <ul className="space-y-8">
                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                                            <i className="ri-mail-fill"></i>
                                        </div>

                                        <div>
                                            <p className="text-gray-400 text-base">E-mail :</p>
                                            <p className="text-lg">erbrajeh@gmail.com</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                                            <i className="ri-map-pin-fill"></i>
                                        </div>

                                        <div>
                                            <p className="text-gray-400 text-base">Location :</p>
                                            <p className="text-lg">853204, Bhagalpur, Gopalpur (Bihar)</p>
                                        </div>
                                    </li>

                                    <li className="flex items-start gap-4">
                                        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10">
                                            <i className="ri-phone-fill"></i>
                                        </div>

                                        <div>
                                            <p className="text-gray-400 text-base">Contact :</p>
                                            <p className="text-lg">+91 8104301385</p>
                                        </div>
                                    </li>

                                </ul>
                            </div>

                        </div>

                        <div className="lg:w-7/12 md:w-5/12 w-full text-start">
                            <h4 className="text-gray-200 font-semibold monospace text-xl md:text-2xl">GET IN TOUCH</h4>

                            <form className="flex flex-col my-6 lg:space-y-5 space-y-2">
                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                    <input type="text" name="fullname" placeholder="Your name" className="p-4 outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 rounded-xl border border-[#042338]" required />
                                    <input type="number" name="mobile" placeholder="Phone number" className="outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 p-4 rounded-xl border border-[#042338]" required />
                                </div>

                                <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
                                    <input type="email" name="email" placeholder="Your email" className="outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 p-4 rounded-xl border border-[#042338]" required />
                                    <input type="text" name="subject" placeholder="Your subject" className="outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 p-4 rounded-xl border border-[#042338]" required />
                                </div>

                                <div className="w-full mb-6">
                                    <textarea rows={5} type="text" name="message" placeholder="Your Message" className="outline outline-2 outline-transparent focus:outline-[#139BFD] focus:outline-2 w-full p-4 rounded-xl border border-[#042338]" required></textarea>
                                </div>

                                <div className="w-full">
                                    <button type="submit" className="w-full p-4 text-white text-center text-xl gill-sans font-semibold bg-[#139BFD] rounded-full cursor-pointer">Send Message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact