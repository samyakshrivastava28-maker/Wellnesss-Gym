import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
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
            Get In <span className="text-orange-500">Touch</span>
          </h1>
          <p className="text-xl text-zinc-400">
            Have questions? We're here to help. Reach out to us and start your fitness journey today.
          </p>
        </motion.div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-50 mb-1">Location</h4>
                    <p className="text-zinc-400">123 Fitness Street<br />Muscle City, MC 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-3 rounded-xl shrink-0">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-50 mb-1">Phone</h4>
                    <p className="text-zinc-400">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-3 rounded-xl shrink-0">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-50 mb-1">Email</h4>
                    <p className="text-zinc-400">hello@wellnessgym.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-3 rounded-xl shrink-0">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-50 mb-1">Hours</h4>
                    <p className="text-zinc-400">Monday - Friday: 5am - 11pm<br />Weekend: 7am - 9pm</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl"
          >
            <h3 className="text-2xl font-bold uppercase tracking-tight mb-6">Send a Message</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">First Name</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-50 focus:outline-none focus:border-orange-500 transition-colors" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">Last Name</label>
                  <input type="text" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-50 focus:outline-none focus:border-orange-500 transition-colors" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">Email</label>
                <input type="email" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-50 focus:outline-none focus:border-orange-500 transition-colors" placeholder="john@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold uppercase tracking-wider text-zinc-400">Message</label>
                <textarea rows={4} className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-50 focus:outline-none focus:border-orange-500 transition-colors resize-none" placeholder="How can we help you?"></textarea>
              </div>
              <button type="submit" className="w-full bg-orange-500 text-zinc-950 py-4 rounded-xl font-black uppercase tracking-wider hover:bg-orange-600 transition-colors">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
