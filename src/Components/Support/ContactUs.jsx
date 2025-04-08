import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          alert('Message sent successfully');
      }, (error) => {
          alert('Failed to send message');
      });
  };

  return (
    <div className="bg-white text-black min-h-screen pt-[50px] px-6 md:px-20 font-sans">
      {/* Top Heading */}
      <div className='w-full sm:w-[90%] xl:w-[85%] mx-auto h-[200px] flex flex-col justify-center'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl font-roboto font-semibold md:w-[700px]'>
          Contact Us. <span className='text-gray-500'>Find Support.</span>
        </h1>
      </div>

      {/* Form & Map */}
      <div className="w-full sm:w-[90%] xl:w-[85%] mx-auto font-karla">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label className="block mb-1 text-lg">Name</label>
              <input type="text" name="user_name" required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1 text-lg">Email</label>
              <input type="email" name="user_email" required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1 text-lg">Mobile Number</label>
              <input type="text" name="user_mobile" required className="w-full border border-gray-300 rounded px-4 py-2" />
            </div>
            <div>
              <label className="block mb-1 text-lg">Message</label>
              <textarea name="message" rows="6" required className="w-full border border-gray-300 rounded px-4 py-2"></textarea>
            </div>
            <button type="submit" className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800 transition-all duration-300">
              Send Message
            </button>
          </form>

          {/* Map */}
          <div className="w-full h-[400px]">
            <iframe
              title="Extreme Computers Map"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9817.371787020948!2d80.364838!3d7.488090000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae33a1e3d88e4a9%3A0x273119a4cf972fd8!2sExtreme%20Computer%20Technologies%20(Pvt)%20Limited!5e1!3m2!1sen!2us!4v1744108482194!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded shadow-lg"
            ></iframe>
          </div>
        </div>
      </div>

      {/* Contact Info */}
      <div className="w-[90%] xl:w-[85%] mx-auto mt-20 font-karla pb-10">
        <h2 className="text-3xl font-semibold mb-6 text-gray-700">Our Locations & Support</h2>
        <div className="grid md:grid-cols-2 gap-10 text-lg">
          <div>
            <h3 className="font-bold text-xl mb-2 text-gray-600">Head Office</h3>
            <p className='text-gray-500'>No B12, MC Plaza, Kurunegala,<br />Sri Lanka.</p>
            <p className='text-gray-500 mt-2'>HotLine: +94 37 223 4370</p>
            <p className='text-gray-500'>Phone: +94 70 467 0670</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2 text-gray-600">Branch</h3>
            <p className='text-gray-500'>N88, Negambo Road, Kurunegala,<br />Sri Lanka.</p>
            <p className="text-gray-500 mt-2">HotLine: +94 71 655 0655</p>
            <p className='text-gray-500'>Phone: +94 37 2056303</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2 text-gray-600">Fax</h3>
            <p className='text-gray-500'>+94 71 880 4112</p>
          </div>
          <div>
            <h3 className="font-bold text-xl mb-2 text-gray-600">Support</h3>
            <p className='text-gray-500'>info@extreme.lk</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
