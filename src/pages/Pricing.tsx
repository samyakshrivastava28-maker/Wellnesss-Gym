import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const plans = [
    {
      name: 'Basic',
      price: '29',
      desc: 'Perfect for beginners starting their fitness journey.',
      features: [
        'Access to gym floor',
        'Basic equipment usage',
        'Locker room access',
        'Free Wi-Fi',
      ],
      popular: false,
    },
    {
      name: 'Pro',
      price: '59',
      desc: 'Our most popular plan for dedicated fitness enthusiasts.',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        '1 Personal training session/mo',
        'Sauna & Spa access',
        'Guest pass (2/mo)',
      ],
      popular: true,
    },
    {
      name: 'Elite',
      price: '99',
      desc: 'The ultimate fitness experience with premium perks.',
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Nutrition consultation',
        'Priority class booking',
        'Unlimited guest passes',
        'Free smoothie bar',
      ],
      popular: false,
    }
  ];

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
            Choose Your <span className="text-orange-500">Plan</span>
          </h1>
          <p className="text-xl text-zinc-400">
            Simple, transparent pricing. No hidden fees. Cancel anytime.
          </p>
        </motion.div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`relative bg-zinc-900 border rounded-3xl p-8 flex flex-col ${
                plan.popular ? 'border-orange-500 shadow-2xl shadow-orange-500/10' : 'border-zinc-800'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-zinc-950 px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-black uppercase tracking-tight mb-2">{plan.name}</h3>
                <p className="text-zinc-400 text-sm h-10">{plan.desc}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-black tracking-tighter">${plan.price}</span>
                <span className="text-zinc-400 font-medium">/month</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link 
                to="/contact"
                className={`w-full py-4 rounded-xl font-black uppercase tracking-wider text-center transition-colors ${
                  plan.popular 
                    ? 'bg-orange-500 text-zinc-950 hover:bg-orange-600' 
                    : 'bg-zinc-800 text-zinc-50 hover:bg-zinc-700'
                }`}
              >
                Choose {plan.name}
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
