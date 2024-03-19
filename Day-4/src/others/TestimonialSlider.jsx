// FancyTestimonialsSlider.jsx

import { useEffect, useRef } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { useState } from 'react';

function FancyTestimonialsSlider() {
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % testimonials.length);
    }, autorotateTiming);
    return () => clearInterval(interval);
  }, []);

  const [active, setActive] = useState(0);
  const autorotateTiming = 7000;
  const testimonialsRef = useRef(null);

  const testimonials = [
    {
      img: 'https://tse1.mm.bing.net/th?id=OIP.WQvPJdjEpvh8OTXB-NBfJwHaHw&pid=Api&P=0&h=180',
      quote:
        "The ability to capture responses is a game-changer. If a user gets tired of the sign up and leaves, that data is still persisted. Additionally, it's great to select between formats.",
      name: 'Jessie J',
      role: 'Acme LTD',
    },
    {
      img: 'https://tse3.mm.bing.net/th?id=OIP.GlIuUj-GYrRL_G8WvZ3YagHaHw&pid=Api&P=0&h=180',
      quote:
        'Having the power to capture user feedback is revolutionary. Even if a participant abandons the sign-up process midway, their valuable input remains intact.',
      name: 'Nick V',
      role: 'Malika Inc.',
    },
    {
      img: 'https://tse3.mm.bing.net/th?id=OIP.2i5UaEHaQM3PYAYXQyM1AAAAAA&pid=Api&P=0&h=180',
      quote:
        'The functionality to capture responses is a true game-changer. Even if a user becomes fatigued during sign-up and abandons the process, their information remains stored.',
      name: 'Amelia W',
      role: 'Panda AI',
    },
  ];

  const stopAutorotate = () => clearInterval(autorotateInterval);

  return (
    <div className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
      <div className="font-bold text-4xl uppercase ">
      Testimonials
     </div>
      <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex justify-center">
          {/* Fancy testimonial slider component */}
          <div className="w-full max-w-3xl mx-auto text-center">
            {/* Testimonial image */}
            <div className="relative h-32">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                  {/* Alpine.js template for testimonial images: https://github.com/alpinejs/alpine#x-for */}
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 -z-10 ${
                        active === index
                          ? 'transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first opacity-100 rotate-0'
                          : 'transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 opacity-0 rotate-[60deg]'
                      }`}
                    >
                      <img
                        className="relative top-11 left-1/2 -translate-x-1/2 rounded-full"
                        src={testimonial.img}
                        width="56"
                        height="56"
                        alt={testimonial.name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Text */}
            <div className="mb-9">
              <div className="relative flex flex-col transition-all duration-150 delay-300 ease-in-out" ref={testimonialsRef}>
                {/* Alpine.js template for testimonials: https://github.com/alpinejs/alpine#x-for */}
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={`${
                      active === index
                        ? 'transition ease-in-out duration-500 delay-200 order-first opacity-100 translate-x-0'
                        : 'transition ease-out duration-300 delay-300 absolute opacity-0 translate-x-4'
                    }`}
                  >
                    <div className="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']">{testimonial.quote}</div>
                  </div>
                ))}
              </div>
            </div>
            {/* Buttons */}
            <div className="flex flex-wrap justify-center -m-1.5">
              {/* Alpine.js template for buttons: https://github.com/alpinejs/alpine#x-for */}
              {testimonials.map((testimonial, index) => (
                <button
                  key={index}
                  className={`inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ${
                    active === index ? 'bg-indigo-500 text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'
                  }`}
                  onClick={() => {
                    setActive(index);
                    stopAutorotate();
                  }}
                >
                  <span>{testimonial.name}</span> <span className={`${active === index ? 'text-indigo-200' : 'text-slate-300'}`}>-</span> <span>{testimonial.role}</span>
                </button>
              ))}
            </div>
          </div>
          {/* End: Fancy testimonial slider component */}
        </div>
      </div>
    </div>
  );
}

export default FancyTestimonialsSlider;
