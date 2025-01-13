import React from 'react'

const Contact = () => {
    return (
        <section id="contact-section" className="section_container flex justify-center">
            <div className="flex flex-col py-8  w-[90%] lg:w-[50%] xl:w-[30%]">
                <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold text-center">
                    Contact
                </div>
                {/* contact form */}
                <div className="flex flex-col py-4 mt-4">
                    <input className="px-3 py-1 border" placeholder="Name">
                    </input>
                    <input className="my-3 px-3 py-1 border" placeholder="Email">
                    </input>
                    <textarea className="px-3 py-1 border w-25 h-28 resize-none" placeholder="Message">
                    </textarea>
                    <div className="flex justify-center mt-8">
                        <button className="p-2 border">
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact