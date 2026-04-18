import { Link, useLocation } from 'react-router-dom';
import { Dumbbell, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-orange-500 p-2 rounded-lg group-hover:bg-orange-600 transition-colors">
              <Dumbbell className="w-6 h-6 text-zinc-950" />
            </div>
            <span className="font-black text-2xl tracking-tighter uppercase">
              Wellness<span className="text-orange-500">GYM</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-bold uppercase tracking-wider transition-colors ${
                  location.pathname === link.path
                    ? 'text-orange-500'
                    : 'text-zinc-400 hover:text-zinc-50'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="/pricing"
              className="bg-orange-500 text-zinc-950 px-6 py-2.5 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-orange-600 transition-colors"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-zinc-400 hover:text-zinc-50 p-2"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-zinc-900 border-b border-zinc-800 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-wider ${
                    location.pathname === link.path
                      ? 'bg-orange-500/10 text-orange-500'
                      : 'text-zinc-400 hover:bg-zinc-800 hover:text-zinc-50'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center bg-orange-500 text-zinc-950 px-4 py-3 rounded-lg font-bold uppercase tracking-wider text-sm hover:bg-orange-600 transition-colors"
              >
                Join Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
