import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Check, 
  Sparkles, 
  Zap, 
  Shield, 
  Crown, 
  ArrowRight,
  HelpCircle,
  X
} from 'lucide-react';

const PricingPage = () => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [hoveredPlan, setHoveredPlan] = useState(null);

  const plans = [
    {
      name: "Free",
      description: "Perfect for trying out",
      price: { monthly: 0, annual: 0 },
      features: [
        "3 active rooms",
        "Up to 10 participants per room",
        "24h message retention",
        "Basic encryption",
        "Community support"
      ],
      cta: "Get Started",
      popular: false,
      icon: Zap,
      color: "from-white/10 to-white/5"
    },
    {
      name: "Pro",
      description: "For power users",
      price: { monthly: 9, annual: 7 },
      features: [
        "Unlimited rooms",
        "Up to 100 participants",
        "30-day message retention",
        "Military-grade encryption",
        "Priority support",
        "Custom room themes",
        "File sharing (1GB)"
      ],
      cta: "Start Pro Trial",
      popular: true,
      icon: Crown,
      color: "from-amber-200/20 via-yellow-100/10 to-transparent"
    },
    {
      name: "Enterprise",
      description: "For organizations",
      price: { monthly: 29, annual: 24 },
      features: [
        "Everything in Pro",
        "Unlimited participants",
        "Permanent message history",
        "Self-hosted option",
        "Dedicated support",
        "SSO & SAML",
        "File sharing (unlimited)",
        "Custom integrations",
        "SLA guarantee"
      ],
      cta: "Contact Sales",
      popular: false,
      icon: Shield,
      color: "from-purple-500/20 via-pink-500/10 to-transparent"
    }
  ];

  const faqs = [
    {
      q: "Can I switch plans anytime?",
      a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately."
    },
    {
      q: "Is there a free trial for Pro?",
      a: "Absolutely. Get 14 days free to explore all Pro features before committing."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and crypto (BTC, ETH)."
    },
    {
      q: "Can I get a refund?",
      a: "Yes, 30-day money-back guarantee, no questions asked."
    }
  ];

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden selection:bg-white/10 selection:text-white">
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-amber-500/5 rounded-full blur-[200px]" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 py-20 lg:py-32">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.03] border border-white/[0.08] rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white/60" />
            <span className="text-[10px] text-white/50 uppercase tracking-widest">Simple Pricing</span>
          </div>
          
          <h1 className="text-4xl lg:text-6xl font-light text-white mb-6 tracking-tight">
            Choose Your <span className="font-medium">Privacy Level</span>
          </h1>
          
          <p className="text-white/40 text-lg font-light">
            No hidden fees. No data selling. Just transparent pricing for secure communication.
          </p>
        </motion.div>

        {/* Billing Toggle */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm ${!isAnnual ? 'text-white' : 'text-white/40'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className="relative w-16 h-8 bg-white/10 rounded-full border border-white/10 transition-colors"
          >
            <motion.div 
              animate={{ x: isAnnual ? 32 : 4 }}
              className="absolute top-1 w-6 h-6 bg-white rounded-full shadow-lg"
            />
          </button>
          <span className={`text-sm ${isAnnual ? 'text-white' : 'text-white/40'}`}>
            Annual
            <span className="ml-2 text-[10px] text-emerald-400 font-medium">Save 20%</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onMouseEnter={() => setHoveredPlan(index)}
              onMouseLeave={() => setHoveredPlan(null)}
              className={`relative rounded-3xl overflow-hidden ${
                plan.popular ? 'md:-mt-4 md:mb-4' : ''
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-amber-200/20 to-yellow-400/20 py-2 text-center">
                  <span className="text-[10px] text-amber-200 uppercase tracking-widest font-medium">Most Popular</span>
                </div>
              )}

              {/* Card Background */}
              <div className={`absolute inset-0 bg-gradient-to-b ${plan.color} opacity-50`} />
              <div className="absolute inset-0 bg-[#0a0a0a]/90 backdrop-blur-xl" />
              
              {/* Border Glow */}
              <div className={`absolute inset-0 rounded-3xl transition-opacity duration-500 ${
                hoveredPlan === index ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-b from-white/10 to-transparent" />
              </div>

              <div className="relative p-8 h-full flex flex-col">
                {/* Plan Header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center`}>
                    <plan.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">{plan.name}</h3>
                    <p className="text-xs text-white/40">{plan.description}</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-light text-white">
                      ${isAnnual ? plan.price.annual : plan.price.monthly}
                    </span>
                    {plan.price.monthly > 0 && (
                      <span className="text-white/40 text-sm">/month</span>
                    )}
                  </div>
                  {isAnnual && plan.price.annual > 0 && (
                    <p className="text-xs text-white/30 mt-1">
                      Billed annually (${plan.price.annual * 12}/year)
                    </p>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-white/60">
                      <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={plan.name === 'Enterprise' ? '/contact' : '/create-room'}>
                  <button className={`w-full py-4 rounded-xl font-medium text-sm tracking-wide transition-all duration-300 ${
                    plan.popular
                      ? 'bg-white text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                      : 'bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/20'
                  }`}>
                    {plan.cta}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Feature Comparison */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20"
        >
          <h2 className="text-2xl font-light text-white text-center mb-8">Compare All Features</h2>
          
          <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl overflow-hidden">
            {['End-to-End Encryption', 'Self-Destructing Messages', 'File Sharing', 'Priority Support', 'Custom Branding', 'API Access'].map((feature, index) => (
              <div key={feature} className={`flex items-center justify-between px-6 py-4 ${
                index !== 5 ? 'border-b border-white/[0.06]' : ''
              }`}>
                <span className="text-white/60 text-sm">{feature}</span>
                <div className="flex gap-16">
                  <span className="w-12 text-center text-white/20 text-xs">Free</span>
                  <span className="w-12 text-center text-emerald-400 text-xs">Pro</span>
                  <span className="w-12 text-center text-emerald-400 text-xs">Ent</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-2xl font-light text-white text-center mb-8">Questions? Answered.</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 hover:border-white/10 transition-colors">
                <h3 className="text-white font-medium text-sm mb-2 flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-white/40" />
                  {faq.q}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <p className="text-white/30 text-sm mb-4">Still have questions?</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-white hover:text-white/80 transition-colors">
            <span className="text-sm">Contact our team</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

      </div>

      <style jsx>{`
        ::selection {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default PricingPage;