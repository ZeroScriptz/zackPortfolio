import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const form = useRef();
  const [captcha, setCaptcha] = useState({ a: 9, b: 3, answer: 12 });

  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    const answer = a + b;
    setCaptcha({ a, b, answer });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    const { a, b, answer } = captcha;
    const userAnswer = parseInt(e.target.captcha.value, 10);
    if (userAnswer === answer) {
      emailjs.sendForm('service_contactForm_xclm', 'template_kuym25q', form.current, 'L_rdeIQUregQUmVCV')
        .then((result) => {
          form.current.reset();
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
      generateCaptcha();
    } else {
      alert('Incorrect answer, please try again');
    }
  };

  return (
<div class="flex flex-col items-center">
  <form class="w-full max-w-md" ref={form} onSubmit={sendEmail}>
    <label class="block mb-2 text-white text-2xl " htmlFor='name'>Name</label>
    <input class="w-full mb-4 px-3 py-2 border rounded-full text-white" type="text" name="user_name" />
    <label class="block mb-2  text-white text-2xl" htmlFor='email'>Email</label>
    <input class="w-full mb-4 px-3 py-2 border rounded-full text-white" type="email" name="user_email" />
    <label class="block mb-2 text-white text-2xl " htmlFor='message'>Message</label>
    <textarea class="w-full mb-4 px-3 py-2 border rounded-full text-white" name="message"></textarea>
    <label class="block mb-2 text-white text-2xl">
      {captcha.a} + {captcha.b} = ?
      <input class="w-full mb-4 px-3 py-2 border rounded-full text-white" type="text" name="captcha" />
    </label>
    <input class="bg-blue-500 hover:scale-105 hover:-rotate-6 ease-in-out transition text-white py-2 px-4 rounded" type="submit" value="Send" />
  </form>
</div>

  );
};


export default Contact