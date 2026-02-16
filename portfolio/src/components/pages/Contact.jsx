import React from "react";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";
import {useState} from 'react'

function Contact() {
    const[submitted,setsubmitted]=useState(false)
    const handleSubmit=(e)=>{
        e.preventDefault();
        setsubmitted(true);
        setTimeout(() => {
            setsubmitted(false)
        },4000);
    }
            return (
    <div className="min-h-screen flex items-center justify-center px-6 py-16 bg-white">
      <div className="bg-[#e8d6cc] max-w-6xl w-full shadow-lg p-12 grid md:grid-cols-2 gap-12 rounded-md -mt-28">
        <div className="space-y-6">
          <h2 className="text-5xl font-serif text-[#7a3e2b]">Get in Touch</h2>
            <p className="text-lg text-[#7a3e2b] italic">
            I’m currently looking for internship and entry-level opportunities in Frontend / Full Stack Development. Feel free to reach out!</p>
          <p className="text-blue-600  font-bold leading-relaxed">
            If you have any inquiries or just want to say hi, please use the contact form.
          </p>
          <div className="pt-4 space-y-3 text-gray-800 font-bold">
      <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#7a3e2b]" />
              <a href="mailto:surlasaritha@gmail.com" rel="noreferrer" className="hover:underline">surlasaritha@gmail.com</a>
            </div>
       <div className="flex items-center gap-3">
              <FaPhone className="text-[#7a3e2b]" />
              <span>+91-9390234442</span>
            </div>
                <div className="flex items-center gap-3">
              <FaGithub className="text-[#7a3e2b]" />
              <a href="https://github.com/Saisarithasurla" target="_blank" rel="noreferrer" className="hover:underline">
                https://github.com/Saisarithasurla
              </a>
            </div>
<div className="flex items-center gap-3">
              <FaLinkedin className="text-[#7a3e2b]" />
              <a href="https://www.linkedin.com/in/surla-sai-saritha-b2736a260/" target="_blank" rel="noreferrer" className="hover:underline">
                https://www.linkedin.com/in/surla-sai-saritha-b2736a260/
              </a>
            </div>

          </div>
        </div>
        <form  onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <input type="text" placeholder="First Name" className="border border-gray-600 bg-transparent p-2 outline-none"/>
            <input type="text" placeholder="Last Name"className="border border-gray-600 bg-transparent p-2 outline-none"/>
               </div>
        <input type="email" placeholder="Email" className="w-full border border-gray-600 bg-transparent p-2 outline-none"/>
                  <textarea placeholder="Message" rows="4"className="w-full border border-gray-600 bg-transparent p-2 outline-none" ></textarea>
          <button type="submit"className="bg-[#7a3e2b] text-white px-8 py-2 hover:bg-[#5c2f21] transition">Send Message</button>
          {submitted && (
        <p className="text-green-700 text-2xl font-bold">
          ✅ Message sent successfully!
    </p>
  )}
</form>
</div>
    </div>
  );
}
export default Contact;
