import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Code, Smartphone, Database, Cloud, Brain, Megaphone } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "web",
      title: "Web Development & Design",
      desc: "From corporate websites to complex web applications, we build scalable, secure, and high-performance solutions. Our design team ensures a user-centric approach that drives engagement.",
      features: ["Custom Web Apps", "E-commerce Solutions", "CMS Development", "UI/UX Design"],
      icon: Code,
      color: "bg-blue-50 text-blue-600"
    },
    {
      id: "mobile",
      title: "Mobile App Development",
      desc: "Native and cross-platform mobile apps that provide seamless experiences on iOS and Android. We focus on performance, usability, and leveraging device capabilities.",
      features: ["iOS Development", "Android Development", "React Native / Flutter", "App Store Optimization"],
      icon: Smartphone,
      color: "bg-purple-50 text-purple-600"
    },
    {
      id: "software",
      title: "Software Solutions (ERP/CRM)",
      desc: "Streamline your business operations with custom software. We develop tailored ERP and CRM systems that integrate perfectly with your existing workflows.",
      features: ["Custom CRM", "Enterprise Resource Planning", "Workflow Automation", "Legacy System Migration"],
      icon: Database,
      color: "bg-emerald-50 text-emerald-600"
    },
    {
      id: "cloud",
      title: "Cloud & DevOps",
      desc: "Accelerate your delivery and improve reliability with our cloud and DevOps services. We handle migration, infrastructure management, and CI/CD implementation.",
      features: ["AWS / Azure / GCP", "CI/CD Pipelines", "Containerization", "Cloud Security"],
      icon: Cloud,
      color: "bg-cyan-50 text-cyan-600"
    },
    {
      id: "ai",
      title: "AI & Data Science",
      desc: "Unlock the power of your data with advanced analytics and machine learning. We help you make data-driven decisions and automate complex processes.",
      features: ["Predictive Analytics", "Machine Learning Models", "Natural Language Processing", "Business Intelligence"],
      icon: Brain,
      color: "bg-rose-50 text-rose-600"
    },
    {
      id: "marketing",
      title: "Digital Marketing & Graphics",
      desc: "Amplify your brand presence with comprehensive digital marketing strategies and stunning graphic design collateral.",
      features: ["SEO & SEM", "Social Media Marketing", "Content Strategy", "Brand Identity Design"],
      icon: Megaphone,
      color: "bg-amber-50 text-amber-600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We offer a comprehensive suite of IT services designed to cover every aspect of your digital journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Detailed Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center p-8 lg:p-12 rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/80 transition-shadow`}
              >
                {/* Visual Side */}
                <div className={`w-full lg:w-1/2 h-64 lg:h-80 ${service.color} rounded-2xl flex items-center justify-center relative overflow-hidden group`}>
                   <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                   <service.icon className="w-24 h-24 lg:w-32 lg:h-32 opacity-90 transform group-hover:scale-110 transition-transform duration-500" />
                </div>

                {/* Content Side */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <h3 className="text-3xl font-display font-bold text-slate-900">{service.title}</h3>
                  <p className="text-lg text-slate-600 leading-relaxed">{service.desc}</p>
                  
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-4 uppercase text-sm tracking-wider">Key Capabilities</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map(feature => (
                        <li key={feature} className="flex items-center gap-2 text-slate-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
