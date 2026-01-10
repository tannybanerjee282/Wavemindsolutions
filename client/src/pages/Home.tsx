import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { 
  Code, Smartphone, Cloud, Brain, BarChart3, Palette, 
  ArrowRight, CheckCircle2, ShieldCheck, Zap, Users, 
  Target, Lightbulb, HeartHandshake 
} from "lucide-react";
import { Link } from "wouter";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-hero-gradient">
        <motion.div 
          style={{ y: y1, opacity }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
          <div className="text-left max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] mb-8 tracking-tight">
                Transform Your <br />
                <span className="text-gradient">Digital Future</span>
              </h1>
              
              <p className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
                Empowering businesses through technology, creativity, and strategic solutions. We combine technical expertise with deep understanding to deliver impactful results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <button className="px-8 py-4 rounded-lg bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2">
                    Start Your Project <ArrowRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/services">
                  <button className="px-8 py-4 rounded-lg bg-transparent border border-white/20 text-white font-semibold text-lg hover:bg-white/5 transition-all">
                    Explore Services
                  </button>
                </Link>
              </div>

              <div className="grid grid-cols-3 gap-8 mt-20">
                <div>
                  <p className="text-3xl font-bold text-white mb-1">2023</p>
                  <p className="text-sm text-slate-300 uppercase tracking-widest font-bold">Founded</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">50+</p>
                  <p className="text-sm text-slate-300 uppercase tracking-widest font-bold">Projects</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-white mb-1">100%</p>
                  <p className="text-sm text-slate-300 uppercase tracking-widest font-bold">Client Satisfaction</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gradient-to-b from-white to-sky-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4"
            >
              Our Expertise
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-slate-600 max-w-2xl mx-auto"
            >
              Comprehensive technology solutions tailored to drive your business growth in the digital age.
            </motion.p>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {[
              { title: "Web Development", description: "Custom websites and web applications built with modern frameworks for speed and scalability.", icon: Code },
              { title: "Mobile Apps", description: "Native and cross-platform mobile applications that deliver exceptional user experiences.", icon: Smartphone },
              { title: "Cloud & DevOps", description: "Scalable cloud infrastructure and automated deployment pipelines for reliable operations.", icon: Cloud },
              { title: "AI & Data Science", description: "Intelligent solutions leveraging machine learning to unlock insights from your data.", icon: Brain },
              { title: "Software Solutions", description: "Enterprise-grade software including CRM and ERP systems tailored to your workflows.", icon: BarChart3 },
              { title: "Digital Design", description: "Creative UI/UX design and branding that captures your unique identity.", icon: Palette },
            ].map((service, index) => (
              <motion.div 
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
              >
                <ServiceCard 
                  title={service.title} 
                  description={service.description} 
                  icon={service.icon} 
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 tracking-tight">
                Empowering Innovation
              </h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                WaveMind Solutions is a next-generation IT service and digital innovation company founded in 2023 with a vision to empower businesses through technology, creativity, and strategic solutions. We combine technical expertise with a deep understanding of modern business challenges to deliver impactful results.
              </p>
              
              <div className="space-y-6">
                {[
                  { title: "Customer-Centric Approach", desc: "Your success is our priority." },
                  { title: "Innovative Solutions", desc: "Leveraging cutting-edge technologies." },
                  { title: "Agile Methodology", desc: "Fast, flexible, and iterative delivery." },
                  { title: "Expert Team", desc: "Skilled professionals dedicated to quality." }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-blue-50 text-primary flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-slate-900 font-bold block">{item.title}</span>
                      <span className="text-slate-500 text-sm">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <Link href="/about" className="inline-flex items-center font-semibold text-primary hover:text-blue-700 transition-colors group">
                  Read more about us <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-cyan-50 rounded-2xl transform rotate-3 opacity-70"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center text-primary mb-6">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed mb-6">
                  To innovate continuously, deliver excellence, and help businesses harness the power of technology to transform their ideas into impactful digital realities.
                </p>
                <div className="flex items-center gap-2 text-primary font-semibold">
                  <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  Driving Digital Innovation
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-sky-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-blue-50 opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-slate-900">Our Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">
              The principles that guide our work, our partnerships, and our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                desc: "We embrace curiosity and constant learning to deliver cutting-edge solutions.",
                icon: Lightbulb,
                color: "bg-amber-500/10 text-amber-500"
              },
              {
                title: "Integrity",
                desc: "Honesty, transparency, and ethical standards are at the heart of everything we do.",
                icon: ShieldCheck,
                color: "bg-emerald-500/10 text-emerald-500"
              },
              {
                title: "Excellence",
                desc: "We strive for perfection in every line of code and every client interaction.",
                icon: Target,
                color: "bg-blue-500/10 text-blue-500"
              },
              {
                title: "Collaboration",
                desc: "Great things happen when we work together with our clients and partners.",
                icon: Users,
                color: "bg-purple-500/10 text-purple-500"
              },
              {
                title: "Agility",
                desc: "We adapt quickly to changing landscapes to deliver value faster.",
                icon: Zap,
                color: "bg-cyan-500/10 text-cyan-500"
              },
              {
                title: "Empathy",
                desc: "Understanding our clients' challenges allows us to build truly impactful solutions.",
                icon: HeartHandshake,
                color: "bg-rose-500/10 text-rose-500"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-2xl bg-white border border-sky-100 hover:shadow-xl hover:shadow-sky-200/50 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <value.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-display font-bold mb-3 text-slate-900">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-[#1034a6] relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-sky-400/20 blur-3xl rounded-full translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-white/10 blur-3xl rounded-full -translate-x-1/3" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            Ready to Innovate?
          </h2>
          <p className="text-xl text-sky-100 mb-10 max-w-2xl mx-auto">
            Let's discuss how WaveMind Solutions can help you navigate the digital landscape and elevate your business.
          </p>
          <Link href="/contact">
            <button className="px-10 py-4 rounded-full bg-white text-[#1034a6] font-bold text-lg hover:bg-sky-50 transition-colors shadow-lg hover:shadow-xl hover:shadow-white/10">
              Get In Touch
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
