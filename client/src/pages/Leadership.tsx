import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import pinakImg from "@assets/pinak.jpg";
import abhishekImg from "@assets/abhishek.jpg";
import tannyImg from "@assets/tanny.jpg";
import debalinaImg from "@assets/debalina.jpg";
import ankitaImg from "@assets/ankita_new.jpg";

const leaders = [
  {
    name: "Pinak Majumder",
    role: "Founding Director & CEO",
    image: pinakImg,
    bio: "Wave Mind Solution was built on the belief that technology should simplify, enhance, and accelerate growth for every business—no matter the size. Pinak's leadership drives our mission to create intelligent, scalable, and future-ready digital solutions."
  },
  {
    name: "Abhishek Dutta Roy",
    role: "Co-Founder & Director",
    image: abhishekImg,
    bio: "As Co-Founder, Abhishek combines technical expertise with a deep understanding of modern business challenges to deliver impactful results. He is committed to empowering businesses through technology and strategic innovation."
  },
  {
    name: "Tanny Banerjee",
    role: "Director of Management",
    image: tannyImg,
    bio: "A visionary leader whose strategic planning and strong operational expertise form the backbone of our organization. She ensures streamlined processes, informed decision-making, and consistent delivery of high-quality service."
  },
  {
    name: "Debalina Saha",
    role: "Director of Operations",
    image: debalinaImg,
    bio: "Translates vision into execution through disciplined processes, strong teams, and delivery excellence. She drives operational efficiency, scalability, and quality across all digital solutions, ensuring consistent value for clients."
  },
  {
    name: "Ankita",
    role: "Director of Client Success",
    image: ankitaImg,
    bio: "Leads client success initiatives at WaveMind Solutions, ensuring long-term partnerships through exceptional service, proactive support, and value-driven delivery across all solutions."
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white selection:bg-primary/10">
      <Navbar />

      <section className="pt-32 pb-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-primary/20 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Our Leadership</h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Meet the minds behind WaveMind Solutions. Our leadership team brings together decades of experience in technology, strategy, and business growth.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-md w-48 h-56 mx-auto bg-slate-200">
                  <img 
                    src={leader.image} 
                    alt={leader.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="mb-4 text-center">
                  <div className="inline-block bg-primary text-white px-4 py-1 rounded-full text-sm font-bold font-display mb-2 shadow-sm">
                    {leader.name}
                  </div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary/80">{leader.role}</p>
                </div>
                <p className="text-slate-600 leading-relaxed text-sm text-center max-w-sm mx-auto">
                  {leader.bio}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
