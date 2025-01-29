import * as emailjs from '@emailjs/browser';
import React, { useRef, useState } from 'react'

export default function Contact() {
    const formref = useRef();

    const [loading, Setloading] = useState(false)
    const [form, Setform] = useState({name: '',email: '', message: ''})

    const handlechange = ({target: {name, value}}) => {
        Setform({...form, [name]: value})
    }
    //service_16mtmev
    const handlesubmit = async (e) => {
        e.preventDefault();
        Setloading(true)
        try{
            await emailjs.send('service_16mtmev','template_m5j4cn5',{from_name: form.name,to_name: 'Shivam',from_email: form.email,to_email: 'shivamkaushal181@gmail.com',message: form.message},'rEAfLXYOva0R0ADRA')
            Setloading(false)
            alert('Your message has been sent!')
            Setform({name: '',email: '',message: ''})
        } catch (err) {
            Setloading(false)
            alert('Something went wrong')
        }
    }
  return (
    <section className='c-space my-20' id='contact'>
        <div className='relative min-h-screen flex items-center justify-center flex-col'>
            <img src='/assets/terminal.png' alt='terminal' className='absolute inset-0 min-h-screen'/>
            <div className='contact-container'>
                <h3 className='head-text'>Let's talk</h3>
                <p className='text-lg text-white-600 mt-3'>Wheather you're looking to build a new website, improve your existing platform, or bring a unique project to life, I'm here to help</p>
                <form ref={formref} onSubmit={handlesubmit} className='mt-12 flex flex-col space-y-7'>
                    <label className='space-y-3' >
                        <span className='field-label'>Full Name</span>
                        <input type='text' name='name' value={form.name} onChange={handlechange} required className='field-input' placeholder='John Doe'/>
                    </label>
                    <label className='space-y-3' >
                        <span className='field-label'>Email</span>
                        <input type='email' name='email' value={form.email} onChange={handlechange} required className='field-input' placeholder='Johndoe@gmail.com'/>
                    </label>
                    <label className='space-y-3' >
                        <span className='field-label'>Your message</span>
                        <textarea name='message' value={form.message} onChange={handlechange} required rows={5} className='field-input' placeholder='Your skills are required for a job.'/>
                    </label>
                    <button className='field-btn' type='submit' disabled={loading}>
                        {loading ? 'Sending...' : 'Send Message'}
                        <img src='/assets/arrow-up.png' alt='arrow up' className='field-btn_arrow'/>
                    </button>

                </form>
            </div>
        </div>
      
    </section>
  )
}
