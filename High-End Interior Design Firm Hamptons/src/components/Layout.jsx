import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Instagram, Mail, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="text-2xl font-serif tracking-widest text-deep-grey">
            SALT & LIGHT <span className="text-sand">INTERIORS</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center uppercase text-xs tracking-widest font-medium">
            <Link to="/portfolio" className="hover:text-sand transition-colors">Portfolio</Link>
            <Link to="/journal" className="hover:text-sand transition-colors">Journal</Link>
            <Link to="/about" className="hover:text-sand transition-colors">About</Link>
            <Link to="/contact" className="hover:text-sand transition-colors">Contact</Link>
            <Link to="/admin" className="px-4 py-2 border border-sand text-sand hover:bg-sand hover:text-white transition-all rounded-8">Studio Login</Link>
          </nav>

          {/* Mobile Toggle */}
          <button className="md:hidden text-deep-grey" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-linen shadow-xl py-8 px-6 flex flex-col space-y-6 items-center uppercase text-sm tracking-widest font-medium">
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/journal">Journal</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/admin" className="text-sand">Studio Login</Link>
          </div>
        )}
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-white border-t border-linen py-16">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif mb-6 tracking-widest uppercase">Salt & Light Interiors</h3>
            <p className="text-deep-grey/70 max-w-sm mb-8 font-light">
              Crafting timeless, light-filled spaces that harmonize with the natural beauty of the Hamptons coast.
            </p>
            <div className="flex space-x-4">
              <Instagram size={20} className="text-sand cursor-pointer hover:scale-110 transition-transform" />
              <Mail size={20} className="text-sand cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest">The Studio</h4>
            <ul className="space-y-4 text-sm text-deep-grey/70">
              <li><Link to="/about" className="hover:text-sand transition-colors">Our Story</Link></li>
              <li><Link to="/portfolio" className="hover:text-sand transition-colors">Projects</Link></li>
              <li><Link to="/journal" className="hover:text-sand transition-colors">Journal</Link></li>
              <li><Link to="/contact" className="hover:text-sand transition-colors">Consultation</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-6 uppercase tracking-widest">Connect</h4>
            <ul className="space-y-4 text-sm text-deep-grey/70">
              <li className="flex items-center space-x-2"><MapPin size={16} className="text-sand" /> <span>East Hampton, NY</span></li>
              <li className="flex items-center space-x-2"><Mail size={16} className="text-sand" /> <span>studio@saltandlight.com</span></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-linen flex justify-between items-center text-[10px] uppercase tracking-widest text-deep-grey/40">
          <p>© 2024 Salt & Light Interiors. All Rights Reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
