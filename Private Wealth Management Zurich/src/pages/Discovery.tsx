import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, TrendingUp, Landmark, Heart, Briefcase, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    id: 'asset-management',
    title: 'Asset Management',
    icon: <TrendingUp size={24} />,
    tagline: 'Precision-engineered portfolios for long-term growth.',
    description: 'Our core philosophy is centered on risk-adjusted returns. We combine traditional Swiss stability with modern quantitative analysis to identify opportunities across global markets.',
    details: ['Discretionary Mandates', 'Advisory Mandates', 'Quantitative Strategies', 'Thematic Investing'],
    link: '/services/portfolio-management'
  },
  {
    id: 'estate-planning',
    title: 'Estate Planning',
    icon: <Landmark size={24} />,
    tagline: 'Securing your legacy across generations.',
    description: 'Wealth preservation is as critical as wealth creation. Our experts design robust structures that protect your assets and ensure a seamless transition to the next generation.',
    details: ['Trust & Foundations', 'Succession Planning', 'Tax Optimization', 'Jurisdiction Analysis'],
    link: '#'
  },
  {
    id: 'philanthropy',
    title: 'Philanthropy',
    icon: <Heart size={24} />,
    tagline: 'Impact that transcends financial returns.',
    description: 'We help you channel your wealth into meaningful change. From setting up charitable foundations to impact investing, we align your portfolio with your values.',
    details: ['Strategic Giving', 'Impact Assessment', 'Foundation Management', 'Social Entrepreneurship'],
    link: '#'
  },
  {
    id: 'alternative-investments',
    title: 'Alternative Investments',
    icon: <Briefcase size={24} />,
    tagline: 'Access to exclusive, non-traditional markets.',
    description: 'Diversify beyond the standard indices. We provide exclusive entry points into private equity, venture capital, and institutional-grade real estate.',
    details: ['Private Equity', 'Venture Capital', 'Real Estate', 'Private Debt'],
    link: '#'
  }
];

const Discovery = () => {
  const [activeTab, setActiveTab] = useState(services[0].id);

  const activeService = services.find(s => s.id === activeTab)!;

  return (
    <div className="pt-32 pb-32">
      <div className="container">
        <header className="max-w-3xl mb-20 px-6">
          <h4 className="text-[10px] tracking-[0.4em] uppercase text-silver mb-6">Our Expertise</h4>
          <h1 className="text-4xl md:text-6xl mb-8 leading-tight">Strategic Services for <br /><span className="italic">Sophisticated Needs.</span></h1>
          <p className="text-lg text-light-slate opacity-70 font-light">
            Each client relationship is guided by a dedicated Advisor, ensuring that every strategic move aligns with your broader financial trajectory.
          </p>
        </header>

        {/* Tabs Interface */}
        <div className="flex flex-wrap gap-4 mb-16 border-b border-silver/20 pb-4">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActiveTab(service.id)}
              className={`px-8 py-4 text-xs tracking-widest uppercase transition-all relative ${
                activeTab === service.id ? 'text-deep-indigo font-semibold' : 'text-silver hover:text-dark-slate'
              }`}
            >
              {service.title}
              {activeTab === service.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-[-17px] left-0 w-full h-[2px] bg-deep-indigo"
                />
              )}
            </button>
          ))}
        </div>

        <div className="bg-white border border-silver/10 overflow-hidden shadow-2xl rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeTab}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="p-12 md:p-20"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-alpine-snow text-deep-indigo mb-10 rounded-sm">
                  {activeService.icon}
                </div>
                <h3 className="text-3xl mb-6">{activeService.title}</h3>
                <p className="text-silver tracking-widest uppercase text-[10px] mb-8">{activeService.tagline}</p>
                <p className="text-lg text-light-slate mb-10 leading-relaxed font-light">
                  {activeService.description}
                </p>
                
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
                  {activeService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-dark-slate opacity-80">
                      <div className="w-1 h-1 bg-deep-indigo rounded-full"></div>
                      {detail}
                    </li>
                  ))}
                </ul>

                <Link 
                  to={activeService.link}
                  className="inline-flex items-center gap-4 bg-dark-slate text-white px-8 py-4 rounded-[4px] text-xs tracking-widest uppercase hover:bg-deep-indigo transition-colors"
                >
                  Explore Detailed Methodology
                  <ArrowRight size={16} />
                </Link>
              </motion.div>
            </AnimatePresence>

            <div className="hidden md:block bg-alpine-snow relative overflow-hidden">
               <motion.div 
                 key={activeTab + 'img'}
                 initial={{ scale: 1.1, opacity: 0 }}
                 animate={{ scale: 1, opacity: 1 }}
                 transition={{ duration: 1 }}
                 className="absolute inset-0"
               >
                 <img 
                    src={`https://images.unsplash.com/photo-${activeTab === 'asset-management' ? '1590283603385-17ffb3a7f29f' : activeTab === 'estate-planning' ? '1450101499163-c8848c66ca85' : '1553484771-3315601030c4'}?auto=format&fit=crop&q=80&w=1000`} 
                    alt={activeService.title}
                    className="w-full h-full object-cover opacity-80"
                 />
                 <div className="absolute inset-0 bg-deep-indigo/10 mix-blend-multiply"></div>
               </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discovery;
