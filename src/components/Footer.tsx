import { Link } from 'react-router-dom';
import { Dumbbell, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="bg-orange-500 p-2 rounded-lg">
                <Dumbbell className="w-6 h-6 text-zinc-950" />
              </div>
              <span className="font-black text-2xl tracking-tighter uppercase">
                Wellness<span className="text-orange-500">GYM</span>
              </span>
            </Link>
            <p className="text-zinc-400 max-w-md mb-6 leading-relaxed">
              Transform your body and mind at Wellness GYM. State-of-the-art equipment, expert trainers, and a community that pushes you to be your best self.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-zinc-950 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-zinc-950 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:bg-orange-500 hover:text-zinc-950 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold uppercase tracking-wider mb-6 text-zinc-50">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-zinc-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-zinc-400 hover:text-orange-500 transition-colors">About Us</Link></li>
              <li><Link to="/pricing" className="text-zinc-400 hover:text-orange-500 transition-colors">Memberships</Link></li>
              <li><Link to="/contact" className="text-zinc-400 hover:text-orange-500 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-wider mb-6 text-zinc-50">Contact Info</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>123 Fitness Street</li>
              <li>Muscle City, MC 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>hello@wellnessgym.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Wellness GYM. All rights reserved.
          </p>
          <p className="text-zinc-500 text-sm">
            Made by <a href="https://28webhub.netlify.app" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:underline font-medium">https://28webhub.netlify.app</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
