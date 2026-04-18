import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, Trophy, Timer } from 'lucide-react';
import { motion } from 'motion/react';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Gym interior" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-6"
          >
            Unleash Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-300">
              True Potential
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto mb-10 font-medium"
          >
            Join Wellness GYM and transform your life. State-of-the-art equipment, expert trainers, and a community that pushes you to greatness.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/pricing" 
              className="bg-orange-500 text-zinc-950 px-8 py-4 rounded-full font-black uppercase tracking-wider hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
            >
              Start Your Journey <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/about" 
              className="bg-zinc-900 border border-zinc-800 text-zinc-50 px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-zinc-800 transition-colors flex items-center justify-center"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Activity, title: 'Modern Equipment', desc: 'Access to the latest fitness technology and machines.' },
              { icon: Users, title: 'Expert Trainers', desc: 'Certified professionals to guide your fitness journey.' },
              { icon: Trophy, title: 'Proven Results', desc: 'Join thousands of members who achieved their goals.' },
              { icon: Timer, title: '24/7 Access', desc: 'Train on your schedule, day or night.' },
            ].map((feature, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-orange-500/50 transition-colors group"
              >
                <div className="bg-zinc-950 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors">
                  <feature.icon className="w-8 h-8 text-orange-500 group-hover:text-zinc-950 transition-colors" />
                </div>
                <h3 className="text-xl font-bold uppercase tracking-wide mb-3">{feature.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop" 
            alt="Weights" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-zinc-950/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">Ready to transform?</h2>
          <p className="text-xl text-zinc-300 mb-10">Get your first week free. No commitment required.</p>
          <Link 
            to="/pricing" 
            className="inline-block bg-orange-500 text-zinc-950 px-10 py-5 rounded-full font-black uppercase tracking-wider text-lg hover:bg-orange-600 transition-colors"
          >
            Claim Free Trial
          </Link>
        </div>
      </section>
    </div>
  );
}
