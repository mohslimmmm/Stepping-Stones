import { Link, useLocation } from "react-router-dom";
import { Menu, X, User } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Discovery", path: "/discovery" },
    { name: "The Skin Journal", path: "/journal" },
    { name: "Trust & About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  if (location.pathname.startsWith("/admin")) {
    return null;
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`sticky top-0 z-50 transition-all duration-500 w-full ${scrolled ? "glass py-3" : "bg-ivory py-5 border-b border-slate-grey/5"}`}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex flex-col">
          <span className="text-2xl font-header tracking-widest text-slate-dark">
            HARLEY STREET
          </span>
          <span className="text-xs tracking-widest text-slate opacity-80 uppercase mt-1">
            Skin Bespoke
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 link-underline ${location.pathname === link.path ? "text-slate-dark font-bold" : "text-slate hover:text-slate-dark"}`}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="btn-primary ml-4">
            Book Assessment
          </Link>
          <Link
            to="/admin"
            className="text-slate hover:text-slate-dark transition-colors ml-4"
            title="Clinic Portal"
          >
            <User size={18} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X size={28} strokeWidth={1.5} />
          ) : (
            <Menu size={28} strokeWidth={1.5} />
          )}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-ivory border-b border-slate-grey/10 py-4 px-4 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-widest uppercase text-slate hover:text-slate-dark block py-3 border-b border-slate-grey/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex flex-col gap-4 mt-6">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary w-full text-center"
                >
                  Book Assessment
                </Link>
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className="text-xs tracking-widest uppercase text-slate hover:text-slate-dark py-2 flex items-center justify-center gap-2"
                >
                  <User size={16} strokeWidth={1.5} /> Clinic Portal
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
