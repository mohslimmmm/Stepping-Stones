import { motion } from 'framer-motion';
import { Ruler, Maximize, Calendar, MapPin, CheckSquare, MessageSquare } from 'lucide-react';

const ProjectDetail = () => {
  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      {/* Hero */}
      <section style={{ height: '80vh', position: 'relative' }}>
        <img 
          src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=2000" 
          alt="The Westlake Residence" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(rgba(0,0,0,0.5), transparent, rgba(0,0,0,0.7))',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '80px 5%'
        }}>
          <h4 style={{ color: 'var(--accent-copper)', letterSpacing: '3px', marginBottom: '16px' }}>THE WESTLAKE RESIDENCE</h4>
          <h1 style={{ color: 'white', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>MODERN HILL COUNTRY</h1>
        </div>
      </section>

      {/* Intro & Specs */}
      <section style={{ padding: '100px 5%', display: 'grid', gridTemplateColumns: '1fr 350px', gap: '80px' }}>
        <div>
          <h2 style={{ marginBottom: '40px' }}>THE VISION</h2>
          <p style={{ fontSize: '1.2rem', color: 'rgba(0,0,0,0.8)', marginBottom: '30px', maxWidth: '800px' }}>
            Perched on a limestone bluff overlooking Lake Austin, The Westlake Residence is a masterclass in modern industrial design. Using raw copper, matte black steel, and locally sourced limestone, we created a home that feels both avant-garde and deeply rooted in the Texas landscape.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '40px', marginTop: '60px' }}>
            <div>
              <h4 style={{ fontSize: '0.8rem', marginBottom: '20px' }}>MATERIALS USED</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(0,0,0,0.7)' }}>
                <li>• Raw Oxidized Copper Paneling</li>
                <li>• Hand-Cut Texas Limestone</li>
                <li>• Matte Black Structural Steel</li>
                <li>• Floor-to-Ceiling Performance Glass</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '0.8rem', marginBottom: '20px' }}>FEATURES</h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '15px', color: 'rgba(0,0,0,0.7)' }}>
                <li>• Cantilevered Infinity Pool</li>
                <li>• Hidden Speak-Easy Wine Cellar</li>
                <li>• Net-Zero Solar Integration</li>
                <li>• 12-Car Gallery Garage</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Specs Sidebar */}
        <div style={{ backgroundColor: 'white', padding: '40px', display: 'flex', flexDirection: 'column', gap: '30px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Maximize size={24} color="var(--accent-copper)" />
            <div>
              <div style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: '700' }}>SQUARE FOOTAGE</div>
              <div style={{ fontWeight: '700' }}>8,450 SQFT</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <MapPin size={24} color="var(--accent-copper)" />
            <div>
              <div style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: '700' }}>LOCATION</div>
              <div style={{ fontWeight: '700' }}>WESTLAKE HILLS, TX</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Calendar size={24} color="var(--accent-copper)" />
            <div>
              <div style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: '700' }}>COMPLETED</div>
              <div style={{ fontWeight: '700' }}>FALL 2024</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <CheckSquare size={24} color="var(--accent-copper)" />
            <div>
              <div style={{ fontSize: '0.7rem', opacity: 0.6, fontWeight: '700' }}>ARCHITECT</div>
              <div style={{ fontWeight: '700' }}>M.R. SHELBY, AIA</div>
            </div>
          </div>
        </div>
      </section>

      {/* Massive Gallery */}
      <section style={{ padding: '0 5% 100px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '20px' }}>
          <div style={{ gridColumn: 'span 8', height: '600px' }}>
            <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1200" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ gridColumn: 'span 4', height: '600px' }}>
            <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ gridColumn: 'span 4', height: '600px' }}>
            <img src="https://images.unsplash.com/photo-1600566753190-17f0f7a0280b?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ gridColumn: 'span 8', height: '600px' }}>
            <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Floorplan Overlay Placeholder */}
      <section style={{ 
        padding: '100px 5%', 
        backgroundColor: 'var(--accent-black)', 
        color: 'white',
        textAlign: 'center'
      }}>
        <h4 style={{ color: 'var(--accent-copper)', letterSpacing: '2px', marginBottom: '20px' }}>ARCHITECTURAL BLUEPRINTS</h4>
        <h2 style={{ color: 'white', marginBottom: '60px' }}>LEVEL 01: THE FLOW</h2>
        <div style={{ 
          maxWidth: '1000px', 
          margin: '0 auto', 
          height: '500px', 
          border: '1px dashed rgba(255,255,255,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
           <Ruler size={48} opacity={0.3} />
           <span style={{ marginLeft: '20px', opacity: 0.5, letterSpacing: '3px' }}>INTERACTIVE FLOORPLAN VIEW</span>
        </div>
      </section>

      {/* Sticky Widget */}
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          backgroundColor: 'var(--accent-black)',
          color: 'white',
          padding: '20px 40px',
          display: 'flex',
          alignItems: 'center',
          gap: '20px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          zIndex: 100
        }}
      >
        <div style={{ display: 'none' }}>Desktop Text</div>
        <span style={{ fontFamily: 'var(--font-header)', fontWeight: '700', letterSpacing: '1px' }}>CONSULT WITH ARCHITECT</span>
        <MessageSquare size={20} color="var(--accent-copper)" />
      </motion.div>
    </div>
  );
};

export default ProjectDetail;
