import { Award, ShieldCheck, Microscope } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const About = () => {
  return (
    <div className="relative">
      {/* Hero */}
      <div className="bg-slate-dark text-ivory py-40 text-center relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
          animate={{ opacity: 0.05, rotate: 0, scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-0 right-0 p-12"
        >
           <ShieldCheck size={500} strokeWidth={1} />
        </motion.div>
        <div className="container relative z-10 max-w-4xl mx-auto">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-6xl md:text-8xl font-header tracking-wide mb-8 leading-[1.1]"
          >
            Trust & Clinical <br/><span className="italic text-soft-blush font-light">Excellence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-body opacity-80 text-xl leading-relaxed max-w-2xl mx-auto"
          >
            We are a physician-led clinical sanctuary. Every protocol is backed by rigorous scientific evidence and delivered by General Medical Council registered specialists.
          </motion.p>
        </div>
      </div>

      <div className="container py-32">
        
        {/* Clinicians */}
        <div className="mb-32">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={{ show: { transition: { staggerChildren: 0.15 } } }}>
            <motion.h2 variants={fadeUp} className="text-xs uppercase tracking-[0.2em] text-soft-blush-dark font-bold mb-6 text-center">Our Specialists</motion.h2>
            <motion.h3 variants={fadeUp} className="text-5xl font-header text-slate-dark mb-20 text-center">The Faces of Harley Street</motion.h3>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-20">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative h-[700px] overflow-hidden hover-lift group"
            >
               <img 
                 src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800" 
                 alt="Dr. Alistair Sterling" 
                 className="w-full h-full object-cover grayscale-[0.8] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
               />
               <div className="absolute inset-0 bg-slate-dark/10 group-hover:bg-transparent transition-colors duration-700" />
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
              className="pr-0 md:pr-12"
            >
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-6 mb-4">
                <h4 className="text-4xl font-header text-slate-dark">Dr. Alistair Sterling</h4>
                <div className="border border-slate-dark/20 text-slate-dark text-[10px] px-3 py-1.5 tracking-[0.2em] uppercase font-bold bg-ivory">GMC: 7120456</div>
              </motion.div>
              <motion.p variants={fadeUp} className="text-xs uppercase tracking-[0.15em] text-soft-blush-dark font-bold mb-10 pb-4 border-b border-slate-grey/10">Medical Director & Consultant Dermatologist</motion.p>
              
              <div className="space-y-6 font-body text-slate-grey opacity-90 leading-relaxed mb-12 text-lg">
                <motion.p variants={fadeUp}>Educated at Oxford University and clinically trained at St John’s Institute of Dermatology, Dr. Sterling brings over two decades of expertise in complex inflammatory skin disorders and laser medicine.</motion.p>
                <motion.p variants={fadeUp}>His philosophy centers on "preservative dermatology"—optimizing the skin’s native function through cellular regulation rather than aggressive alteration.</motion.p>
              </div>

              <motion.div variants={fadeUp} className="flex gap-6">
                <div className="w-12 h-12 rounded-full border border-slate-grey/20 flex items-center justify-center bg-ivory">
                  <Award className="text-slate-dark" size={20} strokeWidth={1.5} />
                </div>
                <div className="w-12 h-12 rounded-full border border-slate-grey/20 flex items-center justify-center bg-ivory">
                  <Microscope className="text-slate-dark" size={20} strokeWidth={1.5} />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Credentials / Press */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-ivory border border-slate-grey/20 p-16 md:p-24 text-center max-w-5xl mx-auto"
        >
          <h3 className="font-body text-xs uppercase tracking-[0.2em] text-slate-grey mb-12 font-bold">As Featured In</h3>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-60">
            <span className="font-header text-4xl uppercase tracking-[0.2em] hover:opacity-100 transition-opacity cursor-pointer text-slate-dark">VOGUE</span>
            <span className="font-header text-4xl italic hover:opacity-100 transition-opacity cursor-pointer text-slate-dark">Tatler</span>
            <span className="font-header text-4xl uppercase tracking-[0.3em] hover:opacity-100 transition-opacity cursor-pointer text-slate-dark">GQ</span>
            <span className="font-header text-3xl md:text-4xl hover:opacity-100 transition-opacity cursor-pointer text-slate-dark">Harper's BAZAAR</span>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default About;
