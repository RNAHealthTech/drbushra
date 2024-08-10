import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isSticky, setIsSticky] = useState<boolean>(false);
  const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0,0);
  },[]);

  const services = [
    { name: "Headache & Migraine", path: "/services/headache-migraine" },
    { name: "Anger and Stress Management", path: "/services/anger-stress-management" },
    { name: "Anxiety + Depression", path: "/services/anxiety-depression" },
    { name: "Bipolar Disorder", path: "/services/bipolar-disorder" },
    { name: "Pyschosis", path: "/services/psychosis" },
    { name: "Child & Adolescent Guidance", path: "/services/child-adolescent-guidance" },
    { name: "Internet & Technology Addiction", path: "/services/internet-technology-addiction" },
    { name: "Lifestyle & Relationship Issues", path: "/services/lifestyle-relationship-issues" },
    { name: "Counselling", path: "/services/counselling" },
    { name: "Psychotherapy", path: "/services/psychotherapy" }
  ]

  const handleServicesClick = (e: React.MouseEvent) => {
    if (window.innerWidth < 768) {
      e.preventDefault();
      setIsServicesOpen(!isServicesOpen);
    } else {
      navigate('/services');
    }
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  return (
    <header className={`font-work-sans-slab sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-background shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <nav className="flex flex-wrap justify-between items-center">
          <Link to="/" className="flex items-center">
            <img src="/images/logo.png" alt="Dr. Bushra Zahoor" 
            className={`transition-all duration-300 ${
              isScrolled 
                ? 'h-16 w-26 md:h-12 md:w-24 lg:h-16 lg:w-42' 
                : 'h-20 w-30 md:h-16 md:w-32 lg:h-20 lg:w-52'
            }`} />
          </Link>

          <button
            className="md:hidden z-20"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden fixed inset-0 bg-background z-50 flex flex-col">
              <div className="p-4 pt-16">
                <button
                  className="absolute top-4 right-4 text-gray-800 hover:text-foreground focus:outline-none"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <Link to="/" className="block py-2 text-gray-800 hover:text-foreground text-lg font-semibold" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" className="block py-2 text-gray-800 hover:text-foreground text-lg font-semibold" onClick={handleLinkClick}>Who I am</Link>
                <button
                  className="w-full text-left py-2 text-gray-800 hover:text-foreground text-lg font-semibold flex justify-between items-center"
                  onClick={handleServicesClick}
                >
                  Treatments & Therapies
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="pl-4">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block py-2 text-gray-700 hover:text-foreground text-base"
                        onClick={handleLinkClick}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="mt-auto p-4">
                <button className="w-full bg-accent text-foreground px-6 py-2 rounded-lg hover:bg-accent-dark transition-colors text-lg font-semibold">
                  Contact
                </button>
              </div>
            </div>
          )}

          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:justify-center">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 ml-8 md:ml-0">
              <Link to="/" className='text-gray-800 hover:text-foreground transition-colors text-lg font-semibold'>Home</Link>
              <Link to="/about" className="text-gray-800 hover:text-foreground transition-colors text-lg font-semibold">Who I am</Link>
             
              <div className="relative group">
                <Link
                  to="/services"
                  className="flex items-center text-gray-800 hover:text-foreground transition-colors text-lg font-semibold"
                  onClick={handleServicesClick}
                >
                 Treatments & Therapies 
                  <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className="block px-4 py-2 text-zinc-600 text-sm hover:bg-orange-200 hover:text-zinc-900"
                        role="menuitem"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <button className="bg-accent text-foreground px-6 py-2 rounded hover:bg-accent-dark transition-colors text-lg font-semibold">
              Contact
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// const Header: React.FC = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
//   const [isSticky, setIsSticky] = useState<boolean>(false);
//   const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);

//   const navigate = useNavigate();

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && isMenuOpen) {
//         setIsMenuOpen(false);
//       }
//     };

//     const handleScroll = () => {
//       setIsSticky(window.scrollY > 0);
//     };

//     window.addEventListener('resize', handleResize);
//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [isMenuOpen]);

//   const services = [
//     { name: "Headache & Migraine", path: "/services/headache-migraine" },
//     { name: "Anger and Stress Management", path: "/services/anger-stress-management" },
//     { name: "Anxiety + Depression", path: "/services/anxiety-depression" },
//     { name: "Bipolar Disorder", path: "/services/bipolar-disorder" },
//     { name: "Pyschosis", path: "/services/psychosis" },
//     { name: "Child & Adolescent Guidance", path: "/services/child-adolescent-guidance" },
//     { name: "Internet & Technology Addiction", path: "/services/internet-technology-addiction" },
//     { name: "Lifestyle & Relationship Issues", path: "/services/lifestyle-relationship-issues" },
//     { name: "Counselling", path: "/services/counselling" },
//     { name: "Psychotherapy", path: "/services/psychotherapy" }
//   ]


//   const handleServicesClick = (e: React.MouseEvent) => {
//     if (window.innerWidth < 768) {  // mobile view
//       e.preventDefault();
//       setIsServicesOpen(!isServicesOpen);
//     } else {
//       navigate('/services');
//     }
//   };


//   return (
//     <header className={`font-work-sans-slab sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isSticky ? 'bg-background shadow-md' : 'bg-transparent'}`}>
//       <div className="container mx-auto px-4 py-3 md:py-4">
//         <nav className="flex flex-wrap justify-between items-center">
//           <Link to="/" className="flex items-center">
//             <img src="/images/logo.png" alt="Dr. Bushra Zahoor" className="h-10 w-20 md:h-16 md:w-32 lg:h-20 lg:w-40" />
//           </Link>

//           <button
//             className="md:hidden z-20"
//             onClick={toggleMenu}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//             </svg>
//           </button>

//           <div className={`
//             w-full md:w-auto
//             md:flex md:items-center md:justify-center
//             ${isMenuOpen ? 'flex' : 'hidden'}
//             flex-col md:flex-row
//             absolute md:relative
//             top-full left-0 right-0
//             bg-white md:bg-transparent
//             md:h-auto
//             py-4 md:py-0
//             z-10
//           `}>
//             <div className="flex flex-col md:flex-row md:items-center md:space-x-8 space-y-4 md:space-y-0 ml-8 md:ml-0">
//               <Link to="/" className='text-gray-800 hover:text-foreground transition-colors text-lg font-semibold'>Home</Link>
//               <Link to="/about" className="text-gray-800 hover:text-foreground transition-colors text-lg font-semibold">Who I am</Link>
             
//               <div className="relative group">
//                 <Link
//                   to="/services"
//                   className="flex items-center text-gray-800 hover:text-foreground transition-colors text-lg font-semibold"
//                   onClick={handleServicesClick}
//                 >
//                  Treatments & Therapies 
//                   <svg className="ml-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
//                   </svg>
//                 </Link>
//                 <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
//                   <div className="py-1" role="menu" aria-orientation="vertical">
//                     {services.map((service) => (
//                       <Link
//                         key={service.path}
//                         to={service.path}
//                         className="block px-4 py-2 text-zinc-600 text-sm hover:bg-orange-200 hover:text-zinc-900"
//                         role="menuitem"
//                       >
//                         {service.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="hidden md:block">
//             <button className="bg-accent text-foreground px-6 py-2 rounded hover:bg-accent-dark transition-colors text-lg font-semibold">
//               Contact
//             </button>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;