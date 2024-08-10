import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex-grow px-6 py-8">
      <section className="mb-12 flex justify-center">
        <div className="relative shadow-md rounded-[40px] w-full max-w-[1200px] overflow-hidden">
          <img
            src="/images/hero-home.jpg"
            alt="Hero"
            className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center text-center  px-4 sm:px-8 md:px-12 lg:px-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24">
            <h1 className="font-fraunces-slab text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-2 sm:mb-3 md:mb-4">
              <span className="text-yellow-300">We care for your</span><br />
              <span className="text-yellow-300 font-bold">Mental Well-being</span>
            </h1>
            <p className="font-work-sans text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-5 md:mb-6 max-w-xl">
              Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.
            </p>
            <button className="bg-white text-zinc-900 font-semibold px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full flex items-center text-sm sm:text-base transition-colors hover:bg-foreground hover:text-white">
              <img src="/images/avatar.jpg" alt="Avatar" className="w-8 h-8 rounded-full mr-2" />
              Book a Consultation Session
            </button>
          </div>
        </div>
      </section>


      <section className="mb-12 flex-col justify-center items-center text-center w-[90%] lg:w-[80%]">
        <div className="relative flex justify-center">
          <svg width="236.4" height="92.64324324324325" viewBox="0 0 370 145" >
            <defs id="SvgjsDefs2745"></defs>

            <g id="SvgjsG2747"
              transform="matrix(1.2178828599842617,0,0,1.2178828599842617,-5.657248791915247,18)"
              fill="#111111">
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M51.1,39.7C51.1,39.7,51.1,39.7,51.1,39.7C51.1,39.7,51.1,39.7,51.1,39.7z"></path>
                <path d="M51.2,39.7C51.1,39.7,51.1,39.7,51.2,39.7C51.1,39.7,51.1,39.7,51.2,39.7z"></path>
                <path
                  d="M85.7,51.4c-0.4-0.6-0.9-1.2-1.3-1.8c-3-4.1-3.5-8.5-1.9-13.4c2.4-7.3,0.5-19.8-3.7-26.2c-0.3-0.5-0.7-0.9-1-1.3   c1,2.2,2.1,4.3,2.8,6.6c0.8,2.3,1,4.8-0.6,7.1c0-12.1-7.1-18.2-17.5-21.6C69.3,3.3,74.7,7.4,77,14.9c1.2,4.2,0.6,10-1.5,13.4   c0-1.1,0-1.8,0-2.5c0.8-9.3-3.5-15.8-11.4-20.4C58.1,2,53.8,0.6,44.1,1.8c-7.5,0.9-14,3.9-19.2,9.4c-8.6,8.9-9.3,23.5-1.5,33.2   c0.3,0.4,0.7,0.8,1,1.2c0,0,0,0,0,0c2.3,2.2,5.9,4.7,5.9,4.7l0,0c0.1,0.1,0.2,0.2,0.3,0.2c14.6,7.7,28-2.8,30.6-7.8c0,0,0,0,0-0.1   c2.9-5.3,3.8-10.7,2.1-16.4c-2.1-7.1-6.9-11.5-13.2-13.3c1.8,1.3,4.4,2.8,6.4,4.8c6.6,6.8,5.7,17.4,4.3,21.1   c-0.2,0.5-0.4,0.9-0.5,1.3c0,0,0,0,0,0c-5.2,10.7-21.1,13.1-26.7,9.3c0,0-0.1,0-0.1,0c0,0-0.1,0-0.1,0l0,0c0,0-0.1,0-0.1-0.1   c-4.5-2.2-8.7-7.2-8.7-7.2l-0.1,0c-0.2-0.3-0.4-0.6-0.6-0.9c-6-8.8-4.2-21.9,3.9-29.2c10.8-9.7,26.7-9.7,37.3,0   c5.3,4.9,7.6,11.2,7.1,18.3c-0.2,3.7-0.7,10.7-6.8,20.5c-0.8,1.2-1.7,2.7-2.7,4.1c-2.5,3.3-5,6.4-7.6,9.6c-5.1,6.2-4.9,13.4,0.8,19   c2.5,2.4,5.4,4.4,8.1,6.6c0.2-0.2,0.3-0.3,0.5-0.5c-0.7-0.9-1.5-1.9-2.2-2.8c-2.2-3-3.6-6.1-2.9-9.9c0.6-3,1.3-3.5,4.1-2.5   c2.4,0.8,4.8,1.6,7.2,2.2c1.2,0.3,2.6,0.2,3.9,0c3-0.6,4.4-3,4-6c-0.1-0.9,0.1-2.1,0.6-2.9c0.7-1.1,1-2,0.6-3.4   c-0.2-0.5,0.3-1.6,0.8-1.9c1.1-0.6,1.5-1.3,1.3-2.5c-0.2-1.3,0.4-2.2,1.6-2.7c0.3-0.1,0.6-0.3,0.9-0.5   C87.1,55.1,87.4,53.8,85.7,51.4z"></path>
                <path
                  d="M53.1,18.8c4.1,4.3,4.7,8,4,12.7c-0.9,5.9-4.5,8.3-4.5,8.3C45.1,46,33.4,43.2,31,35c-1.4-4.7-0.5-8.8,3.1-12.1   c3.4-3.2,7.4-4,11.8-2.2c4.6,1.9,7,7,5.8,11.6c-1.2,4.5-5.3,7.3-10.1,6.8c-3.9-0.4-7-4-7.1-8.1c0-3.8,2.9-7,6.8-7.4   c3.5-0.4,6.7,2.2,7.3,5.9c0.5,3.2-1.8,6.1-5,6.7c-2.8,0.5-5.6-1.4-6.2-4.2c-0.6-2.7,1-5.1,3.7-5.7c1.8-0.4,3.1,0.2,4.2,1.6   c0.8,1.1,0.3,2.3,0.2,2.4c-0.9,1.4-2.9,2.3-4.6,1.9C40.1,32,39.2,31,40.2,30c-0.8,0.3-1.4,1.5,0.2,2.2c1.9,0.9,4.2,0.2,5.5-1.2   c1.3-1.4,1.2-3.5-1-4.9c-2-1.2-3.7-1.2-5.7-0.1c-2.1,1.2-2.9,3.1-2.7,5.4c0.3,3.6,3.4,6,7,5.6c3.9-0.5,6.6-3.9,6.1-7.8   c-0.5-3.8-3.4-6.6-7.1-6.8c-4.2-0.2-7.9,2.4-8.9,6.4c-0.9,4,0.8,8.1,4.3,10.3c3.5,2.2,8.5,1.7,11.8-1.1c3.8-3.2,4.9-8.8,2.6-13.3   c-2.4-4.8-7.9-7.4-13.2-6.2c-5.4,1.2-9.4,5.4-10.2,10.9c-0.8,5.1,1.9,11.5,6.4,13.8c10.6,5.6,18.9-2.3,19.4-2.7c0,0,0,0,0,0   C59.8,35.3,60.2,23.4,53.1,18.8z"></path>
              </g>
              <g xmlns="http://www.w3.org/2000/svg">
                <path d="M40.2,39C40.2,39,40.2,39,40.2,39C40.3,39,40.2,39,40.2,39z"></path>
                <path d="M40.2,39C40.2,39,40.3,39,40.2,39C40.3,39,40.2,39,40.2,39z"></path>
                <path
                  d="M5.7,50.7c0.4-0.6,0.9-1.2,1.3-1.8c3-4.1,3.5-8.5,1.9-13.4c-2.4-7.3-0.5-19.8,3.7-26.2c0.3-0.5,0.7-0.9,1-1.3   c-1,2.2-2.1,4.3-2.8,6.6c-0.8,2.3-1,4.8,0.6,7.1C11.3,9.5,18.5,3.4,28.9,0c-6.8,2.6-12.3,6.8-14.5,14.2c-1.2,4.2-0.6,10,1.5,13.4   c0-1.1,0-1.8,0-2.5c-0.8-9.3,3.5-15.8,11.4-20.4c6.3-3.6,16.2-5.3,26.1-3.3c7.4,1.5,13.1,10.2,6.5,6.4c-6.7-3.9-23-6.4-33.6,3.4   c-5.3,4.9-7.6,11.2-7.1,18.3c0.2,3.7,0.7,10.7,6.8,20.5c0.8,1.2,1.7,2.7,2.7,4.1c2.5,3.3,5,6.4,7.6,9.6c5.1,6.2,4.9,13.4-0.8,19   c-2.5,2.4-5.4,4.4-8.1,6.6c-0.2-0.2-0.3-0.3-0.5-0.5c0.7-0.9,1.5-1.9,2.2-2.8c2.2-3,3.6-6.1,2.9-9.9c-0.6-3-1.3-3.5-4.1-2.5   c-2.4,0.8-4.8,1.6-7.2,2.2c-1.2,0.3-2.6,0.2-3.9,0c-3-0.6-4.4-3-4-6c0.1-0.9-0.1-2.1-0.6-2.9c-0.7-1.1-1-2-0.6-3.4   c0.2-0.5-0.3-1.6-0.8-1.9c-1.1-0.6-1.5-1.3-1.3-2.5c0.2-1.3-0.4-2.2-1.6-2.7c-0.3-0.1-0.6-0.3-0.9-0.5C4.3,54.4,4,53.1,5.7,50.7z"></path>
              </g>
            </g>

          </svg>
        </div>
        <h2 className="font-fraunces-slab text-2xl lg:text-3xl mb-4">
          Start your journey towards well-being. I'm here to guide you through the challenges you're facing—be it mental, physical, or emotional pain.
        </h2>
        <div className="flex space-x-4">
          <button className="bg-accent text-foreground px-4 py-2 rounded-full">
            Mental Health
          </button>
          <button className="border border-foreground text-foreground px-4 py-2 rounded-full">
            Addiction & Recovery
          </button>
          <button className="border border-foreground text-foreground px-4 py-2 rounded-full">
            Migraine
          </button>
        </div>
      </section>

      <section className="mb-12">
       
        <button className="mt-4 bg-accent text-foreground px-6 py-3 rounded-full">
          View Our Services
        </button>
      </section>

      <section>
        <h2 className="font-fraunces-slab text-3xl mb-4">FAQ</h2>
        {/* Add FAQ items here */}
      </section>
    </main>
  );
};

export default Home;