import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Users, GraduationCap, MapPin, Wallet, Building, ArrowRight } from "lucide-react";

const schemeCategories = [
  { icon: Users, label: "Women-based", count: 85 },
  { icon: GraduationCap, label: "Student-based", count: 62 },
  { icon: Building, label: "Category-based", count: 120 },
  { icon: MapPin, label: "Geography-based", count: 95 },
  { icon: Wallet, label: "Funding-based", count: 78 },
];

export function SchemesPreview() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
              Government Schemes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Find Schemes Tailored for You
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Discover government schemes and funding opportunities based on your gender, age, category, location, and funding needs.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/schemes" className="flex items-center gap-2">
                Explore Schemes
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Categories Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
          >
            {schemeCategories.map((category, index) => (
              <Link
                key={category.label}
                to={`/schemes?category=${category.label.toLowerCase().replace('-based', '')}`}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
              >
                <category.icon className="w-8 h-8 text-primary mb-3" />
                <div className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {category.label}
                </div>
                <div className="text-sm text-muted-foreground">{category.count} schemes</div>
              </Link>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
