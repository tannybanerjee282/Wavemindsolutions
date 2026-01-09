import { ArrowRight, LucideIcon } from "lucide-react";
import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

export function ServiceCard({ title, description, icon: Icon, delay = 0 }: ServiceCardProps) {
  return (
    <div 
      className="group bg-white rounded-2xl p-8 border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-300 flex flex-col h-full"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-14 h-14 rounded-xl bg-blue-50 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-xl font-display font-bold text-slate-900 mb-3 group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-slate-600 leading-relaxed mb-6 flex-grow">
        {description}
      </p>
      
      <div className="mt-auto">
        <Link href="/services" className="inline-flex items-center text-sm font-semibold text-primary hover:text-blue-700 transition-colors group/link">
          Learn more <ArrowRight className="w-4 h-4 ml-1 transform group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
