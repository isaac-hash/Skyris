/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Bird, 
  Zap, 
  Target, 
  ChevronRight, 
  Github, 
  Twitter, 
  Linkedin,
  ExternalLink,
  Bot,
  Layers,
  Wind
} from 'lucide-react';

const Nav = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 md:py-6 glass-card border-b border-white/5">
    <div className="flex items-center gap-2">
      <Bird className="w-6 h-6 md:w-8 md:h-8 text-skyris-primary" />
      <span className="font-display font-bold text-lg md:text-xl tracking-tighter">SKYRIS</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
      <a href="#mission" className="hover:text-skyris-primary transition-colors">Mission</a>
      <a href="#approach" className="hover:text-skyris-primary transition-colors">Approach</a>
      <a href="#team" className="hover:text-skyris-primary transition-colors">The Team</a>
      <button className="px-5 py-2 rounded-full bg-skyris-primary text-black font-bold hover:bg-skyris-secondary transition-all">
        Join Us
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-32 md:pt-20 overflow-hidden">
    {/* Background Wind Effect */}
    <div className="absolute inset-0 z-0 opacity-20">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-skyris-primary to-transparent w-full"
          style={{ top: `${20 * i + 10}%` }}
          animate={{
            x: ['-100%', '100%'],
            opacity: [0, 1, 0]
          }}
          transition={{
            duration: 3 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5
          }}
        />
      ))}
    </div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 text-center max-w-4xl"
    >
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-skyris-primary/10 border border-skyris-primary/20 text-skyris-primary text-xs font-bold uppercase tracking-widest mb-6">
        <Zap className="w-3 h-3" />
        AI For Industry Challenge
      </div>
      
      <h1 className="font-display text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight">
        SOARING THROUGH <br className="hidden sm:block" />
        <span className="text-skyris-primary glow-text italic">COMPLEXITY</span>
      </h1>
      
      <p className="text-base sm:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
        Team <span className="text-white font-semibold">Skyris</span> is redefining industrial automation. 
        Leveraging Intrinsic's Flowstate and cutting-edge AI to solve the most intractable problems in electronics manufacturing.
      </p>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-black font-bold flex items-center justify-center gap-2 hover:bg-skyris-primary transition-all group">
          View Our Project <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
        <a 
          href="https://www.intrinsic.ai/events/ai-for-industry-challenge" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full sm:w-auto px-8 py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2"
        >
          The Challenge <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
    >
      <span className="text-[10px] uppercase tracking-[0.3em]">Scroll to explore</span>
      <div className="w-px h-12 bg-gradient-to-b from-skyris-primary to-transparent" />
    </motion.div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="glass-card p-8 rounded-3xl group hover:border-skyris-primary/30 transition-all">
    <div className="w-12 h-12 rounded-2xl bg-skyris-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-skyris-primary" />
    </div>
    <h3 className="font-display text-xl font-bold mb-3">{title}</h3>
    <p className="text-white/50 text-sm leading-relaxed">{description}</p>
  </div>
);

const Mission = () => (
  <section id="mission" className="py-24 px-8 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8 tracking-tight">
          THE <span className="text-skyris-primary italic">VENTUS</span> VISION
        </h2>
        <p className="text-lg text-white/60 mb-8 leading-relaxed">
          Inspired by the agility and precision of the Skyris spirit, our team approaches industrial challenges with a focus on fluid adaptability. 
          The Intrinsic AI for Industry Challenge isn't just a competition—it's the proving ground for the next generation of robotic intelligence.
        </p>
        <div className="space-y-6">
          {[
            { icon: Target, text: "Solving complex physical manipulation in electronics." },
            { icon: Cpu, text: "Integrating Intrinsic Vision Models for sub-millimeter precision." },
            { icon: Wind, text: "Developing agile workflows in Intrinsic Flowstate." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                <item.icon className="w-5 h-5 text-skyris-primary" />
              </div>
              <span className="text-white/80 font-medium">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="relative">
        <div className="aspect-square rounded-3xl overflow-hidden gradient-border">
          <div className="w-full h-full bg-zinc-900 flex items-center justify-center p-12">
            <Bird className="w-48 h-48 text-skyris-primary/20 animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                 className="w-64 h-64 border border-skyris-primary/10 rounded-full border-dashed"
               />
            </div>
          </div>
        </div>
        {/* Floating Stats */}
        <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl border border-skyris-primary/20">
          <div className="text-3xl font-display font-bold text-skyris-primary mb-1">99.8%</div>
          <div className="text-[10px] uppercase tracking-widest text-white/40">Precision Target</div>
        </div>
      </div>
    </div>
  </section>
);

const Approach = () => (
  <section id="approach" className="py-24 px-8 bg-white/[0.02]">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold mb-4">OUR TECHNICAL STACK</h2>
        <p className="text-white/50 max-w-xl mx-auto">
          We combine the best of Intrinsic's ecosystem with our custom AI architectures.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <FeatureCard 
          icon={Layers}
          title="Intrinsic Flowstate"
          description="A behavior-based programming environment that allows us to orchestrate complex robotic tasks with ease and safety."
        />
        <FeatureCard 
          icon={Bot}
          title="Vision Model (IVM)"
          description="Leveraging best-in-class vision models to perceive and interact with delicate electronic components in real-time."
        />
        <FeatureCard 
          icon={Cpu}
          title="Custom AI Agents"
          description="Proprietary reinforcement learning agents optimized for high-speed, high-precision industrial manipulation."
        />
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-24 px-8 max-w-7xl mx-auto">
    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
      <div>
        <h2 className="font-display text-4xl font-bold mb-4">THE SKYRIS SQUAD</h2>
        <p className="text-white/50">A multidisciplinary team of roboticists, AI researchers, and engineers.</p>
      </div>
      <div className="flex gap-4">
        <div className="text-right">
          <div className="text-xs uppercase tracking-widest text-white/40 mb-1">Current Phase</div>
          <div className="font-display font-bold text-skyris-primary">Development & Simulation</div>
        </div>
      </div>
    </div>
    
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div key={i} className="aspect-[3/4] glass-card rounded-2xl overflow-hidden relative group">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10" />
          <img 
            src={`https://picsum.photos/seed/skyris-member-${i}/400/600`} 
            alt="Team Member" 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
          <div className="absolute bottom-4 left-4 z-20">
            <div className="font-bold text-sm">Member {i}</div>
            <div className="text-[10px] text-skyris-primary uppercase tracking-wider">Lead Engineer</div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-8 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Bird className="w-6 h-6 text-skyris-primary" />
        <span className="font-display font-bold text-lg tracking-tighter">SKYRIS</span>
      </div>
      
      <div className="flex gap-6">
        <a href="#" className="text-white/40 hover:text-skyris-primary transition-colors"><Twitter className="w-5 h-5" /></a>
        <a href="#" className="text-white/40 hover:text-skyris-primary transition-colors"><Github className="w-5 h-5" /></a>
        <a href="#" className="text-white/40 hover:text-skyris-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
      </div>
      
      <div className="text-white/20 text-[10px] uppercase tracking-widest">
        © 2026 Team Skyris • Built for Intrinsic AI Challenge
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen selection:bg-skyris-primary selection:text-black">
      <Nav />
      <Hero />
      <Mission />
      <Approach />
      <Team />
      <Footer />
    </div>
  );
}
