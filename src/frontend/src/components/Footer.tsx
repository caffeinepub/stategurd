import { SiFacebook, SiX, SiLinkedin, SiInstagram } from 'react-icons/si';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? window.location.hostname : 'stategurd-app';

  return (
    <footer className="bg-navy-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold text-gold-500 mb-4">STATEGURD</h3>
            <p className="text-white/80 text-sm leading-relaxed">
              Your trusted partner in real estate excellence. Securing property futures since 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-gold-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold-500 transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold-500 transition-colors">
                  Properties
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-gold-500 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-white/80 hover:text-gold-500 transition-colors">
                  Property Buying
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold-500 transition-colors">
                  Property Selling
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold-500 transition-colors">
                  Rental Management
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold-500 transition-colors">
                  Investment Consultancy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect With Us</h4>
            <div className="space-y-2 text-sm text-white/80 mb-4">
              <p>+1 (555) 123-4567</p>
              <p>info@stategurd.com</p>
              <p>123 Real Estate Blvd</p>
              <p>New York, NY 10001</p>
            </div>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <SiX className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <SiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-navy-800 hover:bg-gold-500 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
          <p>© {currentYear} STATEGURD. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-gold-500 fill-gold-500" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(appIdentifier)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-500 hover:text-gold-400 transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
