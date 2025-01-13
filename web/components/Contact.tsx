import React from 'react'
import ContactForm from './ContactForm'

const Contact = () => {
    return (
        <section id="contact-section" className="section_container flex justify-center">
            <div className="flex flex-col py-8  w-[90%] lg:w-[50%] xl:w-[30%]">
                <div className="text-xl md:text-2xl border-b-2 border-slate-400 font-bold text-center">
                    Contact
                </div>
                {/* contact form */}
                <ContactForm></ContactForm>
            </div>
        </section>
    )
}

export default Contact