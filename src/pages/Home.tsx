import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex-grow px-6 py-8">
      <section className="mb-12 flex justify-center">
        <div className="relative shadow-md rounded-lg w-[80%] overflow-hidden">
          <img
            src="/images/hero-home.jpg"
            alt="Hero"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center px-4 sm:px-8 lg:px-16">
            <h1 className="font-fraunces text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-2 sm:mb-4">
              We care for your Mental Well-being
            </h1>
            <p className="font-work-sans text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 max-w-2xl">
              Our goal is to provide a safe, comfortable, and warm environment so that you can openly discuss your mental health needs.
            </p>
            <button className="bg-white text-zinc-900 px-4 py-2 sm:px-6 sm:py-3 rounded-full w-max flex items-center text-sm sm:text-base transition-colors hover:bg-accent hover:text-white">
              Book a free consultation
              <span className="ml-2">→</span>
            </button>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-fraunces text-3xl mb-4">
          Start your journey towards well-being. I'm here to guide you through the challenges you're facing—be it mental, physical, or emotional pain.
        </h2>
        <div className="flex space-x-4">
          <button className="bg-accent text-foreground px-4 py-2 rounded">
            Mental Health
          </button>
          <button className="border border-foreground text-foreground px-4 py-2 rounded">
            Addiction and recovery
          </button>
          <button className="border border-foreground text-foreground px-4 py-2 rounded">
            Medical Weight Loss
          </button>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="font-fraunces text-3xl mb-4">Accepting Patients in the Following States</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="relative rounded-lg overflow-hidden">
            <img src="/path-to-washington-image.jpg" alt="Washington" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground bg-opacity-50 text-background p-4">
              <h3 className="font-fraunces text-xl">Washington</h3>
              <p className="font-work-sans">In-Person And Virtual Appointment</p>
            </div>
          </div>
          <div className="relative rounded-lg overflow-hidden">
            <img src="/path-to-oregon-image.jpg" alt="Oregon" className="w-full" />
            <div className="absolute bottom-0 left-0 right-0 bg-foreground bg-opacity-50 text-background p-4">
              <h3 className="font-fraunces text-xl">Oregon</h3>
              <p className="font-work-sans">In-Person And Virtual Appointment</p>
            </div>
          </div>
        </div>
        <button className="mt-4 bg-accent text-foreground px-6 py-3 rounded-full">
          View Our Services
        </button>
      </section>

      <section>
        <h2 className="font-fraunces text-3xl mb-4">FAQ</h2>
        {/* Add FAQ items here */}
      </section>
    </main>
  );
};

export default Home;