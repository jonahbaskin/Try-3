import { motion } from 'motion/react';
import { ArrowRight, BarChart3, Map as MapIcon, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-4xl mx-auto px-4 py-12 md:py-20"
    >
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tight leading-tight mb-6">
          Your Vote Is <span className="text-blue-600 line-through decoration-red-500 decoration-4">Wasted</span> Critical.
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
          Due to partisan gerrymandering and the structure of the Senate, where you live determines the actual weight of your political voice.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center mb-6">
            <MapIcon className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">The Gerrymander</h3>
          <p className="text-slate-600 leading-relaxed">
            Districts are drawn to consolidate power. If you live in a "safe" blue district, a +40 margin does nothing extra. Your surplus vote doesn't translate to seats.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
            <BarChart3 className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">The Senate Skew</h3>
          <p className="text-slate-600 leading-relaxed">
            A voter in Wyoming has ~68x the Senate voting power of a voter in California. Low-population swing states decide control of the entire chamber.
          </p>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50">
          <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold mb-3 text-slate-900">The Remote Advantage</h3>
          <p className="text-slate-600 leading-relaxed">
            Millions of progressives now work remotely. By temporarily moving to a swing state or highly competitive district, we can shift the balance of power.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-4">Don't let geography dilute your voice.</h2>
          <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
            Find out if your district is competitive, or if you should temporarily relocate for the upcoming election to make your vote truly count.
          </p>
          <Link
            to="/check-zip"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105"
          >
            Check My Voting Power <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
