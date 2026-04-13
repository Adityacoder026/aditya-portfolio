import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin, FaMapMarker, FaMapMarkerAlt, FaPhone, FaTwitter } from "react-icons/fa";

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.2 }}
      id="Contact"
      className="py-20 bg-dark-100"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          Get In
          <span className="text-purple">Touch</span>
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-16">
          Have a project in mind or want to collaborate? Let's talk!
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl ms-auto">
          {/* Contact form */}
          <div>
            <form className="space-y-6">
              <div>
                <label name="name" className="block text-gray-300 mb-2">
                  Your Name
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>
              

              <div>
                <label id="email" className="block text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  className="w-full bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="email"
                />
              </div>


              <div>
                <label id="message" className="block text-gray-300 mb-2">
                  Your Message
                </label>
                <textarea
                  className="w-full h-40 bg-dark-300 border border-dark-400 rounded-lg px-4 py-3 outline-none"
                  type="text"
                />
              </div>
              
              <button
                type="sumbit"
                className="w-full px-6 py-3 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Location</h3>
                <p className="text-gray-400">Ranchi,Shanti Nagar Dhurwa</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-gray-400">aditya209000@gmail.com</p>
              </div>
            </div>


            <div className="flex items-start">
              <div className="text-purple text-2xl mr-4">
                <FaPhone />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-gray-400">+91-7717741602</p>
              </div>
            </div>

            <div className="pt-4">
             <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
             <div className="flex space-x-4">
                <a href="https://github.com/Adityacoder026" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-white hover:bg-purple hover:text-white transition duration-300">
                    <FaGithub />
                </a>

                <a href="https://www.linkedin.com/in/aditya-anand-6a341a360?utm_source=share_via&utm_content=profile&utm_medium=member_android" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-orange-400 hover:bg-orange-400  hover:text-white transition duration-300">
                    <FaLinkedin />
                </a>

                <a href="https://x.com/aditya_coder_01" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-blue-400  hover:bg-blue-400 hover:text-white transition duration-300">
                    <FaTwitter />
                </a>

                <a href="https://www.instagram.com/always.aditya_01?igsh=Mzc1a3IyYmswM3o0" className="w-12 h-12 rounded-full bg-dark-300 flex items-center justify-center text-pink hover:bg-pink hover:text-white transition duration-300">
                    <FaInstagram />
                </a>
             </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;
