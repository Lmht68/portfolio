import { useState } from 'react';

function Contact() {
    // State to track if the form was submitted successfully
    const [formStatus, setFormStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const myForm = e.target;
        const formData = new FormData(myForm);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                setFormStatus("SUCCESS");
                myForm.reset();
                setTimeout(() => setFormStatus(""), 3000);
            })
            .catch((error) => {
                setFormStatus("ERROR");
                setTimeout(() => setFormStatus(""), 3000);
            });
    };

    return (
        <div className="flex flex-col mb-10 mx-auto">
            <div className="flex justify-center items-center p-5 md:p-10 content-block-bg">
                <form
                    name="contact"
                    method="POST"
                    data-netlify="true"
                    onSubmit={handleSubmit}
                    className="flex flex-col w-full md:w-7/12"
                >
                    {/* hidden input for Netlify bot discovery */}
                    <input type="hidden" name="form-name" value="contact" />
                    <h2 className="text-3xl md:text-6xl mb-3 md:mb-8 font-bold text-title">Contact</h2>
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Name"
                        className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <input
                        type="text"
                        name="email"
                        required
                        placeholder="Email"
                        className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    <textarea
                        required
                        name="message"
                        placeholder="Message"
                        rows="10"
                        className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none"
                    />
                    {/* Status Message Area - Fixed height prevents shrinking */}
                    <div className="h-6 mb-2 flex items-center">
                        {formStatus === "SUCCESS" && (
                            <span className="text-green-500 font-medium">
                                Thank you for reaching out! Talk to you soon.
                            </span>
                        )}
                        {formStatus === "ERROR" && (
                            <span className="text-red-500 font-medium">
                                Oops! Something went wrong.
                            </span>
                        )}
                    </div>
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