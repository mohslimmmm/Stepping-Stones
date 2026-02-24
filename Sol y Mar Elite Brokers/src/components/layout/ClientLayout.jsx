import { Outlet, Link } from 'react-router-dom';

const ClientLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-alabaster">
      <nav className="fixed w-full z-50 glass-light border-b border-olive/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="text-2xl font-serif text-espresso hover:text-navy transition-colors">
                Sol y Mar<span className="text-olive block text-xs tracking-[0.2em] uppercase font-sans mt-0.5">Elite Brokers</span>
              </Link>
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              <Link to="/collection" className="text-sm tracking-wide text-espresso/80 hover:text-navy transition-colors">The Collection</Link>
              <Link to="/journal" className="text-sm tracking-wide text-espresso/80 hover:text-navy transition-colors">Journal</Link>
              <Link to="/atelier" className="text-sm tracking-wide text-espresso/80 hover:text-navy transition-colors">The Atelier</Link>
              <Link to="/contact" className="text-sm tracking-wide bg-espresso text-alabaster px-6 py-2.5 rounded-sm hover:bg-navy transition-all duration-300 hover-lift">
                Schedule Viewing
              </Link>
              <Link to="/admin/login" className="text-xs text-olive/60 hover:text-olive">Broker Portal</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow pt-20">
        <Outlet />
      </main>

      <footer className="bg-espresso text-alabaster/80 py-16 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="font-serif text-2xl text-alabaster mb-4">Sol y Mar Elite Brokers</h3>
            <p className="text-sm font-light max-w-sm">Curating the finest Mediterranean living. Exclusive, off-market access to the Costa del Sol's most coveted properties.</p>
          </div>
          <div>
            <h4 className="font-serif text-lg text-alabaster mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/collection" className="hover:text-olive transition-colors">The Collection</Link></li>
              <li><Link to="/journal" className="hover:text-olive transition-colors">Marbella Journal</Link></li>
              <li><Link to="/atelier" className="hover:text-olive transition-colors">The Atelier</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg text-alabaster mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>Golden Mile, Marbella</li>
              <li>concierge@solymar.es</li>
              <li>+34 952 000 000</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-alabaster/10 flex justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Sol y Mar Elite Brokers. All rights reserved.</p>
          <p className="text-alabaster/50">Discrete Luxury</p>
        </div>
      </footer>
    </div>
  );
};

export default ClientLayout;
