import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';


interface Testimonial {
  avatarImage: string;
  name: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    avatarImage: 'https://lh3.googleusercontent.com/a/ACg8ocKFii-jWd4yaSkYTEomTFODgQhgkogmK4gKlSCXZAnebpgT6w=w60-h60-p-rp-mo-br100',
    name: 'Areeba Khan',
    rating: 5,
    review: "From the past 1 year I've suffered with severe anxiety, I went quite and became very weak but when I consulted Dr. Bushra for the very first time I felt relieved and I started looking forward to every consultation with her because she listened to me, to my symptoms, she understood what I was feeling. She hears me out even now completely even if I repeat things over and over again. Thanks to her (and Allah who has given me the privilege to meet her) I've recovered so much.",
  },
  {
    avatarImage: 'https://lh3.googleusercontent.com/a/ACg8ocKvm81Ok8vx249Xfb5AGEx26MWL6Jq1BAqyX26T8vntSEiA-g=w60-h60-p-rp-mo-br100',
    name: 'Anamta Hussain',
    rating: 5,
    review: "Looking for a psychiatrist? No better option in Delhi NCR. I am working on myself with Dr.Bushra for 1 year almost and this is my experience: Pros: Patience, Understanding, Good Communication, Empathy, Good knowledge of domain, No unnecessary medications, Timely scheduled mentoring, and a will to bringe change in people lives. Cons: I don't have enough excuses now to blame my failures. Dr. Bushra curbed them all! ❤️Best doctor ever",
  },
  {
    avatarImage: 'https://lh3.googleusercontent.com/a-/ALV-UjUB99pNwSwmOcDkUht4i4AJVqKziNrsDVcq3lFrMVVqUgELRCwRuw=w60-h60-p-rp-mo-br100',
    name: 'Vishal Giri',
    rating: 5,
    review: "I've been associated with Bushra ma'am for almost 10 months now. I consulted for severe depression and anxiety and there has never once been a time when ma'am has not been patient with me, she has always listened to everything I had to say (even the one's that had nothing to do with my condition). When I first went for consultation I was in very bad shape but with time and consultations more than half of my symptoms have improved. I am very grateful for whatever she has done for me.",
  },
  {
    avatarImage: 'https://lh3.googleusercontent.com/a/ACg8ocIsjj4opsDmzvZG_h6uvIWrM-7Uv8pR1BgrqMvfGnXe3XtSMw=w60-h60-p-rp-mo-br100', 
    name: 'Reema Ghai',
    rating: 5, 
    review: "Best Doctor ever. Thanks a lot mam"
  }
  // Add more testimonials as needed
];

const Testimonials: React.FC = () => {
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateReel = async () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        await controls.start({
          x: [-containerWidth, containerWidth],
          transition: {
            x: {
              repeat: Infinity,
              repeatType: 'loop',
              duration: 40,
              ease: 'linear',
            },
          },
        });
      }
    };

    animateReel();
  }, [controls]);

  return (
    <section className="bg-peacher mb-12 flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl font-bold mb-8 text-foreground font-fraunces-slab text-center">
        What Patients say about Dr. Zahoor 
      </h2>
      <div ref={containerRef} className="relative w-full">
        <motion.div
          className="flex space-x-8"
          animate={controls}
          style={{ width: `${testimonials.length * 100}%` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 flex-shrink-0"
              style={{ width: '300px' }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.avatarImage}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold text-foreground font-work-sans">
                    {testimonial.name}
                  </h3>
                  <div className="flex text-buttonish">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < testimonial.rating ? 'fill-current' : 'stroke-current'
                        }`}
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-foreground font-work-sans">{testimonial.review}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;