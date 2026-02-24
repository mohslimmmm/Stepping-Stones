import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';

export default function ClientLayout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Discovery', href: '/discovery' },
    { name: 'The Skin Journal', href: '/journal' },
    { name: 'Trust & About', href: '/trust' },
    { name: 'Contact', href: '/contact' },
  ];

  const currentPath = location.pathname;

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-md border-b text-foreground border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="font-serif text-2xl tracking-wide uppercase">
                Harley Street Skin
                <span className="block text-xs font-sans tracking-widest text-primary mt-1">
                  Bespoke
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8 items-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={clsx(
                    'text-sm uppercase tracking-wider transition-colors duration-300 font-medium',
                    currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))
                      ? 'text-primary'
                      : 'text-foreground/80 hover:text-primary'
                  )}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/contact" 
                className="ml-4 bg-primary text-background px-6 py-2 uppercase tracking-wider text-sm font-semibold hover:bg-primary-hover transition-colors duration-300"
              >
                Book Assessment
              </Link>
            </nav>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                type="button"
                className="text-foreground hover:text-primary transition-colors focus:outline-none"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background border-b border-foreground/10 absolute w-full left-0 top-20 shadow-xl">
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={clsx(
                    'block px-3 py-4 text-base uppercase tracking-wider font-medium border-b border-foreground/5',
                    currentPath === item.href || (item.href !== '/' && currentPath.startsWith(item.href))
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary bg-background/50'
                  )}
                >
                  <div className="flex justify-between items-center">
                    {item.name}
                    <ChevronRight size={16} className="text-foreground/30" />
                  </div>
                </Link>
              ))}
              <div className="mt-6 px-3">
                 <Link 
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)} 
                  className="block w-full text-center bg-primary text-background px-6 py-4 uppercase tracking-wider text-sm font-semibold"
                >
                  Book Assessment
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-serif text-2xl tracking-wide uppercase mb-4 text-primary">
              Harley Street Skin
              <span className="block text-xs font-sans tracking-widest text-background mt-1">
                Bespoke
              </span>
            </h2>
            <p className="max-w-md text-background/80 font-light leading-relaxed">
              London's premier destination for bespoke dermatology. 
              Where classic British elegance meets the frontier of modern clinical science.
            </p>
          </div>
          
          <div>
            <h3 className="font-serif uppercase tracking-widest mb-6">Contact</h3>
            <ul className="space-y-3 text-background/80 font-light">
              <li>112 Harley Street</li>
              <li>Marylebone, London</li>
              <li>W1G 7JQ</li>
              <li className="pt-4 hover:text-primary transition-colors cursor-pointer">enquiries@harleyskinbespoke.com</li>
              <li className="hover:text-primary transition-colors cursor-pointer">+44 (0) 20 7123 4567</li>
            </ul>
          </div>

          <div>
            <h3 className="font-serif uppercase tracking-widest mb-6">Legal</h3>
            <ul className="space-y-3 text-background/80 font-light">
              <li className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-primary transition-colors cursor-pointer">Terms & Conditions</li>
              <li className="hover:text-primary transition-colors cursor-pointer">CQC Registration</li>
              <li className="pt-6">
                <Link to="/admin" className="text-xs uppercase tracking-widest text-background/50 hover:text-primary transition-colors">
                  Clinic Portal
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
