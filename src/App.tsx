import React from 'react';
import { Truck, Phone, Mail, MapPin, Instagram, Facebook, ArrowRight, ShieldCheck, Clock, Settings, MessageCircle, ShoppingBag, ShoppingCart, X, Plus, Minus, CreditCard, Lock, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const Navbar = ({ onNavigate, cartCount, currentView }: { onNavigate: (view: 'home' | 'store') => void, cartCount: number, currentView: string }) => (
  <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-slate-200/50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-16 items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <div className="bg-brand-primary rounded-xl p-2 shadow-sm">
            <Truck className="w-6 h-6 text-brand-secondary" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="font-black text-xl tracking-tighter text-slate-900">
              EASTWEST
            </span>
            <span className="font-black text-[10px] tracking-[0.1em] text-brand-secondary uppercase">
              TRUCK & TRAILER PARTS
            </span>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <button onClick={() => onNavigate('home')} className={`text-sm font-bold uppercase tracking-wider transition-colors ${currentView === 'home' ? 'text-brand-secondary' : 'text-slate-600 hover:text-brand-secondary'}`}>Home</button>
          <button onClick={() => onNavigate('store')} className={`text-sm font-bold uppercase tracking-wider transition-colors ${currentView === 'store' ? 'text-brand-secondary' : 'text-slate-600 hover:text-brand-secondary'}`}>Store</button>
          <a href="#parts" className="text-sm font-bold text-slate-600 hover:text-brand-secondary transition-colors uppercase tracking-wider">Parts</a>
          <a href="#contact" className="text-sm font-bold text-slate-600 hover:text-brand-secondary transition-colors uppercase tracking-wider">Contact</a>
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => onNavigate('store')}
            className="relative p-2 text-slate-600 hover:text-brand-secondary transition-colors"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-brand-secondary text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          <a href="tel:0115246095" className="hidden sm:flex items-center gap-2 bg-brand-secondary text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-brand-secondary/90 transition-all uppercase tracking-wider">
            <Phone className="w-4 h-4" />
            011 524 6095
          </a>
        </div>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="absolute inset-0 technical-grid opacity-20 -z-10" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary text-brand-secondary text-xs font-black uppercase tracking-widest mb-6 border border-brand-secondary/20">
            <ShieldCheck className="w-4 h-4" />
            Premium Aftermarket Components
          </div>
          <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] mb-6 uppercase italic">
            Keep Your Fleet <br />
            <span className="text-brand-secondary bg-brand-primary px-2">Moving Forward.</span>
          </h1>
          <p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed font-medium">
            Johannesburg's trusted supplier for high-quality truck and trailer spare parts. Specializing in aftermarket components for all major commercial vehicle brands.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#parts" className="bg-brand-secondary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest flex items-center gap-2 hover:shadow-lg hover:shadow-brand-secondary/20 transition-all">
              Browse Parts
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#contact" className="bg-brand-primary text-brand-secondary border-2 border-brand-secondary px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-primary/80 transition-all">
              Contact Sales
            </a>
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
            <motion.img 
              src="https://images.pexels.com/photos/1233363/pexels-photo-1233363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Heavy Duty Trucks and Auto Parts" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-6 glass rounded-2xl">
              <div className="flex items-center gap-4">
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="w-12 h-12 rounded-full bg-brand-secondary flex items-center justify-center text-brand-primary"
                >
                  <Settings className="w-6 h-6" />
                </motion.div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest">Available Now</p>
                  <p className="text-lg font-black text-slate-900 uppercase">10,000+ Parts in Stock</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Features = () => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Quality Guaranteed",
      description: "Every part is inspected for durability and performance to meet OEM standards."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Turnaround",
      description: "We understand that downtime costs money. Get your parts when you need them."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Expert Advice",
      description: "Our technical team helps you find the exact replacement component for your vehicle."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase italic tracking-tight">
              Our <span className="text-brand-secondary bg-brand-primary px-2">Legacy</span> & Mission
            </h2>
            <div className="space-y-6 text-slate-600 font-medium leading-relaxed">
              <p>
                Founded in the heart of Johannesburg, EastWest Truck & Trailer Parts began with a simple vision: to provide the most reliable aftermarket components to the hardworking fleet owners of South Africa. Over the years, we have grown from a small warehouse to a leading supplier, built on the foundation of technical expertise and unwavering customer service.
              </p>
              <p>
                Our mission is to keep Africa's logistics industry moving forward. We understand that every minute a truck is off the road is a minute of lost revenue. That's why we meticulously source our parts from global manufacturers who share our commitment to OEM-standard quality and durability.
              </p>
              <div className="pt-4 flex items-center gap-6">
                <div>
                  <p className="text-3xl font-black text-brand-secondary">15+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Years Excellence</p>
                </div>
                <div className="w-px h-10 bg-slate-200" />
                <div>
                  <p className="text-3xl font-black text-brand-secondary">50k+</p>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Parts Delivered</p>
                </div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Warehouse logistics" 
              className="rounded-3xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-brand-secondary text-white p-8 rounded-3xl shadow-xl hidden md:block">
              <p className="text-sm font-black uppercase tracking-widest mb-1">Our Promise</p>
              <p className="text-xl font-black italic">"Uncompromising Reliability."</p>
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="p-8 rounded-2xl bg-white border-2 border-slate-100 hover:border-brand-primary transition-all shadow-sm"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-primary text-brand-secondary flex items-center justify-center mb-6">
                {f.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{f.title}</h3>
              <p className="text-slate-600 leading-relaxed font-medium">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartsShowcase = () => {
  const specializations = [
    {
      name: "Engine Components",
      image: "https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Pistons, gaskets, and overhaul kits for heavy-duty engines.",
      parts: ["Piston Kits", "Gasket Sets", "Oil Pumps", "Turbochargers"]
    },
    {
      name: "Braking Systems",
      image: "https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Brake pads, drums, and air valves for maximum safety.",
      parts: ["Brake Pads", "Air Valves", "Brake Drums", "Slack Adjusters"]
    },
    {
      name: "Suspension",
      image: "https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Air bags, shock absorbers, and tie rod ends.",
      parts: ["Air Springs", "Shock Absorbers", "Leaf Springs", "Bushings"]
    },
    {
      name: "Transmission",
      image: "https://images.pexels.com/photos/159293/gear-wheels-gears-transmission-machine-159293.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Clutch kits, gears, and differential components.",
      parts: ["Clutch Kits", "Gear Sets", "Flywheels", "Bearings"]
    },
    {
      name: "Body & Cabin",
      image: "https://images.pexels.com/photos/280221/pexels-photo-280221.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Mirrors, bumpers, and cabin mounting parts.",
      parts: ["Mirrors", "Headlights", "Bumpers", "Door Handles"]
    },
    {
      name: "Electrical",
      image: "https://images.pexels.com/photos/257736/pexels-photo-257736.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Alternators, starters, and LED lighting solutions.",
      parts: ["Alternators", "Starters", "Batteries", "Wiring Harnesses"]
    }
  ];

  const [activeCategory, setActiveCategory] = React.useState<number | null>(null);

  return (
    <section id="parts" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl lg:text-6xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter"
          >
            Our <span className="text-brand-secondary bg-brand-primary px-3">Specialization</span>
          </motion.h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg font-medium">
            Precision-engineered aftermarket components for Scania, Volvo, Mercedes-Benz, and more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializations.map((spec, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-[2rem] overflow-hidden border border-slate-200 hover:border-brand-primary transition-all duration-500 shadow-sm hover:shadow-2xl"
            >
              <div className="aspect-[4/3] overflow-hidden relative">
                <img 
                  src={spec.image} 
                  alt={spec.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-black text-white uppercase italic tracking-tight mb-2">{spec.name}</h3>
                  <p className="text-white/80 text-sm font-medium line-clamp-2">{spec.description}</p>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-8">
                  {spec.parts.map((part, pi) => (
                    <span key={pi} className="px-3 py-1 bg-slate-100 text-slate-600 text-[10px] font-black uppercase tracking-widest rounded-full">
                      {part}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => setActiveCategory(i)}
                    className="text-brand-secondary font-black uppercase tracking-widest text-xs flex items-center gap-2 group/btn"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                  <a 
                    href={`https://wa.me/27835636779?text=I'm interested in ${spec.name} parts`}
                    target="_blank"
                    rel="noreferrer"
                    className="bg-brand-primary text-brand-secondary p-3 rounded-xl hover:bg-brand-primary/80 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Expandable Mockup Overlay */}
              <AnimatePresence>
                {activeCategory === i && (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute inset-0 bg-brand-secondary z-20 p-8 flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-8">
                      <h4 className="text-3xl font-black text-white uppercase italic leading-none">{spec.name} <br/><span className="text-brand-primary">Catalog</span></h4>
                      <button 
                        onClick={() => setActiveCategory(null)}
                        className="text-white/50 hover:text-white transition-colors"
                      >
                        <X className="w-8 h-8" />
                      </button>
                    </div>

                    <div className="mb-6 relative">
                      <input 
                        type="text" 
                        placeholder={`Search ${spec.name}...`}
                        className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-4 text-white font-bold placeholder:text-white/30 focus:outline-none focus:border-brand-primary transition-all"
                      />
                      <Settings className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/30" />
                    </div>
                    
                    <div className="flex-1 space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                      {spec.parts.map((part, pi) => (
                        <div key={pi} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors group/item">
                          <div className="w-16 h-16 rounded-xl bg-white/10 overflow-hidden shrink-0">
                            <img 
                              src={`https://picsum.photos/seed/${part}/100/100`} 
                              alt={part}
                              className="w-full h-full object-cover opacity-60 group-hover/item:opacity-100 transition-opacity"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          <div className="flex-1">
                            <span className="text-white font-black uppercase tracking-widest text-sm block">{part}</span>
                            <span className="text-brand-primary text-[10px] font-black uppercase tracking-widest">In Stock</span>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <a 
                        href={`https://wa.me/27835636779?text=Requesting quote for ${spec.name}`}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full bg-brand-primary text-brand-secondary py-4 rounded-2xl font-black uppercase tracking-widest flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-brand-primary/20 transition-all"
                      >
                        Request Instant Quote
                        <ArrowRight className="w-5 h-5" />
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = React.useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = React.useState({
    fullName: '',
    email: '',
    phone: ''
  });
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { fullName: '', email: '', phone: '' };

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      isValid = false;
    }

    // Basic phone validation: at least 10 digits/characters
    const phoneRegex = /^\+?[\d\s-]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Invalid format (min 10 digits)';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you'd send this to a server
      setIsSubmitted(true);
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-primary/5 -skew-x-12 transform translate-x-1/4" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-black mb-8 uppercase italic tracking-tight">Get in <span className="text-brand-primary bg-brand-secondary px-2">Touch</span></h2>
            <p className="text-slate-400 mb-12 text-lg font-medium">
              Have a specific part requirement? Contact our sales team for a quote or visit our warehouse in Kempton Park.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase font-black tracking-widest mb-1">WhatsApp</p>
                  <a href="https://wa.me/27835636779" target="_blank" rel="noreferrer" className="text-xl font-black hover:text-brand-primary transition-colors">
                    083 563 6779
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase font-black tracking-widest mb-1">Call Us</p>
                  <p className="text-xl font-black">011 524 6095</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase font-black tracking-widest mb-1">Email Us</p>
                  <p className="text-xl font-black">ewtt108@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-primary flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <p className="text-sm text-slate-400 uppercase font-black tracking-widest mb-1">Visit Us</p>
                  <p className="text-lg font-black leading-tight uppercase">
                    121 High Road, Pomona Bredell, <br />
                    Kempton Park, <br />
                    Gauteng, 1619
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-3xl p-8 lg:p-12 text-slate-900 border-t-8 border-brand-primary">
            <h3 className="text-2xl font-black mb-6 uppercase tracking-tight italic">Send a Message</h3>
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-emerald-50 border-2 border-emerald-200 p-6 rounded-2xl text-center"
              >
                <ShieldCheck className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-xl font-black text-emerald-900 uppercase mb-2">Message Sent!</h4>
                <p className="text-emerald-700 font-medium">Thank you for your inquiry. Our team will get back to you shortly.</p>
              </motion.div>
            ) : (
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100 border-2 focus:bg-white focus:border-brand-secondary focus:ring-0 transition-all font-bold ${errors.fullName ? 'border-red-500' : 'border-transparent'}`} 
                      placeholder="John Doe" 
                    />
                    {errors.fullName && <p className="text-red-500 text-[10px] font-black uppercase tracking-wider">{errors.fullName}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-slate-500">Email Address</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-100 border-2 focus:bg-white focus:border-brand-secondary focus:ring-0 transition-all font-bold ${errors.email ? 'border-red-500' : 'border-transparent'}`} 
                      placeholder="john@example.com" 
                    />
                    {errors.email && <p className="text-red-500 text-[10px] font-black uppercase tracking-wider">{errors.email}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Phone Number</label>
                  <input 
                    type="text" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-xl bg-slate-100 border-2 focus:bg-white focus:border-brand-secondary focus:ring-0 transition-all font-bold ${errors.phone ? 'border-red-500' : 'border-transparent'}`} 
                    placeholder="+27 ..." 
                  />
                  {errors.phone && <p className="text-red-500 text-[10px] font-black uppercase tracking-wider">{errors.phone}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-slate-500">Part Description / VIN</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4} 
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:bg-white focus:border-brand-secondary focus:ring-0 transition-all font-bold" 
                    placeholder="Tell us what you're looking for..."
                  ></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-secondary text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-secondary/90 transition-all shadow-lg shadow-brand-secondary/20">
                  Request Quote
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-950 text-slate-500 py-12 border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3">
          <div className="bg-brand-primary rounded-xl p-2">
            <Truck className="w-6 h-6 text-brand-secondary" />
          </div>
          <div className="flex flex-col -space-y-1 text-left">
            <span className="font-black text-xl tracking-tighter text-white">
              EASTWEST
            </span>
            <span className="font-black text-[10px] tracking-[0.1em] text-brand-primary uppercase">
              TRUCK & TRAILER PARTS
            </span>
          </div>
        </div>
        <div className="flex gap-8 text-sm font-bold uppercase tracking-widest">
          <a href="#" className="hover:text-brand-primary transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-brand-primary transition-colors">Shipping Info</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://www.facebook.com/p/East-West-Truck-and-Trailer-Parts-100070069072181/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-brand-primary hover:text-brand-secondary transition-all">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="mt-12 pt-8 border-t border-white/5 text-center text-xs">
        &copy; {new Date().getFullYear()} EastWest Truck & Trailer Parts. All rights reserved.
      </div>
    </div>
  </footer>
);

const WhatsAppFloating = () => (
  <motion.a
    href="https://wa.me/27835636779"
    target="_blank"
    rel="noreferrer"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 bg-brand-primary text-brand-secondary p-4 rounded-full shadow-2xl shadow-brand-primary/40 flex items-center justify-center group border-2 border-brand-secondary"
  >
    <MessageCircle className="w-6 h-6 fill-current" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-2 transition-all duration-300 font-bold whitespace-nowrap">
      Chat with us
    </span>
  </motion.a>
);

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

const PRODUCTS: Product[] = [
  { id: 1, name: "Heavy Duty Brake Pad Set", price: 1250, category: "Braking Systems", image: "https://picsum.photos/seed/brake/400/400" },
  { id: 2, name: "Air Suspension Bellow", price: 3400, category: "Suspension", image: "https://picsum.photos/seed/suspension/400/400" },
  { id: 3, name: "LED Tail Light Assembly", price: 850, category: "Electrical", image: "https://picsum.photos/seed/light/400/400" },
  { id: 4, name: "Turbocharger Gasket Kit", price: 450, category: "Engine", image: "https://picsum.photos/seed/engine/400/400" },
  { id: 5, name: "Clutch Pressure Plate", price: 5800, category: "Transmission", image: "https://picsum.photos/seed/clutch/400/400" },
  { id: 6, name: "Wheel Hub Bearing", price: 2100, category: "Axle", image: "https://picsum.photos/seed/bearing/400/400" },
];

const Store = ({ addToCart }: { addToCart: (p: Product) => void }) => (
  <section className="pt-32 pb-20 bg-slate-50 min-h-screen">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
        <div>
          <h1 className="text-4xl font-black text-slate-900 uppercase italic tracking-tight mb-2">
            Online <span className="text-brand-primary bg-brand-secondary px-2">Store</span>
          </h1>
          <p className="text-slate-600 font-medium">Genuine and aftermarket parts delivered to your door.</p>
        </div>
        <div className="flex gap-2">
          {["All", "Braking", "Suspension", "Engine", "Electrical"].map(cat => (
            <button key={cat} className="px-4 py-2 rounded-full bg-white border border-slate-200 text-xs font-bold uppercase tracking-wider hover:border-brand-secondary transition-all">
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PRODUCTS.map(product => (
          <motion.div 
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl overflow-hidden border-2 border-slate-100 hover:border-brand-primary transition-all group shadow-sm"
          >
            <div className="aspect-square overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 bg-brand-secondary text-white px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                R {product.price.toLocaleString()}
              </div>
            </div>
            <div className="p-6">
              <p className="text-[10px] font-black text-brand-secondary uppercase tracking-widest mb-1">{product.category}</p>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-4">{product.name}</h3>
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-brand-secondary text-white py-3 rounded-xl font-black uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-brand-secondary/90 transition-all"
              >
                <ShoppingBag className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CheckoutModal = ({ cart, onClose, onClear }: { cart: { product: Product, quantity: number }[], onClose: () => void, onClear: () => void }) => {
  const [step, setStep] = React.useState<'cart' | 'shipping' | 'payment' | 'success'>('cart');
  const total = cart.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);

  if (cart.length === 0 && step !== 'success') {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center">
          <ShoppingBag className="w-16 h-16 text-slate-300 mx-auto mb-4" />
          <h3 className="text-2xl font-black text-slate-900 uppercase italic mb-2">Your cart is empty</h3>
          <button onClick={onClose} className="text-brand-secondary font-bold uppercase tracking-widest hover:underline">Start Shopping</button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row"
      >
        {/* Left Side: Steps/Form */}
        <div className="flex-1 p-8 lg:p-12 overflow-y-auto border-r border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-black text-slate-900 uppercase italic tracking-tight">
              {step === 'cart' && "Your Cart"}
              {step === 'shipping' && "Shipping Details"}
              {step === 'payment' && "Secure Payment"}
              {step === 'success' && "Order Confirmed"}
            </h2>
            {step !== 'success' && (
              <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <X className="w-6 h-6" />
              </button>
            )}
          </div>

          {step === 'cart' && (
            <div className="space-y-6">
              {cart.map(item => (
                <div key={item.product.id} className="flex items-center gap-4 py-4 border-b border-slate-100 last:border-0">
                  <img src={item.product.image} className="w-20 h-20 rounded-2xl object-cover" alt={item.product.name} />
                  <div className="flex-1">
                    <h4 className="font-black text-slate-900 uppercase tracking-tight">{item.product.name}</h4>
                    <p className="text-sm font-bold text-slate-500">R {item.product.price.toLocaleString()}</p>
                  </div>
                  <div className="flex items-center gap-3 bg-slate-100 rounded-lg p-1">
                    <button className="p-1 hover:bg-white rounded transition-colors"><Minus className="w-4 h-4" /></button>
                    <span className="font-black w-4 text-center">{item.quantity}</span>
                    <button className="p-1 hover:bg-white rounded transition-colors"><Plus className="w-4 h-4" /></button>
                  </div>
                </div>
              ))}
              <div className="pt-8">
                <button 
                  onClick={() => setStep('shipping')}
                  className="w-full bg-brand-secondary text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-secondary/90 transition-all flex items-center justify-center gap-2"
                >
                  Proceed to Shipping
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {step === 'shipping' && (
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep('payment'); }}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">First Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-brand-secondary transition-all font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Last Name</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-brand-secondary transition-all font-bold" />
                </div>
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Address</label>
                <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-brand-secondary transition-all font-bold" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">City</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-brand-secondary transition-all font-bold" />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Postal Code</label>
                  <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-brand-secondary transition-all font-bold" />
                </div>
              </div>
              <div className="pt-8 flex gap-4">
                <button type="button" onClick={() => setStep('cart')} className="flex-1 border-2 border-slate-200 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-slate-50 transition-all">Back</button>
                <button type="submit" className="flex-1 bg-brand-secondary text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-secondary/90 transition-all">Continue</button>
              </div>
            </form>
          )}

          {step === 'payment' && (
            <div className="space-y-6">
              <div className="bg-emerald-50 border-2 border-emerald-100 p-4 rounded-2xl flex items-center gap-3">
                <Lock className="w-5 h-5 text-emerald-500" />
                <p className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Secure 256-bit SSL Encrypted Checkout</p>
              </div>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setStep('success'); onClear(); }}>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Card Number</label>
                  <div className="relative">
                    <input required type="text" className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-brand-secondary transition-all font-bold" placeholder="0000 0000 0000 0000" />
                    <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Expiry Date</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-brand-secondary transition-all font-bold" placeholder="MM / YY" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">CVV</label>
                    <input required type="text" className="w-full px-4 py-3 rounded-xl bg-slate-100 border-2 border-transparent focus:border-brand-secondary transition-all font-bold" placeholder="123" />
                  </div>
                </div>
                <div className="pt-8">
                  <button type="submit" className="w-full bg-brand-secondary text-white py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-secondary/90 transition-all flex items-center justify-center gap-2 shadow-xl shadow-brand-secondary/20">
                    <Lock className="w-4 h-4" />
                    Pay R {total.toLocaleString()} Securely
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 'success' && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-emerald-100 text-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 uppercase italic mb-4">Payment Successful!</h3>
              <p className="text-slate-600 font-medium mb-8">Your order has been placed and is being processed. You will receive a confirmation email shortly.</p>
              <button 
                onClick={onClose}
                className="bg-brand-secondary text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest hover:bg-brand-secondary/90 transition-all"
              >
                Return to Store
              </button>
            </div>
          )}
        </div>

        {/* Right Side: Order Summary */}
        {step !== 'success' && (
          <div className="w-full md:w-80 bg-slate-50 p-8 lg:p-12">
            <h3 className="text-xl font-black text-slate-900 uppercase italic tracking-tight mb-8">Order Summary</h3>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-wider">
                <span>Subtotal</span>
                <span>R {total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-wider">
                <span>Shipping</span>
                <span className="text-emerald-500">FREE</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-slate-500 uppercase tracking-wider">
                <span>Tax (15%)</span>
                <span>R {(total * 0.15).toLocaleString()}</span>
              </div>
            </div>
            <div className="pt-6 border-t border-slate-200">
              <div className="flex justify-between items-end">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Amount</span>
                <span className="text-2xl font-black text-brand-secondary">R {(total * 1.15).toLocaleString()}</span>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default function App() {
  const [view, setView] = React.useState<'home' | 'store'>('home');
  const [cart, setCart] = React.useState<{ product: Product, quantity: number }[]>([]);
  const [isCheckoutOpen, setIsCheckoutOpen] = React.useState(false);

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item => item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { product, quantity: 1 }];
    });
    setIsCheckoutOpen(true);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen selection:bg-brand-primary selection:text-white">
      <Navbar onNavigate={setView} cartCount={cartCount} currentView={view} />
      <main>
        {view === 'home' ? (
          <>
            <Hero />
            <Features />
            <PartsShowcase />
            <Contact />
          </>
        ) : (
          <Store addToCart={addToCart} />
        )}
      </main>
      <Footer />
      <WhatsAppFloating />
      {isCheckoutOpen && (
        <CheckoutModal 
          cart={cart} 
          onClose={() => setIsCheckoutOpen(false)} 
          onClear={() => setCart([])} 
        />
      )}
    </div>
  );
}
