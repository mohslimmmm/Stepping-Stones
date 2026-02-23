import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Landmark, Scale, HeartHandshake, GraduationCap, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Home = () => (
  <div className="home-page">
    {/* Hero Section */}
    <section style={{ 
      height: '80vh', 
      display: 'flex', 
      alignItems: 'center', 
      position: 'relative',
      backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("https://images.unsplash.com/photo-1582234372722-50d7ccc30ebd?auto=format&fit=crop&q=80&w=2000")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'var(--bg-cream)'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={{ fontSize: '4.5rem', maxWidth: '800px', lineHeight: 1.1, color: 'inherit', marginBottom: '2rem' }}>
            PRESERVING <span style={{ color: 'var(--accent-gold)' }}>GENERATIONS</span> OF LEGACY
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '3rem', fontStyle: 'italic', opacity: 0.9 }}>
            A bespoke London-based family office dedicated to the discreet preservation and growth of multi-generational wealth.
          </p>
          <Link to="/discovery" className="btn-primary">Explore Our Services <ArrowRight style={{ marginLeft: '10px' }} /></Link>
        </motion.div>
      </div>
    </section>

    {/* Philosophy Section */}
    <section>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <span style={{ color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Our Philosophy</span>
            <h2 style={{ fontSize: '3rem', margin: '1.5rem 0' }}>Discretion as a Core Principle</h2>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem' }}>
              Wealth is not merely financial capital; it is the sum of a family's history, values, and future aspirations. We provide a sanctuary for wealth management where privacy is paramount and every strategy is bespoke.
            </p>
            <Link to="/about" className="btn-outline-gold">Learn About Our Trust</Link>
          </div>
          <div style={{ border: '20px solid var(--accent-green)', padding: '2rem', background: 'var(--white)' }}>
            <img 
              src="https://images.unsplash.com/photo-1507679799987-c7377ec48696?auto=format&fit=crop&q=80&w=1000" 
              alt="Legacy" 
              style={{ width: '100%', height: '400px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>

    {/* Quick Service Links */}
    <section className="heritage-bg-green">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ color: 'var(--bg-cream)', fontSize: '2.5rem' }}>Core Disciplines</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem' }}>
          {[
            { icon: <Landmark size={32} />, title: "Wealth Succession", desc: "Long-term inter-generational planning." },
            { icon: <Scale size={32} />, title: "Tax & Legal", desc: "Sophisticated structural optimization." },
            { icon: <HeartHandshake size={32} />, title: "Lifestyle Concierge", desc: "Unrivaled personal management." },
            { icon: <GraduationCap size={32} />, title: "Next-Gen Education", desc: "Preparing heirs for stewardship." }
          ].map((item, idx) => (
            <div key={idx} style={{ padding: '3rem 2rem', border: '1px solid rgba(255,253,208,0.2)', textAlign: 'center' }}>
              <div style={{ color: 'var(--accent-gold)', marginBottom: '1.5rem' }}>{item.icon}</div>
              <h3 style={{ color: 'var(--bg-cream)', marginBottom: '1rem', fontSize: '1.2rem' }}>{item.title}</h3>
              <p style={{ color: 'var(--bg-cream)', opacity: 0.7, fontSize: '0.9rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export const Discovery = () => {
  const [activeTab, setActiveTab] = useState('wealth');

  const tabs = [
    { id: 'wealth', label: 'Wealth Succession', icon: <Landmark size={20} />, content: {
      title: "Generational Wealth Succession",
      desc: "Our primary objective is the seamless transfer of capital across generations while maintaining family harmony and purpose.",
      features: ["Multi-generational Trusts", "Values-based Estate Mapping", "Asset Protection Strategies"]
    }},
    { id: 'tax', label: 'Tax & Legal Structuring', icon: <Scale size={20} />, content: {
      title: "Complex Legal Architecting",
      desc: "Navigating the global regulatory landscape with precision to protect and optimize your family's global footprint.",
      features: ["Cross-border Tax Optimization", "Regulatory Compliance", "Corporate Governance"]
    }},
    { id: 'lifestyle', label: 'Lifestyle Concierge', icon: <HeartHandshake size={20} />, content: {
      title: "Private Lifestyle Management",
      desc: "From art acquisition to estate management, we handle the intricacies of your private life with absolute discretion.",
      features: ["Art Advisory", "Real Estate Acquisition", "Private Travel Infrastructure"]
    }},
    { id: 'education', label: 'Next-Gen Education', icon: <GraduationCap size={20} />, content: {
      title: "Empowering Future Stewards",
      desc: "Investing in the human capital of the next generation to ensure they are prepared for the responsibilities of wealth.",
      features: ["Financial Literacy for Heirs", "Philanthropy Mentorship", "Operational Leadership"]
    }},
  ];

  return (
    <div className="discovery-page" style={{ padding: '6rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span style={{ color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Discovery</span>
          <h1 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Bespoke Solutions</h1>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '300px 1fr', gap: '4rem', background: 'var(--white)', padding: '4rem', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
          {/* Tab Sidebar */}
          <div style={{ borderRight: '1px solid #eee' }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  width: '100%',
                  textAlign: 'left',
                  padding: '1.5rem',
                  borderBottom: '1px solid #f9f9f9',
                  color: activeTab === tab.id ? 'var(--accent-green)' : '#999',
                  background: activeTab === tab.id ? '#fdfdfd' : 'transparent',
                  fontWeight: activeTab === tab.id ? 700 : 400,
                  fontSize: '1.1rem'
                }}
              >
                <span style={{ color: activeTab === tab.id ? 'var(--accent-gold)' : 'inherit' }}>{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {tabs.find(t => t.id === activeTab).content && (
                  <>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>{tabs.find(t => t.id === activeTab).content.title}</h2>
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '3rem', maxWidth: '700px' }}>
                      {tabs.find(t => t.id === activeTab).content.desc}
                    </p>
                    <ul style={{ listStyle: 'none', padding: 0, marginBottom: '4rem' }}>
                      {tabs.find(t => t.id === activeTab).content.features.map((f, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                          <ShieldCheck color="var(--accent-gold)" />
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Link to="/detail" className="btn-primary">View Comprehensive Scope <ArrowRight style={{ marginLeft: '10px' }} size={18} /></Link>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Detail = () => (
  <div className="detail-page" style={{ padding: '6rem 0' }}>
    <div className="container">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <Link to="/discovery" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', marginBottom: '2rem' }}>
          <ArrowRight style={{ transform: 'rotate(180deg)' }} size={18} /> Back to Services
        </Link>
        <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Generational Wealth Succession</h1>
        <p style={{ fontSize: '1.4rem', color: 'var(--accent-green)', fontStyle: 'italic', marginBottom: '3rem', borderLeft: '4px solid var(--accent-gold)', paddingLeft: '2rem' }}>
          "The preservation of wealth is not about hoarding capital, but about cultivating a legacy that inspires the next generation."
        </p>
        
        <div style={{ margin: '4rem 0' }}>
          <img 
            src="https://images.unsplash.com/photo-1579621970795-87faff2f020c?auto=format&fit=crop&q=80&w=1200" 
            alt="Estate" 
            style={{ width: '100%', height: '500px', objectFit: 'cover', marginBottom: '3rem' }}
          />
          <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Strategic Scope</h2>
          <p style={{ marginBottom: '2rem' }}>
            Succession planning at Wellington Heritage is a multi-layered process that begins with a deep understanding of family dynamics. We don't just move assets; we build structures that reflect your family's unique DNA.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', margin: '4rem 0' }}>
            <div className="heritage-border" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Case Study: The Gilt Manor Estate</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                Abstract: Negotiated the complex transfer of a Grade II listed estate involving cross-border beneficiaries and a dual-trust structure, ensuring tax efficiency while preserving the historical integrity of the residence.
              </p>
            </div>
            <div className="heritage-border" style={{ padding: '2.5rem' }}>
              <h3 style={{ marginBottom: '1rem' }}>Global Asset Protection</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>
                We utilize jurisdictional arbitrage and sophisticated foundation structures to ensure that your family's privacy and assets remain secure against geopolitical fluctuations.
              </p>
            </div>
          </div>
        </div>

        <div style={{ position: 'sticky', bottom: '2rem', background: 'var(--white)', padding: '2rem', border: '1px solid var(--accent-gold)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h4 style={{ margin: 0 }}>Private Inquiry Required</h4>
            <p style={{ fontSize: '0.8rem', opacity: 0.7, margin: 0 }}>Consultations are held at our Mayfair office by referral only.</p>
          </div>
          <Link to="/contact" className="btn-primary" style={{ padding: '0.8rem 1.5rem' }}>Initiate Protocol</Link>
        </div>
      </div>
    </div>
  </div>
);

export const Insights = () => (
  <div className="insights-page" style={{ padding: '6rem 0' }}>
    <div className="container">
      <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
        <span style={{ color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Perspective</span>
        <h1 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Heritage Insights</h1>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4rem' }}>
        <article>
          <img 
            src="https://images.unsplash.com/photo-1554224155-1696403575a8?auto=format&fit=crop&q=80&w=1000" 
            alt="Market" 
            style={{ width: '100%', height: '350px', objectFit: 'cover', marginBottom: '2rem' }}
          />
          <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>Quarterly Review</span>
          <h2 style={{ fontSize: '1.8rem', margin: '1rem 0' }}>The Future of the Family Office: 2026 & Beyond</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
            As global regulations tighten and the digital landscape evolves, the traditional family office model is undergoing a silent revolution...
          </p>
          <button style={{ fontWeight: 700, color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Read Publication <ArrowRight size={16} />
          </button>
        </article>
        <article>
          <img 
            src="https://images.unsplash.com/photo-1574067761011-3965b868e82a?auto=format&fit=crop&q=80&w=1000" 
            alt="Art" 
            style={{ width: '100%', height: '350px', objectFit: 'cover', marginBottom: '2rem' }}
          />
          <span style={{ color: 'var(--accent-gold)', fontWeight: 600 }}>Special Feature</span>
          <h2 style={{ fontSize: '1.8rem', margin: '1rem 0' }}>Art Advisory: Curating Value for Generations</h2>
          <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
            Art is more than an asset class; it's a cultural legacy. We explore the current trends in blue-chip acquisitions and the importance of provenance...
          </p>
          <button style={{ fontWeight: 700, color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            Read Publication <ArrowRight size={16} />
          </button>
        </article>
      </div>
    </div>
  </div>
);

export const About = () => {
  const events = [
    { year: '1982', title: 'The Foundation', desc: 'Wellington Heritage established by Lord Arthur Wellington in St. James’s.' },
    { year: '1995', title: 'Global Expansion', desc: 'Opening of the Swiss Annex to facilitate cross-border asset protection.' },
    { year: '2008', title: 'Crisis Stewardship', desc: 'Successfully navigated the financial crisis with 0% capital loss for primary clients.' },
    { year: '2015', title: 'Bespoke Lifestyle Launch', desc: 'Introduction of the Lifestyle Concierge for integrated family management.' },
    { year: 'Today', title: 'Legacy Preserved', desc: 'Managing assets for over 50 of the world’s most prominent families.' }
  ];

  return (
    <div className="about-page">
      <section style={{ background: 'var(--accent-green)', color: 'var(--bg-cream)', padding: '10rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '4rem', color: 'inherit', marginBottom: '2rem' }}>A Tradition of Trust</h1>
          <p style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.2rem', opacity: 0.8 }}>
            Wellington Heritage has stood as a bastion of stability in an ever-shifting financial world. Our operating principles are defined by three pillars: Absolute Confidentiality, Unwavering Loyalty, and Generational Foresight.
          </p>
        </div>
      </section>

      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '5rem' }}>Our Journey</h2>
          <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', top: 0, bottom: 0, width: '2px', background: 'var(--accent-gold)' }}></div>
            {events.map((event, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: i % 2 === 0 ? 'flex-end' : 'flex-start', marginBottom: '4rem', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  left: '50%', 
                  transform: 'translateX(-50%)', 
                  top: '0', 
                  width: '20px', 
                  height: '20px', 
                  background: 'var(--accent-green)', 
                  border: '4px solid var(--accent-gold)',
                  zIndex: 2
                }}></div>
                <div style={{ width: '45%', textAlign: i % 2 === 0 ? 'right' : 'left', padding: '0 2rem' }}>
                  <h3 style={{ color: 'var(--accent-gold)', fontSize: '1.5rem' }}>{event.year}</h3>
                  <h4 style={{ margin: '0.5rem 0' }}>{event.title}</h4>
                  <p style={{ color: 'var(--text-light)', fontSize: '0.9rem' }}>{event.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '8rem 0', background: 'rgba(0,100,0,0.05)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <h2 style={{ marginBottom: '3rem' }}>Operating Principles</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem' }}>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }}>Confidentiality</h3>
                <p style={{ fontSize: '0.9rem' }}>We maintain a ghost-like presence in our clients' lives, ensuring no digital or physical footprint is left behind.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }}>Stability</h3>
                <p style={{ fontSize: '0.9rem' }}>Strategy is measured in decades, not quarters. We prioritize the preservation of capital above all else.</p>
              </div>
              <div>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)' }}>Exclusivity</h3>
                <p style={{ fontSize: '0.9rem' }}>We limit our roster to a select number of families to ensure truly bespoke, undivided attention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export const Contact = () => (
  <div className="contact-page" style={{ padding: '8rem 0' }}>
    <div className="container">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8rem' }}>
        <div>
          <span style={{ color: 'var(--accent-gold)', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase' }}>Inquiry</span>
          <h1 style={{ fontSize: '3.5rem', marginTop: '1rem' }}>Initiate Contact</h1>
          <p style={{ fontSize: '1.2rem', margin: '2rem 0', color: 'var(--text-light)' }}>
            We operate strictly by referral. If you have been referred to our office, please provide the name of your referring party along with your initial inquiry.
          </p>
          <div style={{ marginTop: '4rem' }}>
            <h4 style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>London Annex</h4>
            <p>15 Berkeley Square, Mayfair<br />London W1J 6BQ</p>
          </div>
        </div>
        <div style={{ background: 'var(--white)', padding: '4rem', boxShadow: '0 30px 60px rgba(0,0,0,0.05)', border: '1px solid #eee' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Full Name</label>
              <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', background: '#fdfdfd' }} placeholder="Johnathan Wellington" />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Email Address</label>
              <input type="email" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', background: '#fdfdfd' }} placeholder="private@client.com" />
            </div>
            <div style={{ marginBottom: '2rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Referring Party</label>
              <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', background: '#fdfdfd' }} placeholder="Name of primary advisor or client" />
            </div>
            <div style={{ marginBottom: '3rem' }}>
              <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Brief Message</label>
              <textarea style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', background: '#fdfdfd', minHeight: '150px' }} placeholder="How may our office assist your family?"></textarea>
            </div>
            <button type="submit" className="btn-primary" style={{ width: '100%' }}>Submit Inquiry</button>
            <p style={{ marginTop: '1.5rem', fontSize: '0.75rem', textAlign: 'center', opacity: 0.5 }}>
              All communications are encrypted and handled with absolute confidentiality.
            </p>
          </form>
        </div>
      </div>
    </div>
  </div>
);
export const AdminDashboard = () => {
  const stats = [
    { label: 'Active Families', value: '42', change: '+2 this month', icon: <Users size={24} /> },
    { label: 'Quarterly Reviews Pending', value: '8', change: 'Next: 15 Mar', icon: <FileText size={24} /> },
    { label: 'Concierge Tasks Active', value: '156', change: 'High Priority: 12', icon: <Inbox size={24} /> },
    { label: 'AUM Aggregate', value: '£12.4B', change: '+4.2% YTD', icon: <Landmark size={24} /> },
  ];

  return (
    <div>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Executive Dashboard</h1>
        <p style={{ color: '#666' }}>Welcome back, Primary Advisor. System status: All protocols active.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
        {stats.map((stat, i) => (
          <div key={i} style={{ background: 'var(--white)', padding: '2rem', border: '1px solid #eee', boxShadow: '0 4px 6px rgba(0,0,0,0.02)' }}>
            <div style={{ color: 'var(--accent-gold)', marginBottom: '1rem' }}>{stat.icon}</div>
            <h3 style={{ color: '#999', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>{stat.label}</h3>
            <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--accent-green)' }}>{stat.value}</div>
            <div style={{ fontSize: '0.8rem', color: '#666', marginTop: '0.5rem' }}>{stat.change}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
        <div style={{ background: 'var(--white)', padding: '2rem', border: '1px solid #eee' }}>
          <h3 style={{ marginBottom: '2rem' }}>Recent Family Activity</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { family: 'Rothwell Clan', action: 'Trust Restructuring Initiated', time: '2 hours ago' },
              { family: 'Gilt Manor', action: 'Concierge: Art Acquisition Finalized', time: '5 hours ago' },
              { family: 'Sterling Group', action: 'Quarterly Review Completed', time: '1 day ago' },
              { family: 'Heritage Trust', action: 'New Next-Gen Education Phase', time: '3 days ago' },
            ].map((activity, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1rem', borderBottom: '1px solid #f9f9f9' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{activity.family}</div>
                  <div style={{ fontSize: '0.85rem', color: '#666' }}>{activity.action}</div>
                </div>
                <div style={{ fontSize: '0.8rem', color: '#999' }}>{activity.time}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: 'var(--white)', padding: '2rem', border: '1px solid #eee' }}>
          <h3 style={{ marginBottom: '2rem' }}>Protocol Alerts</h3>
          <div style={{ padding: '1rem', borderLeft: '4px solid #f44336', background: '#fff8f7', marginBottom: '1rem' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>NDA Expiry Imminent</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Sterling Family NDA expires in 4 days.</div>
          </div>
          <div style={{ padding: '1rem', borderLeft: '4px solid #ff9800', background: '#fffcf5' }}>
            <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Meeting Preparation</div>
            <div style={{ fontSize: '0.8rem', color: '#666' }}>Prep needed for Gilt Manor review.</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const AdminRoster = () => {
  const families = [
    { alias: 'Rothwell Clan', advisor: 'James Wellington', aum: '£2.4B', status: 'Active' },
    { alias: 'Gilt Manor Estate', advisor: 'Sarah Miller', aum: '£850M', status: 'Maintenance' },
    { alias: 'Sterling Group', advisor: 'James Wellington', aum: '£1.1B', status: 'Active' },
    { alias: 'Heritage Trust II', advisor: 'Robert Chen', aum: '£4.2B', status: 'Review' },
    { alias: 'Windsor Associates', advisor: 'Sarah Miller', aum: '£300M', status: 'Onboarding' },
    { alias: 'Azure Maritime', advisor: 'Robert Chen', aum: '£1.5B', status: 'Active' },
  ];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Family Roster</h1>
          <p style={{ color: '#666' }}>Managing highly confidential family profiles and assets.</p>
        </div>
        <button className="btn-primary" style={{ padding: '0.8rem 1.5rem' }}>Add New Family Profile</button>
      </div>

      <div style={{ background: 'var(--white)', border: '1px solid #eee', overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead style={{ background: '#f9f9f9', borderBottom: '1px solid #eee' }}>
            <tr>
              <th style={{ padding: '1.2rem', fontWeight: 700, fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}>Family Alias</th>
              <th style={{ padding: '1.2rem', fontWeight: 700, fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}>Primary Advisor</th>
              <th style={{ padding: '1.2rem', fontWeight: 700, fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}>AUM Bracket</th>
              <th style={{ padding: '1.2rem', fontWeight: 700, fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}>Status</th>
              <th style={{ padding: '1.2rem', fontWeight: 700, fontSize: '0.85rem', color: '#999', textTransform: 'uppercase' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {families.map((f, i) => (
              <tr key={i} style={{ borderBottom: '1px solid #f9f9f9' }}>
                <td style={{ padding: '1.2rem', fontWeight: 700 }}>{f.alias}</td>
                <td style={{ padding: '1.2rem' }}>{f.advisor}</td>
                <td style={{ padding: '1.2rem' }}>{f.aum}</td>
                <td style={{ padding: '1.2rem' }}>
                  <span style={{ 
                    padding: '0.4rem 0.8rem', 
                    fontSize: '0.75rem', 
                    background: f.status === 'Active' ? '#e8f5e9' : f.status === 'Review' ? '#fff3e0' : '#f5f5f5',
                    color: f.status === 'Active' ? '#2e7d32' : f.status === 'Review' ? '#ef6c00' : '#666',
                    fontWeight: 700
                  }}>
                    {f.status}
                  </span>
                </td>
                <td style={{ padding: '1.2rem' }}>
                  <button style={{ color: 'var(--accent-gold)', fontWeight: 700, marginRight: '1rem' }}>Edit</button>
                  <button style={{ color: '#f44336', fontWeight: 700 }}>Archive</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const AdminEdit = () => (
  <div style={{ maxWidth: '800px' }}>
    <div style={{ marginBottom: '3rem' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Update Insight Publication</h1>
      <p style={{ color: '#666' }}>Publishing bespoke market analysis and firm perspectives.</p>
    </div>

    <div style={{ background: 'var(--white)', padding: '3rem', border: '1px solid #eee' }}>
      <form onSubmit={(e) => e.preventDefault()}>
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.85rem' }}>Publication Title</label>
          <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd' }} defaultValue="The Future of the Family Office: 2026 & Beyond" />
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.85rem' }}>Category</label>
            <select style={{ width: '100%', padding: '1rem', border: '1px solid #ddd' }}>
              <option>Quarterly Review</option>
              <option>Special Feature</option>
              <option>Market Alert</option>
            </select>
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.85rem' }}>Publish Date</label>
            <input type="date" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd' }} defaultValue="2026-03-15" />
          </div>
        </div>
        <div style={{ marginBottom: '2rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.85rem' }}>Content Abstract</label>
          <textarea style={{ width: '100%', padding: '1rem', border: '1px solid #ddd', minHeight: '150px' }}>
            As global regulations tighten and the digital landscape evolves, the traditional family office model is undergoing a silent revolution...
          </textarea>
        </div>
        <div style={{ marginBottom: '3rem' }}>
          <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: 700, fontSize: '0.85rem' }}>Visual Asset (URL)</label>
          <input type="text" style={{ width: '100%', padding: '1rem', border: '1px solid #ddd' }} defaultValue="https://images.unsplash.com/photo-1554224155-1696403575a8" />
        </div>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          <button type="submit" className="btn-primary" style={{ flex: 1 }}>Update Publication</button>
          <button type="button" style={{ flex: 1, border: '1px solid #ddd', fontWeight: 700 }}>Save Draft</button>
        </div>
      </form>
    </div>
  </div>
);

export const AdminLeads = () => {
  const leads = [
    { name: 'Dr. Alistair Vance', source: 'Referral (Sterling)', stage: 'NDA Signed', date: '2 days ago' },
    { name: 'Lady Eleanor Blackwood', source: 'Private Banquet', stage: 'Referral Received', date: '5 days ago' },
    { name: 'Julian Marx', source: 'Art Fair Inquiry', stage: 'Initial Meeting', date: '1 week ago' },
    { name: 'The Sinclair Trust', source: 'Legal Referral', stage: 'Engaged', date: '2 weeks ago' },
  ];

  return (
    <div>
      <div style={{ marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Leads Inbox</h1>
        <p style={{ color: '#666' }}>CRM Pipeline for prospective clientele.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1.5rem' }}>
        {['Referral Received', 'Initial Meeting', 'NDA Signed', 'Engaged'].map((stage) => (
          <div key={stage} style={{ background: '#f0f0f0', padding: '1rem' }}>
            <h3 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '1.5rem', textAlign: 'center' }}>{stage}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {leads.filter(l => l.stage === stage).map((lead, i) => (
                <div key={i} style={{ background: 'var(--white)', padding: '1.2rem', border: '1px solid #eee', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.2rem' }}>{lead.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.8rem' }}>Source: {lead.source}</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--accent-gold)', fontWeight: 700 }}>{lead.date}</div>
                </div>
              ))}
              {leads.filter(l => l.stage === stage).length === 0 && (
                <div style={{ textAlign: 'center', padding: '2rem', border: '2px dashed #ddd', color: '#999', fontSize: '0.8rem' }}>
                  No entries
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
