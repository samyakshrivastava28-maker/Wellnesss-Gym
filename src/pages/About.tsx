import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-20 pb-24">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
            About <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-xl text-zinc-400">
            We are more than just a gym. We are a community dedicated to helping you become the strongest version of yourself.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Our Story</h2>
            <div className="w-16 h-1 bg-orange-500" />
            <p className="text-zinc-400 leading-relaxed text-lg">
              Founded in 2015, Wellness GYM started with a simple mission: to create a fitness environment where everyone feels welcome, supported, and challenged.
            </p>
            <p className="text-zinc-400 leading-relaxed text-lg">
              Over the years, we've grown from a small neighborhood facility to a state-of-the-art fitness center, but our core values remain the same. We believe in hard work, dedication, and the power of community.
            </p>
            <ul className="space-y-4 pt-4">
              {[
                'State-of-the-art equipment',
                'Expert certified trainers',
                'Supportive community',
                'Clean and safe environment'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-300 font-medium">
                  <CheckCircle2 className="w-6 h-6 text-orange-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" 
              alt="Personal Trainer" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Active Members', value: '2,500+' },
              { label: 'Expert Trainers', value: '25+' },
              { label: 'Weekly Classes', value: '50+' },
              { label: 'Years Experience', value: '10+' },
            ].map((stat, i) => (
              <div key={i} className="text-zinc-950">
                <div className="text-4xl md:text-5xl font-black tracking-tighter mb-2">{stat.value}</div>
                <div className="font-bold uppercase tracking-wider text-sm opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
