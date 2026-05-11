/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  ChevronDown, 
  ArrowRight, 
  Star,
  Scissors,
  UserCheck,
  Building,
  CheckCircle2,
  Quote
} from 'lucide-react';
import { useState, useEffect } from 'react';

const NavLink = ({ href, children, hasDropdown = false }: { href: string, children: React.ReactNode, hasDropdown?: boolean }) => (
  <a 
    href={href} 
    className="flex items-center gap-1 text-[13px] font-medium tracking-widest uppercase hover:text-brand-rose transition-colors duration-300"
  >
    {children}
    {hasDropdown && <ChevronDown size={14} />}
  </a>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Top Info Bar */}
      <div className="hidden lg:flex justify-between items-center px-12 py-3 bg-brand-cream border-b border-brand-navy/10 text-[11px] font-medium tracking-wider text-brand-navy/70 uppercase">
        <div className="flex gap-8">
          <span className="flex items-center gap-2"><MapPin size={12} className="text-brand-rose" /> 10 Devonshire Road, Chiswick, London W4 2ND</span>
          <span className="flex items-center gap-2"><Phone size={12} className="text-brand-rose" /> 020 3643 5378</span>
          <span className="flex items-center gap-2"><Mail size={12} className="text-brand-rose" /> info@stitchingroom.co.uk</span>
        </div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-brand-rose transition-colors"><Facebook size={12} /></a>
          <a href="#" className="hover:text-brand-rose transition-colors"><Instagram size={12} /></a>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`sticky top-0 bg-brand-cream/95 backdrop-blur-sm z-50 transition-all duration-500 border-b ${isScrolled ? 'py-4 shadow-sm' : 'py-8'}`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="flex flex-col items-center group">
              <span className="text-[9px] tracking-[0.5em] uppercase opacity-40 font-bold group-hover:text-brand-rose transition-colors duration-500">The</span>
              <span className="text-3xl font-serif tracking-[0.2em] uppercase -mt-1 group-hover:scale-105 transition-transform duration-500">Stitching</span>
              <span className="text-[12px] tracking-[0.6em] uppercase opacity-50 -mt-0.5 font-medium group-hover:text-brand-rose transition-colors duration-500">Room</span>
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-10">
            <NavLink href="#">Home</NavLink>
            <NavLink href="#" hasDropdown>Services</NavLink>
            <NavLink href="#">Bridal Alterations</NavLink>
            <NavLink href="#">Gallery</NavLink>
            <NavLink href="#">About</NavLink>
            <NavLink href="#">Contact</NavLink>
          </div>

          <button className="bg-brand-rose text-white px-8 py-3.5 text-[11px] font-bold tracking-[0.2em] uppercase hover:bg-brand-navy transition-colors duration-300">
            Book a Fitting
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1594932224828-b4b059b6fe51?auto=format&fit=crop&q=80&w=2000" 
            alt="Tailor working" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-white/40 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full pt-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <h1 className="text-6xl lg:text-[110px] leading-[0.9] lg:leading-[0.8] font-serif mb-6 tracking-tight">
              The Seamstress. <br />
              <span className="text-brand-rose italic font-normal">Art of Sewing.</span>
            </h1>
            <p className="text-lg lg:text-xl text-brand-navy/80 max-w-lg mb-12 font-light leading-relaxed">
              Expert clothes alterations and bespoke dressmaking, tailor-made for you in Chiswick and Maida Vale.
            </p>

            <div className="flex flex-wrap gap-4 mb-20">
              <button className="bg-brand-rose text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-navy transition-all transform hover:-translate-y-0.5">
                Book a Fitting
              </button>
              <button className="border border-brand-navy/20 bg-white/20 backdrop-blur-sm text-brand-navy px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-navy hover:text-white transition-all transform hover:-translate-y-0.5">
                Our Services
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-brand-navy/10 pt-10">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/30 border border-brand-navy/5">
                  <Scissors size={20} className="text-brand-rose" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wider uppercase">40+</div>
                  <div className="text-[10px] text-brand-navy/60 uppercase tracking-widest">Years Experience</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/30 border border-brand-navy/5">
                  <UserCheck size={20} className="text-brand-rose" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wider uppercase">Family Run</div>
                  <div className="text-[10px] text-brand-navy/60 uppercase tracking-widest">Business</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-white/30 border border-brand-navy/5">
                  <Building size={20} className="text-brand-rose" />
                </div>
                <div>
                  <div className="text-sm font-bold tracking-wider uppercase">Chiswick</div>
                  <div className="text-[10px] text-brand-navy/60 uppercase tracking-widest">London W4</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selling Points */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
          >
            {[
              { icon: <Scissors />, title: "Made-to-Measure Perfection", text: "Every garment is treated with precision and care to deliver the perfect fit for your unique silhouette." },
              { icon: <CheckCircle2 />, title: "All Fabrics, All Garments", text: "From delicate silk to complex leathers and lace — we work with all materials to ensure exceptional results." },
              { icon: <Star />, title: "For Every Occasion", text: "From everyday wear to breathtaking wedding gowns, we tailor for life's most precious and special moments." },
              { icon: <UserCheck />, title: "Craftsmanship You Can Trust", text: "Over 40 years of experience and a passion for beautiful tailoring that stands the test of time." }
            ].map((item, idx) => (
              <motion.div key={idx} variants={itemVariants} className="group cursor-default">
                <div className="mb-6 p-4 rounded-full border border-brand-navy/5 w-fit group-hover:bg-brand-rose group-hover:text-white transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 leading-tight">{item.title}</h3>
                <p className="text-sm text-brand-navy/60 leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-brand-cream/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col items-center text-center mb-16">
            <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rose font-bold mb-4">What we do</span>
            <h2 className="text-5xl font-serif mb-4">Our Services</h2>
            <div className="h-0.5 w-24 bg-brand-rose/30"></div>
          </div>

          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { title: "Dress Alterations", img: "https://images.unsplash.com/photo-1542060717-d7ca8e89458e", text: "Specialized in evening wear, silk, and everyday wardrobe transformations." },
              { title: "Bridal Couture", img: "https://images.unsplash.com/photo-1594462250123-ab365f5767d6", text: "Restoring and tailoring wedding gowns with the utmost care and precision." },
              { title: "Fur & Luxury Leather", img: "https://images.unsplash.com/photo-1551135049-8a33b5883817", text: "Expert repairs and restyling for fur coats, suede, and designer leather pieces." },
              { title: "Clothes Repairs", img: "https://images.unsplash.com/photo-1593032465175-481ac7f402a1", text: "From simple mending to complex resizing and reconstruction." },
              { title: "Curtains & Soft Decor", img: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38", text: "Bespoke home textiles, heavy curtains, and delicate window treatments." },
              { title: "Military & Uniform", img: "https://images.unsplash.com/photo-1594932224828-b4b059b6fe51", text: "Precise alterations for uniforms, suits, and formal corporate attire." }
            ].map((service, idx) => (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                className="group relative h-[450px] overflow-hidden bg-white shadow-sm"
              >
                <div className="absolute inset-0 z-0">
                  <img 
                    src={`${service.img}?auto=format&fit=crop&q=80&w=800`} 
                    alt={service.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-transparent to-transparent opacity-80 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute inset-x-0 bottom-0 z-10 p-10 transform lg:translate-y-8 lg:group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-serif text-white lg:text-brand-navy lg:group-hover:text-white mb-4 transition-colors">
                    {service.title}
                  </h3>
                  <div className="overflow-hidden">
                    <p className="text-white/80 text-sm mb-6 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100 line-clamp-2">
                      {service.text}
                    </p>
                  </div>
                  <a href="#" className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-brand-rose hover:text-white transition-colors duration-300">
                    Learn More <ArrowRight size={14} />
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <div className="mt-16 flex justify-center">
            <button className="flex items-center gap-3 text-[11px] font-bold tracking-[0.3em] uppercase group">
              View All Services <span className="p-2 border border-brand-navy/10 rounded-full group-hover:bg-brand-rose group-hover:text-white transition-all"><ArrowRight size={14} /></span>
            </button>
          </div>
        </div>
      </section>

      {/* Stats Dark Banner */}
      <section className="relative py-32 bg-brand-navy overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=2000" 
            alt="Sewing pattern" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-white">
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl font-serif mb-4 text-brand-rose">35k+</div>
              <div className="text-sm font-bold tracking-[0.2em] uppercase mb-4">Garments Handled</div>
              <p className="text-xs text-white/40 max-w-[200px] mx-auto lg:mx-0">Over four decades of dedicated sewing excellence.</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl font-serif mb-4 text-brand-rose">100%</div>
              <div className="text-sm font-bold tracking-[0.2em] uppercase mb-4">Satisfaction</div>
              <p className="text-xs text-white/40 max-w-[200px] mx-auto lg:mx-0">Every stitch is verified for perfection before leaving our studio.</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl font-serif mb-4 text-brand-rose">Art</div>
              <div className="text-sm font-bold tracking-[0.2em] uppercase mb-4">of Sewing</div>
              <p className="text-xs text-white/40 max-w-[200px] mx-auto lg:mx-0">Where traditional techniques meet modern silhouettes.</p>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-5xl lg:text-7xl font-serif mb-4 text-brand-rose">2 Loc.</div>
              <div className="text-sm font-bold tracking-[0.2em] uppercase mb-4">London Studios</div>
              <p className="text-xs text-white/40 max-w-[200px] mx-auto lg:mx-0">Serving our clients in Chiswick and Maida Vale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before & After / Showcase */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-4">
              <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rose font-bold mb-4 block">Before & After</span>
              <h2 className="text-5xl font-serif mb-8 leading-tight">Craftsmanship You Can See</h2>
              <p className="text-brand-navy/60 leading-relaxed mb-10">
                Every garment tells a story. We take pride in every detail to deliver the perfect result, whether it's a simple hem or a complex bridal reconstruction.
              </p>
              <button className="bg-brand-rose text-white px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-brand-navy transition-all">
                View Gallery
              </button>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8 ring-1 ring-brand-navy/5 p-4 bg-brand-cream/30">
              <div className="space-y-4">
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1594462250123-ab365f5767d6?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Before" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5">Before</div>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1551135049-8a33b5883817?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="After" />
                  <div className="absolute top-4 left-4 bg-brand-rose text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5">After</div>
                </div>
              </div>
              <div className="space-y-4 md:mt-12">
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="Before" />
                  <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5">Before</div>
                </div>
                <div className="relative aspect-[4/5] overflow-hidden group">
                  <img src="https://images.unsplash.com/photo-1589156206699-bc21e38c8a7d?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover" alt="After" />
                  <div className="absolute top-4 left-4 bg-brand-rose text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5">After</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-brand-cream/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rose font-bold mb-8 block">What our clients say</span>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah J.", text: "Absolutely brilliant service. They altered my wedding dress perfectly and made the whole process so easy and stress-free.", rating: 5 },
              { name: "Emily B.", text: "The Stitching Room is a gem in Chiswick. Professional, personal and always amazing results. Highly recommended!", rating: 5 },
              { name: "Joanna M.", text: "I have been a customer for years and wouldn't go anywhere else. Highly skilled and friendly team.", rating: 5 }
            ].map((review, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 space-y-6 shadow-sm border border-brand-navy/5 relative"
              >
                <div className="flex justify-center text-brand-rose">
                  {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                <p className="text-brand-navy/80 italic leading-relaxed">"{review.text}"</p>
                <div className="pt-4 border-t border-brand-navy/5 text-[11px] font-bold tracking-widest uppercase opacity-60">
                  — {review.name}
                </div>
                <Quote size={24} className="absolute top-6 left-6 text-brand-rose/10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Contact Section */}
      <section className="relative">
        <div className="h-[600px] w-full bg-brand-navy/5">
          {/* Map Placeholder with generic pattern */}
          <div className="w-full h-full bg-[#e5e5f7] opacity-60 flex items-center justify-center" style={{ backgroundImage: 'radial-gradient(#b16c74 0.5px, #faf7f2 0.5px)', backgroundSize: '10px 10px' }}>
            <div className="relative flex flex-col items-center">
              <div className="p-4 bg-brand-rose text-white rounded-full shadow-lg relative z-10 animate-bounce">
                <MapPin size={24} />
              </div>
              <div className="w-12 h-4 bg-brand-navy/10 rounded-[100%] blur-sm -mt-2"></div>
            </div>
          </div>
        </div>

        <div className="absolute top-1/2 left-6 lg:left-24 -translate-y-1/2 max-w-md w-[calc(100%-3rem)] bg-white p-12 shadow-2xl z-20">
          <span className="text-[10px] tracking-[0.4em] uppercase text-brand-rose font-bold mb-6 block">Visit our studio</span>
          <h2 className="text-4xl font-serif mb-8">Tailoring Studio in Chiswick</h2>
          
          <div className="space-y-6 text-sm">
            <div className="flex gap-4">
              <MapPin size={18} className="text-brand-rose shrink-0" />
              <p className="text-brand-navy/70 leading-relaxed uppercase tracking-wider text-xs font-medium">
                10 Devonshire Road,<br />Chiswick, London W4 2ND
              </p>
            </div>
            <div className="flex gap-4">
              <Phone size={18} className="text-brand-rose shrink-0" />
              <p className="text-brand-navy/70 font-bold">020 3643 5378</p>
            </div>
            <div className="flex gap-4">
              <Mail size={18} className="text-brand-rose shrink-0" />
              <p className="text-brand-navy/70 group border-b border-transparent hover:border-brand-rose cursor-pointer transition-all">info@stitchingroom.co.uk</p>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-brand-navy/5 flex justify-between">
            <div className="space-y-2">
              <div className="text-[10px] tracking-widest uppercase opacity-40">Mon - Fri</div>
              <div className="text-xs font-bold font-mono uppercase">9:00 - 18:00</div>
            </div>
            <div className="space-y-2">
              <div className="text-[10px] tracking-widest uppercase opacity-40">Sat</div>
              <div className="text-xs font-bold font-mono uppercase">9:00 - 15:00</div>
            </div>
          </div>

          <button className="w-full mt-12 bg-brand-navy text-white px-10 py-5 text-[10px] font-bold tracking-[0.3em] uppercase hover:bg-brand-rose transition-all shadow-xl">
            Get Directions
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-brand-cream border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-[10px] font-medium tracking-[0.2em] uppercase opacity-40">
            © {new Date().getFullYear()} The Stitching Room Chiswick. All Rights Reserved.
          </div>
          
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-medium tracking-[0.2em] uppercase hover:text-brand-rose transition-colors">Privacy Policy</a>
            <a href="#" className="text-[10px] font-medium tracking-[0.2em] uppercase hover:text-brand-rose transition-colors">Terms of Service</a>
          </div>

          <div className="flex gap-4">
            <a href="#" className="p-3 border border-brand-navy/5 rounded-full hover:bg-brand-rose hover:text-white transition-all">
              <Facebook size={14} />
            </a>
            <a href="#" className="p-3 border border-brand-navy/5 rounded-full hover:bg-brand-rose hover:text-white transition-all">
              <Instagram size={14} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

