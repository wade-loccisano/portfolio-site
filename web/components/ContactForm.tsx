'use client';

import { sendEmail } from '@/utils/send-email';
import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

export type FormData = {
    name: string;
    email: string;
    message: string;
};

const ContactForm: FC = () => {
    const [submitted, setSubmitted] = useState(false);
    const { register, handleSubmit, reset } = useForm<FormData>();

    function onSubmit(data: FormData) {
        sendEmail(data);
        // reset();
        setSubmitted(true);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col py-4 mt-4'>
                <input
                    type='text'
                    placeholder='Name'
                    className='px-3 py-1 border'
                    disabled={submitted}
                    {...register('name', { required: true })}
                />
                <input
                    type='email'
                    placeholder='example@domain.com'
                    className='my-3 px-3 py-1 border'
                    disabled={submitted}
                    {...register('email', { required: true })}
                />
                <textarea
                    rows={4}
                    placeholder='Type your message'
                    className='px-3 py-1 border resize-none'
                    disabled={submitted}
                    {...register('message', { required: true })}
                ></textarea>
                <div className="flex justify-center mt-8">
                    <button
                        className={`p-2 border ${submitted ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        disabled={submitted}
                    >
                        {submitted ? "Thanks" : "Submit"}
                    </button>
                </div>
            </div>
        </form >
    );
};

export default ContactForm;
