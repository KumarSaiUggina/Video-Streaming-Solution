import  { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Stream", href: "/stream" },
    { name: "Upload", href: "/upload" },
    { name: "Contact", href: "/contact" },
  ];

  // Refs for sections
  const homeRef = useRef(null);


  // Mapping names to refs
  const sectionRefs = {
    home: homeRef,
  };

  const handleScrollToSection = (sectionName) => {
    const ref = sectionRefs[sectionName.toLowerCase()];
    if (ref.current) {
      ref.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full backdrop-blur-md bg-white/70 border-b shadow-md">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-4 lg:px-8 "
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Mentoons</span>
            {/* <img alt="" src="" className="h-8 w-auto" /> */}
          </a>
          <span className="text-3xl font-semibold text-indigo-900">
            Mentoons
          </span>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-20">
          {navigation.map((item) => (
            <NavLink 
              key={item.name}
              to={item.href}
              onClick={() => handleScrollToSection(item.name.toLowerCase())}
              className={({ isActive }) => 
                `inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium
                ${isActive 
                  ? 'border-indigo-500 text-gray-900' 
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`
              }
            >
              {item.name}
            </NavLink>
            
          ))}
        </div>
        
        <div
          className="hidden lg:flex lg:flex-1 lg:justify-end"
          onClick={() => handleScrollToSection("home")} // Assuming 'home' is your demo section or first section
        >
          <a href="/stream" className="block text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out
          text-blue-700 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent
          focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50">
            Demo <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
      <Dialog
  open={mobileMenuOpen}
  onClose={setMobileMenuOpen}
  className="lg:hidden"
>
  <div className="fixed inset-0 z-50" />
  <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white border-b shadow-md  px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
    <div className="flex items-center justify-between "> 
      {/* Use flex items-center to align items vertically */}
      <div className="flex items-center gap-2"> 
        {/* Group logo and title for alignment */}
        <a href="#" className="-m-1.5 p-1.5">
          <span className="sr-only">Your Company</span>
          {/* Commented out image for now */}
          {/* <img
            alt="Mentoons Logo"
            src="/path/to/your/logo.png"
            className="h-8 w-auto"
          /> */}
        </a>
        <span className="text-3xl font-semibold text-indigo-900">Mentoons</span>
      </div>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(false)}
        className="-m-2.5 rounded-md p-2.5 text-gray-700"
      >
        <span className="sr-only">Close menu</span>
        <XMarkIcon aria-hidden="true" className="h-6 w-6" />
      </button>
    </div>
    <div className="mt-6 flow-root">
  <div className="-my-6 divide-y divide-gray-500/10">
    <div className="space-y-2 py-6">
      {navigation.map((item) => (
        <NavLink 
          key={item.name}
          to={item.href}
          onClick={() => { 
            setMobileMenuOpen(false); 
            handleScrollToSection(item.name.toLowerCase());
          }}
          className="block w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ease-in-out
          text-blue-700 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white hover:border-transparent
          focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        >
          {item.name}
        </NavLink>
      ))}
    </div>
  </div>
</div>
  </DialogPanel>
</Dialog>
    </header>
  );
}