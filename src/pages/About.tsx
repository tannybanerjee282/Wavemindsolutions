import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Lightbulb, Users, Globe, ShieldCheck, Leaf } from "lucide-react";

export default function About() {
  const values = [
    { title: "Innovation", desc: "We constantly push boundaries to find better solutions.", icon: Lightbulb },
    { title: "Integrity", desc: "Honesty and transparency are at the core of our business.", icon: ShieldCheck },
    { title: "Excellence", desc: "We strive for perfection in every pixel and line of code.", icon: Target },
    { title: "Collaboration", desc: "Great things are built together, with our clients and team.", icon: Users },
    { title: "Sustainability", desc: "Creating digital solutions that stand the test of time.", icon: Leaf },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">About Us</h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We are a team of passionate technologists, designers, and strategists dedicated to helping businesses thrive in the digital era.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 text-primary mb-4">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900">Our Mission</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To innovate continuously, providing cutting-edge technology solutions that empower businesses to achieve their full potential. We aim to be the catalyst for your digital transformation journey, making technology accessible, efficient, and effective.
              </p>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-100 text-cyan-600 mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h2 className="text-3xl font-display font-bold text-slate-900">Our Vision</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                To be a global leader in IT solutions, recognized for our commitment to quality, innovation, and customer success. We envision a world where technology seamlessly enhances every aspect of business operations and human potential.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Our Core Values</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              These principles guide every decision we make and every line of code we write.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((val, idx) => (
              <motion.div
                key={val.title}
                className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-primary/50 hover:bg-slate-800 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary mb-6">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">{val.title}</h3>
                <p className="text-slate-400 leading-relaxed">{val.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
