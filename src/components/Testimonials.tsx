import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface Testimonial {
  avatarImage: string;
  name: string;
  rating: number;
  review: string;
}

const testimonials: Testimonial[] = [
  {
    avatarImage: "https://lh3.googleusercontent.com/a-/ALV-UjUB99pNwSwmOcDkUht4i4AJVqKziNrsDVcq3lFrMVVqUgELRCwRuw=w60-h60-p-rp-mo-br100",
    name: "Vishal Giri",
    rating: 5,
    review: "I've been associated with Bushra ma'am for almost 10 months now. I consulted for severe depression and anxiety and there has never once been a time when ma'am has not been patient with me, she has always listened to everything I had to say (even the one's that had nothing to do with my condition). When I first went for consultation I was in very bad shape but with time and consultations more than half of my symptoms have improved. I am very grateful for whatever she has done for me."
  },
  {
    avatarImage: "https://lh3.googleusercontent.com/a/ACg8ocKFii-jWd4yaSkYTEomTFODgQhgkogmK4gKlSCXZAnebpgT6w=w60-h60-p-rp-mo-br100",
    name: "Areeba Khan",
    rating: 5,
    review: "From the past 1 year I've suffered with severe anxiety, I went quite and became very weak but when I consulted Dr. Bushra for the very first time I felt relieved and I started looking forward to every consultation with her because she listened to me, to my symptoms, she understood what I was feeling. She hears me out even now completely even if I repeat things over and over again. Thanks to her (and Allah who has given me the privilege to meet her) I've recovered so much."
  },
  {
    avatarImage: "https://lh3.googleusercontent.com/a/ACg8ocKvm81Ok8vx249Xfb5AGEx26MWL6Jq1BAqyX26T8vntSEiA-g=w60-h60-p-rp-mo-br100",
    name: "Anamta Hussain",
    rating: 5,
    review: "Looking for a psychiatrist? No better option in Delhi NCR. I am working on myself with Dr.Bushra for 1 year almost and this is my experience: Pros: Patience, Understanding, Good Communication, Empathy, Good knowledge of domain, No unnecessary medications, Timely scheduled mentoring, and a will to bringe change in people lives. Cons: I don't have enough excuses now to blame my failures. Dr. Bushra curbed them all! ❤️Best doctor ever"
  },
  {
    avatarImage: "https://lh3.googleusercontent.com/a/ACg8ocIsjj4opsDmzvZG_h6uvIWrM-7Uv8pR1BgrqMvfGnXe3XtSMw=w60-h60-p-rp-mo-br100",
    name: "Reema Ghai",
    rating: 5,
    review: "Best Doctor ever. Thanks a lot mam"
  },
  {
    avatarImage: "https://lh3.googleusercontent.com/a-/ALV-UjVZMSu7JY42o2UJsPmhT4Yk2famdvnQtZ2RdgxVmV5UR84sB2X-=w60-h60-p-rp-mo-br100",
    name: "Anshu Kumar",
    rating: 5,
    review: "best therapist. Sessions with her helped me in a really good way."
  }
];

const TestimonialCard: React.FC<Testimonial & { index: number }> = ({ avatarImage, name, rating, review, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className='bg-white rounded-lg shadow-md p-6 flex flex-col justify-between w-80 h-96 transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer'
  >
    <div>
      <div className="flex items-center mb-4">
        <motion.img
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
          className="w-16 h-16 rounded-full mr-4 border-2 border-blue-500"
          src={avatarImage}
          alt={`Avatar of ${name}`}
        />
        <div>
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <motion.svg
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 + i * 0.05 + 0.3 }}
                className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </motion.svg>
            ))}
          </div>
        </div>
      </div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
        className="text-gray-600 italic line-clamp-6"
      >
        &ldquo;{review}&rdquo;
      </motion.p>
    </div>
  </motion.div>
);

const Testimonials: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  return (
    <section id='testimonials' className='w-full py-24'>
      <div className="relative w-full max-w-screen-xl mx-auto py-12 px-4">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl mb-8 text-foreground font-fraunces-slab text-center"
        >
          Patients Testimonials
        </motion.h2>
        <div className="flex flex-col md:flex-row">
          {/* Left side content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full md:w-1/2 mb-8 md:mb-0 pr-0 md:pr-8"
          >
            <div className="bg-white rounded-lg p-6 h-full flex flex-col justify-center items-center mt-8">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                src="/images/testimonials.jpg"
                alt="Doctor with patients"
                className="rounded-lg mb-4"
              />
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl font-bold text-pink-800 mb-2"
              >
                Trusted by Patients
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="text-pink-600 text-center"
              >
                Dr. Bushra's compassionate care and expertise have helped countless patients on their journey to better mental health. Read what our patients have to say about their experiences.
              </motion.p>
            </div>
          </motion.div>

          {/* Right side testimonials */}
          <div className="w-full md:w-1/2 relative mt-8">
            <div
              ref={scrollRef}
              className="flex overflow-x-auto scrollbar-hide no-scrollbar snap-x snap-mandatory gap-6 pb-16 md:pb-8"
              style={{ scrollSnapType: 'x mandatory' }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="snap-center flex-shrink-0">
                  <TestimonialCard {...testimonial} index={index} />
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 md:px-0 md:justify-center md:space-x-4">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollLeft}
                className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollRight}
                className="bg-white rounded-full p-3 shadow-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 z-10"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
