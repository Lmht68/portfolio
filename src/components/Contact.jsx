function Contact() {
    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center p-5 md:p-10 content-block-bg">
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    className="flex flex-col w-full md:w-7/12"
                >
                    {/* hidden input for Netlify bot discovery */}
                    <input type="hidden" name="form-name" value="contact" />
                    <h2 className="text-3xl md:text-6xl mb-3 md:mb-8 font-bold text-title">Contact</h2>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white 
                                    bg-linear-to-r from-blue-500 to-violet-500 dark:from-red-500 dark:to-orange-500 
                                    drop-shadow-md transition-all duration-300 ease-in-out hover:bg-linear-to-l hover:-translate-y-0.5 
                                    hover:drop-shadow-xl hover:brightness-110"
                    >
                        Work With Me
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact;