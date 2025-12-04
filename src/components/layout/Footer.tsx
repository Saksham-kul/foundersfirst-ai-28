import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-surface-subtle border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">F</span>
              </div>
              <span className="font-bold text-xl text-foreground">FoundersFirst</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Empowering entrepreneurs with AI-driven guidance and resources.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/ai-bot" className="text-sm text-muted-foreground hover:text-foreground transition-colors">AI Bot</Link></li>
              <li><Link to="/schemes" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Schemes</Link></li>
              <li><Link to="/knowledge" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Knowledge Bank</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">About Us</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li><a href="mailto:hello@foundersfirst.in" className="text-sm text-muted-foreground hover:text-foreground transition-colors">hello@foundersfirst.in</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Twitter</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 FoundersFirst. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Made with ❤️ for Indian entrepreneurs
          </p>
        </div>
      </div>
    </footer>
  );
}
