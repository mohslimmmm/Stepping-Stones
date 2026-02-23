import { motion } from 'framer-motion';
import { ArrowRight, Award, Ruler, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        color: 'white'
      }}>
        {/* Mock Video Background (using a high-end image fallback for prototype) */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=2000")',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          {/* In a real app, you'd use <video> here */}
        </div>

        <div style={{ textAlign: 'center', padding: '0 5%', maxWidth: '900px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ 
              fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
              color: 'white', 
              marginBottom: '24px',
              textShadow: '0 2px 10px rgba(0,0,0,0.3)'
            }}>
            HEIRLOOMS IN STEEL & STONE
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ 
              fontSize: '1.2rem', 
              marginBottom: '40px', 
              opacity: 0.9,
              fontFamily: 'var(--font-body)',
              letterSpacing: '1px'
            }}>
            Bespoke Texas Modern Estates. Meticulously Crafted in Austin.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link to="/contact" className="architectural-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              Start Your Build <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Trust Bar */}
      <section style={{
        padding: '60px 5%',
        backgroundColor: 'var(--accent-black)',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Award color="var(--accent-copper)" />
          <span style={{ fontSize: '0.8rem', letterSpacing: '2px', fontWeight: '600' }}>AIA DESIGN WINNER</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Ruler color="var(--accent-copper)" />
          <span style={{ fontSize: '0.8rem', letterSpacing: '2px', fontWeight: '600' }}>ARCHITECT-LED PROCESS</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <ShieldCheck color="var(--accent-copper)" />
          <span style={{ fontSize: '0.8rem', letterSpacing: '2px', fontWeight: '600' }}>2/10 WARRANTY PROTECTED</span>
        </div>
      </section>

      {/* Featured Projects */}
      <section style={{ padding: '100px 5%', backgroundColor: 'var(--bg-color)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
          <div>
            <h4 style={{ color: 'var(--accent-copper)', fontSize: '0.8rem', marginBottom: '12px' }}>CURATED SELECTION</h4>
            <h2 style={{ fontSize: '2.5rem' }}>FEATURED BUILDS</h2>
          </div>
          <Link to="/discovery" className="outline-btn" style={{ padding: '12px 24px' }}>View Portfolio</Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
          {[
            { 
              name: 'The Westlake Residence', 
              category: 'Hill Country Modern', 
              image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=1000' 
            },
            { 
              name: 'Barton Springs Waterfront', 
              category: 'Sustainable Luxury', 
              image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1000' 
            }
          ].map((project, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10 }}
              style={{ position: 'relative', height: '600px', overflow: 'hidden', cursor: 'pointer' }}
            >
              <img src={project.image} alt={project.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: 0, 
                width: '100%', 
                padding: '40px',
                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                color: 'white'
              }}>
                <span style={{ color: 'var(--accent-copper)', fontSize: '0.8rem', fontWeight: '700', letterSpacing: '1px' }}>{project.category}</span>
                <h3 style={{ color: 'white', marginTop: '8px' }}>{project.name}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
