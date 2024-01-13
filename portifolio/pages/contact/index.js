
import Circles from "/components/Circles";
import {BsArrowRight}  from "react-icons/bs";
import {useState} from 'react';

import {motion} from 'framer-motion';
import {fadeIn} from '../../variants';



const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

  
  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch('/api/mailer', {
      body: JSON.stringify({
        name: name,
        email: email,
        subject: subject,
        message: message,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });
    const result = await res.json();
    console.log(result);
    if (res.ok) {
      window.alert('Email sent successfully');
    } else {
      window.alert('Failed to send email');
    }
  }



  
  return (<div className={`h-full bg-primary/30 `}>
    <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      <div className="flex flex-col w-full max-w-[700px]">
        {/* Text */}
        <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidded"
            className={`h2 text-center mb-12`}>
          Lets <span className={`text-accent`}>connect.</span>
        </motion.h2>
        {/* Form */}
        <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidded"
            className={`flex-1 flex flex-col gap-6 w-full mx-auto`}>
          {/* Group */}
          <div className="flex gap-x-6">
            <input 
              id="name" 
              type="text" 
              placeholder="Name" 
              className={`input`} 
              onChange={(e) => { setName(e.target.value);}}
              value={name}
            />
            <input 
              id="email" 
              type="email" 
              placeholder="Email"  
              className={`input`}
              onChange={(e) => { setEmail(e.target.value);}}
              value={email}
            />
          </div>
            <input 
              id="subject" 
              type="text" 
              placeholder="Subject"  
              className={`input`}
              onChange={(e) => { setSubject(e.target.value);}}
              value={subject}
              />
          <textarea 
                id="message" 
                placeholder="Message" 
                className={`textarea`}
                onChange={(e) => { setMessage(e.target.value);}}
                value={message}
                ></textarea>
          <button className={`btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group`}>
            <span className={`group-hover:-translate-y-[12%] group-hover:opacity-0 transition-all duration-300`}>Lets talk</span>
            <BsArrowRight className={`-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]`}/>
          </button>
        </motion.form>
      </div>
    </div>
  </div>)

};

export default Contact;
