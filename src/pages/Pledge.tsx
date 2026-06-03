import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function Pledge() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    duration: '1-3 months',
    distance: 'Regional',
    accommodation: 'Private Room',
    petFriendly: false,
    carAccess: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // No backend for purely portable GH Pages export
    setSubmitted(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-2xl mx-auto px-4 py-20 text-center"
      >
        <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-4">Pledge Received!</h2>
        <p className="text-xl text-slate-600 mb-8">
          Thank you for offering to relocate. We'll be in touch as the election season approaches to match you with a critical district needing progressive support.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="text-blue-600 font-bold hover:underline"
        >
          Submit another response
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="max-w-3xl mx-auto px-4 py-12 md:py-20"
    >
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
          Make the Shift
        </h1>
        <p className="text-lg text-slate-600 font-medium">
          If you work remotely, you have a superpower. Fill out your availability and accommodation needs to be matched with a swing area. 
        </p>
      </div>

      <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="font-bold text-slate-900 text-sm">Full Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="Jane Doe"
              />
            </div>
            <div className="space-y-2">
              <label className="font-bold text-slate-900 text-sm">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none"
                placeholder="jane@example.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-900 text-sm">How long are you willing to relocate?</label>
            <select
              name="duration"
              value={formData.duration}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
            >
              <option>Just for early voting (2 weeks)</option>
              <option>1-3 months leading up to the election</option>
              <option>6 months minimum</option>
              <option>Looking for a permanent new home</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-900 text-sm">How far are you willing to travel?</label>
            <select
              name="distance"
              value={formData.distance}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
            >
              <option>Local (Different district within my state)</option>
              <option>Regional (Neighboring state)</option>
              <option>Anywhere in the contiguous US</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="font-bold text-slate-900 text-sm">Minimum Accommodation Level</label>
            <select
              name="accommodation"
              value={formData.accommodation}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none"
            >
              <option>Shared room / Couch surfing</option>
              <option>Private Room in a shared house</option>
              <option>Sublet / Entire Place</option>
            </select>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="petFriendly"
                checked={formData.petFriendly}
                onChange={handleInputChange}
                className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <span className="font-medium text-slate-700">Require pet-friendly</span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="carAccess"
                checked={formData.carAccess}
                onChange={handleInputChange}
                className="w-5 h-5 text-blue-600 border-slate-300 rounded focus:ring-blue-500"
              />
              <span className="font-medium text-slate-700">Need parking/car access</span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center transition-all shadow-lg hover:shadow-blue-500/30"
          >
            <Send className="w-5 h-5 mr-2" /> Submit Pledge
          </button>
        </form>
      </div>
    </motion.div>
  );
}
