import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-linen min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="/assets/principal_designer_bio_1771809968621.png" 
                alt="Lula Henderson" 
                className="w-full rounded-8 shadow-2xl grayscale-[20%]"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-8 shadow-xl">
                <div className="flex items-center space-x-3 text-deep-grey">
                  <div className="w-12 h-12 flex-shrink-0 bg-sand rounded-full flex items-center justify-center text-white font-serif text-xl italic">AD</div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold">Featured in</p>
                    <p className="font-serif text-sm">Architectural Digest 100</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-xl"
          >
            <p className="text-sand uppercase tracking-[0.4em] text-xs font-bold mb-6">Principal Designer</p>
            <h1 className="text-5xl md:text-6xl font-serif text-deep-grey mb-8">Lula Henderson</h1>
            <p className="text-deep-grey/70 text-lg font-light leading-relaxed mb-8">
              With over 15 years of experience in the luxury interior design space, Lula Henderson founded Salt & Light Interiors to bring a more soulful, textural approach to Hamptons architecture.
            </p>
            <p className="text-deep-grey/70 text-lg font-light leading-relaxed mb-12">
              Her philosophy is simple: a home should feel as if it has evolved over time, rather than being "decorated." By blending high-performance modern fabrics with antique fragments and organic materials, she creates spaces that are as durable as they are beautiful.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-3xl font-serif text-deep-grey">150+</p>
                <p className="text-[10px] uppercase tracking-widest text-deep-grey/40 font-bold">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-deep-grey">12</p>
                <p className="text-[10px] uppercase tracking-widest text-deep-grey/40 font-bold">Design Awards</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Philosophy */}
        <div className="bg-white rounded-8 p-12 md:p-24 shadow-sm">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-serif text-deep-grey mb-12 italic">"Design is a response to light, a dialogue with history, and a celebration of the everyday."</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left mt-20">
              <div>
                <h3 className="font-serif text-xl mb-4 border-b border-linen pb-2 text-sand">Curated Texture</h3>
                <p className="text-sm text-deep-grey/60 leading-relaxed font-light">We leverage the sensory experience of a room, from the grain of the wood to the weave of the linen.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-4 border-b border-linen pb-2 text-sand">Quiet Luxury</h3>
                <p className="text-sm text-deep-grey/60 leading-relaxed font-light">Our spaces don't shout; they whisper. We prioritize quality over ostentation in every selection.</p>
              </div>
              <div>
                <h3 className="font-serif text-xl mb-4 border-b border-linen pb-2 text-sand">Hamptons Native</h3>
                <p className="text-sm text-deep-grey/60 leading-relaxed font-light">Our studio is rooted in the East End, giving us unique access to local history and artisans.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
