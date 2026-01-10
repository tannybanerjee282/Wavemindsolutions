import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

type Leader = {
  name: string;
  role: string;
  image: string;
  bio: string;
};

const leaders: Leader[] = [
  {
    name: "Pinak Majumder",
    role: "Founding Director & CEO",
    image: "/images/pinak.jpg",
    bio:
      "Wave Mind Solution was built on the belief that technology should simplify, enhance, and accelerate growth for every business—no matter the size."
  },
  {
    name: "Abhishek Dutta Roy",
    role: "Co-Founder & Director",
    image: "/images/abhishek.jpg",
    bio:
      "As Co-Founder, Abhishek combines technical expertise with a deep understanding of modern business challenges."
  },
  {
    name: "Tanny Banerjee",
    role: "Director of Management",
    image: "/images/tanny.jpg",
    bio:
      "A visionary leader whose strategic planning and strong operational expertise form the backbone of our organization."
  },
  {
    name: "Debalina Saha",
    role: "Director of Operations",
    image: "/images/debalina.jpg",
    bio:
      "Translates vision into execution through disciplined processes, strong teams, and delivery excellence."
  },
  {
    name: "Ankita",
    role: "Director of Client Success",
    image: "/images/ankita_new.jpg",
    bio:
      "Leads client success initiatives at WaveMind Solutions, ensuring long-term partnerships."
  }
];

export default function Leadership() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="pt-32 pb-20 bg-slate-900 text-white text-center">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our Leadership
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto">
            Meet the minds behind WaveMind Solutions.
          </p>
        </motion.div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {leaders.map((leader) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-48 h-56 mx-auto mb-6 rounded-xl overflow-hidden bg-slate-200">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="font-bold">{leader.name}</h3>
              <p className="text-sm font-semibold text-primary">
                {leader.role}
              </p>
              <p className="text-sm text-slate-600 mt-3">
                {leader.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
