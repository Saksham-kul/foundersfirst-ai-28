import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Video, Book, HelpCircle } from "lucide-react";

const resources = [
  { icon: FileText, title: "Startup Guides", count: "50+" },
  { icon: Video, title: "Video Tutorials", count: "30+" },
  { icon: Book, title: "Policy Documents", count: "100+" },
  { icon: HelpCircle, title: "FAQs", count: "200+" },
];

export function KnowledgeBankPreview() {
  return (
    <section className="py-24 bg-surface-subtle">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-primary font-semibold text-sm tracking-wide uppercase mb-4 block">
            Resources
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Knowledge Bank
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-2xl mx-auto">
            Access our comprehensive library of guides, policies, and learning resources to help you build your startup.
          </p>

          {/* Resource Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {resources.map((resource, index) => (
              <motion.div
                key={resource.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border"
              >
                <resource.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-foreground">{resource.count}</div>
                <div className="text-sm text-muted-foreground">{resource.title}</div>
              </motion.div>
            ))}
          </div>

          <Button variant="hero" size="lg" asChild>
            <Link to="/knowledge" className="flex items-center gap-2">
              Try Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
